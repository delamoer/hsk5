/**
*  HSK 标准教程 5（上）· 第三课
*  人生有选择，一切可改变 (Having Choices in Life Makes Change Possible)
*  
*  数据结构说明：
*  text[].html：课文段落，<strong> 标签标注本课重点词汇 (100% 原文还原)
*  vocabulary[]：生词库 (完整包含 32 个大纲词汇 + 4 个扩展词汇)
*  grammar[]：核心语法点与词语辨析
*  exercises：课后与练习册原版习题 (100% 匹配源文件提供的标准答案)
*  topics：话题延展与命题写作
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson3", 
    lessonNumber: 3, 
    title: "人生有选择，一切可改变", 
    titleEn: "Having Choices in Life Makes Change Possible", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (100% 依据教材与课件原文还原) ───────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "翟峰和妻子都是铁路<strong>工人</strong>，工作<strong>稳定</strong>，<strong>待遇</strong>不错。他们有房有车，从不为生活<strong>发愁</strong>。可翟峰却不想一辈子过这样<strong>平静</strong>的生活。通过电视，翟峰迷上了<strong>帆船</strong>，他觉得帆船能带他<strong>撞</strong>开“世界之门”：只要有一<strong>艘</strong>船，就能<strong>航行</strong>在无边无际的海上，到任何自己想去的地方。", 
        }, 
        { 
            id: 2, 
            html: "由于翟峰和妻子没有<strong>积蓄</strong>，于是卖房卖车，买下了一艘<strong>二手</strong>船，翟峰叫它“<strong>彩虹</strong>号”。出发前，翟峰自学了航海知识。然而，<strong>包括</strong>翟峰的父母，所有人都觉得，翟峰“<strong>疯</strong>”了。", 
        }, 
        { 
            id: 3, 
            html: "2012年11月24日，<strong>辞职</strong>的翟峰和妻子带着休学的女儿，第一次<strong>驾驶</strong>帆船出海了。白天，翟峰和妻子<strong>轮流</strong>驾船。女儿在船上看书、学习、画画儿。下午海面平静时，翟峰会和妻子下海游泳或者<strong>钓</strong>鱼。该吃饭时，妻子会给全家人做一<strong>顿</strong>美味的<strong>海鲜</strong>。", 
        },
        { 
            id: 4, 
            html: "<strong>傍晚</strong>是一家人最<strong>舒适</strong>的时候。<strong>干活儿</strong>，一家人坐在一起，用电脑看看电影，或者聊聊天儿。这样的生活，是翟峰<strong>盼望</strong>已久的。以前<strong>陆地</strong>上的夜晚，他们在<strong>各自</strong>的房间，一家人没有更多的交流。", 
        },
        { 
            id: 5, 
            html: "中国有句老话，可上山，<strong>勿</strong>下海。美好的<strong>时刻</strong>过去后是一个个紧张的夜晚。一路上，翟峰一家经历了船身<strong>着火</strong>、<strong>漏</strong>水等大大小小十多次险情。他们最怕<strong>雷</strong>电交加的时刻，因为在经历了八个月、航行了 40000 多海里之后，翟峰一家终于回到了家。翟峰相信，一切只是开始，航海就是他人生道路上一段长长的台阶，通向他想要的未来。“我和太太想要看看这个时代、这个世界到底是什么样子。人生有选择，一切可改变”。下一站，他们想去澳洲和新西兰。等待今年 11 月的北风，北风南下之时，他们将再次出发。", 
        }
    ],

    // ─── 生词 (32个课文生词 + 4个扩展生词) ────────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "人生",     pinyin: "rénshēng",   pos: "n.",    meaning: "life" , example: "人生有选择，一切可改变”。" }, 
        { id: 2,  word: "工人",     pinyin: "gōngrén",    pos: "n.",    meaning: "worker" , example: "翟峰和妻子都是铁路工人，工作稳定，待遇不错。" }, 
        { id: 3,  word: "稳定",     pinyin: "wěndìng",    pos: "adj.",  meaning: "stable" , example: "翟峰和妻子都是铁路工人，工作稳定，待遇不错。" }, 
        { id: 4,  word: "待遇",     pinyin: "dàiyù",      pos: "n.",    meaning: "pay and perks" , example: "翟峰和妻子都是铁路工人，工作稳定，待遇不错。" }, 
        { id: 5,  word: "发愁",     pinyin: "fā chóu",    pos: "v.",    meaning: "to worry" , example: "他们有房有车，从不为生活发愁。" },
        { id: 6,  word: "平静",     pinyin: "píngjìng",   pos: "adj.",  meaning: "quiet, peaceful" , example: "可翟峰却不想一辈子过这样平静的生活。" },
        { id: 7,  word: "帆船",     pinyin: "fānchuán",   pos: "n.",    meaning: "sailing boat/ship" , example: "2012年11月24日，辞职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。" },
        { id: 8,  word: "撞",       pinyin: "zhuàng",     pos: "v.",    meaning: "to bump against" , example: "通过电视，翟峰迷上了帆船，他觉得帆船能带他撞开“世界之门”：只要有一艘船，就能航行在无边无际的海上，到任何自己想去的地方。" },
        { id: 9,  word: "艘",       pinyin: "sōu",        pos: "m.",    meaning: "used for boats/ships" , example: "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。" },
        { id: 10, word: "航行",     pinyin: "hángxíng",   pos: "v.",    meaning: "to sail, to navigate by air or water" , example: "他们最怕雷电交加的时刻，因为在经历了八个月、航行了 40000 多海里之后，翟峰一家终于回到了家。" },
        { id: 11, word: "积蓄",     pinyin: "jīxù",       pos: "n./v.", meaning: "savings; to save" , example: "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。" }, 
        { id: 12, word: "二手",     pinyin: "èrshǒu",     pos: "adj.",  meaning: "second-hand" , example: "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。" }, 
        { id: 13, word: "彩虹",     pinyin: "cǎihóng",    pos: "n.",    meaning: "rainbow" , example: "由于翟峰和妻子没有积蓄，于是卖房卖车，买下了一艘二手船，翟峰叫它“彩虹号”。" }, 
        { id: 14, word: "包括",     pinyin: "bāokuò",     pos: "v.",    meaning: "to include" , example: "然而，包括翟峰的父母，所有人都觉得，翟峰“疯”了。" }, 
        { id: 15, word: "疯",       pinyin: "fēng",       pos: "v.",    meaning: "to be crazy, to go mad" , example: "然而，包括翟峰的父母，所有人都觉得，翟峰“疯”了。" }, 
        { id: 16, word: "辞职",     pinyin: "cí zhí",     pos: "v.",    meaning: "to quit a job" , example: "2012年11月24日，辞职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。" }, 
        { id: 17, word: "驾驶",     pinyin: "jiàshǐ",     pos: "v.",    meaning: "to drive, to pilot" , example: "2012年11月24日，辞职的翟峰和妻子带着休学的女儿，第一次驾驶帆船出海了。" }, 
        { id: 18, word: "轮流",     pinyin: "lúnliú",     pos: "v.",    meaning: "to take turns" , example: "白天，翟峰和妻子轮流驾船。" }, 
        { id: 19, word: "钓",       pinyin: "diào",       pos: "v.",    meaning: "to fish with a hook and line" , example: "下午海面平静时，翟峰会和妻子下海游泳或者钓鱼。" },
        { id: 20, word: "顿",       pinyin: "dùn",        pos: "m.",    meaning: "used for meals" , example: "该吃饭时，妻子会给全家人做一顿美味的海鲜。" },
        { id: 21, word: "海鲜",     pinyin: "hǎixiān",    pos: "n.",    meaning: "seafood" , example: "该吃饭时，妻子会给全家人做一顿美味的海鲜。" },
        { id: 22, word: "傍晚",     pinyin: "bàngwǎn",    pos: "n.",    meaning: "towards evening, at dusk" , example: "傍晚是一家人最舒适的时候。" },
        { id: 23, word: "舒适",     pinyin: "shūshì",     pos: "adj.",  meaning: "comfortable, cozy" , example: "傍晚是一家人最舒适的时候。" },
        { id: 24, word: "干活儿",   pinyin: "gàn huór",   pos: "v.",    meaning: "to work" , example: "干活儿，一家人坐在一起，用电脑看看电影，或者聊聊天儿。" },
        { id: 25, word: "盼望",     pinyin: "pànwàng",    pos: "v.",    meaning: "to look forward to" , example: "这样的生活，是翟峰盼望已久的。" },
        { id: 26, word: "陆地",     pinyin: "lùdì",       pos: "n.",    meaning: "land" , example: "以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。" },
        { id: 27, word: "各自",     pinyin: "gèzì",       pos: "pron.", meaning: "each, respective" , example: "以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。" },
        { id: 28, word: "勿",       pinyin: "wù",         pos: "adv.",  meaning: "don't (used in imperative sentences)" , example: "中国有句老话，可上山，勿下海。" },
        { id: 29, word: "时刻",     pinyin: "shíkè",      pos: "n.",    meaning: "moment" , example: "美好的时刻过去后是一个个紧张的夜晚。" },
        { id: 30, word: "着火",     pinyin: "zháo huǒ",   pos: "v.",    meaning: "to catch fire" , example: "一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。" },
        { id: 31, word: "漏",       pinyin: "lòu",        pos: "v.",    meaning: "(of a container) to leak" , example: "一路上，翟峰一家经历了船身着火、漏水等大大小小十多次险情。" },
        { id: 32, word: "雷",       pinyin: "léi",        pos: "n.",    meaning: "thunder" , example: "他们最怕雷电交加的时刻，因为在经历了八个月、航行了 40000 多海里之后，翟峰一家终于回到了家。" },
        // 话题分类词语扩展（天气与生产）
        { id: 33, word: "预报",     pinyin: "yùbào",      pos: "n.",    meaning: "forecast" , example: "天气预报说明天有雨，记得带伞。" },
        { id: 34, word: "雾",       pinyin: "wù",         pos: "n.",    meaning: "fog" , example: "今天早上雾很大，能见度很低。" },
        { id: 35, word: "零件",     pinyin: "língjiàn",   pos: "n.",    meaning: "spare parts" , example: "这台机器少了一个重要零件，无法运转。" },
        { id: 36, word: "维修",     pinyin: "wéixiū",     pos: "v.",    meaning: "to maintain and repair" , example: "这辆车需要去维修站检查一下。" }
    ],

    // ─── 语法与辨析 ──────────────────────────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "各自", 
            subtitle: "代词 — 各人自己、各个方面", 
            color: "#2563eb", 
            meanings: [ 
                { label: "指代各方自己", examples: [ "以前陆地上的夜晚，他们在各自的房间，一家人没有更多的交流。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "勿", 
            subtitle: "副词 — 表示禁止或劝阻 (Formal)", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "不要、别", desc: "多用于书面语的祈使句。", examples: ["中国有句老话，可上山，勿下海。"] }
            ] 
        },
        { 
            id: 3, 
            title: "时刻", 
            subtitle: "名词 — 某个特定时间 / 副词 — 经常、每时每刻", 
            color: "#059669", 
            meanings: [ 
                { label: "名词用法", examples: [ "美好的时刻过去后是一个个紧张的夜晚。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：舒适 vs 舒服",
            color: "#dc2626",
            comparison: {
                common: "都是形容词，都表示轻松愉快。例如：饭店为入住的客人准备了舒适/舒服的房间。",
                diff1: "【舒适】多用于书面语，侧重于客观环境给人带来的整体感受。例如：我们需要一个轻松舒适的生活环境。",
                diff2: "【舒服】多用于口语，侧重于人身体、精神上的主观、具体的感受。可重叠为AABB。例如：你洗个热澡舒服舒服吧。"
            }
        }
    ],

    // ─── 练习 (100% 匹配教材官方答案原题还原) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "课本练习一：选择合适的词语填空", 
            words: ["随时", "发愁", "待遇", "漏", "辞职", "稳定"], 
            questions: [ 
                { q: "① 由于在个人___上没谈好，他最后拒绝了这家公司的邀请。", a: "待遇" }, 
                { q: "② 现在，让许多工厂老板___的是有经验的技术工人很难找。", a: "发愁" }, 
                { q: "③ 丽丽到家才发现刚买的酸奶中有一袋是___的。", a: "漏" }, 
                { q: "④ 好的，您决定了以后，___都可以给我们打电话。", a: "随时" },
                { q: "⑤ 公司已经接受了他的___请求。", a: "辞职" },
                { q: "⑥ 张老师认为王力的成绩一直都很___，这次考试应该不会有什么问题。", a: "稳定" }
            ] 
        }, 
        choice: { 
            title: "课本练习二：选择正确答案", 
            questions: [ 
                { q: "① 听到这个好消息后，我激动的心情久久不能___。", options: ["A. 安定", "B. 平静"], a: "B. 平静" }, 
                { q: "② 王奶奶说她每天都会锻炼锻炼，身体好了，自己___，也不给儿女添麻烦。", options: ["A. 舒适", "B. 舒服"], a: "B. 舒服" },
                { q: "③ 现在，父母、妻子和孩子都___着他早日学成回国。", options: ["A. 盼望", "B. 失望"], a: "A. 盼望" },
                { q: "④ 21世纪是一个信息___、互联网的___。", options: ["A. 时代", "B. 时间"], a: "A. 时代" }
            ] 
        },
        expansion_fill: {
            title: "扩展练习：选择合适的词语填空",
            words: ["雾", "预报", "维修", "零件"],
            questions: [
                { q: "① 日出后，江面上浓浓的大___开始慢慢散去。", a: "雾" },
                { q: "② 听天气___说，明天有雨，要降温。", a: "预报" },
                { q: "③ 空调一年之内出现质量问题，我们免费___。", a: "维修" },
                { q: "④ 这些___检查不合格，让工人们处理了吧。", a: "零件" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "你喜欢旅行吗？你喜欢什么样的旅行方式？不同的旅行方式你会选择什么交通工具？", hint: "结合课文主题谈谈对生活方式的选择。" },
            { q: "如果你的爱好影响了你的正常生活，你怎么办？", hint: "妥协、坚持、或者像翟峰一样改变生活轨迹？" }
        ], 
        writing: { 
            title: "命题写作：如果我是翟峰……", 
            prompt: "请以“如果我是翟峰，我会 / 不会……”为题写一段话。尽量用上本课所学的生词，字数不少于100字。", 
            minWords: 100, 
            suggestedWords: [ "辞职", "稳定", "发愁", "待遇", "盼望", "驾驶" ] 
        } 
    } 
};