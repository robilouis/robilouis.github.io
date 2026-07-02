// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'robilouis', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/me/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['robilouis/gitprofile', 'robilouis/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        //{
        //title: 'Project Name',
        //  description:
        //    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //  imageUrl:
        //    'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //  link: 'https://example.com',
        //},
      ],
    },
  },
  seo: {
    title: 'Portfolio of Louis Robinet',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'robilouis',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'louisrobi@hotmail.fr',
  },
  resume: {
    fileUrl: 'Louis_Robinet_CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Julia',
    'Java',
    'JavaScript',
    'C/C++',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Terraform',
  ],
  experiences: [
    {
      company: 'Elsys Design',
      position: 'Tech Lead Data & AI',
      from: 'June 2026',
      to: 'Present',
      companyLink: 'https://www.elsys-design.com/',
    },
    {
      company: 'Campus',
      position: 'Freelance Data Architect',
      from: 'Feb 2025',
      to: 'June 2026',
      companyLink: '',
    },
    {
      company: 'alcemy',
      position: '(Lead) Data Scientist',
      from: 'May 2023',
      to: 'Jan 2026',
      companyLink: 'https://alcemy.tech/',
    },
    {
      company: 'Thales (Defence and Mission Systems)',
      position: 'Data Scientist Intern',
      from: 'Mar 2022',
      to: 'Sept 2022',
      companyLink: 'https://www.thalesgroup.com/',
    },
    {
      company: 'Leiden University',
      position: 'Lecturer for a Mathematics Refresher course',
      from: 'Nov 2021',
      to: 'Nov 2022',
      companyLink: '',
    },
    {
      company: 'EVS - CNRS Lyon',
      position: 'Internship in Geomorphology, Data & Image Analysis',
      from: 'Jan 2020',
      to: 'July 2020',
      companyLink: '',
    },
    {
      company: 'Lyon Observatory - CRAL',
      position:
        'Internship in Astrophysics, Image Analysis & Signal Processing',
      from: 'Apr 2019',
      to: 'Aug 2019',
      companyLink: '',
    },
    {
      company: 'Universiteit van Amsterdam',
      position: 'Internship in Soft Matter',
      from: 'May 2018',
      to: 'Aug 2018',
      companyLink: '',
    },
    {
      company: 'Self-employed',
      position: 'Private Tutor',
      from: 'Sept 2017',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning in Production',
      body: 'DeepLearning.AI',
      year: 'July 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Leiden University',
      degree: 'MSc. Computer Science - Artificial Intelligence',
      from: 'Sept 2020',
      to: 'Dec 2022',
    },
    {
      institution: 'École Normale Supérieure de Lyon',
      degree: 'Master’s degree in Complex Systems',
      from: 'Sept 2018',
      to: 'Aug 2020',
    },
    {
      institution: 'École Normale Supérieure de Lyon',
      degree: 'Bachelor’s degree in Physics',
      from: 'Sept 2017',
      to: 'Aug 2018',
    },
    {
      institution: 'Lycée du Parc',
      degree: 'Classe Préparatoire aux Grandes Écoles MPSI/MP*',
      from: 'Sept 2014',
      to: 'Aug 2017',
    },
  ],
  publications: [
    {
      title:
        'Towards a Celeste AI Framework: Agent-free Automated 2D Level Generation for Multidirectional Platformers',
      conferenceName: 'FDG25',
      journalName: '',
      authors: 'Louis Robinet, Mike Preuss, and Marcello A. Gómez-Maureira',
      fileUrl: 'FDG25_Celeste_AI_Framework.pdf',
      description: '',
    },
    {
      title:
        'Self-oscillation and Synchronisation Transitions in Elasto-Active Structures',
      conferenceName: '',
      journalName: 'Physical Review Letters 130',
      authors:
        'Ellen Zheng, Martin Brandenbourger, Louis Robinet, Peter Schall, Edan Lerner, and Corentin Coulais',
      link: 'https://arxiv.org/abs/2106.05721',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme.
    // Editorial "paper" palette matching the hub and Le Cabinet.
    customTheme: {
      primary: '#3f9b93', // teal accent (links, avatar ring, buttons)
      secondary: '#b46a45', // terracotta
      accent: '#8a6ea8', // muted violet
      neutral: '#2a271f', // warm dark ink
      'base-100': '#fbf8f1', // card / tile (lighter paper)
      'base-200': '#f3ede1', // intermediate paper
      'base-300': '#efe9dd', // page background (crème)
      'base-content': '#1f1d17', // ink text
      '--rounded-box': '1rem',
      '--rounded-btn': '0.6rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,

  enablePWA: true,
};

export default CONFIG;
