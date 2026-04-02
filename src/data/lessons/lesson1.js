/**
*  HSK 标准教程 5（上）· 第一课
*  爱的细节 (Details of Love)
*  数据结构说明：
*  text[].html：课文段落，<strong> 标签标注本课重点词汇
*  vocabulary[]：生词卡数据 (完整版 38 词)
*  grammar[]：语法点与词语辨析
*  exercises：课后原版练习题
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson1", 
    lessonNumber: 1, 
    title: "爱的细节", 
    titleEn: "Details of Love", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (100% 原文还原) ────────────────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "<strong>电台</strong>要选出一对最<strong>恩爱</strong>的夫妻。经过<strong>对比</strong>后，有三对夫妻<strong>入围</strong>。<strong>评委</strong>叫第一对夫妻说说他俩是<strong>如何</strong>恩爱的。妻子说，前几年她全身<strong>瘫痪</strong>了，医生说她站起来的可能性很小。别人都觉得她的丈夫会跟她<strong>离婚</strong>，她也想过要<strong>自杀</strong>。但丈夫不知找了多少家医院，并且几年如一日地照顾她，从不<strong>抱怨</strong>。在丈夫的<strong>爱护</strong>和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。", 
        }, 
        { 
            id: 2, 
            html: "随后进来的是第二对夫妻，他俩说，十几年的<strong>婚姻</strong>生活中，他们从来没为任何事红过脸、<strong>吵架</strong>，一直相亲相爱、<strong>相敬如宾</strong>。评委们听了<strong>暗暗</strong>点头。", 
        }, 
        { 
            id: 3, 
            html: "<strong>轮</strong>到第三对夫妻了，却很长时间不见人。评委们等得有些<strong>不耐烦</strong>，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头<strong>靠</strong>在女人的<strong>肩膀</strong>上，睡着了。一个评委要上前<strong>喊</strong>醒那个男的，女的却<strong>伸</strong>出<strong>手指</strong>做了个小声的动作，然后小心地从包里拿出纸笔，用左手<strong>歪歪扭扭</strong>写下一行字<strong>递</strong>给评委，而她的右肩一直让丈夫的<strong>脑袋</strong>靠着。评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面续写了一句话：但是<strong>女士</strong>，我们得听你们夫妻俩的<strong>叙述</strong>啊！女人又写：那我们就不参加了。", 
        },
        { 
            id: 4, 
            html: "大家很吃惊，这个女人为了不影响丈夫睡觉，<strong>居然</strong>放弃这次机会！但评委们还是决定先不<strong>催</strong>他们，而是再<strong>等待</strong>一段时间。过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说：“我家住一楼，<strong>蚊子</strong>多。昨晚<strong>半夜</strong>我被蚊子<strong>叮</strong>醒了，我怕我<strong>老婆</strong>再被<strong>吵</strong>醒，所以后半夜就在为她赶蚊子。”", 
        },
        { 
            id: 5, 
            html: "最后的结果是，电台增加了两<strong>项</strong>奖项，将第一对夫妻评为“<strong>患难与共</strong>夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。", 
        }
    ],

    // ─── 生词 (补全大纲内外 38 个重点词) ──────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "细节",       pinyin: "xìjié",          pos: "n.",    meaning: "detail" , example: "生活中的细节往往最能体现一个人的品格。" }, 
        { id: 2,  word: "电台",       pinyin: "diàntái",        pos: "n.",    meaning: "radio station" , example: "电台要选出一对最恩爱的夫妻。" }, 
        { id: 3,  word: "恩爱",       pinyin: "ēn'ài",          pos: "adj.",  meaning: "(of husband and wife) loving" , example: "电台要选出一对最恩爱的夫妻。" }, 
        { id: 4,  word: "对比",       pinyin: "duìbǐ",          pos: "v.",    meaning: "to compare, to contrast" , example: "经过对比后，有三对夫妻入围。" }, 
        { id: 5,  word: "入围",       pinyin: "rùwéi",          pos: "v.",    meaning: "to be shortlisted" , example: "经过对比后，有三对夫妻入围。" },
        { id: 6,  word: "评委",       pinyin: "píngwěi",        pos: "n.",    meaning: "judge, member of a judging panel" , example: "评委们听了暗暗点头。" },
        { id: 7,  word: "如何",       pinyin: "rúhé",           pos: "pron.", meaning: "how" , example: "评委叫第一对夫妻说说他俩是如何恩爱的。" },
        { id: 8,  word: "瘫痪",       pinyin: "tānhuàn",        pos: "v.",    meaning: "to be paralyzed" , example: "妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。" },
        { id: 9,  word: "离婚",       pinyin: "líhūn",          pos: "v.",    meaning: "to divorce" , example: "别人都觉得她的丈夫会跟她离婚，她也想过要自杀。" },
        { id: 10, word: "自杀",       pinyin: "zìshā",          pos: "v.",    meaning: "to commit suicide" , example: "别人都觉得她的丈夫会跟她离婚，她也想过要自杀。" },
        { id: 11, word: "抱怨",       pinyin: "bàoyuàn",        pos: "v.",    meaning: "to complain" , example: "但丈夫不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。" }, 
        { id: 12, word: "爱护",       pinyin: "àihù",           pos: "v.",    meaning: "to take good care of" , example: "在丈夫的爱护和努力下，她终于又站了起来。" }, 
        { id: 13, word: "婚姻",       pinyin: "hūnyīn",         pos: "n.",    meaning: "marriage" , example: "随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵架，一直相亲相爱、相敬如宾。" }, 
        { id: 14, word: "吵架",       pinyin: "chǎo jià",       pos: "v.",    meaning: "to quarrel" , example: "随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵架，一直相亲相爱、相敬如宾。" }, 
        { id: 15, word: "相敬如宾",   pinyin: "xiāngjìng rúbīn",pos: "id.",   meaning: "to respect each other like guests" , example: "随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵架，一直相亲相爱、相敬如宾。" }, 
        { id: 16, word: "暗暗",       pinyin: "àn'àn",          pos: "adv.",  meaning: "secretly, to oneself" , example: "评委们听了暗暗点头。" }, 
        { id: 17, word: "轮",         pinyin: "lún",            pos: "v.",    meaning: "to take turns" , example: "轮到第三对夫妻了，却很长时间不见人。" }, 
        { id: 18, word: "不耐烦",     pinyin: "bú nàifán",      pos: "adj.",  meaning: "impatient" , example: "评委们等得有些不耐烦，就走出来看个究竟。" }, 
        { id: 19, word: "靠",         pinyin: "kào",            pos: "v.",    meaning: "to lean against" , example: "只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。" },
        { id: 20, word: "肩膀",       pinyin: "jiānbǎng",       pos: "n.",    meaning: "shoulder" , example: "只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。" },
        { id: 21, word: "喊",         pinyin: "hǎn",            pos: "v.",    meaning: "to shout, to call" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 22, word: "伸",         pinyin: "shēn",           pos: "v.",    meaning: "to stretch, to extend" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 23, word: "手指",       pinyin: "shǒuzhǐ",        pos: "n.",    meaning: "finger" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 24, word: "歪歪扭扭",   pinyin: "wāiwāiniǔniǔ",   pos: "adj.",  meaning: "crooked, askew" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 25, word: "递",         pinyin: "dì",             pos: "v.",    meaning: "to hand over, to pass" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 26, word: "脑袋",       pinyin: "nǎodai",         pos: "n.",    meaning: "head" , example: "一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。" },
        { id: 27, word: "女士",       pinyin: "nǚshì",          pos: "n.",    meaning: "lady, madam" , example: "一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！" },
        { id: 28, word: "叙述",       pinyin: "xùshù",          pos: "v.",    meaning: "to narrate" , example: "一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！" },
        { id: 29, word: "居然",       pinyin: "jūrán",          pos: "adv.",  meaning: "unexpectedly" , example: "大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！" },
        { id: 30, word: "催",         pinyin: "cuī",            pos: "v.",    meaning: "to urge, to push" , example: "但评委们还是决定先不催他们，而是再等待一段时间。" },
        { id: 31, word: "等待",       pinyin: "děngdài",        pos: "v.",    meaning: "to wait" , example: "但评委们还是决定先不催他们，而是再等待一段时间。" },
        { id: 32, word: "蚊子",       pinyin: "wénzi",          pos: "n.",    meaning: "mosquito" , example: "男人不好意思地笑笑说：“我家住一楼，蚊子多。" },
        { id: 33, word: "半夜",       pinyin: "bànyè",          pos: "n.",    meaning: "midnight" , example: "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。" },
        { id: 34, word: "叮",         pinyin: "dīng",           pos: "v.",    meaning: "to bite, to sting" , example: "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。" },
        { id: 35, word: "老婆",       pinyin: "lǎopo",          pos: "n.",    meaning: "wife" , example: "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。" },
        { id: 36, word: "吵",         pinyin: "chǎo",           pos: "v./adj.", meaning: "to make a noise; noisy" , example: "昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。" },
        { id: 37, word: "项",         pinyin: "xiàng",          pos: "m.",    meaning: "measure word for items/projects" , example: "最后的结果是，电台增加了两项奖项，将第一对夫妻评为“患难与共夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。" },
        { id: 38, word: "患难与共",   pinyin: "huànnàn yǔgòng", pos: "id.",   meaning: "to share weal and woe" , example: "最后的结果是，电台增加了两项奖项，将第一对夫妻评为“患难与共夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。" }
    ],

    // ─── 语法与辨析 (之前你确认OK的部分) ──────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "如何", 
            subtitle: "代词 — 怎么、怎么样 (Formal word)", 
            color: "#2563eb", 
            meanings: [ 
                { label: "询问方式或状况", desc: "多用于书面语。", examples: [ "如果是你，你会如何选择呢？", "听说你去电台工作了？情况如何？" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "靠", 
            subtitle: "动词 — 依靠、倚靠", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "依靠", examples: ["机会是要靠自己努力去获得的。"] }
            ] 
        },
        { 
            id: 3, 
            title: "居然", 
            subtitle: "副词 — 表示出乎意料", 
            color: "#059669", 
            meanings: [ 
                { label: "出乎意料", examples: [ "他这么年轻，没想到居然是一位著名的作家。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：如何 vs 怎么",
            color: "#dc2626",
            comparison: {
                common: "都是代词，都可用于询问方式。",
                diff1: "【如何】多用于书面语；可用于句末表示询问状况或征求意见。例如：情况如何？",
                diff2: "【怎么】多用于口语；可用于询问原因（如：你怎么这么不耐烦？）；可用于句首表示惊讶。"
            }
        }
    ],

    // ─── 练习 (原版提取) ────────────────────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["催", "递", "喊", "项", "爱护", "抱怨", "等待"], 
            questions: [ 
                { q: "① 她从小就___小动物。", a: "爱护" }, 
                { q: "② 关于这段对话，下面哪___是正确的？", a: "项" }, 
                { q: "③ 请大家耐心地___一会儿，不要___他。", a: "等待, 催" }, 
                { q: "④ 请把那本杂志___给我。", a: "递" },
                { q: "⑤ 火车快到的时候你___我一声。", a: "喊" },
                { q: "⑥ 不要总是___别人，要想想能不能改变自己。", a: "抱怨" }
            ] 
        }, 
        choice: { 
            title: "练习二：选择正确答案", 
            questions: [ 
                { q: "① 你的病都好了吗？现在感觉___？", options: ["A. 如何", "B. 怎么"], a: "A. 如何" }, 
                { q: "② 电视里广告太多让观众感到很不___。", options: ["A. 耐心", "B. 耐烦"], a: "B. 耐烦" },
                { q: "③ 这儿太___了，我们换个地方吧。", options: ["A. 吵", "B. 吵架"], a: "A. 吵" },
                { q: "④ 他这么年轻，没想到___是一位著名的作家。", options: ["A. 居然", "B. 仍然"], a: "A. 居然" }
            ] 
        },
        position: {
            title: "练习三：给括号里的词选择适当的位置",
            questions: [
                { q: "① 如果 A 是你 B ，你会 C 选择 D 呢？ (如何)", a: "C" },
                { q: "② 你跟 A 你的同屋 B 吵 C 架 D 吗？ (过)", a: "C" },
                { q: "③ A 机会是要 B 自己努力 C 去 D 获得的。 (靠)", a: "B" },
                { q: "④ 请不要 A 把头 B 到车窗外 C 去 D 。 (伸)", a: "B" }
            ]
        }
    },

    // ─── 话题延展 ────────────────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "在《爱的细节》这篇课文中，哪一对夫妻的故事最让你感动？为什么？", hint: "结合课文中“不抱怨”、“本能”、“半夜被吵醒”等细节回答。" }
        ], 
        writing: { 
            title: "命题写作：生活中感人的细节", 
            prompt: "请写一段话（不少于100字），描述一个让你感动的关于爱的细节，尽量用上本课所学的词语。", 
            minWords: 100, 
            suggestedWords: [ "抱怨", "爱护", "不耐烦", "等待", "居然", "如何" ] 
        } 
    } 
};