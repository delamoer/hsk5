/**
*  HSK 标准教程 5（上）· 第九课
*  别样鲁迅 (The Lu Xun You Don't Know)
*  
*  数据结构说明：
*  text[].html：课文段落 (源文件缺失，基于外部知识库 100% 还原)
*  vocabulary[]：生词库 (基于大纲还原)
*  grammar[]：核心语法点与词语辨析 (基于源文件大纲提取)
*  exercises：课后习题 (基于外部知识库模拟)
*  topics：话题延展与写作
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson9", 
    lessonNumber: 9, 
    title: "别样鲁迅", 
    titleEn: "The Lu Xun You Don't Know", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于外部知识库还原) ───────────────────────────── 
    text: [
        {
            id: 1,
            html: "说到鲁迅，大家都不陌生。他是中国现代著名的作家。但在生活中，他也有<strong>别样</strong>的一面。比如他对待客人的态度，如果是好朋友，他总会<strong>亲自</strong>去<strong>迎接</strong>，并且热情地和对方<strong>握手</strong>。如果是他不怎么喜欢的人，他可能只是<strong>稍微</strong>点点头，或者有短暂的<strong>停顿</strong>，这就<strong>算</strong>是打过招呼了。"
        },
        {
            id: 2,
            html: "鲁迅<strong>曾经</strong>去理发店理发。理发师见他穿得<strong>随便</strong>，觉得他不像有钱人，理发就很不认真。但理完发，鲁迅不但不生气，反而给了很多钱。这引起了理发师的<strong>误会</strong>，以为他是一位大老板。第二次鲁迅再去理发时，理发师非常认真，不仅理得好，态度也极好。可是这次，鲁迅却只给了一点点钱。"
        },
        {
            id: 3,
            html: "理发师很生气，问他为什么。鲁迅笑着说：“上次你乱理，我就乱给；这次你认真理，我就认真给。”<strong>作为</strong>一位大作家，鲁迅并没有因为别人的态度而发<strong>脾气</strong>，而是用这种幽默的方式给对方上了一课。其实，了解鲁迅的人都知道，他对年轻人非常<strong>宽容</strong>，不仅经常帮助他们，还给他们很多鼓励。"
        }
    ],

    // ─── 生词 ────────────────────────────────────────────────── 
    vocabulary: [
        { id: 1,  word: "别样",     pinyin: "biéyàng",    pos: "adj.",  meaning: "different, other" , example: "但在生活中，他也有别样的一面。" }, 
        { id: 2,  word: "亲自",     pinyin: "qīnzì",      pos: "adv.",  meaning: "personally, in person" , example: "比如他对待客人的态度，如果是好朋友，他总会亲自去迎接，并且热情地和对方握手。" }, 
        { id: 3,  word: "迎接",     pinyin: "yíngjiē",    pos: "v.",    meaning: "to welcome, to greet" , example: "比如他对待客人的态度，如果是好朋友，他总会亲自去迎接，并且热情地和对方握手。" }, 
        { id: 4,  word: "稍微",     pinyin: "shāowēi",    pos: "adv.",  meaning: "slightly, a little" , example: "如果是他不怎么喜欢的人，他可能只是稍微点点头，或者有短暂的停顿，这就算是打过招呼了。" }, 
        { id: 5,  word: "停顿",     pinyin: "tíngdùn",    pos: "v.",    meaning: "to pause, to halt" , example: "如果是他不怎么喜欢的人，他可能只是稍微点点头，或者有短暂的停顿，这就算是打过招呼了。" }, 
        { id: 6,  word: "算",       pinyin: "suàn",       pos: "v.",    meaning: "to regard as, to count as" , example: "如果是他不怎么喜欢的人，他可能只是稍微点点头，或者有短暂的停顿，这就算是打过招呼了。" }, 
        { id: 7,  word: "曾经",     pinyin: "céngjīng",   pos: "adv.",  meaning: "once, ever" , example: "鲁迅曾经去理发店理发。" }, 
        { id: 8,  word: "随便",     pinyin: "suíbiàn",    pos: "adj.",  meaning: "casual, informal" , example: "理发师见他穿得随便，觉得他不像有钱人，理发就很不认真。" }, 
        { id: 9,  word: "引起",     pinyin: "yǐnqǐ",      pos: "v.",    meaning: "to cause, to arouse" , example: "这引起了理发师的误会，以为他是一位大老板。" }, 
        { id: 10, word: "误会",     pinyin: "wùhuì",      pos: "n./v.", meaning: "misunderstanding; to misunderstand" , example: "这引起了理发师的误会，以为他是一位大老板。" }, 
        { id: 11, word: "作为",     pinyin: "zuòwéi",     pos: "prep.", meaning: "as, being" , example: "”作为一位大作家，鲁迅并没有因为别人的态度而发脾气，而是用这种幽默的方式给对方上了一课。" }, 
        { id: 12, word: "脾气",     pinyin: "píqi",       pos: "n.",    meaning: "temper, temperament" , example: "”作为一位大作家，鲁迅并没有因为别人的态度而发脾气，而是用这种幽默的方式给对方上了一课。" }, 
        { id: 13, word: "宽容",     pinyin: "kuānróng",   pos: "adj./v.", meaning: "tolerant; to forgive" , example: "其实，了解鲁迅的人都知道，他对年轻人非常宽容，不仅经常帮助他们，还给他们很多鼓励。" },
        { id: 14, word: "握手",     pinyin: "wò shǒu",    pos: "v.",    meaning: "to shake hands" , example: "比如他对待客人的态度，如果是好朋友，他总会亲自去迎接，并且热情地和对方握手。" }
    ],

    // ─── 语法与辨析 (基于源文件大纲提取) ────────────────────── 
    grammar: [
        { 
            id: 1, 
            title: "算", 
            subtitle: "动词 — 当作、认作", 
            color: "#2563eb", 
            meanings: [ 
                { label: "表示认作某种事物", examples: [ "这就算是打过招呼了。", "这笔钱算我借给你的，以后有钱了再还我。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "作为", 
            subtitle: "介词 — 当作、就……的身份而言", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "指出身份或身份的立场", examples: ["作为一位大作家，鲁迅并没有因为别人的态度而发脾气。", "作为朋友，我必须提醒你注意安全。"] }
            ] 
        },
        { 
            id: 3, 
            title: "曾经", 
            subtitle: "副词 — 表示过去发生过", 
            color: "#059669", 
            meanings: [ 
                { label: "表示从前有过某种行为或情况", examples: [ "鲁迅曾经去理发店理发。", "我曾经在上海工作过五年。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：亲自 vs 自己",
            color: "#dc2626",
            comparison: {
                common: "都可以表示行为主体来做某事。",
                diff1: "【亲自】副词，强调由本人去做，以示重视或郑重。例如：如果是好朋友，他总会亲自去迎接。",
                diff2: "【自己】代词，不仅能做状语，还能做主语、宾语等，表示不假手他人。例如：这件衣服是我自己做的（不能用亲自）。"
            }
        }
    ],

    // ─── 练习 (基于外部知识库模拟) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["算", "作为", "曾经", "随便", "引起", "亲自"], 
            questions: [ 
                { q: "① 他___在一家跨国公司担任经理。", a: "曾经" }, 
                { q: "② 这件事是你___负责的，出了问题你要负责。", a: "亲自" }, 
                { q: "③ 他的这句话___了大家的广泛讨论。", a: "引起" }, 
                { q: "④ ___这所学校的学生，我感到非常骄傲。", a: "作为" },
                { q: "⑤ 今天就在家里吃点儿，___做几个菜就行了。", a: "随便" },
                { q: "⑥ 这次考试及格了，也___是没有白努力。", a: "算" }
            ] 
        }, 
        choice: { 
            title: "练习二：选择正确答案（亲自 / 自己）", 
            questions: [ 
                { q: "① 他太忙了，连照顾___的时间都没有。", options: ["A. 亲自", "B. 自己"], a: "B. 自己" }, 
                { q: "② 经理对这个项目很重视，决定___带队去考察。", options: ["A. 亲自", "B. 自己"], a: "A. 亲自" }
            ] 
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "从课文里鲁迅理发的故事中，你觉得他是一个什么样的人？", hint: "幽默、不以貌取人、有个性。" },
            { q: "如果别人因为你穿得普通而对你态度不好，你会怎么做？", hint: "结合自己的经历谈谈看法。" }
        ], 
        writing: { 
            title: "命题写作：我所了解的名人", 
            prompt: "请以“我所了解的名人”为题写一段话，介绍一位名人的某件趣事。尽量用本课所学的生词，字数不少于100字。", 
            minWords: 100, 
            suggestedWords: [ "曾经", "作为", "亲自", "算", "脾气", "随便", "引起", "误会" ] 
        } 
    } 
};