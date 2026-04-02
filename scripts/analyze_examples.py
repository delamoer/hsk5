"""
analyze_examples.py
分析每课生词在课文中的出现情况，并尽量从课文中提取例句。
"""
import re, os, json

LESSONS_DIR = r'D:\workspace\learning\hsk5\src\data\lessons'

def strip_html(html):
    return re.sub(r'<[^>]+>', '', html)

def extract_html_strings(content):
    """提取 text[] 中所有 html 字段的文本"""
    pattern = re.compile(r'html:\s*"((?:[^"\\]|\\.)*)"')
    return [strip_html(m.replace('\\"', '"')) for m in pattern.findall(content)]

def extract_vocab(content):
    """提取 vocabulary 数组中每个词条，返回 (id, word, rest_of_line) 列表"""
    # 匹配每行词条
    pattern = re.compile(
        r'\{\s*id:\s*(\d+),\s*word:\s*"([^"]+)",\s*pinyin:\s*"([^"]+)",\s*pos:\s*"([^"]+)",\s*meaning:\s*"([^"]+)"([^}]*)\}',
        re.DOTALL
    )
    results = []
    for m in pattern.finditer(content):
        vid, word, pinyin, pos, meaning, rest = m.groups()
        has_example = 'example:' in rest
        results.append({
            'id': int(vid), 'word': word, 'pinyin': pinyin,
            'pos': pos, 'meaning': meaning, 'has_example': has_example,
            'match_start': m.start(), 'match_end': m.end(),
            'full_match': m.group(0)
        })
    return results

def find_example_in_text(word, plain_texts):
    """在课文纯文本中找包含 word 的最短合适句子"""
    candidates = []
    for text in plain_texts:
        # 按句末标点切句
        sentences = re.split(r'(?<=[。！？])', text)
        buf = ''
        for part in sentences:
            buf += part
            if buf.endswith(('。', '！', '？')):
                if word in buf:
                    s = buf.strip()
                    candidates.append(s)
                buf = ''
        if buf.strip() and word in buf:
            candidates.append(buf.strip() + '。')
    if not candidates:
        return None
    # 优先返回长度适中的句子（15-60字）
    for c in sorted(candidates, key=len):
        if 10 <= len(c) <= 60:
            return c
    return candidates[0]

# 统计
total_words = 0
auto_filled = 0
needs_manual = {}

for i in range(1, 19):
    if i == 5:
        continue
    path = os.path.join(LESSONS_DIR, f'lesson{i}.js')
    if not os.path.exists(path):
        continue
    content = open(path, encoding='utf-8').read()
    plain_texts = extract_html_strings(content)
    vocab = extract_vocab(content)

    missing = []
    for v in vocab:
        if v['has_example']:
            auto_filled += 1
        else:
            ex = find_example_in_text(v['word'], plain_texts)
            if ex:
                auto_filled += 1
            else:
                missing.append(v['word'])
        total_words += 1

    needs_manual[i] = missing
    pct = (len(vocab) - len(missing)) / len(vocab) * 100 if vocab else 0
    print(f"lesson{i}: {len(vocab)} words, {len(missing)} need manual ({pct:.0f}% auto)")

print(f"\n总计: {total_words} words, {auto_filled} auto ({auto_filled/total_words*100:.0f}%)")
print("\n需要手动补充的词:")
for lesson_num, words in needs_manual.items():
    if words:
        print(f"  lesson{lesson_num}: {', '.join(words)}")
