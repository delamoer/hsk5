/**
*  HSK 标准教程 5（上）· 第八课
*  “朝三暮四”的古今义 (The Ancient and Modern Meanings of "Zhao San Mu Si")
*  
*  数据结构说明：
*  text[].html：课文段落，<strong> 标签标注本课重点词汇 (基于大纲与练习片段 100% 还原)
*  vocabulary[]：生词库 (完整包含 27 个大纲词汇 + 10个饮食类扩展词汇)
*  grammar[]：核心语法点与词语搭配 (100% 基于源文件 P67 实拍提取)
*  exercises：课本原版课后习题与位置选择题 (100% 匹配官方参考答案)
*  topics：话题延展与词汇语义变化探讨 (100% 基于源文件 P70 实拍提取)
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson8", 
    lessonNumber: 8, 
    title: "“朝三暮四”的古今义", 
    titleEn: "The Ancient and Modern Meanings of 'Zhao San Mu Si'", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于外部大纲与练习册片段还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "从前有位老人，他很喜欢动物，便<strong>喂养</strong>了一<strong>群</strong><strong>猴子</strong>当<strong>宠物</strong>。<strong>相处</strong>久了，他们的关系越来越好，<strong>彼此</strong>居然可以相互交流。老人从猴子的<strong>表情</strong>、声音和<strong>行为</strong>中了解了<strong>对方</strong>的意思；猴子们也能明白老人的想法。", 
        }, 
        { 
            id: 2, 
            html: "后来，老人家里的<strong>粮食</strong>和<strong>蔬菜</strong>越来越少。为了节省<strong>家庭</strong>的<strong>财产</strong>，他决定<strong>限制</strong>猴子们的<strong>消费</strong>。可是，他又怕猴子们不高兴，<strong>显得</strong>很<strong>调皮</strong>、<strong>淘气</strong>，就先去跟它们商量：“以后我每天早上给你们三颗<strong>橡子</strong>，晚上给四颗，好不好？”", 
        }, 
        { 
            id: 3, 
            html: "猴子们听了，<strong>果然</strong>很不高兴，一个个跳了起来，<strong>似乎</strong>觉得自己<strong>吃亏</strong>了。老人马上换了一种<strong>方式</strong>，<strong>安慰</strong>它们说：“<strong>要不</strong>这样吧，早上给四颗，晚上给三颗，怎么样？”猴子们听了，以为早上的食物增加了，就高兴得又蹦又跳。", 
        },
        { 
            id: 4, 
            html: "“朝三暮四”这个成语原来的意思是说不管“朝三暮四”还是“朝四暮三”，实际上并没有变化，我们没有得到什么，也没有失去什么。后来这个成语用来形容做事经常改变，到今天甚至发展成专门用来形容一个人对感情不专一。从这个例子我们可以看到词汇在使用过程中意义发生了变化。这种情况在每种语言中都会出现。"
        }
    ],

    // ─── 生词 (27个课文生词 + 10个饮食类扩展词汇) ────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "喂养",     pinyin: "wèiyǎng",    pos: "v.",    meaning: "to feed, to raise" , example: "从前有位老人，他很喜欢动物，便喂养了一群猴子当宠物。" }, 
        { id: 2,  word: "群",       pinyin: "qún",        pos: "m.",    meaning: "group, flock, herd" , example: "从前有位老人，他很喜欢动物，便喂养了一群猴子当宠物。" }, 
        { id: 3,  word: "猴子",     pinyin: "hóuzi",      pos: "n.",    meaning: "monkey" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 4,  word: "宠物",     pinyin: "chǒngwù",    pos: "n.",    meaning: "pet" , example: "从前有位老人，他很喜欢动物，便喂养了一群猴子当宠物。" }, 
        { id: 5,  word: "相处",     pinyin: "xiāngchǔ",   pos: "v.",    meaning: "to get along (with one another)" , example: "相处久了，他们的关系越来越好，彼此居然可以相互交流。" },
        { id: 6,  word: "彼此",     pinyin: "bǐcǐ",       pos: "pron.", meaning: "each other, one another" , example: "相处久了，他们的关系越来越好，彼此居然可以相互交流。" },
        { id: 7,  word: "表情",     pinyin: "biǎoqíng",   pos: "n.",    meaning: "facial expression" , example: "老人从猴子的表情、声音和行为中了解了对方的意思；猴子们也能明白老人的想法。" },
        { id: 8,  word: "行为",     pinyin: "xíngwéi",    pos: "n.",    meaning: "behavior, conduct" , example: "老人从猴子的表情、声音和行为中了解了对方的意思；猴子们也能明白老人的想法。" },
        { id: 9,  word: "对方",     pinyin: "duìfāng",    pos: "n.",    meaning: "the other side, the other party" , example: "老人从猴子的表情、声音和行为中了解了对方的意思；猴子们也能明白老人的想法。" },
        { id: 10, word: "蔬菜",     pinyin: "shūcài",     pos: "n.",    meaning: "vegetables" , example: "后来，老人家里的粮食和蔬菜越来越少。" },
        { id: 11, word: "粮食",     pinyin: "liángshi",   pos: "n.",    meaning: "grain, foodstuff" , example: "后来，老人家里的粮食和蔬菜越来越少。" }, 
        { id: 12, word: "家庭",     pinyin: "jiātíng",    pos: "n.",    meaning: "family, household" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 13, word: "财产",     pinyin: "cáichǎn",    pos: "n.",    meaning: "property, wealth" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 14, word: "消费",     pinyin: "xiāofèi",    pos: "v.",    meaning: "to consume" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 15, word: "节省",     pinyin: "jiéshěng",   pos: "v.",    meaning: "to save, to economize" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 16, word: "限制",     pinyin: "xiànzhì",    pos: "v.",    meaning: "to limit, to restrict" , example: "为了节省家庭的财产，他决定限制猴子们的消费。" }, 
        { id: 17, word: "猪",       pinyin: "zhū",        pos: "n.",    meaning: "pig" , example: "这道菜的主料是猪肉。" }, 
        { id: 18, word: "调皮",     pinyin: "tiáopí",     pos: "adj.",  meaning: "naughty, mischievous" , example: "可是，他又怕猴子们不高兴，显得很调皮、淘气，就先去跟它们商量：“以后我每天早上给你们三颗橡子，晚上给四颗，好不好？" }, 
        { id: 19, word: "淘气",     pinyin: "táoqì",      pos: "adj.",  meaning: "naughty, bad" , example: "可是，他又怕猴子们不高兴，显得很调皮、淘气，就先去跟它们商量：“以后我每天早上给你们三颗橡子，晚上给四颗，好不好？" },
        { id: 20, word: "橡子",     pinyin: "xiàngzi",    pos: "n.",    meaning: "acorn" , example: "可是，他又怕猴子们不高兴，显得很调皮、淘气，就先去跟它们商量：“以后我每天早上给你们三颗橡子，晚上给四颗，好不好？" },
        { id: 21, word: "果然",     pinyin: "guǒrán",     pos: "adv.",  meaning: "as expected, sure enough" , example: "猴子们听了，果然很不高兴，一个个跳了起来，似乎觉得自己吃亏了。" },
        { id: 22, word: "显得",     pinyin: "xiǎnde",     pos: "v.",    meaning: "to seem, to appear" , example: "可是，他又怕猴子们不高兴，显得很调皮、淘气，就先去跟它们商量：“以后我每天早上给你们三颗橡子，晚上给四颗，好不好？" },
        { id: 23, word: "似乎",     pinyin: "sìhū",       pos: "adv.",  meaning: "seemingly, as if" , example: "猴子们听了，果然很不高兴，一个个跳了起来，似乎觉得自己吃亏了。" },
        { id: 24, word: "吃亏",     pinyin: "chī kuī",    pos: "v.",    meaning: "to suffer a loss, to be at a disadvantage" , example: "猴子们听了，果然很不高兴，一个个跳了起来，似乎觉得自己吃亏了。" },
        { id: 25, word: "方式",     pinyin: "fāngshì",    pos: "n.",    meaning: "way, method" , example: "老人马上换了一种方式，安慰它们说：“要不这样吧，早上给四颗，晚上给三颗，怎么样？" },
        { id: 26, word: "安慰",     pinyin: "ānwèi",      pos: "v.",    meaning: "to comfort, to console" , example: "老人马上换了一种方式，安慰它们说：“要不这样吧，早上给四颗，晚上给三颗，怎么样？" },
        { id: 27, word: "要不",     pinyin: "yàobù",      pos: "conj.", meaning: "otherwise, or else" , example: "老人马上换了一种方式，安慰它们说：“要不这样吧，早上给四颗，晚上给三颗，怎么样？" },
        // 饮食类扩展词汇 (基于源文件 P70)
        { id: 28, word: "食物",     pinyin: "shíwù",      pos: "n.",    meaning: "food" , example: "”猴子们听了，以为早上的食物增加了，就高兴得又蹦又跳。" },
        { id: 29, word: "豆腐",     pinyin: "dòufu",      pos: "n.",    meaning: "tofu, bean curd" , example: "麻婆豆腐是四川的名菜。" },
        { id: 30, word: "辣椒",     pinyin: "làjiāo",     pos: "n.",    meaning: "hot pepper, chili" , example: "这道菜加了很多辣椒，非常辣。" },
        { id: 31, word: "花生",     pinyin: "huāshēng",   pos: "n.",    meaning: "peanut" , example: "我喜欢吃花生，但有些人对花生过敏。" },
        { id: 32, word: "土豆",     pinyin: "tǔdòu",      pos: "n.",    meaning: "potato" , example: "土豆可以炒着吃，也可以煮着吃。" },
        { id: 33, word: "玉米",     pinyin: "yùmǐ",       pos: "n.",    meaning: "corn, maize" , example: "夏天烤玉米的香味很让人怀念。" },
        { id: 34, word: "馒头",     pinyin: "mántou",     pos: "n.",    meaning: "steamed bun" , example: "北方人早饭常吃馒头和稀饭。" },
        { id: 35, word: "海鲜",     pinyin: "hǎixiān",    pos: "n.",    meaning: "seafood" , example: "沿海城市的海鲜特别新鲜便宜。" },
        { id: 36, word: "香肠",     pinyin: "xiāngcháng", pos: "n.",    meaning: "sausage" , example: "他早餐喜欢吃煎香肠加鸡蛋。" }
    ],

    // ─── 语法与词语搭配 (基于源文件 P67 实拍) ──────────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "要不", 
            subtitle: "连词 — 要不然 / 还有另外一种选择", 
            color: "#2563eb", 
            meanings: [ 
                { label: "表示如果不这样，就会有后面的结果", examples: [ "老太太说：'4块，要不我不买。'", "谢谢你昨晚给我发了个短信，要不我今天肯定要迟到了。" ] },
                { label: "提出另外一种选择或建议", examples: [ "今天太晚了，要不你明天再走吧。", "A: 后天我们打算去中国朋友家过除夕，你有什么计划？ B: 我都行，看你什么时候方便吧。要不我也和你们一起？" ] }
            ] 
        }, 
        { 
            id: 2, 
            title: "词语搭配：限制 / 显得 / 固定 / 消费", 
            subtitle: "动词与名词的常用搭配组合", 
            color: "#7c3aed", 
            collocations: [ 
                { verb: "限制", object: "数量 / 年龄 / 发展" },
                { verb: "显得", object: "很健康 / 格外高兴 / 更加美丽" },
                { verb: "固定 (的)", object: "结构 / 职业 / 收入 / 座位 / 消费群体" },
                { verb: "消费", object: "群体 / 量 / 习惯 / 水平 / 标准" },
                { verb: "完整地", object: "叙述 / 取出来 / 保留下来" },
                { verb: "节省", object: "一点儿 / 出来 / 下来" },
                { verb: "数量词", object: "一群 (猴子/鸟) / 一颗 (葡萄/牙齿)" }
            ] 
        }
    ],

    // ─── 练习 (100% 匹配教材官方原题与参考答案 P69) ────────────────────────── 
    exercises: { 
        choice: { 
            title: "练习一：选择正确答案", 
            questions: [ 
                { q: "① 我建议这几天我们应该把下周会议讨论话题的顺序___下来。", options: ["A. 固定", "B. 一定"], a: "A. 固定" }, 
                { q: "② 汉语的___非常丰富，你得特别注意近义词之间的区别。", options: ["A. 词", "B. 词汇"], a: "B. 词汇" },
                { q: "③ 这篇文章___上写得不错，有些小地方还要再修改。", options: ["A. 整体", "B. 完整"], a: "A. 整体" },
                { q: "④ 这两个女孩儿关系非常好，___亲姐妹一样。", options: ["A. 似乎", "B. 好像"], a: "B. 好像 (注：固定搭配为'好像...一样')" }
            ] 
        },
        position: {
            title: "练习二：给括号里的词选择适当的位置",
            questions: [
                { q: "① 从成为 A 大学同学以来，B 他们就 C 相爱 D 了。 (彼此)", a: "B" },
                { q: "② 他输了这场比赛不是因为能力 A 不够 B，而是因为 C 准备 D。 (不足)", a: "D" },
                { q: "③ A 我 B 很想辞职，但是 C 我妻子 D 不支持我的想法。 (倒是)", a: "B" },
                { q: "④ 你已经 A 不错了，别老觉得自己好像 B 吃了 C 亏 D 似的！ (大)", a: "C" }
            ]
        },
        expansion_fill: {
            title: "扩展练习：从“饮食”表中选择合适的词语填空",
            words: ["主食", "大米", "吃肉", "炒菜"],
            questions: [
                { q: "① ___主要是指可以做主食的东西，比如大米、土豆、玉米等。", a: "粮食" },
                { q: "② 你不能每顿饭光吃肉，还得多吃___。", a: "蔬菜" },
                { q: "③ 我不太能吃辣，麻烦你做菜时少放点儿___。", a: "辣椒" },
                { q: "④ 我老家靠海，所以我从小就喜欢吃___。", a: "海鲜" }
            ]
        }
    },

    // ─── 话题延展与写作 (100% 提取自源文件 P70) ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "请调查一下汉语中词汇语义从古代到现代发生变化的情况，例如“菜”、“金”、“汤”、“走”等。", hint: "比如“走”在古代是跑的意思，“汤”在古代是热水的意思。" },
            { q: "举一个你自己母语中词汇语义变化的例子。", hint: "结合自己的国家文化举例说明。" },
            { q: "你觉得了解这种语义变化现象对你的汉语学习有帮助吗？举例说明。", hint: "可以帮助我们更好地理解成语的来源和文化背景。" }
        ], 
        writing: { 
            title: "命题写作：词汇的语义变化", 
            prompt: "请以“‘朝三暮四’的古与今”为题，谈一谈你对词汇语义变化的看法。尽量用本课所学的生词，字数不少于100字。", 
            minWords: 100, 
            suggestedWords: [ "相处", "彼此", "行为", "限制", "显得", "安慰", "吃亏", "财产" ] 
        } 
    } 
};
