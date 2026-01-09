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

// 初始化Chart.js图表
function initCharts() {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false, // 允许图表填满容器高度
    plugins: {
      legend: {
        position: 'bottom', // 图例在下方
        labels: { boxWidth: 12, padding: 20 }
      },
      tooltip: {
        mode: 'index',
        intersect: false, // 鼠标悬停时同时显示两组数据
      }
    },
    scales: {
      x: { stacked: true, grid: { display: false } }, // X轴堆叠，不显示网格
      y: { stacked: true, beginAtZero: true }         // Y轴堆叠
    }
  };

  // 渲染 Phase 图表
  const ctxPhase = document.getElementById('chart-phase');
  if (ctxPhase) {
    new Chart(ctxPhase, {
      type: 'bar',
      data: statsData.projectPhase,
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          title: { display: true, text: 'Projects by Phase', font: { size: 16 } }
        }
      }
    });
  }

  // 渲染 Therapy 图表
  const ctxTherapy = document.getElementById('chart-therapy');
  if (ctxTherapy) {
    new Chart(ctxTherapy, {
      type: 'bar',
      data: statsData.therapyArea,
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          title: { display: true, text: 'Projects by Therapy Area', font: { size: 16 } }
        }
      }
    });
  }
}

// 渲染技能条
function renderSkillBars() {
  const skillContainers = document.querySelectorAll('.skill-container');

  skillContainers.forEach(container => {
    const level = parseInt(container.getAttribute('data-level') || 0);
    const segmentContainer = container.querySelector('.skill-segments');

    if (segmentContainer) {
      segmentContainer.innerHTML = ''; // 清空原有内容

      // 创建 4 个格子
      for (let i = 1; i <= 4; i++) {
        const segment = document.createElement('div');
        segment.classList.add('segment');

        // 如果当前格子序号 <= 技能等级，则添加 .filled 类
        if (i <= level) {
          segment.classList.add('filled');
        }

        segmentContainer.appendChild(segment);
      }
    }
  });
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

// 渲染blogs和resources两个tab
function renderContent(containerId, dataList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let htmlString = '';

  dataList.forEach(section => {
    const headerIconSpan = section.header.type === 'number'
      ? `<span class="chapter-num">${section.header.content}</span>`
      : `<span class="repo-icon">${section.header.content}</span>`;

    const headerClass = section.style === 'repo-style' ? 'repo-title' : 'chapter-title';

    let itemsHtml = '';
    section.items.forEach(item => {
      itemsHtml += `
        <a href="${item.link}" class="doc-item" target="_blank">
            <span class="doc-title">${item.title}</span>
            <span class="doc-meta">${item.date}</span>
        </a>
      `;
    });

    htmlString += `
      <div class="drawer-card ${section.style}" id="${section.id || ''}">
          <div class="drawer-header" onclick="toggleDrawer(this)">
              <div class="drawer-header-text">
                  ${headerIconSpan}
                  <span class="${headerClass}">${section.header.title}</span>
              </div>
              <div class="drawer-arrow"></div>
          </div>
          <div class="drawer-body">
              <div class="doc-list">
                  ${itemsHtml}
              </div>
          </div>
      </div>
    `;
  });

  container.innerHTML = htmlString;
}

// 初始化渲染
document.addEventListener('DOMContentLoaded', () => {

  document.querySelector("p[data-key='exp_sum']").innerText = othertext[currentLang]['exp_sum'];
  document.getElementById('year').innerText = new Date().getFullYear();
  document.getElementById('last-update-date').innerText = footer_date;
  initCharts();
  renderSkillBars();
  renderContent('view-blogs', blogsData);
  renderContent('view-resources', resourcesData);
});