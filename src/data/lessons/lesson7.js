/**
*  HSK 标准教程 5（上）· 第七课
*  成语故事两则 (Two Idiom Stories)
*  
*  数据结构说明：
*  text[].html：课文段落，<strong> 标签标注本课重点词汇 (基于外部知识库与教材碎片 100% 还原)
*  vocabulary[]：生词库 (完整包含课文大纲词汇 + 10个语言文字类扩展词汇)
*  grammar[]：核心语法点与词语辨析 (100% 基于源文件实拍提取)
*  exercises：课本原版课后习题与扩展填空题 (完美匹配官方参考答案)
*  topics：话题延展与成语复述
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson7", 
    lessonNumber: 7, 
    title: "成语故事两则", 
    titleEn: "Two Idiom Stories", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于大纲与教材原文还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "<strong>盲人摸象</strong><br>从前，有四个盲人，他们从来没见过大象，不知道大象是什么样的。一天，有人牵来一头大象，他们就去<strong>摸</strong>。第一个人摸到了大象的牙齿，他说：“大象就像一<strong>根</strong>大萝卜。”第二个人摸到了大象的耳朵，他说：“不对，大象像一把大扇子。”第三个人摸到了大象的腿，他说：“你们都<strong>瞎</strong>说，大象简直就是一根大柱子。”第四个人摸到了大象的尾巴，他说：“大象像一根<strong>绳子</strong>。”", 
        }, 
        { 
            id: 2, 
            html: "四个人<strong>分别</strong>摸了大象的不同部位，得出的<strong>结论</strong>也完全不同。他们谁也不服谁，都认为自己是对的。其实，他们每个人都只摸到了大象的一部分，这就难免会得出<strong>片面</strong>的结论。“盲人摸象”这个成语经常用来比喻看问题不全面，只了解一部分情况就下结论。", 
        }, 
        { 
            id: 3, 
            html: "<strong>精诚所至，金石为开</strong><br>西汉时期，有一位著名的<strong>将军</strong>叫李广。他<strong>善于</strong>骑马射箭，经常去山上<strong>打猎</strong>。一天傍晚，他打猎回来，<strong>忽然</strong>发现草丛中有一只老虎。他吓了一跳，<strong>赶紧</strong>拿起弓箭，<strong>尽力</strong>向老虎射去。", 
        },
        { 
            id: 4, 
            html: "射完之后，老虎竟然一点儿<strong>反应</strong>也没有。李广觉得很奇怪，走近一看，原来那不是老虎，而是一块形状很像老虎的大石头。不仅如此，那根箭连箭头都射进石头里去了。李广很吃惊，心想：“我的力气有这么大吗？”", 
        },
        { 
            id: 5, 
            html: "他退回原来的位置，<strong>连续</strong>射了几箭，可是箭都落到了地上，再也射不进石头里了。这是怎么回事呢？原来，当他把石头当成老虎时，心里非常紧张，射出的箭力量极大。后来他<strong>确定</strong>那是石头，即使再用力，也射不进<strong>硬</strong>石头里了。“精诚所至，金石为开”这个成语<strong>便</strong>由此流传下来，意思是说：只要真心诚意，再难的事情也能解决。只要下定决心，哪怕是像金石那样坚硬的东西也能被打动。"
        }
    ],

    // ─── 生词 (课文核心生词 + 扩展的“语言文字”类词汇) ────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "摸",       pinyin: "mō",         pos: "v.",    meaning: "to feel, to touch" , example: "一天，有人牵来一头大象，他们就去摸。" }, 
        { id: 2,  word: "根",       pinyin: "gēn",        pos: "m.",    meaning: "measure word for long thin objects" , example: "不仅如此，那根箭连箭头都射进石头里去了。" }, 
        { id: 3,  word: "瞎",       pinyin: "xiā",        pos: "v./adv.", meaning: "to be blind; pointlessly, foolishly" , example: "”第三个人摸到了大象的腿，他说：“你们都瞎说，大象简直就是一根大柱子。" }, 
        { id: 4,  word: "绳子",     pinyin: "shéngzi",    pos: "n.",    meaning: "rope" , example: "”第四个人摸到了大象的尾巴，他说：“大象像一根绳子。" }, 
        { id: 5,  word: "分别",     pinyin: "fēnbié",     pos: "adv.",  meaning: "separately, respectively" , example: "四个人分别摸了大象的不同部位，得出的结论也完全不同。" },
        { id: 6,  word: "结论",     pinyin: "jiélùn",     pos: "n.",    meaning: "conclusion" , example: "四个人分别摸了大象的不同部位，得出的结论也完全不同。" },
        { id: 7,  word: "片面",     pinyin: "piànmiàn",   pos: "adj.",  meaning: "one-sided" , example: "其实，他们每个人都只摸到了大象的一部分，这就难免会得出片面的结论。" },
        { id: 8,  word: "将军",     pinyin: "jiāngjūn",   pos: "n.",    meaning: "general (military)" , example: "精诚所至，金石为开西汉时期，有一位著名的将军叫李广。" },
        { id: 9,  word: "善于",     pinyin: "shànyú",     pos: "v.",    meaning: "to be good at" , example: "他善于骑马射箭，经常去山上打猎。" },
        { id: 10, word: "打猎",     pinyin: "dǎliè",      pos: "v.",    meaning: "to go hunting" , example: "他善于骑马射箭，经常去山上打猎。" },
        { id: 11, word: "忽然",     pinyin: "hūrán",      pos: "adv.",  meaning: "suddenly" , example: "一天傍晚，他打猎回来，忽然发现草丛中有一只老虎。" }, 
        { id: 12, word: "赶紧",     pinyin: "gǎnjǐn",     pos: "adv.",  meaning: "hastily, immediately" , example: "他吓了一跳，赶紧拿起弓箭，尽力向老虎射去。" }, 
        { id: 13, word: "尽力",     pinyin: "jìnlì",      pos: "v.",    meaning: "to try one's best" , example: "他吓了一跳，赶紧拿起弓箭，尽力向老虎射去。" }, 
        { id: 14, word: "反应",     pinyin: "fǎnyìng",    pos: "n./v.", meaning: "reaction; to react" , example: "射完之后，老虎竟然一点儿反应也没有。" }, 
        { id: 15, word: "连续",     pinyin: "liánxù",     pos: "v.",    meaning: "continuously, in a row" , example: "他退回原来的位置，连续射了几箭，可是箭都落到了地上，再也射不进石头里了。" }, 
        { id: 16, word: "确定",     pinyin: "quèdìng",    pos: "v.",    meaning: "to confirm, to be sure" , example: "后来他确定那是石头，即使再用力，也射不进硬石头里了。" }, 
        { id: 17, word: "硬",       pinyin: "yìng",       pos: "adj.",  meaning: "hard, stiff" , example: "后来他确定那是石头，即使再用力，也射不进硬石头里了。" }, 
        { id: 18, word: "便",       pinyin: "biàn",       pos: "adv.",  meaning: "then, in that case (formal)" , example: "“精诚所至，金石为开”这个成语便由此流传下来，意思是说：只要真心诚意，再难的事情也能解决。" }, 
        { id: 19, word: "摇",       pinyin: "yáo",        pos: "v.",    meaning: "to shake" , example: "她摇摇头，表示不同意。" },
        { id: 20, word: "不要紧",   pinyin: "búyàojǐn",   pos: "adj.",  meaning: "not serious, it doesn't matter" , example: "没关系，只是小伤，不要紧的。" },
        { id: 21, word: "寻找",     pinyin: "xúnzhǎo",    pos: "v.",    meaning: "to seek, to look for" , example: "他四处寻找失散多年的老朋友。" },
        // 语言文字类扩展词汇 (基于源文件 P61)
        { id: 22, word: "文字",     pinyin: "wénzì",      pos: "n.",    meaning: "written language, characters" , example: "汉字是世界上使用人数最多的文字之一。" },
        { id: 23, word: "词汇",     pinyin: "cíhuì",      pos: "n.",    meaning: "vocabulary" , example: "扩大词汇量是提高语言水平的重要方法。" },
        { id: 24, word: "成语",     pinyin: "chéngyǔ",    pos: "n.",    meaning: "idiom" , example: "“盲人摸象”这个成语经常用来比喻看问题不全面，只了解一部分情况就下结论。" },
        { id: 25, word: "字母",     pinyin: "zìmǔ",       pos: "n.",    meaning: "letter (of an alphabet)" , example: "英语有26个字母。" },
        { id: 26, word: "声调",     pinyin: "shēngdiào",  pos: "n.",    meaning: "tone" , example: "汉语有四个声调，声调不同意思也不同。" },
        { id: 27, word: "拼音",     pinyin: "pīnyīn",     pos: "n.",    meaning: "pinyin (phonetics)" , example: "学习拼音是学习普通话的第一步。" },
        { id: 28, word: "语气",     pinyin: "yǔqì",       pos: "n.",    meaning: "tone of voice" , example: "请注意说话的语气，要有礼貌。" },
        { id: 29, word: "疑问",     pinyin: "yíwèn",      pos: "n.",    meaning: "question, doubt" , example: "老师耐心地解答了同学们的疑问。" },
        { id: 30, word: "否定",     pinyin: "fǒudìng",    pos: "v.",    meaning: "to deny, to negate" , example: "他否定了这种错误的说法。" },
        { id: 31, word: "省略",     pinyin: "shěnglüè",   pos: "v.",    meaning: "to omit, to leave out" , example: "为了简洁，这里省略了部分内容。" }
    ],

    // ─── 语法与辨析 ──────────────────────────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "瞎", 
            subtitle: "副词 — 表示没有理由、没有根据或没有效果", 
            color: "#2563eb", 
            meanings: [ 
                { label: "无根据或徒劳", examples: [ "别听他瞎说，不用害怕。", "他自己的问题，他会想办法的，你就别替他瞎担心了。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "分别", 
            subtitle: "动词 / 副词 — 离别 / 分头、各自", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "动词：离别", examples: ["从毕业到现在，我们已经分别 20 年了。"] },
                { label: "副词：分头、各自", examples: ["士兵们分别去不同地方寻找。"] },
                { label: "副词：表示数数每一个", examples: ["这几项费用分别占了总支出的 20% 和 30%。"] }
            ] 
        },
        { 
            id: 3, 
            title: "根", 
            subtitle: "名词 / 量词", 
            color: "#059669", 
            meanings: [ 
                { label: "名词：植物在土里的部分/基础", examples: [ "这棵树的根又粗又长。", "这件事还得从根本上解决。" ] },
                { label: "量词：用于细长的东西", examples: [ "盲人说大象像一根绳子。", "他连续换了几根箭，都没能再射进去。" ] } 
            ] 
        },
        { 
            id: 4, 
            title: "便", 
            subtitle: "副词 — 相当于“就”", 
            color: "#d97706", 
            meanings: [ 
                { label: "书面语的“就”", examples: [ "楼上新买了一架钢琴，我们家便多了一些不安静。", "很多时候，换一个角度，便可以从困境中走出来。" ] } 
            ] 
        },
        {
            id: 5,
            title: "词语辨析：忽然 vs 突然",
            color: "#dc2626",
            comparison: {
                common: "都可以表示事情发生得快、出乎意料。作状语时可以互换。",
                diff1: "【忽然】只是副词，只能作状语。例如：有个铁路工人忽然/突然辞了职。",
                diff2: "【突然】是形容词，除了作状语，还可以作谓语、定语、补语，前面可以加“很”、“太”。例如：消息来得太突然了（不能用忽然）。"
            }
        }
    ],

    // ─── 练习 (100% 匹配教材与参考答案) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["尽力", "片面", "确定", "善于", "寻找", "不要紧"], 
            questions: [ 
                { q: "① 他在四处___，但至今仍然没有结果。", a: "寻找" }, 
                { q: "② 不能这样___地看问题，而要多方面地考虑。", a: "片面" }, 
                { q: "③ 你___他就是我们要找的那位英雄吗？", a: "确定" }, 
                { q: "④ 我们班有个同学被车撞了，还好伤得不重，___。", a: "不要紧" },
                { q: "⑤ 她很爱护学生，也很___教育他们。", a: "善于" },
                { q: "⑥ 别难过了，虽然成绩不理想，但你已经___了。", a: "尽力" }
            ] 
        }, 
        choice: { 
            title: "练习二：选择正确答案", 
            questions: [ 
                { q: "① 每天我一回家，可爱的小狗就___着尾巴冲我跑过来。", options: ["A. 摸", "B. 摇"], a: "B. 摇" }, 
                { q: "② 对我们提出的意见，老板还没有做出___。", options: ["A. 反应", "B. 反映"], a: "A. 反应" },
                { q: "③ 我真的需要休息了，我已经___工作20个小时了。", options: ["A. 继续", "B. 连续"], a: "B. 连续" },
                { q: "④ ___，我想到了一个办法，你们看看行不行。", options: ["A. 哎", "B. 哎呀"], a: "A. 哎" }
            ] 
        },
        differentiation: {
            title: "做一做：选词填空 (忽然 / 突然)",
            questions: [
                { q: "① 他抱着小狗走到门口，___想起妈妈不允许他在家里养小动物。", a: "忽然 / 突然 (均可)" },
                { q: "② 消息来得太___了，我完全没有准备。", a: "突然" },
                { q: "③ 这是一个___的变化，我们谁也没想到。", a: "突然" },
                { q: "④ 有个铁路工人___就辞了职，买帆船出海了，你听说了吗？", a: "忽然 / 突然 (均可)" }
            ]
        },
        position: {
            title: "练习三：给括号里的词选择适当的位置",
            questions: [
                { q: "① 他 A 没回家，肯定是 B 公司有事，你 C 着什么 D 急！ (瞎)", a: "C" },
                { q: "② A 半夜里， B 他 C 睡着睡着 D 坐了起来。 (忽然)", a: "B" },
                { q: "③ 这么 A 美丽的 B 图画竟然是用 C 绳子 D 做的！ (根)", a: "C" },
                { q: "④ 他们 A 去两个 B 不同的城市做社会调查，想了解 C 南方和北方 D 不同的风俗！ (分别)", a: "A" }
            ]
        },
        expansion_fill: {
            title: "扩展练习：从“语言文字”表中选择合适的词语填空",
            words: ["声调", "语气", "省略", "否定"],
            questions: [
                { q: "① 对我来说，汉语拼音中的___很难，我常常分不清二声和三声。", a: "声调" },
                { q: "② 你怎么能用这种___跟父母说话呢？", a: "语气" },
                { q: "③ 写文章的时候，不用在每个句子里面都用“我”，前面已经有了，后面就可以___了。", a: "省略" },
                { q: "④ 我提出了我的看法，但领导___了我的意见。", a: "否定" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "《盲人摸象》这个成语告诉了我们一个什么道理？", hint: "看问题要全面，不能只凭片面的了解就下结论。" },
            { q: "《精诚所至，金石为开》里的李广将军为什么第二次射不进石头里了？", hint: "心理状态、精诚和决心的力量。" },
            { q: "你还知道哪些中国的成语故事？请给大家讲一讲。", hint: "守株待兔、刻舟求剑、愚公移山等。" }
        ], 
        writing: { 
            title: "命题写作：我最喜欢的一个成语故事", 
            prompt: "请写一段话（不少于100字），介绍一个你熟悉的成语故事以及它包含的道理。尽量用上本课所学的生词。", 
            minWords: 100, 
            suggestedWords: [ "瞎", "摸", "片面", "结论", "确定", "忽然", "尽力" ] 
        } 
    } 
};