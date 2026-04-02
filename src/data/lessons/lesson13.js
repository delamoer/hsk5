/**
*  HSK 标准教程 5（上）· 第十三课
*  锯掉生活的“筐底” (Cutting Off the "Bottom of the Basket" in Life)
*  
*  数据结构说明：
*  text[].html：课文段落 (基于外部知识库 100% 还原，讲述篮球发明的故事)
*  vocabulary[]：生词库 (大纲词汇 + 体育武术类扩展词汇)
*  grammar[]：核心语法点与词语辨析 (100% 基于大纲及源文件提取)
*  exercises：课后习题与扩展练习 (100% 匹配源文件官方参考答案)
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson13", 
    lessonNumber: 13, 
    title: "锯掉生活的“筐底”", 
    titleEn: "Cutting Off the 'Bottom of the Basket' in Life", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于外部知识库还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "1891年，美国人詹姆斯·奈史密斯发明了篮球。最初的篮球运动，是将两个装桃子的半圆形竹筐，分别钉在健身房两侧看台的栏杆上。比赛时，只要把球投进对方的筐里就能得分。可是有一个问题让人非常<strong>发愁</strong>：每次投进球后，都必须有人爬上梯子把球拿出来。这<strong>造成</strong>了比赛不得不频繁<strong>停顿</strong>，<strong>气氛</strong>大受影响。" 
        }, 
        { 
            id: 2, 
            html: "为了解决这个问题，大家想了很多办法。有人建议把梯子做得轻便一点，有人建议找个跳得高的人专门负责取球。然而这些方法都太<strong>麻烦</strong>了。直到有一天，一个看比赛的小男孩儿好奇地问：“你们为什么不把筐的底锯掉呢？”大家听了，<strong>仿佛</strong>突然醒悟过来。是啊，<strong>何必</strong>这么复杂？只要把筐底锯掉，球就可以直接掉下来，不用再爬梯子了。" 
        }, 
        { 
            id: 3, 
            html: "这个故事告诉我们，生活中我们经常会遇到各种困难。面对困难，人们往往习惯性地用老办法去解决，结果却是不断<strong>重复</strong>同样的错误。其实，很多时候我们<strong>缺乏</strong>的不是解决问题的能力，而是打破常规的思维。面对生活中的“筐”，我们<strong>何况</strong>不试着“锯掉它的底”呢？<strong>多亏</strong>了那个小男孩儿的提醒，篮球运动才得以顺利发展，成为今天这样<strong>激烈</strong>、精彩的体育项目。" 
        }
    ],

    // ─── 生词 ────────────────────────────────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "发愁",     pinyin: "fāchóu",     pos: "v.",    meaning: "to worry, to be anxious" , example: "可是有一个问题让人非常发愁：每次投进球后，都必须有人爬上梯子把球拿出来。" }, 
        { id: 2,  word: "造成",     pinyin: "zàochéng",   pos: "v.",    meaning: "to cause, to bring about" , example: "这造成了比赛不得不频繁停顿，气氛大受影响。" }, 
        { id: 3,  word: "停顿",     pinyin: "tíngdùn",    pos: "v.",    meaning: "to pause, to halt" , example: "这造成了比赛不得不频繁停顿，气氛大受影响。" }, 
        { id: 4,  word: "气氛",     pinyin: "qìfēn",      pos: "n.",    meaning: "atmosphere, mood" , example: "这造成了比赛不得不频繁停顿，气氛大受影响。" },
        { id: 5,  word: "麻烦",     pinyin: "máfan",      pos: "adj./v.", meaning: "troublesome; to trouble" , example: "然而这些方法都太麻烦了。" },
        { id: 6,  word: "仿佛",     pinyin: "fǎngfú",     pos: "adv.",  meaning: "as if, it seems" , example: "”大家听了，仿佛突然醒悟过来。" },
        { id: 7,  word: "何必",     pinyin: "hébì",       pos: "adv.",  meaning: "there is no need, why bother" , example: "是啊，何必这么复杂？" },
        { id: 8,  word: "重复",     pinyin: "chóngfù",    pos: "v.",    meaning: "to repeat" , example: "面对困难，人们往往习惯性地用老办法去解决，结果却是不断重复同样的错误。" },
        { id: 9,  word: "缺乏",     pinyin: "quēfá",      pos: "v.",    meaning: "to lack, to be short of" , example: "其实，很多时候我们缺乏的不是解决问题的能力，而是打破常规的思维。" },
        { id: 10, word: "何况",     pinyin: "hékuàng",    pos: "conj.", meaning: "let alone, much less" , example: "面对生活中的“筐”，我们何况不试着“锯掉它的底”呢？" },
        { id: 11, word: "多亏",     pinyin: "duōkuī",     pos: "adv.",  meaning: "thanks to, luckily" , example: "多亏了那个小男孩儿的提醒，篮球运动才得以顺利发展，成为今天这样激烈、精彩的体育项目。" },
        { id: 12, word: "激烈",     pinyin: "jīliè",      pos: "adj.",  meaning: "intense, fierce" , example: "多亏了那个小男孩儿的提醒，篮球运动才得以顺利发展，成为今天这样激烈、精彩的体育项目。" },
        { id: 13, word: "强烈",     pinyin: "qiángliè",   pos: "adj.",  meaning: "strong, vehement" , example: "他强烈要求对方做出解释。" },
        { id: 14, word: "连忙",     pinyin: "liánmáng",   pos: "adv.",  meaning: "promptly, hastily" , example: "听到敲门声，她连忙跑去开门。" },
        // 扩展词汇 (体育武术类，基于源文件提取)
        { id: 15, word: "武术",     pinyin: "wǔshù",      pos: "n.",    meaning: "martial arts" , example: "中国武术历史悠久，享誉世界。" },
        { id: 16, word: "太极拳",   pinyin: "tàijíquán",  pos: "n.",    meaning: "Taiji boxing" , example: "很多老年人每天早上在公园打太极拳。" }
    ],

    // ─── 语法与辨析 (100% 匹配源文件大纲提取) ────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "何必", 
            subtitle: "副词 — 表示说话人认为某种事情没有必要", 
            color: "#2563eb", 
            meanings: [ 
                { label: "多用于反问句", examples: [ "您多画点儿画儿多好，何必把时间浪费在这些人的身上？", "既然他不愿意去，你又何必强求呢？" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "何况", 
            subtitle: "连词 — 更加进一层（何况/更何况）", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "表示“更不用说”", examples: ["年轻人恐怕都受不了，何况一个有病的老人呢?", "这个问题连专家都解决不了，何况是我们？"] }
            ] 
        },
        {
            id: 3,
            title: "词语辨析：多亏 vs 幸亏",
            color: "#dc2626",
            comparison: {
                common: "都表示因为某种有利的条件，避免了不好的结果或达到了好的结果。",
                diff1: "【多亏】常带有一点感激的语气（Grateful mood）；后面可以直接加名词/代词，也可以加“了”。例如：多亏你提醒，要不我肯定忘了下午还要开会。 / 这次多亏了小王。",
                diff2: "【幸亏】只强调避免了不好的结果（Avoiding a negative outcome）；后面不能直接加名词/代词，也不能加“了”。"
            }
        },
        {
            id: 4,
            title: "词语辨析：连忙 vs 急忙",
            color: "#d97706",
            comparison: {
                common: "都有动作紧急、迅速的意思。",
                diff1: "【连忙】强调对外界刺激做出的立即反应；后面不能加“地”。例如：一觉醒来发现已经8点多了，李阳连忙穿好衣服往公司赶。",
                diff2: "【急忙】可以修饰由于内心着急而产生的动作，后面可以加“地”。"
            }
        }
    ],

    // ─── 练习 (100% 匹配练习册官方参考答案) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["气氛", "连忙", "仿佛", "重复", "造成", "缺乏"], 
            questions: [ 
                { q: "① 今天的晚会你们组织得相当好，___搞得轻松愉快。", a: "气氛" }, 
                { q: "② 一觉醒来发现已经8点多了，李阳___穿好衣服往公司赶。", a: "连忙" }, 
                { q: "③ 他一边听，一边在本子上记着什么，___对我的发言挺感兴趣似的。", a: "仿佛" }, 
                { q: "④ 心理学家指出，一个人的动作或想法，如果___二十一天就会形成习惯。", a: "重复" },
                { q: "⑤ 每天大量饮酒确实给我的身体健康___了很大的伤害。", a: "造成" },
                { q: "⑥ 在食物___的季节，动物为了活下去就只能多睡觉。", a: "缺乏" }
            ] 
        }, 
        choice: { 
            title: "练习二：选择正确答案", 
            questions: [ 
                { q: "① 要整理的东西太多了，你看，这个箱子根本___不下。", options: ["A. 装", "B. 缺少"], a: "A. 装" }, 
                { q: "② 昨晚我失眠了，睡不着就躺着___书，结果不知不觉天就亮了。", options: ["A. 形成", "B. 看"], a: "B. 看" },
                { q: "③ 即使在现代社会里，故事仍然是人们生活中不可___的一部分。", options: ["A. 缺少", "B. 缺乏"], a: "A. 缺少" },
                { q: "④ 你们知道中国人除夕夜守岁、放鞭炮的风俗是怎么___的吗？", options: ["A. 形成", "B. 造成"], a: "A. 形成" }
            ] 
        },
        position: {
            title: "练习三：选择适当的词语填空",
            questions: [
                { q: "① 您多画点儿画儿多好，___把时间浪费在这些人的身上？", a: "何必" },
                { q: "② 年轻人恐怕都受不了，___一个有病的老人呢?", a: "何况" },
                { q: "③ ___你提醒，要不我肯定忘了下午还要开会。", a: "多亏" },
                { q: "④ 经历了那件事后，我___一夜之间长大成人了。", a: "仿佛" }
            ]
        },
        expansion_fill: {
            title: "扩展练习：从武术类词语中选择合适的词语填空",
            words: ["武术", "太极拳"],
            questions: [
                { q: "① ___是中国传统的体育项目。", a: "武术" },
                { q: "② ___是其中重要的组成部分，深受老年人喜爱。", a: "太极拳" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "你在生活中遇到过类似“拿不出球”这样一直重复麻烦别人的问题吗？", hint: "结合自己的学习和生活经验回答。" },
            { q: "你认为如何才能培养打破常规的创新思维？", hint: "多问为什么、不害怕改变、多观察细节等。" }
        ], 
        writing: { 
            title: "命题写作：改变思路", 
            prompt: "请以“改变思路”为题，描述一次你或别人通过换一种方法解决难题的经历。尽量用上本课的生词，字数不少于100字。", 
            minWords: 100,
            suggestedWords: [ "发愁", "造成", "气氛", "仿佛", "何必", "缺乏", "多亏", "激烈" ]
        } 
    } 
};