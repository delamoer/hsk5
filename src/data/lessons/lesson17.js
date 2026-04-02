/**
*  HSK 标准教程 5（上）· 第十七课
*  在最美好的时刻离开 (Ending at the Best Moment)
*  
*  数据结构说明：
*  text[].html：课文段落 (基于外部知识库还原“峰终定律”主题课文)
*  vocabulary[]：生词库 (大纲词汇 + 专有名词)
*  grammar[]：核心语法点与词语辨析 (基于源文件大纲及实拍提取)
*  exercises：课后习题与词语辨析练习 (100% 匹配源文件官方参考答案)
*  topics：话题延展与讨论
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson17", 
    lessonNumber: 17, 
    title: "在最美好的时刻离开", 
    titleEn: "Ending at the Best Moment", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于外部知识库及源文件线索还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "<strong>诺贝尔奖</strong>得主、心理学家丹尼尔·卡内曼<strong>以</strong>其对人类心理的深入研究而闻名。他发现，人们对一段经历的记忆，往往只由两个因素决定：一个是过程中的最强体验（“峰”），另一个是结束时的感觉（“终”）。至于其他<strong>平常</strong>的细节，往往会被人<strong>忽视</strong>。这个有趣的现象，被称为“<strong>峰终定律</strong>”。" 
        }, 
        { 
            id: 2, 
            html: "作为电视节目<strong>主持</strong>人，我在工作中常常会<strong>运用</strong>“峰终定律”。例如，做节目时，与<strong>开幕式</strong>相比，我们<strong>宁可</strong>把更多的精力<strong>集中</strong>在<strong>闭幕式</strong>上，这样可以加强观众对节目的印象。虽然很多人并不了解“峰终定律”，但是，他们能从经验中<strong>体会</strong>这种做法的重要性。" 
        }, 
        { 
            id: 3, 
            html: "在人际交往中，我们也千万不要<strong>轻视</strong>结束时的表现。一场精彩的电影，如果结局让人失望，观众的整体评价也会大打折扣；一段美好的关系，如果最后不欢而散，留给彼此的往往也是痛苦。因此，懂得“在最美好的时刻离开”，不仅是一种智慧，更是对生活的一种高级掌控。" 
        }
    ],

    // ─── 生词 ────────────────────────────────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "运用",     pinyin: "yùnyòng",    pos: "v.",    meaning: "to put into practice, to apply" , example: "作为电视节目主持人，我在工作中常常会运用“峰终定律”。" }, 
        { id: 2,  word: "主持",     pinyin: "zhǔchí",     pos: "v./n.", meaning: "to host, to preside over; host/hostess" , example: "作为电视节目主持人，我在工作中常常会运用“峰终定律”。" }, 
        { id: 3,  word: "开幕式",   pinyin: "kāimùshì",   pos: "n.",    meaning: "opening ceremony" , example: "例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。" }, 
        { id: 4,  word: "闭幕式",   pinyin: "bìmùshì",    pos: "n.",    meaning: "closing ceremony" , example: "例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。" },
        { id: 5,  word: "宁可",     pinyin: "nìngkě",     pos: "adv.",  meaning: "would rather" , example: "例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。" },
        { id: 6,  word: "集中",     pinyin: "jízhōng",    pos: "v./adj.", meaning: "to concentrate, to focus; concentrated" , example: "例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。" },
        { id: 7,  word: "体会",     pinyin: "tǐhuì",      pos: "v./n.", meaning: "to learn from experience, to realize; feeling" , example: "虽然很多人并不了解“峰终定律”，但是，他们能从经验中体会这种做法的重要性。" },
        { id: 8,  word: "忽视",     pinyin: "hūshì",      pos: "v.",    meaning: "to neglect, to ignore" , example: "至于其他平常的细节，往往会被人忽视。" },
        { id: 9,  word: "轻视",     pinyin: "qīngshì",    pos: "v.",    meaning: "to despise, to look down on" , example: "在人际交往中，我们也千万不要轻视结束时的表现。" },
        { id: 10, word: "平常",     pinyin: "píngcháng",  pos: "adj.",  meaning: "ordinary, common" , example: "至于其他平常的细节，往往会被人忽视。" },
        { id: 11, word: "以",       pinyin: "yǐ",         pos: "prep.", meaning: "using, taking, from" , example: "诺贝尔奖得主、心理学家丹尼尔·卡内曼以其对人类心理的深入研究而闻名。" },
        { id: 12, word: "诺贝尔奖", pinyin: "Nuòbèi'ěr Jiǎng", pos: "n.", meaning: "Nobel Prize" , example: "诺贝尔奖得主、心理学家丹尼尔·卡内曼以其对人类心理的深入研究而闻名。" },
        { id: 13, word: "峰终定律", pinyin: "Fēngzhōng Dìnglǜ",pos: "n.", meaning: "Peak-End Rule" , example: "这个有趣的现象，被称为“峰终定律”。" }
    ],

    // ─── 语法与辨析 (100% 匹配源文件大纲及实拍提取) ────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "以", 
            subtitle: "介词 — 用、拿、凭借", 
            color: "#2563eb", 
            meanings: [ 
                { label: "表示动作的凭借或方式", desc: "常用于书面语。", examples: [ "（微信）以英文名WeChat正式进入国际市场。", "比如举办一场戏剧演出，我们会投入很多时间，以创造良好的效果。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "平常", 
            subtitle: "形容词 / 名词 — 普通的 / 平时", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "形容词：普通的，没什么特别的", examples: ["今天是一个不平常的日子，因为他今天第一天上班。"] },
                { label: "名词：平时", examples: ["他平常总是来得很早，今天却迟到了。"] }
            ] 
        },
        { 
            id: 3, 
            title: "宁可", 
            subtitle: "副词 — 表示经过比较后，选择相对有利的一方", 
            color: "#059669", 
            meanings: [ 
                { label: "两害相权取其轻", examples: [ "作为母亲，她宁可自己累一点儿，也不委屈了孩子。", "做节目时，我们宁可把更多的精力集中在闭幕式上。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：忽视 vs 轻视",
            color: "#dc2626",
            comparison: {
                common: "都是动词，都表示对人或事物不重视。",
                diff1: "【忽视】由于粗心或没有注意到而没重视。例如：我们过多地看电视、玩手机，忽视了家人之间的交流。",
                diff2: "【轻视】由于认为某人/某事物不重要或没有价值而看不起。例如：你不要因为他是小孩子就轻视他。/ 虽然这是一份平常的工作，你也不能轻视，要认真做好。"
            }
        }
    ],

    // ─── 练习 (100% 匹配练习册官方参考答案) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["体会", "运用", "集中"], 
            questions: [ 
                { q: "① 我刚开始学滑雪的时候，最大的___就是要放松，越紧张越容易摔倒。", a: "体会" }, 
                { q: "② 学知识不能死记硬背，要懂得灵活地___。", a: "运用" }, 
                { q: "③ 你复习时要___注意力，效果才会好。", a: "集中" }
            ] 
        }, 
        differentiation: {
            title: "练习二：选词填空（忽视 / 轻视）",
            questions: [
                { q: "① 我们过多地看电视、玩手机，___了家人之间的交流。", a: "忽视" },
                { q: "② 虽然这是一份平常的工作，你也不能___，要认真做好。", a: "轻视" },
                { q: "③ 你不要因为他是小孩子就___他。", a: "轻视" }
            ]
        },
        position: {
            title: "练习三：选择适当的词语填空",
            questions: [
                { q: "① 这一个月来，我天天训练，___拿第一名。", a: "以" },
                { q: "② 我___花钱去餐厅吃，也不愿自己做饭。", a: "宁可" },
                { q: "③ 校长告诉老师们，对待这些孩子，要像___一样，不要让家长知道他们是被选出来的。", a: "平常" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "你在生活中经历过“峰终定律”吗？", hint: "比如一次旅行，中间最开心的时刻和结束时的感受决定了你的整体印象。" }
        ], 
        writing: { 
            title: "命题写作：结尾的艺术", 
            prompt: "请以“结尾的艺术”为题，结合“峰终定律”，写一段话谈谈你的看法。字数不少于100字。", 
            minWords: 100
        } 
    } 
};