import re, os
LESSONS_DIR = r'D:\workspace\learning\hsk5\src\data\lessons'
total = missing = 0
for i in range(1, 19):
    path = os.path.join(LESSONS_DIR, f'lesson{i}.js')
    if not os.path.exists(path): continue
    content = open(path, encoding='utf-8').read()
    words = re.findall(r'word:\s*"([^"]+)"', content)
    examples = re.findall(r'example:\s*"([^"]+)"', content)
    total += len(words)
    missing += len(words) - len(examples)
    status = "OK" if len(words) == len(examples) else f"MISMATCH: {len(words)} words vs {len(examples)} examples"
    print(f"lesson{i}: {len(words)} words, {len(examples)} examples — {status}")
print(f"\n总计: {total} words, {total-missing} examples, {missing} missing")
