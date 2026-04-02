/**
*  HSK 标准教程 5（上）· 第四课
*  子路背米 (Zilu Carrying Rice)
*  
*  数据结构说明：
*  text[].html：课文段落，<strong> 标签标注本课重点词汇 (100% 原文还原)
*  vocabulary[]：生词库 (完整包含 40 个大纲词汇 + 10 个称谓扩展词汇)
*  grammar[]：核心语法点与词语辨析
*  exercises：课本原版课后习题与扩展填空题 (完美匹配)
*  topics：话题延展与命题写作
*/ 

export default { 
    // ─── 基本信息 ────────────────────────────────────────────────── 
    id: "lesson4", 
    lessonNumber: 4, 
    title: "子路背米", 
    titleEn: "Zilu Carrying Rice", 
    book: "HSK 标准教程 5（上）",

    // ─── 课文 (100% 依据教材原文还原) ───────────────────────────── 
    text: [ 
        { 
            id: 1, 
            html: "<strong>从前</strong>，大概在距今两千五百多年前的春秋<strong>时期</strong>，有一个人叫子路，他是孔子最年长、最喜欢的学生之一。子路十分<strong>孝敬</strong>老人，有一段“百里<strong>背</strong>米”的故事<strong>流传</strong><strong>至今</strong>。", 
        }, 
        { 
            id: 2, 
            html: "子路的父母都是<strong>农民</strong>。由于连年的<strong>战争</strong>，家里生活非常困难。一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说吃鱼肉，只要能饱饱地吃上一顿米饭，也就<strong>满足</strong>啦！”子路听了，心里觉得十分<strong>惭愧</strong>。他暗下<strong>决心</strong>：“一定要让父母吃上米饭，不能再<strong>委屈</strong>他们了！”", 
        }, 
        { 
            id: 3, 
            html: "子路<strong>打听</strong>到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。那家<strong>主人</strong>见他身体<strong>结实</strong>，就留下了他。子路干起活来十分<strong>勤奋</strong>，主人很喜欢这个小伙子。半年后，当子路要回家时，发现主人给的<strong>银子</strong>比他应该得到的多了许多，子路<strong>老实</strong>地告诉了主人。主人笑着说：“孩子，工钱没算错，你做事勤快，这是我给你加的奖金。”", 
        },
        { 
            id: 4, 
            html: "谢过主人，子路高兴地上路了。路过<strong>镇</strong>上，他买了一袋米、一块肉、两条鱼，背在<strong>后背</strong>上。天气非常寒冷，雪地很<strong>滑</strong>，子路不小心滑了一下，背上的米袋差点儿被<strong>甩</strong>出去。他<strong>顶</strong>着大雪往前走，<strong>扶</strong>着米袋的双手冻得<strong>不行</strong>，就停下来暖暖，再继续赶路。终于到家了，见到父母，子路把给他们买的东西及剩下的工钱都交给了他们。一家人高高兴兴地生火做饭，饱饱地吃了顿<strong>团圆</strong>饭。", 
        },
        { 
            id: 5, 
            html: "后来子路的父母<strong>去世</strong>了，他也南下到了楚国。楚国<strong>国君</strong>觉得他很有<strong>本领</strong>，是个<strong>人才</strong>，就留他做了<strong>官</strong>，并给他很优厚的待遇。但他并没有因为<strong>物质</strong>条件好而感到欢喜，<strong>反而</strong>常常<strong>诚恳</strong>地说：“多么希望父母能和我一起过好日子！我现在有了一点儿<strong>成就</strong>，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。”", 
        },
        { 
            id: 6, 
            html: "中国<strong>古代</strong>有句话叫“百善孝为先”，意思是说，<strong>孝顺</strong>父母是各种<strong>美德</strong>中<strong>占</strong>第一位的。子路为了让父母吃到较好的<strong>食物</strong>，不怕辛苦，这种做法确实值得我们学习。", 
        }
    ],

    // ─── 生词 (40个课文生词 + 10个话题扩展生词) ────────────────────── 
    vocabulary: [ 
        { id: 1,  word: "背",       pinyin: "bèi",        pos: "v.",    meaning: "to carry on the back" , example: "子路十分孝敬老人，有一段“百里背米”的故事流传至今。" }, 
        { id: 2,  word: "从前",     pinyin: "cóngqián",   pos: "n.",    meaning: "before, in the past" , example: "从前，大概在距今两千五百多年前的春秋时期，有一个人叫子路，他是孔子最年长、最喜欢的学生之一。" }, 
        { id: 3,  word: "时期",     pinyin: "shíqī",      pos: "n.",    meaning: "period" , example: "从前，大概在距今两千五百多年前的春秋时期，有一个人叫子路，他是孔子最年长、最喜欢的学生之一。" }, 
        { id: 4,  word: "流传",     pinyin: "liúchuán",   pos: "v.",    meaning: "to spread, to hand down" , example: "子路十分孝敬老人，有一段“百里背米”的故事流传至今。" }, 
        { id: 5,  word: "至今",     pinyin: "zhìjīn",     pos: "adv.",  meaning: "up to now" , example: "子路十分孝敬老人，有一段“百里背米”的故事流传至今。" },
        { id: 6,  word: "孝敬",     pinyin: "xiàojìng",   pos: "v.",    meaning: "to show filial respect for" , example: "子路十分孝敬老人，有一段“百里背米”的故事流传至今。" },
        { id: 7,  word: "农民",     pinyin: "nóngmín",    pos: "n.",    meaning: "farmer, peasant" , example: "子路的父母都是农民。" },
        { id: 8,  word: "战争",     pinyin: "zhànzhēng",  pos: "n.",    meaning: "war" , example: "由于连年的战争，家里生活非常困难。" },
        { id: 9,  word: "满足",     pinyin: "mǎnzú",      pos: "v.",    meaning: "to be satisfied" , example: "一天，子路从外面回来，听到父母在屋里说话：“活了大半辈子了，别说吃鱼肉，只要能饱饱地吃上一顿米饭，也就满足啦！" },
        { id: 10, word: "惭愧",     pinyin: "cánkuì",     pos: "adj.",  meaning: "ashamed" , example: "”子路听了，心里觉得十分惭愧。" },
        { id: 11, word: "决心",     pinyin: "juéxīn",     pos: "v./n.", meaning: "to make up one's mind; determination" , example: "他暗下决心：“一定要让父母吃上米饭，不能再委屈他们了！" }, 
        { id: 12, word: "委屈",     pinyin: "wěiqu",      pos: "v./adj.", meaning: "to do sb. wrong; feeling wronged" , example: "他暗下决心：“一定要让父母吃上米饭，不能再委屈他们了！" }, 
        { id: 13, word: "打听",     pinyin: "dǎting",     pos: "v.",    meaning: "to inquire about" , example: "子路打听到百里之外有个有钱人，家里缺干活儿的人，决定去试一试。" }, 
        { id: 14, word: "主人",     pinyin: "zhǔrén",     pos: "n.",    meaning: "master, owner" , example: "谢过主人，子路高兴地上路了。" }, 
        { id: 15, word: "结实",     pinyin: "jiēshi",     pos: "adj.",  meaning: "strong, sturdy" , example: "那家主人见他身体结实，就留下了他。" }, 
        { id: 16, word: "勤奋",     pinyin: "qínfèn",     pos: "adj.",  meaning: "diligent" , example: "子路干起活来十分勤奋，主人很喜欢这个小伙子。" }, 
        { id: 17, word: "银子",     pinyin: "yínzi",      pos: "n.",    meaning: "silver" , example: "半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老实地告诉了主人。" }, 
        { id: 18, word: "老实",     pinyin: "lǎoshi",     pos: "adj.",  meaning: "honest, frank" , example: "半年后，当子路要回家时，发现主人给的银子比他应该得到的多了许多，子路老实地告诉了主人。" }, 
        { id: 19, word: "镇",       pinyin: "zhèn",       pos: "n.",    meaning: "town" , example: "路过镇上，他买了一袋米、一块肉、两条鱼，背在后背上。" },
        { id: 20, word: "后背",     pinyin: "hòubèi",     pos: "n.",    meaning: "back (of the human body)" , example: "路过镇上，他买了一袋米、一块肉、两条鱼，背在后背上。" },
        { id: 21, word: "滑",       pinyin: "huá",        pos: "adj./v.", meaning: "slippery; to slip, to slide" , example: "天气非常寒冷，雪地很滑，子路不小心滑了一下，背上的米袋差点儿被甩出去。" },
        { id: 22, word: "甩",       pinyin: "shuǎi",      pos: "v.",    meaning: "to throw off, to swing" , example: "天气非常寒冷，雪地很滑，子路不小心滑了一下，背上的米袋差点儿被甩出去。" },
        { id: 23, word: "顶",       pinyin: "dǐng",       pos: "v.",    meaning: "to go against, to move towards" , example: "他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。" },
        { id: 24, word: "扶",       pinyin: "fú",         pos: "v.",    meaning: "to support with one's hand" , example: "他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。" },
        { id: 25, word: "不行",     pinyin: "bùxíng",     pos: "v.",    meaning: "(indicating degree, intensity, etc.) terribly, extremely" , example: "他顶着大雪往前走，扶着米袋的双手冻得不行，就停下来暖暖，再继续赶路。" },
        { id: 26, word: "团圆",     pinyin: "tuányuán",   pos: "v.",    meaning: "to be reunited" , example: "一家人高高兴兴地生火做饭，饱饱地吃了顿团圆饭。" },
        { id: 27, word: "去世",     pinyin: "qùshì",      pos: "v.",    meaning: "to die, to pass away" , example: "后来子路的父母去世了，他也南下到了楚国。" },
        { id: 28, word: "国君",     pinyin: "guójūn",     pos: "n.",    meaning: "king" , example: "楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。" },
        { id: 29, word: "本领",     pinyin: "běnlǐng",    pos: "n.",    meaning: "ability, capability" , example: "楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。" },
        { id: 30, word: "人才",     pinyin: "réncái",     pos: "n.",    meaning: "talented person" , example: "楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。" },
        { id: 31, word: "官",       pinyin: "guān",       pos: "n.",    meaning: "government official" , example: "楚国国君觉得他很有本领，是个人才，就留他做了官，并给他很优厚的待遇。" },
        { id: 32, word: "物质",     pinyin: "wùzhì",      pos: "n.",    meaning: "material" , example: "但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：“多么希望父母能和我一起过好日子！" },
        { id: 33, word: "反而",     pinyin: "fǎn'ér",     pos: "adv.",  meaning: "on the contrary, instead" , example: "但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：“多么希望父母能和我一起过好日子！" },
        { id: 34, word: "诚恳",     pinyin: "chéngkěn",   pos: "adj.",  meaning: "sincere, earnest" , example: "但他并没有因为物质条件好而感到欢喜，反而常常诚恳地说：“多么希望父母能和我一起过好日子！" },
        { id: 35, word: "成就",     pinyin: "chéngjiù",   pos: "n.",    meaning: "achievement, accomplishment" , example: "我现在有了一点儿成就，可他们已经不在了，即使再想背米百里去孝敬双亲，也不可能了。" },
        { id: 36, word: "古代",     pinyin: "gǔdài",      pos: "n.",    meaning: "ancient times" , example: "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。" },
        { id: 37, word: "孝顺",     pinyin: "xiàoshùn",   pos: "v./adj.", meaning: "to show filial piety; obedient and respectful to one's parents" , example: "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。" },
        { id: 38, word: "美德",     pinyin: "měidé",      pos: "n.",    meaning: "virtue, goodness" , example: "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。" },
        { id: 39, word: "占",       pinyin: "zhàn",       pos: "v.",    meaning: "to occupy, to take, to hold" , example: "中国古代有句话叫“百善孝为先”，意思是说，孝顺父母是各种美德中占第一位的。" },
        { id: 40, word: "食物",     pinyin: "shíwù",      pos: "n.",    meaning: "food" , example: "子路为了让父母吃到较好的食物，不怕辛苦，这种做法确实值得我们学习。" },
        // 社交称谓扩展词汇
        { id: 41, word: "国王",     pinyin: "guówáng",    pos: "n.",    meaning: "king" , example: "国王召集大臣们商议国家大事。" },
        { id: 42, word: "王子",     pinyin: "wángzǐ",     pos: "n.",    meaning: "prince" , example: "故事里的王子骑着白马来救公主。" },
        { id: 43, word: "公主",     pinyin: "gōngzhǔ",    pos: "n.",    meaning: "princess" , example: "公主从小就喜欢读书和音乐。" },
        { id: 44, word: "总理",     pinyin: "zǒnglǐ",     pos: "n.",    meaning: "premier, prime minister" , example: "总理主持召开了内阁会议。" },
        { id: 45, word: "总统",     pinyin: "zǒngtǒng",   pos: "n.",    meaning: "president" , example: "两国总统在会议上签署了合作协议。" },
        { id: 46, word: "主席",     pinyin: "zhǔxí",      pos: "n.",    meaning: "chairman" , example: "主席发表了重要讲话。" },
        { id: 47, word: "总裁",     pinyin: "zǒngcái",    pos: "n.",    meaning: "CEO, president of a company" , example: "公司总裁亲自出席了新品发布会。" },
        { id: 48, word: "主任",     pinyin: "zhǔrèn",     pos: "n.",    meaning: "director, head" , example: "主任安排大家明天上午开会。" },
        { id: 49, word: "老板",     pinyin: "lǎobǎn",     pos: "n.",    meaning: "boss" , example: "老板对员工很好，公司气氛轻松。" },
        { id: 50, word: "领导",     pinyin: "lǐngdǎo",    pos: "n./v.", meaning: "leader; to lead" , example: "领导对这次活动给予了充分肯定。" }
    ],

    // ─── 语法与辨析 ──────────────────────────────────────────────── 
    grammar: [ 
        { 
            id: 1, 
            title: "至今", 
            subtitle: "副词 — 直到现在", 
            color: "#2563eb", 
            meanings: [ 
                { label: "时间延续", desc: "常用于小句句首或动词前，也可与一些词语搭配形成固定结构（如“从古至今”）。", examples: [ "流传至今的“百里背米”讲的就是他孝敬父母的故事。", "至今，很多国家并没有规定什么是健康食品。" ] } 
            ] 
        }, 
        { 
            id: 2, 
            title: "顶", 
            subtitle: "动词 — 迎着、抵挡", 
            color: "#7c3aed", 
            meanings: [ 
                { label: "迎着/抵挡", examples: ["天气非常寒冷，子路顶着大雪往前走。"] }
            ] 
        },
        { 
            id: 3, 
            title: "……得+不行", 
            subtitle: "表示程度深（极其/非常）", 
            color: "#059669", 
            meanings: [ 
                { label: "程度补语", examples: [ "他顶着大雪往前走，扶着米袋的双手冻得不行。", "这几天作业太多了，我累得不行。" ] } 
            ] 
        },
        {
            id: 4,
            title: "词语辨析：满足 vs 满意",
            color: "#dc2626",
            comparison: {
                common: "都是动词，都有感到够了、愿望实现的意思。例如：我对现在的生活感到满足/满意。",
                diff1: "【满足】强调没有更多的要求了；可带“需要、要求、条件、愿望”等宾语。例如：父母总是会想办法满足孩子的要求。",
                diff2: "【满意】强调符合自己的心意；可做定语或状语，但不常搭配直接宾语。例如：他找到了一份满意的工作。"
            }
        }
    ],

    // ─── 练习 (100% 匹配教材官方原题还原) ────────────────────────── 
    exercises: { 
        fill: { 
            title: "课本练习一：选择合适的词语填空", 
            words: ["扶", "占", "从前", "本领", "决心", "委屈"], 
            questions: [ 
                { q: "① ___有个人叫乐广，他有个好朋友，一有空儿就到他家来聊天儿。", a: "从前" }, 
                { q: "② 你去教室自习的时候，帮我___个座位，好吗？", a: "占" }, 
                { q: "③ 请您先在这儿___一晚，明天我们就给您换个好的房间。", a: "委屈" }, 
                { q: "④ 邻居家有一条___高强的小狗，能看门，能送报，还能买菜。", a: "本领" },
                { q: "⑤ 他把那位老爷爷___过了马路。", a: "扶" },
                { q: "⑥ 我下___从明天开始早睡早起，每天锻炼身体。", a: "决心" }
            ] 
        }, 
        choice: { 
            title: "课本练习二：选择正确答案", 
            questions: [ 
                { q: "① 昨天打不到车，是他___着我去的医院。", options: ["A. 背", "B. 后背"], a: "A. 背" }, 
                { q: "② 我跟爸爸妈妈说好了，会在10点___回家。", options: ["A. 从前", "B. 以前"], a: "B. 以前" },
                { q: "③ 这是在警察局，你给我___点！别乱动！", options: ["A. 老实", "B. 诚实"], a: "A. 老实" },
                { q: "④ 他没有接受那份优厚的待遇，___辞职了。", options: ["A. 而且", "B. 反而"], a: "B. 反而" }
            ] 
        },
        expansion_fill: {
            title: "扩展练习：从社交称谓表中选择合适的词语填空",
            words: ["总统", "老板", "主任", "总理"],
            questions: [
                { q: "① 美国正在进行四年一次的___大选。", a: "总统" },
                { q: "② 他手里有了一些钱，想自己开公司，自己做___。", a: "老板" },
                { q: "③ 这是我们办公室新来的领导，大家可以叫他王___。", a: "主任" },
                { q: "④ 有些国家既有总统也有___，有些国家只有其中一个。", a: "总理" }
            ]
        }
    },

    // ─── 话题延展与写作 ───────────────────────────────────────── 
    topics: { 
        questions: [ 
            { q: "中国人说的“孝”是什么意思？", hint: "结合中国儒家文化和《论语》中提到的“孝悌”进行讨论。" },
            { q: "你认为应该如何去关爱你的父母？", hint: "平时多陪伴、分担家务、关注他们的健康等。" },
            { q: "如果有一天，你的父母身体不好了，需要有人照顾时，你会怎么做？", hint: "不怕辛苦、尽自己所能去照顾他们。" }
        ], 
        writing: { 
            title: "命题写作：从《子路背米》想到的", 
            prompt: "请以“从《子路背米》想到的”为题，谈一谈你对这个故事和对“孝”的看法。尽量用上本课所学的生词，字数不少于100字。", 
            minWords: 100, 
            suggestedWords: [ "孝顺", "满足", "委屈", "本领", "反而", "物质" ] 
        } 
    } 
};
