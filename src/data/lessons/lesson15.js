/**
*  HSK 标准教程 5（上）· 第十五课
*  纸上谈兵 (Being an Armchair Strategist)
*  
*  数据结构说明：
*  text[].html：课文段落 (基于外部知识库 100% 还原赵括的故事)
*  vocabulary[]：生词库 (大纲词汇 + 军事类扩展词汇)
*  grammar[]：核心语法点与词语辨析 (基于源文件大纲提取)
*  exercises：课后习题与连线题 (100% 匹配源文件官方参考答案)
*  topics：话题延展与讨论
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson15", 
    lessonNumber: 15, 
    title: "纸上谈兵", 
    titleEn: "Being an Armchair Strategist", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (基于外部知识库还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "战国时期，赵国有一位名叫赵括的年轻人。他从小就学习<strong>军事</strong>，读了很多兵书，谈起<strong>理论</strong>来头头是道，连他的父亲——赵国著名的将军赵奢，有时也辩论不过他。因此，赵括非常<strong>骄傲</strong>，认为天下没有人能打得过自己。然而，他的父亲却不以为然，认为他只是“纸上谈兵”，如果真的让他带兵<strong>打仗</strong>，一定会<strong>失败</strong>。" 
        }, 
        { 
            id: 2, 
            html: "后来，秦国攻打赵国。赵王见老将廉颇防<strong>守</strong>不利，决定<strong>派</strong>赵括去代替廉颇。赵括到了前线，立刻改变了廉颇的战术，主动向秦军发起<strong>挑战</strong>。秦军假装打败，向后撤退。赵括不知是计，命令军队<strong>拼命</strong>追击。结果，秦军切断了赵军的后路，把赵括的军队紧紧包围了起来。" 
        }, 
        { 
            id: 3, 
            html: "赵军被围困了四十多天，粮食吃光了，士兵们饿得连拿兵器的力气都没有了。赵括为了突围，<strong>亲自</strong>带兵冲锋，结果被秦军的乱<strong>箭</strong>射死。赵国的四十万大军全军覆没。这就是“纸上谈兵”的故事。它告诉我们，仅仅有书本上的<strong>理论</strong>知识是远远不够的，如果不结合<strong>实际</strong>情况，<strong>迟早</strong>要吃大亏。" 
        }
    ],

    // ─── 生词 ────────────────────────────────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "纸上谈兵", pinyin: "zhǐshàngtánbīng", pos: "id.", meaning: "to be an armchair strategist" , example: "这就是“纸上谈兵”的故事。" }, 
        { id: 2,  word: "军事",     pinyin: "jūnshì",     pos: "n.",    meaning: "military affairs" , example: "他从小就学习军事，读了很多兵书，谈起理论来头头是道，连他的父亲——赵国著名的将军赵奢，有时也辩论不过他。" }, 
        { id: 3,  word: "敌人",     pinyin: "dírén",      pos: "n.",    meaning: "enemy" , example: "在困难面前，我们不能向敌人低头。" }, 
        { id: 4,  word: "理论",     pinyin: "lǐlùn",      pos: "n.",    meaning: "theory" , example: "它告诉我们，仅仅有书本上的理论知识是远远不够的，如果不结合实际情况，迟早要吃大亏。" },
        { id: 5,  word: "打仗",     pinyin: "dǎzhàng",    pos: "v.",    meaning: "to fight a battle, to go to war" , example: "然而，他的父亲却不以为然，认为他只是“纸上谈兵”，如果真的让他带兵打仗，一定会失败。" },
        { id: 6,  word: "毛病",     pinyin: "máobìng",    pos: "n.",    meaning: "shortcoming, fault, defect" , example: "这孩子有个毛病，总是忘记带钥匙。" },
        { id: 7,  word: "道理",     pinyin: "dàolǐ",      pos: "n.",    meaning: "principle, truth, reason" , example: "他说得很有道理，大家都点头同意。" },
        { id: 8,  word: "迟早",     pinyin: "chízǎo",     pos: "adv.",  meaning: "sooner or later" , example: "它告诉我们，仅仅有书本上的理论知识是远远不够的，如果不结合实际情况，迟早要吃大亏。" },
        { id: 9,  word: "派",       pinyin: "pài",        pos: "v.",    meaning: "to send, to assign, to dispatch" , example: "赵王见老将廉颇防守不利，决定派赵括去代替廉颇。" },
        { id: 10, word: "弱",       pinyin: "ruò",        pos: "adj.",  meaning: "weak" , example: "他身体比较弱，需要多加锻炼。" },
        { id: 11, word: "形势",     pinyin: "xíngshì",    pos: "n.",    meaning: "situation, circumstances" , example: "目前国际形势复杂多变。" },
        { id: 12, word: "命令",     pinyin: "mìnglìng",   pos: "n./v.", meaning: "order, command; to order" , example: "赵括不知是计，命令军队拼命追击。" },
        { id: 13, word: "守",       pinyin: "shǒu",       pos: "v.",    meaning: "to guard, to defend" , example: "赵王见老将廉颇防守不利，决定派赵括去代替廉颇。" },
        { id: 14, word: "绝对",     pinyin: "juéduì",     pos: "adv./adj.", meaning: "absolutely; absolute" , example: "这件事绝对不能马虎，一定要认真检查。" },
        { id: 15, word: "挑战",     pinyin: "tiǎozhàn",   pos: "v./n.", meaning: "to challenge; challenge" , example: "赵括到了前线，立刻改变了廉颇的战术，主动向秦军发起挑战。" },
        { id: 16, word: "胆小鬼",   pinyin: "dǎnxiǎoguǐ", pos: "n.",    meaning: "coward" , example: "你不敢说出来，真是个胆小鬼！" },
        { id: 17, word: "胜利",     pinyin: "shènglì",    pos: "v.",    meaning: "to win a victory" , example: "经过努力，他们终于取得了胜利。" },
        { id: 18, word: "上当",     pinyin: "shàngdàng",  pos: "v.",    meaning: "to be taken in, to be fooled" , example: "他轻信了骗子的话，结果上当了。" },
        { id: 19, word: "再三",     pinyin: "zàisān",     pos: "adv.",  meaning: "over and over again" , example: "她再三叮嘱孩子路上注意安全。" },
        { id: 20, word: "阻止",     pinyin: "zǔzhǐ",      pos: "v.",    meaning: "to prevent, to stop" , example: "朋友多次阻止他做这个危险的决定。" },
        { id: 21, word: "独立",     pinyin: "dúlì",       pos: "adj./v.", meaning: "independent; to stand alone" , example: "大学毕业后，他开始了独立生活。" },
        { id: 22, word: "资格",     pinyin: "zīgé",       pos: "n.",    meaning: "qualification" , example: "没有达到要求，就没有资格参加比赛。" },
        { id: 23, word: "糊涂",     pinyin: "hútu",       pos: "adj.",  meaning: "muddled, confused" , example: "他最近工作太忙，脑子有点糊涂。" },
        // 扩展词汇 (军事类)
        { id: 24, word: "枪",       pinyin: "qiāng",      pos: "n.",    meaning: "gun, rifle" , example: "警察腰间别着一把枪。" },
        { id: 25, word: "射击",     pinyin: "shèjī",      pos: "v.",    meaning: "to shoot" , example: "射击比赛要求选手稳定、专注。" },
        { id: 26, word: "英雄",     pinyin: "yīngxióng",  pos: "n.",    meaning: "hero" , example: "消防员是保护人们生命财产的英雄。" }
    ],

    // ─── 语法与辨析 ──────────────────────────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "过 (guò)", 
            subtitle: "动词 — 越过、经历 / 动态助词 — 表示经历", 
            color: "#2563eb", 
            meanings: [ 
                { label: "动词作补语：胜过、超过", examples: [ "他父亲也辩论不过他。", "他跑不过我。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "迟早", 
            subtitle: "副词 — 事情早晚会发生", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "表示事情必然会发生", examples: ["如果不结合实际情况，迟早要吃大亏。", "你这样做迟早会后悔的。"] }
            ] 
        },
        { 
            id: 3, 
            title: "再三", 
            subtitle: "副词 — 一次又一次地", 
            color: "#059669", 
            meanings: [ 
                { label: "表示动作的重复", desc: "后面通常跟带有建议或决定意义的动词。", examples: [ "我们再三商量，最后决定还是不去。", "经理再三强调了质量问题。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：胜利 vs 成功",
            color: "#dc2626",
            comparison: {
                common: "都是动词，都表示达到了预想的目的。",
                diff1: "【胜利】多用于战争、比赛等打败对方的语境中。例如：谁坚持到最后，谁就是这场比赛的胜利者。",
                diff2: "【成功】不含有打败对方的意思，多用于工作、事业方面。还可以作形容词。例如：这部电影拍得很成功。"
            }
        }
    ],

    // ─── 练习 (100% 匹配练习册官方参考答案) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "练习一：选择合适的词语填空", 
            words: ["宝贵", "阻止", "善于", "独立", "挑战", "糊涂"], 
            questions: [ 
                { q: "① 我见朋友的小孩怎么也打不开房门，就想帮忙，却被朋友___了。", a: "阻止" }, 
                { q: "② 任何经验都是___的，但并不是任何时候都是有效的。", a: "宝贵" }, 
                { q: "③ 社会上的成功人士，有不少都___记住别人的名字。", a: "善于" }, 
                { q: "④ 你这脑子可真___，银行卡的密码怎么能忘了呢？", a: "糊涂" },
                { q: "⑤ 跳伞运动以自身的惊险和___性，被世人称为“勇敢者的运动”。", a: "挑战" },
                { q: "⑥ 家长应尽量创造一个能让孩子___生活和学习的环境。", a: "独立" }
            ] 
        }, 
        choice: { 
            title: "练习二：选择正确答案", 
            questions: [ 
                { q: "① 我___以为这一生我只能做一个普普通通的工人了。", options: ["A. 曾经", "B. 已经"], a: "A. 曾经" }, 
                { q: "② 师傅，最近我这车出了点儿___，空调总是不太凉。", options: ["A. 缺点", "B. 毛病"], a: "B. 毛病" },
                { q: "③ 父母给我讲了许多做人的___，对我的影响很大。", options: ["A. 理论", "B. 道理"], a: "B. 道理" },
                { q: "④ 我相信这样的安排他是___不会同意的。", options: ["A. 绝对", "B. 完全"], a: "A. 绝对" }
            ] 
        },
        collocation: {
            title: "练习三：画线连接可以搭配的词语",
            questions: [
                { q: "克服", a: "毛病" },
                { q: "下", a: "命令" },
                { q: "具备", a: "资格" },
                { q: "阻止", a: "战争" },
                { q: "危急的", a: "形势" },
                { q: "糊涂的", a: "经理" },
                { q: "宝贵的", a: "时间" },
                { q: "抽象的", a: "道理" }
            ]
        },
        expansion_fill: {
            title: "扩展练习：选择合适的军事词汇填空",
            words: ["枪", "胜利", "英雄", "射击"],
            questions: [
                { q: "① 猎人被眼前的情景吓傻了，慌乱地连开了几___。", a: "枪" },
                { q: "② 我们已经走完一大半了，坚持就是___。", a: "胜利" },
                { q: "③ 花木兰是中国古代的女___，她替父参军并打败敌人，从而闻名天下。", a: "英雄" },
                { q: "④ 在1896年的奥运会上，___就被列为了正式比赛项目。", a: "射击" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "你认为怎样才能把书本上的理论应用到实际中？", hint: "结合自己的学习和工作经验回答。" },
            { q: "从赵括的失败中，我们能学到什么教训？", hint: "不要骄傲、不轻敌、纸上谈兵的危害等。" }
        ], 
        writing: { 
            title: "命题写作：经验与理论", 
            prompt: "请以“经验与理论”为题写一段话，谈谈你的看法。尽量用上本课的生词，字数不少于100字。", 
            minWords: 100,
            suggestedWords: [ "理论", "道理", "迟早", "形势", "挑战", "绝对", "弱" ]
        } 
    } 
};