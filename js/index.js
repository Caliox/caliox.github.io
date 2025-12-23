// 语言包配置
const fixedtext = {
  'zh-CN': {
    nav_profile: "我的主页",
    nav_blogs: "文章博客",
    nav_resources: "推荐资源",
    nav_resume: "我的简历",
    info_school: "江西财经大学",
    info_degree: "应用统计硕士",
    info_location: "南京",
    info_follow: "社交主页",
    readme: "关于我",
    rm_Exp: "临床研究项目经验",
    rm_Skill: "技能",
    skill_grd1: "了解",
    skill_grd2: "熟悉",
    skill_grd3: "熟练",
    skill_grd4: "精通",
    pinned: "推荐文档",
    resume_work_header: "工作经历",
    resume_edu_header: "教育背景",
    resume_download: "下载简历 PDF"
  },
  'en': {
    nav_profile: "Profile",
    nav_blogs: "Blogs",
    nav_resources: "Resources",
    nav_resume: "Resume",
    info_school: "Jiangxi University of Finance and Economics",
    info_degree: "Master of Applied Statistics",
    info_location: "Nanjing, China",
    info_follow: "Follow",
    readme: "About Me",
    rm_Exp: "Clinical Trial Project Experience",
    rm_Skill: "My Skills",
    skill_grd1: "Familiar",
    skill_grd2: "Competent",
    skill_grd3: "Proficient",
    skill_grd4: "Expert",
    pinned: "Pinned",
    resume_work_header: "Work Experience",
    resume_edu_header: "Education",
    resume_download: "Download PDF Resume"
  }
};

const othertext = {
  'zh-CN': {
    bio_title: "临床试验生物统计师",
    bio_interest: "研究兴趣：",
    interest1: "生存分析",
    interest2: "基于风险的监查（RBM）",
    greeting: "我是一名专注于临床试验设计与数据分析的统计师，这里展示了我的临床研究项目经验及掌握的技能。",
    exp_sum1: "4年临床试验设计及统计分析经验",
    exp_sum2: "熟悉临床试验过程中统计相关工作，包括试验设计、随机化和编盲、样本量计算、数据审核会、IDMC、统计分析计划和报告等。",
    exp_sum3: "主持或深度参与近30项临床试验的设计和统计分析工作，治疗领域包括肿瘤、神经系统疾病、肾脏病、眼科、血液系统、辅助生殖、传染病（乙肝）等。"
  },
  'en': {
    bio_title: "Clinical Trial Biostatistician",
    bio_interest: "Research Interests:",
    interest1: "Survival Analysis",
    interest2: "Risk-based Monitoring",
    greeting: "Hi, I'm a statistician specializing in clinical trial design and data analysis. Here are my project experiences and skills.",
    exp_sum1: "4 years of experience in clinical trial design and statistical analysis.",
    exp_sum2: "Familiar with statistical tasks throughout the clinical trial process, including trial design, randomization and blinding, sample size calculation, data review meetings, IDMC, statistical analysis plans and reports.",
    exp_sum3: "Led or was deeply involved in the design and statistical analysis of nearly 30 clinical trials across therapeutic areas such as oncology, neurological disorders, renal diseases, ophthalmology, hematology, assisted reproduction, communicable diseasesand (Hepatitis B), and more."
  }
};

let currentLang = 'en';

// 语言切换功能
function toggleLanguage() {
  currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
  const fixeddata = fixedtext[currentLang];
  const otherdata = othertext[currentLang];

  document.querySelector('.lang-switch').innerText = currentLang === 'zh-CN' ? 'English' : '中文';

  document.querySelectorAll('.fixed-text').forEach(el => {
    const key = el.getAttribute('data-key');
    if (fixeddata[key]) {
      el.innerText = fixeddata[key];
    }
  });

  document.querySelectorAll('.other-text').forEach(el => {
    const key = el.getAttribute('data-key');
    if (otherdata[key]) {
      el.innerText = otherdata[key];
    }
  });
}

// Tab 切换功能
function switchTab(tabName, clickedElement) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.classList.remove('active'));

  const targetSection = document.getElementById('view-' + tabName);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  const tabs = document.querySelectorAll('.tab-item');
  tabs.forEach(tab => tab.classList.remove('active'));

  clickedElement.classList.add('active');
}

// 抽屉展开/收起功能
function toggleDrawer(headerElement) {
  const card = headerElement.parentElement; // 找到 .drawer-card
  const body = card.querySelector('.drawer-body');

  card.classList.toggle('active');

  if (card.classList.contains('active')) {
    body.style.maxHeight = body.scrollHeight + "px";
  } else {
    body.style.maxHeight = 0;
  }
}

// 更新Footer年份
document.getElementById('year').innerText = new Date().getFullYear();

// 监听view-profile中的两个pinned box
function navPinned(tabName, tabSeq, pinnedID) {
  const targetTab = document.querySelectorAll('.tab-item')[tabSeq];
  switchTab(tabName, targetTab);

  const targetCard = document.getElementById(pinnedID);
  targetCard.scrollIntoView({ behavior: 'smooth' });

  if (!targetCard.classList.contains('active')) {
    const cardHeader = targetCard.querySelector('.drawer-header');
    toggleDrawer(cardHeader);
  }
}
