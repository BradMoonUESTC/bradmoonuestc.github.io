// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-experience",
          title: "Experience",
          description: "AI security research, smart contract auditing, and on-chain risk control.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research on blockchain security, program analysis, and AI for vulnerability detection.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Open-source tools for smart contract analysis and LLM-assisted security auditing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-paper-static-application-security-testing-sast-tools-for-smart-contracts-how-far-are-we-has-won-the-acm-sigsoft-distinguished-paper-award",
          title: 'Our paper “Static Application Security Testing (SAST) Tools for Smart Contracts: How Far...',
          description: "",
          section: "News",},{id: "news-our-paper-smart-contract-fuzzing-towards-profitable-vulnerabilities-has-just-been-accepted-by-fse-2025",
          title: 'Our paper “Smart Contract Fuzzing Towards Profitable Vulnerabilities” has just been accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-propertygpt-llm-driven-formal-verification-of-smart-contracts-through-retrieval-augmented-property-generation-has-won-the-ndss-2025-distinguished-paper-award",
          title: 'Our paper “PropertyGPT: LLM-driven Formal Verification of Smart Contracts through Retrieval-Augmented Property Generation”...',
          description: "",
          section: "News",},{id: "news-my-essay-ai审计方法论-你需要知道的一切-第一部分-is-available-in-chinese-on-登链社区-with-the-original-post-on-x",
          title: 'My essay AI审计方法论：你需要知道的一切 (第一部分) is available in Chinese on 登链社区, with the original...',
          description: "",
          section: "News",},{id: "news-my-essay-ai安全审计智能体核心方法论-第二部分-is-available-in-chinese-on-登链社区-with-the-original-post-on-x",
          title: 'My essay AI安全审计智能体核心方法论(第二部分) is available in Chinese on 登链社区, with the original post...',
          description: "",
          section: "News",},{id: "news-i-was-interviewed-by-international-financial-news-国际金融报-on-ai-agent-safety-接连-越界-ai失控的警报已经拉响",
          title: 'I was interviewed by International Financial News (国际金融报) on AI agent safety: 接连“越界”，AI失控的警报已经拉响？....',
          description: "",
          section: "News",},{id: "news-i-have-accepted-an-invitation-to-serve-as-a-reviewer-for-the-1st-workshop-on-interpreting-agent-behavior-iab-at-neurips-2026",
          title: 'I have accepted an invitation to serve as a reviewer for the 1st...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%72%62%6F%6E%69%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/BradMoonUESTC", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yue-xue-566521283", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-2141-2044", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6cdLQQQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/xy9301", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
