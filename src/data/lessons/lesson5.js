/**
 * HSK 标准教程 5（上）· 第五课
 * 济南的泉水
 *
 * 数据结构说明：
 * - text[].html：课文段落，<strong> 标签标注本课生词
 * - vocabulary[]：生词卡数据
 * - grammar[]：语法点，color 字段控制主题色
 * - exercises.fill / exercises.choice：两组练习题
 * - topics.questions：话题讨论题
 * - topics.writing：命题写作
 */
export default {
  // ─── 基本信息 ──────────────────────────────────────────────────
  id: "lesson5",
  lessonNumber: 5,
  title: "济南的泉水",
  titleEn: "Spring Water in Ji'nan",
  book: "HSK 标准教程 5（上）",

  // ─── 课文 ──────────────────────────────────────────────────────
  // 每个对象代表一个自然段，html 字段使用 <strong> 包裹本课生词
  text: [
    {
      id: 1,
      html: "济南的泉水，历史<strong>悠久</strong>，最早的<strong>文字</strong><strong>记载</strong>可以推到3000多年前。许多文人都对它的声音、颜色、<strong>形状</strong>、味道进行过<strong>描写</strong>，留下了许多<strong>赞美</strong>泉水的诗文。而济南的<strong>老百姓</strong>住在泉边，喝着这甜美的泉水，自然对它<strong>充满感激</strong>之情，<strong>从而</strong>也<strong>产生</strong>了许多关于泉水的美丽<strong>传说</strong>。",
    },
    {
      id: 2,
      html: "相传很久以前，济南城里有个<strong>善良</strong>的青年，名叫鲍全，他学习医术，救了很多人。一次，他在路边救了一位<strong>晕</strong>倒的老人，并把老人接回家照顾。这老人其实是东海龙王的哥哥。通过老人的介绍，鲍全从龙王那儿求到了<strong>治</strong>病救人的白<strong>玉</strong><strong>壶</strong>。为了不被坏人<strong>抢</strong>走，他把壶<strong>埋</strong>入地下藏了起来，于是就变成了今天有\"天下第一泉\"美名的趵突泉。",
    },
    {
      id: 3,
      html: "<strong>如今</strong>的济南市区内，<strong>分布</strong>着大大小小七百多个<strong>天然</strong>泉，这在国内外城市中是极为少有的。有如此之多的泉，名字当然也少不了。济南泉水的<strong>优美</strong>，还可从那<strong>独特</strong>的名字上<strong>反映</strong>出来，如：以人名命名的舜泉，以动物命名的黑虎泉，以<strong>形状</strong>命名的<strong>珍珠</strong>泉，等等。",
    },
    {
      id: 4,
      html: "说到这里，您也许要问，这么多、这么好的泉水是如何<strong>形成</strong>的呢？济南的泉水，来自<strong>于</strong>济南市以南的<strong>广大</strong>山区，这些山区的<strong>岩石</strong>是大约四亿年前形成的一层厚厚的<strong>石灰岩</strong>。在这种石灰岩地区，陆地表面的水很容易进入地下。山区的石灰岩层，以大约三十度的<strong>角度</strong>，由南向北斜，因此大量的地下水向济南运动。而济南市区的地下岩石变<strong>为</strong>了<strong>火成岩</strong>，地下水流到这里，碰到火成岩挡住了路，就积蓄起来，无处可流，就得另找出路。济南旧城一带，<strong>地势</strong>低，有的地方甚至低过了地下水的水面，地下水就冲出地表，形成了众多的泉水。这就是济南\"泉城\"美名得来的原因。",
    },
  ],

  // ─── 生词 ──────────────────────────────────────────────────────
  vocabulary: [
    { id: 1,  word: "悠久",   pinyin: "yōujiǔ",     pos: "adj.", meaning: "long-standing, age-old",            example: "济南的泉水历史悠久。" },
    { id: 2,  word: "文字",   pinyin: "wénzì",       pos: "n.",   meaning: "written language, characters",      example: "最早的文字记载可以推到3000多年前。" },
    { id: 3,  word: "记载",   pinyin: "jìzǎi",       pos: "v.",   meaning: "to record, to put down in writing", example: "许多文人对泉水进行过描写，留下了记载。" },
    { id: 4,  word: "形状",   pinyin: "xíngzhuàng",  pos: "n.",   meaning: "shape, form",                       example: "珍珠泉以形状命名。" },
    { id: 5,  word: "描写",   pinyin: "miáoxiě",     pos: "v.",   meaning: "to describe, to depict",            example: "文人们对泉水的声音、颜色进行过描写。" },
    { id: 6,  word: "赞美",   pinyin: "zànměi",      pos: "v.",   meaning: "to praise, to extol",               example: "他们留下了许多赞美泉水的诗文。" },
    { id: 7,  word: "老百姓", pinyin: "lǎobǎixìng",  pos: "n.",   meaning: "ordinary people, civilians",        example: "老百姓住在泉边，喝着这甜美的泉水。" },
    { id: 8,  word: "充满",   pinyin: "chōngmǎn",    pos: "v.",   meaning: "to be full of",                     example: "他们对泉水充满感激之情。" },
    { id: 9,  word: "感激",   pinyin: "gǎnjī",       pos: "v.",   meaning: "to feel grateful",                  example: "老百姓对泉水充满感激。" },
    { id: 10, word: "从而",   pinyin: "cóng'ér",     pos: "conj.", meaning: "thus, consequently",               example: "人们喜爱泉水，从而产生了许多传说。" },
    { id: 11, word: "产生",   pinyin: "chǎnshēng",   pos: "v.",   meaning: "to emerge, to arise",               example: "济南产生了许多关于泉水的美丽传说。" },
    { id: 12, word: "传说",   pinyin: "chuánshuō",   pos: "n.",   meaning: "legend, folk tale",                 example: "这是一个关于白玉壶的传说。" },
    { id: 13, word: "善良",   pinyin: "shànliáng",   pos: "adj.", meaning: "kind-hearted",                      example: "鲍全是一个善良的青年。" },
    { id: 14, word: "晕",     pinyin: "yūn",         pos: "v.",   meaning: "to faint, to pass out",             example: "他在路边救了一位晕倒的老人。" },
    { id: 15, word: "治（疗）", pinyin: "zhì (liáo)", pos: "v.",  meaning: "to treat, to cure",                 example: "他得到了治病救人的白玉壶。" },
    { id: 16, word: "玉",     pinyin: "yù",          pos: "n.",   meaning: "jade",                              example: "他把白玉壶埋入了地下。" },
    { id: 17, word: "壶",     pinyin: "hú",          pos: "n.",   meaning: "pot, kettle",                       example: "白玉壶变成了今天的趵突泉。" },
    { id: 18, word: "抢",     pinyin: "qiǎng",       pos: "v.",   meaning: "to rob, to snatch",                 example: "为了不被坏人抢走，他把壶埋了起来。" },
    { id: 19, word: "埋",     pinyin: "mái",         pos: "v.",   meaning: "to bury",                           example: "他把壶埋入地下藏了起来。" },
    { id: 20, word: "如今",   pinyin: "rújīn",       pos: "n.",   meaning: "nowadays, at present",              example: "如今的济南市区内分布着七百多个天然泉。" },
    { id: 21, word: "分布",   pinyin: "fēnbù",       pos: "v.",   meaning: "to be distributed over an area",   example: "泉水分布在济南市区各处。" },
    { id: 22, word: "天然",   pinyin: "tiānrán",     pos: "adj.", meaning: "natural",                           example: "济南有七百多个天然泉。" },
    { id: 23, word: "优美",   pinyin: "yōuměi",      pos: "adj.", meaning: "graceful, beautiful",               example: "济南泉水的优美还可从名字上反映出来。" },
    { id: 24, word: "独特",   pinyin: "dútè",        pos: "adj.", meaning: "unique, distinctive",               example: "泉水有独特的名字。" },
    { id: 25, word: "反映",   pinyin: "fǎnyìng",     pos: "v.",   meaning: "to reflect, to mirror",             example: "名字反映了泉水的优美。" },
    { id: 26, word: "珍珠",   pinyin: "zhēnzhū",     pos: "n.",   meaning: "pearl",                             example: "珍珠泉以形状命名。" },
    { id: 27, word: "形成",   pinyin: "xíngchéng",   pos: "v.",   meaning: "to form, to take shape",            example: "泉水是如何形成的？" },
    { id: 28, word: "广大",   pinyin: "guǎngdà",     pos: "adj.", meaning: "vast, extensive",                   example: "泉水来自广大山区。" },
    { id: 29, word: "岩石",   pinyin: "yánshí",      pos: "n.",   meaning: "rock",                              example: "山区的岩石是石灰岩。" },
    { id: 30, word: "石灰岩", pinyin: "shíhuīyán",   pos: "n.",   meaning: "limestone",                         example: "石灰岩地区的水很容易进入地下。" },
    { id: 31, word: "角度",   pinyin: "jiǎodù",      pos: "n.",   meaning: "angle, degree of angle",            example: "岩层以大约三十度的角度倾斜。" },
    { id: 32, word: "火成岩", pinyin: "huǒchéngyán", pos: "n.",   meaning: "igneous rock",                      example: "济南市区的地下岩石变为了火成岩。" },
    { id: 33, word: "地势",   pinyin: "dìshì",       pos: "n.",   meaning: "terrain, topography",               example: "济南旧城一带地势低。" },
  ],

  // ─── 语法 ──────────────────────────────────────────────────────
  grammar: [
    {
      id: 1,
      title: "起来",
      subtitle: "动词 + 起来",
      color: "#2563eb",
      meanings: [
        {
          label: "由分散到集中",
          desc: "From scattered to concentrated",
          examples: [
            "地下水流到这里，碰到火成岩挡住了路，就积蓄起来，越积越多。",
            "渔夫想，这网上收起来，鱼一定可以装满整条船。",
          ],
        },
        {
          label: "由显露到隐蔽",
          desc: "From visible to hidden",
          examples: [
            "刘丽知道自己做得不好，躲起来不敢见我。",
            "为了不被坏人抢走，他把壶埋入地下藏了起来。",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "于",
      subtitle: "介词 — 相当于 在、从、对、向、比",
      color: "#7c3aed",
      meanings: [
        {
          label: "时间 (time)",
          examples: ["这家公司成立于1997年。"],
        },
        {
          label: "范围 (scope)",
          examples: ["这种药主要用于感冒的治疗。"],
        },
        {
          label: "处所 (place)",
          examples: ["济南的泉水，来自于济南市以南的广大山区。"],
        },
        {
          label: "对象 (object)",
          examples: [
            "运动有助于健康。",
            "李明只好求助于当经理的老同学王峰。",
          ],
        },
        {
          label: "比较 (comparison)",
          examples: ["队员们都认为对方的水平远远高于自己。"],
        },
      ],
    },
    {
      id: 3,
      title: "从而",
      subtitle: "连词 — 前因后果/目的",
      color: "#059669",
      meanings: [
        {
          label: "用法",
          desc: "用于两个分句之间：前句说明原因/方法，后句说明结果/目的。",
          examples: [
            "比赛前做好思想准备可以减少运动员的压力，从而取得比赛的成功。",
            "在学习过程中及时复习，可以加深理解，从而取得更好的成绩。",
            "老百姓充满感激之情，从而也产生了许多关于泉水的美丽传说。",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "为（wéi）",
      subtitle: "动词 — 成/成为 或 作为/算作",
      color: "#dc2626",
      meanings: [
        {
          label: "成、成为 (to become)",
          examples: [
            "而济南市区的地下岩石变为了火成岩……",
            "每个人都会遇到各种压力，可是，压力也可以变为动力。",
          ],
        },
        {
          label: "作为、算作 (to count as / regard as)",
          examples: [
            "找工作时，很多人会以收入多少为第一标准。",
            "在他看来，没有工作的生活就不能称其为生活。",
          ],
        },
      ],
    },
  ],

  // ─── 练习 ──────────────────────────────────────────────────────
  exercises: {
    fill: {
      title: "练习一：选择合适的词语填空",
      words: ["于", "为", "充满", "从而", "产生", "描写"],
      questions: [
        { q: "① 这首诗主要___了一对年轻人的恋爱经历。",         a: "描写" },
        { q: "② 新产品深受顾客欢迎，使我对公司的未来___信心。", a: "充满" },
        { q: "③ 我担心长期吃这种药会___对身体不好的影响。",      a: "产生" },
        { q: "④ 办公室让我通知你明天下午的活动改___下周一了。",  a: "为"   },
        { q: "⑤ 刘经理毕业___北京大学经济学院。",               a: "于"   },
        { q: "⑥ 换一个角度考虑，也许正好就能发现问题的关键，___找到解决问题的答案。", a: "从而" },
      ],
    },
    choice: {
      title: "练习二：选择正确答案",
      questions: [
        {
          q: "① ___是两点，再过一刻钟小明就放学了。",
          options: ["A. 如今", "B. 现在"],
          a: "B. 现在",
        },
        {
          q: "② 严芳长得不是___漂亮，但仔细看却很有味道。",
          options: ["A. 特别", "B. 独特"],
          a: "A. 特别",
        },
        {
          q: "③ 我这次来是想当面向你表示___的。",
          options: ["A. 感谢", "B. 感激"],
          a: "A. 感谢",
        },
        {
          q: "④ 护士小姐___孩子很勇敢，本来很怕打针的她这次竟然没哭。",
          options: ["A. 赞美", "B. 表扬"],
          a: "B. 表扬",
        },
      ],
    },
  },

  // ─── 话题延展 ──────────────────────────────────────────────────
  topics: {
    questions: [
      {
        q: "在我们的生活中，哪些事是离不开水的？",
        hint: "饮水、烹饪、农业、工业、清洁……",
      },
      {
        q: "地球上有些地方遇到了严重缺水的问题，你了解这方面的情况吗？",
        hint: "非洲、中东、中国西北……",
      },
      {
        q: "你觉得哪些做法是对水的浪费？怎样可以减少这种浪费？",
        hint: "节约用水的具体措施",
      },
    ],
    writing: {
      title: "命题写作：节约每一滴水",
      prompt: "请写一段话（不少于100字），尽量用上本课所学的词语。",
      minWords: 100,
      suggestedWords: [
        "悠久", "天然", "充满", "从而", "产生", "优美",
        "独特", "如今", "分布", "形成", "广大", "感激",
        "赞美", "描写",
      ],
    },
  },
};
