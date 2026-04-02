"""
add_examples.py
为所有 lesson JS 文件的生词添加 example 字段。
- 优先从当前课文 text 中提取包含该词的例句
- 无法自动提取的词，使用 MANUAL_EXAMPLES 字典中手动编写的例句
"""
import re, os

LESSONS_DIR = r'D:\workspace\learning\hsk5\src\data\lessons'

# ── 手动补充的例句（自动提取不到的词）──────────────────────────────
MANUAL_EXAMPLES = {
    # lesson1
    "细节": "生活中的细节往往最能体现一个人的品格。",
    # lesson2
    "马上": "请稍等，我马上就来。",
    "断": "绳子太细了，一拉就断了。",
    "偷偷": "他偷偷地把礼物藏在了柜子里。",
    # lesson3
    "预报": "天气预报说明天有雨，记得带伞。",
    "雾": "今天早上雾很大，能见度很低。",
    "零件": "这台机器少了一个重要零件，无法运转。",
    "维修": "这辆车需要去维修站检查一下。",
    # lesson4
    "国王": "国王召集大臣们商议国家大事。",
    "王子": "故事里的王子骑着白马来救公主。",
    "公主": "公主从小就喜欢读书和音乐。",
    "总理": "总理主持召开了内阁会议。",
    "总统": "两国总统在会议上签署了合作协议。",
    "主席": "主席发表了重要讲话。",
    "总裁": "公司总裁亲自出席了新品发布会。",
    "主任": "主任安排大家明天上午开会。",
    "老板": "老板对员工很好，公司气氛轻松。",
    "领导": "领导对这次活动给予了充分肯定。",
    # lesson7
    "摇": "她摇摇头，表示不同意。",
    "不要紧": "没关系，只是小伤，不要紧的。",
    "寻找": "他四处寻找失散多年的老朋友。",
    "文字": "汉字是世界上使用人数最多的文字之一。",
    "词汇": "扩大词汇量是提高语言水平的重要方法。",
    "字母": "英语有26个字母。",
    "声调": "汉语有四个声调，声调不同意思也不同。",
    "拼音": "学习拼音是学习普通话的第一步。",
    "语气": "请注意说话的语气，要有礼貌。",
    "疑问": "老师耐心地解答了同学们的疑问。",
    "否定": "他否定了这种错误的说法。",
    "省略": "为了简洁，这里省略了部分内容。",
    # lesson8
    "猪": "这道菜的主料是猪肉。",
    "豆腐": "麻婆豆腐是四川的名菜。",
    "辣椒": "这道菜加了很多辣椒，非常辣。",
    "花生": "我喜欢吃花生，但有些人对花生过敏。",
    "土豆": "土豆可以炒着吃，也可以煮着吃。",
    "玉米": "夏天烤玉米的香味很让人怀念。",
    "馒头": "北方人早饭常吃馒头和稀饭。",
    "海鲜": "沿海城市的海鲜特别新鲜便宜。",
    "香肠": "他早餐喜欢吃煎香肠加鸡蛋。",
    # lesson10
    "系": "出门前请系好安全带。",
    "围绕": "这篇文章围绕环保这一主题展开论述。",
    "插": "请把插头插入插座。",
    "拍": "她用手机拍了很多旅游照片。",
    "拦": "警察在路口拦住了那辆超速的车。",
    "围巾": "天冷了，她戴上了妈妈织的围巾。",
    "手套": "冬天骑车时最好戴上手套。",
    "牛仔裤": "他平时喜欢穿牛仔裤和运动鞋。",
    "领带": "参加正式场合，男士通常要打领带。",
    # lesson11
    "数": "她数了数钱包里的钱，够用。",
    "过来": "你有时间的话，过来坐坐吧。",
    "地毯": "客厅里铺了一块红色的地毯。",
    "书架": "书架上摆满了各种各样的书。",
    "玩具": "孩子们最喜欢生日时收到新玩具。",
    "抽屉": "钥匙放在右边第一个抽屉里。",
    # lesson12
    "宣传": "这家公司在网上做了大量宣传。",
    "实现": "只要努力，梦想终会实现。",
    "充电器": "手机没电了，我找不到充电器。",
    "系统": "电脑系统需要更新，请稍等。",
    "数据": "根据最新数据，今年销售额增长了20%。",
    "信号": "山里手机信号很差，经常打不通电话。",
    # lesson13
    "强烈": "他强烈要求对方做出解释。",
    "连忙": "听到敲门声，她连忙跑去开门。",
    "武术": "中国武术历史悠久，享誉世界。",
    "太极拳": "很多老年人每天早上在公园打太极拳。",
    # lesson14
    "组合": "这首歌由三种乐器组合演奏。",
    "通常": "他通常七点起床，然后去跑步。",
    # lesson15
    "敌人": "在困难面前，我们不能向敌人低头。",
    "毛病": "这孩子有个毛病，总是忘记带钥匙。",
    "道理": "他说得很有道理，大家都点头同意。",
    "弱": "他身体比较弱，需要多加锻炼。",
    "形势": "目前国际形势复杂多变。",
    "绝对": "这件事绝对不能马虎，一定要认真检查。",
    "胆小鬼": "你不敢说出来，真是个胆小鬼！",
    "胜利": "经过努力，他们终于取得了胜利。",
    "上当": "他轻信了骗子的话，结果上当了。",
    "再三": "她再三叮嘱孩子路上注意安全。",
    "阻止": "朋友多次阻止他做这个危险的决定。",
    "独立": "大学毕业后，他开始了独立生活。",
    "资格": "没有达到要求，就没有资格参加比赛。",
    "糊涂": "他最近工作太忙，脑子有点糊涂。",
    "枪": "警察腰间别着一把枪。",
    "射击": "射击比赛要求选手稳定、专注。",
    "英雄": "消防员是保护人们生命财产的英雄。",
    # lesson16
    "总共": "这次旅行总共花了三天时间。",
    "参与": "希望大家积极参与这次活动。",
    "达到": "经过训练，他的水平已经达到了要求。",
    "明显": "经过治疗，他的病情明显好转了。",
    "临时": "由于下雨，活动临时改到室内举行。",
    "打喷嚏": "他一直打喷嚏，可能是感冒了。",
    "过敏": "她对花粉过敏，春天总是不舒服。",
    "痒": "被蚊子咬了，皮肤又红又痒。",
    "消化": "饭后散步有助于消化。",
    # lesson18
    "导演": "这部电影的导演非常有才华。",
    "角色": "她在这部剧中扮演了一个重要角色。",
    "录音": "录音前要确保环境安静。",
    "麦克风": "演讲者拿起麦克风，向大家问好。",
    "频道": "他换了好几个频道，找不到想看的节目。",
    "乐器": "她从小就学习乐器，现在会弹钢琴和拉小提琴。",
}


def strip_html(html):
    return re.sub(r'<[^>]+>', '', html)


def extract_html_texts(content):
    pattern = re.compile(r'html:\s*"((?:[^"\\]|\\.)*)"')
    return [strip_html(m.replace('\\"', '"')) for m in pattern.findall(content)]


def find_example_in_text(word, plain_texts):
    """从课文纯文本中找包含该词的最短句子（10-60字）"""
    candidates = []
    for text in plain_texts:
        sentences = re.split(r'(?<=[。！？])', text)
        buf = ''
        for part in sentences:
            buf += part
            if buf.endswith(('。', '！', '？')):
                if word in buf:
                    candidates.append(buf.strip())
                buf = ''
        if buf.strip() and word in buf:
            candidates.append(buf.strip() + '。')

    if not candidates:
        return None
    # 优先 10-60 字的句子
    for c in sorted(candidates, key=len):
        if 10 <= len(c) <= 60:
            return c
    return sorted(candidates, key=len)[0]


def add_examples_to_lesson(lesson_num):
    path = os.path.join(LESSONS_DIR, f'lesson{lesson_num}.js')
    if not os.path.exists(path):
        print(f"lesson{lesson_num}: file not found")
        return

    content = open(path, encoding='utf-8').read()
    plain_texts = extract_html_texts(content)

    # 找到 vocabulary 区域，逐个词条添加 example
    # 匹配每个词条对象
    def replace_vocab_entry(m):
        vid = m.group(1)
        word = m.group(2)
        pinyin = m.group(3)
        pos = m.group(4)
        meaning = m.group(5)
        rest = m.group(6)

        # 已有 example 则不改
        if 'example:' in rest:
            return m.group(0)

        # 找例句
        ex = find_example_in_text(word, plain_texts)
        if not ex:
            ex = MANUAL_EXAMPLES.get(word)
        if not ex:
            ex = f"{word}是本课的重要词汇。"
            print(f"  [WARN] lesson{lesson_num} '{word}': using placeholder")

        # 重建词条（保留原始空白风格）
        # 在 meaning: "..." 后，} 之前插入 example
        original = m.group(0).rstrip()
        # 找结尾 } 前的位置
        if original.endswith('}'):
            new_entry = original[:-1] + f', example: "{ex}" }}'
        else:
            # 可能有尾随逗号等
            new_entry = original + f', example: "{ex}"'
        return new_entry

    pattern = re.compile(
        r'\{\s*id:\s*(\d+),\s*word:\s*"([^"]+)",\s*pinyin:\s*"([^"]+)",\s*pos:\s*"([^"]+)",\s*meaning:\s*"([^"]+)"([^}]*)\}',
        re.DOTALL
    )

    new_content = pattern.sub(replace_vocab_entry, content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"lesson{lesson_num}: done")


print("Adding examples to all lessons...")
for i in range(1, 19):
    if i == 5:
        continue
    add_examples_to_lesson(i)
print("\nAll done.")
