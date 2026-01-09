// --- 数据驱动配置 ---

// Footer最近一次更新日期
const footer_date = "Last Update Date: 2026-01-09";

// 博客板块数据
const blogsData = [
  // 生存分析
  {
    id: "blog-1",
    style: "book-style",
    header: {
      type: "number",
      content: "01",
      title: "生存分析"
    },
    items: [
      { title: "1. 生存分析基本概念", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24822665246" },
      { title: "2. Kaplan-Meier 生存曲线及 Log-Rank 检验", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24835115991" },
      { title: "3. Cox比例风险模型及其特征", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24846925550" },
      { title: "4. 评估比例风险假设", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24855862850" },
      { title: "5. 分层Cox模型", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24858563372" },
      { title: "6. 针对时间相关变量的 Cox 比例风险模型扩展", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24864128290" },
      { title: "7. 参数生存模型", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/24867218658" }
    ]
  },
  // 肿瘤临床试验设计
  {
    id: "blog-2",
    style: "book-style",
    header: {
      type: "number",
      content: "02",
      title: "肿瘤临床试验设计"
    },
    items: [
      { title: "Phase I 剂量探索试验简介", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/590885778" },
      { title: "贝叶斯最优区间 (BOIN)设计（一）", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/594996282" },
      { title: "贝叶斯最优区间 (BOIN)设计（二）", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/596011600" },
      { title: "mTPI设计和键盘（Keyboard）设计原理", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/596080629" },
      { title: "Keyboard设计的软件操作演示", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/596617959" },
      { title: "传统3+3设计和i3+3设计", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/635245868" },
      { title: "连续重评估（CRM）设计", date: "2025/12/23", link: "https://zhuanlan.zhihu.com/p/713686749" }
    ]
  }
];

// 资源板块数据
const resourcesData = [
  // 统计软件
  {
    id: "repo-1",
    style: "repo-style",
    header: {
      type: "icon",
      content: "📂 ",
      title: "统计软件"
    },
    items: [
      { title: "SAS 9.4", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1F5sRe8O3NaBkE390Ea2D2Q?pwd=f4dr" },
      { title: "IBM SPSS 26.0", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1QY_6JATI8AFXOI-SmD9SjQ?pwd=iahi" },
      { title: "PASS 15.0", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1nu2DpkVJY5hHnrgXUluQgw?pwd=snjj" },
      { title: "Mplus", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1J6b1Sqam4Qz33370t4pQFg?pwd=sypk" },
      { title: "Stata 17", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1E0nukH-qgjVXVrEHvwDlcw?pwd=gbej" },
      { title: "Lisrel 8.8", date: "Uploaded on 2025/12/23", link: "https://pan.baidu.com/s/1gtqhd_uxfaUDpwRZb7mkeA?pwd=avnr" }
    ]
  },
  // SAS SID文件
  {
    id: "repo-2", // Pinned ID
    style: "repo-style",
    header: {
      type: "icon",
      content: "📂 ",
      title: "SAS SID文件"
    },
    items: [
      { title: "SAS 9.4 SID -- 2026/3/29", date: "Uploaded on 2025/12/23", link: "https://zhuanlan.zhihu.com/p/1944411784183281176" },
      { title: "SAS 9.4 SID -- 2025/9/14", date: "Uploaded on 2025/12/23", link: "https://zhuanlan.zhihu.com/p/25567744090" },
      { title: "SAS 9.4 SID -- 2025/3/4", date: "Uploaded on 2025/12/23", link: "https://zhuanlan.zhihu.com/p/684840320" },
      { title: "SAS 9.4 SID -- 2024/4/30", date: "Uploaded on 2025/12/23", link: "https://zhuanlan.zhihu.com/p/664772984" }
    ]
  },
  // 推荐网站（统计学）
  {
    id: "repo-3",
    style: "repo-style",
    header: {
      type: "icon",
      content: "📂 ",
      title: "推荐网站（统计学）"
    },
    items: [
      { title: "梦特医数通", date: "Uploaded on 2025/12/23", link: "https://mengte.online/" },
      { title: "Statology", date: "Uploaded on 2025/12/23", link: "https://www.statology.org/" },
      { title: "Automate Excel", date: "Uploaded on 2025/12/23", link: "https://www.automateexcel.com/" },
      { title: "Statistics Kindom", date: "Uploaded on 2025/12/23", link: "https://www.statskingdom.com/index.html" },
      { title: "Real Statistics Using Excel", date: "Uploaded on 2025/12/23", link: "https://real-statistics.com/" },
      { title: "Statistical Help", date: "Uploaded on 2025/12/23", link: "https://www.statsdirect.com/help/contents.htm" },
      { title: "Meta Stack Exchange", date: "Uploaded on 2025/12/23", link: "https://meta.stackexchange.com/?newreg=44f8cf6e68f04c7c80a20c1fbd94a270" },
      { title: "Introductory Statistics", date: "Uploaded on 2026/01/04", link: "https://saylordotorg.github.io/text_introductory-statistics/" },
      { title: "JAMA Guide to Statistics and Methods", date: "Uploaded on 2026/01/04", link: "https://jamanetwork.com/collections/44042/jama-guide-to-statistics-and-methods" }
    ]
  }
];

// 主页介绍文本
const othertext = {
  'zh-CN': {
    bio_title: "临床试验生物统计师",
    bio_interest: "研究兴趣：",
    interest1: "生存分析",
    interest2: "基于风险的监查（RBM）",
    greeting: "我是一名专注于临床试验设计与数据分析的统计师，这里展示了我的临床研究项目经验及掌握的技能。",
    exp_sum: "● 4年临床试验设计及统计分析经验。\n● 熟悉临床试验过程中统计相关工作，包括试验设计、随机化和编盲、样本量计算、数据审核会、IDMC、统计分析计划和报告等。\n● 主持或深度参与近30项临床试验的设计和统计分析工作，治疗领域包括肿瘤、神经系统疾病、肾脏病、眼科、血液系统、辅助生殖、传染病（乙肝）等。"
  },
  'en': {
    bio_title: "Clinical Trial Biostatistician",
    bio_interest: "Research Interests:",
    interest1: "Survival Analysis",
    interest2: "Risk-based Monitoring",
    greeting: "Hi, I'm a statistician specializing in clinical trial design and data analysis. Here are my project experiences and skills.",
    exp_sum: "● 4 years of experience in clinical trial design and statistical analysis. \n● Familiar with statistical tasks throughout the clinical trial process, including trial design, randomization and blinding, sample size calculation, data review meetings, IDMC, statistical analysis plans and reports. \n● Led or was deeply involved in the design and statistical analysis of nearly 30 clinical trials across therapeutic areas such as oncology, neurological disorders, renal diseases, ophthalmology, hematology, assisted reproduction, communicable diseasesand (Hepatitis B), and more."
  }
};

// 统计图表数据
const statsData = {
  projectPhase: {
    labels: ['Phase I', 'Phase II', 'Phase III', 'Phase IV', 'IIT & Other'],
    datasets: [
      {
        label: 'IDMC',
        data: [0, 1, 3, 0, 0],
        backgroundColor: '#2da44e',
        stack: 'Stack 0',
      },
      {
        label: 'Whole Study',
        data: [9, 3, 3, 1, 3],
        backgroundColor: '#0969da',
        stack: 'Stack 0',
      }
    ]
  },
  therapyArea: {
    labels: ['Oncology', 'Ophthalmology', 'Neuro Disorders', 'Other'],
    datasets: [
      {
        label: 'IDMC',
        data: [4, 0, 0, 0],
        backgroundColor: '#2da44e',
        stack: 'Stack 0',
      },
      {
        label: 'Whole Study',
        data: [11, 2, 2, 4],
        backgroundColor: '#0969da',
        stack: 'Stack 0',
      }
    ]
  }
};