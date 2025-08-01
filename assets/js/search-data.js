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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-works",
          title: "Works",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-logs",
          title: "Logs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-harvard-cs197-ai-research-experiences",
        
          title: "Harvard CS197 AI Research Experiences",
        
        description: "Notes and commentaries",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/harvard-cs197/";
          
        },
      },{id: "post-learning-resources",
        
          title: "Learning Resources",
        
        description: "AI, Math and Neuroscience",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/awesome-learning-path/";
          
        },
      },{id: "news-i-got-into-hcmus-fire",
          title: 'I got into HCMUS :fire:',
          description: "",
          section: "News",},{id: "news-received-hành-trang-hướng-nghiệp-scholarship-from-fpt-software-company",
          title: 'Received “Hành Trang Hướng Nghiệp” scholarship from FPT Software Company.',
          description: "",
          section: "News",},{id: "news-met-dr-rang-nguyen-nice-talk-but-could-be-better-since-i-didn-t-know-a-lot-about-automobiles",
          title: 'Met Dr. Rang Nguyen. Nice talk but could be better since I didn’t...',
          description: "",
          section: "News",},{id: "news-met-dr-tam-nguyen-epfl",
          title: 'Met Dr. Tam Nguyen @ EPFL',
          description: "",
          section: "News",},{id: "news-failed-summer-epfl-internship-entrance",
          title: 'Failed Summer@EPFL internship entrance.',
          description: "",
          section: "News",},{id: "news-failed-vinai-residency-batch-13",
          title: 'Failed VinAI Residency Batch 13',
          description: "",
          section: "News",},{id: "news-my-downfall",
          title: 'My downfall.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025/03/downfall/";
            },},{id: "news-failed-fpt-aic-residency-batch-6",
          title: 'Failed FPT AIC Residency Batch 6',
          description: "",
          section: "News",},{id: "news-met-dr-thibaut-modrzyk",
          title: 'Met Dr. Thibaut Modrzyk',
          description: "",
          section: "News",},{id: "news-indoor-climbing-vertical-academy-with-stan-and-yang-solved-a-v3-purple-problemn",
          title: 'Indoor climbing @ Vertical Academy with Stan and Yang. Solved a V3 (purple)...',
          description: "",
          section: "News",},{id: "news-2nd-place-room-with-oral-presentation-ysc-hcmus",
          title: '2nd place (Room) with oral presentation @ YSC HCMUS',
          description: "",
          section: "News",},{id: "news-pep-talk-with-ex-president-gdsc-2023",
          title: 'Pep talk with ex-president @ GDSC 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025/06/peptalk_mvh/";
            },},{id: "news-hopfield-network-for-mth56-completed-tada",
          title: 'Hopfield Network for MTH56 completed :tada:',
          description: "",
          section: "News",},{id: "news-bioturing-and-teddy-thinh",
          title: 'BioTuring and Teddy Thinh',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025/06/bioturing_and_teddy/";
            },},{id: "news-attended-3-week-course-on-comp-neuro-nma",
          title: 'Attended 3-week course on Comp Neuro @ NMA',
          description: "",
          section: "News",},{id: "projects-known-item-search-for-video-retrieval",
          title: 'Known Item Search for Video Retrieval',
          description: "A text-to-video retrieval system developed for HCMC AI Challenge 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aichallenge24/";
            },},{id: "projects-heineken-beer-detection",
          title: 'Heineken Beer Detection',
          description: "(AngelHack 2024) An AI-powered system that analyzes images to detect Heineken products, count customers, and extract marketing insights",
          section: "Projects",handler: () => {
              window.location.href = "/projects/angelhack24/";
            },},{id: "projects-hopfield-network-as-wordle-solver",
          title: 'Hopfield Network as Wordle Solver',
          description: "Biologically Plausible Associative Memory for Recalling Missing Word Patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hopfieldwordle/";
            },},{id: "projects-mazegame",
          title: 'MazeGame',
          description: "(CSC10010) A Python-based maze game featuring multiple pathfinding algorithms with interactive visualization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mazegame/";
            },},{id: "projects-llm-based-document-similarity-detection",
          title: 'LLM-Based Document Similarity Detection',
          description: "(EVN) Leveraging PhoBERT and Longformer for Vietnamese text duplicate detection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phobertEVN/";
            },},{id: "projects-remote-control-via-email",
          title: 'Remote Control Via Email',
          description: "(CSC10008) DHCP",
          section: "Projects",handler: () => {
              window.location.href = "/projects/remotecontrolviaemail/";
            },},{id: "projects-flower-classification",
          title: 'Flower Classification',
          description: "(Fellowship.AI) Fine-tuning ResNet50 with contrastive learning for the 102 Category Flower Dataset",
          section: "Projects",handler: () => {
              window.location.href = "/projects/resnet50fellowship/";
            },},{id: "projects-tictactoe",
          title: 'TicTacToe',
          description: "(CSC10001) A feature-rich console-based game with AI algorithms and animations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tictactoe/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/483486384510861312", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%68%68%75%79%6D%61%69%64%75%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sabertoaster", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sabertoaster", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0005-2711-5320", "_blank");
        },
      },{
        id: 'social-goodreads',
        title: 'Goodreads',
        section: 'Socials',
        handler: () => {
          window.open("https://www.goodreads.com/user/show/188328760-huy-mai", "_blank");
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
