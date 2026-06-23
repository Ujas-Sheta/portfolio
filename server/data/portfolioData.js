/**
 * portfolioData.js — Single source of truth for all portfolio content.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WANT TO CHANGE SOMETHING ON THE SITE?
 * Just edit this file — no need to touch React components.
 * The Express server at /api/portfolio serves this as JSON.
 * The React app fetches it once and passes data down as props.
 * ─────────────────────────────────────────────────────────────────────────────
 */

module.exports = {

  // ── Personal info (used in Nav, Hero, Contact, Footer) ───────────────────
  meta: {
    name:         'Ujas Sheta',
    title:        'Frontend Developer',
    email:        'uksheta15@gmail.com',
    phone:        '+1 (825) 523 4075',
    location:     'Canada',
    linkedin:     'linkedin.com/in/ujassheta',
    linkedinUrl:  'https://linkedin.com/in/ujassheta',
    github:       'github.com/ujassheta',
    githubUrl:    'https://github.com/ujassheta',
    status:       'Open to opportunities',
    availability: 'Full-time · Freelance · Remote',
    year:         '2026',
  },

  // ── Hero section ──────────────────────────────────────────────────────────
  hero: {
    kicker: 'Available for hire · Canada · 2026',
    // Each string = one animated line in the big headline
    lines: ['Frontend', 'Developer', '& Builder'],
    // Three stat cells shown below the headline
    stats: [
      { label: 'Speciality', value: 'React.js · JavaScript · Responsive UI' },
      { label: 'Experience', value: '5+ years · AppGenix & Rejoice' },
      { label: 'Location',   value: 'Canada · Remote Worldwide' },
    ],
  },

  // ── Scrolling tech-stack marquee ──────────────────────────────────────────
  // Array is duplicated in the Marquee component to create infinite scroll
  marqueeItems: [
    'React.js', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'SCSS',
    'Node.js', 'Git & GitHub', 'Figma', 'SEO & Performance',
    'MySQL', 'Python', 'Responsive Design',
  ],

  // ── About section ─────────────────────────────────────────────────────────
  about: {
    // Each string renders as a separate <p> paragraph
    body: [
      "I'm Ujas Sheta, a front-end developer based in Canada. I build responsive, performant web applications that look precise and feel fast. I bridge the gap between design vision and working code.",
      "With 5+ years across product teams, I've shipped everything from pixel-perfect UI conversions to full component libraries, reducing load times by up to 20% along the way.",
      "I hold a Post-Graduate Certificate in AI and Data Analytics from Saskatchewan Polytechnic, completed in April 2026, and I bring that analytical lens to everything I build.",
    ],
    // Four stat boxes beneath the bio
    stats: [
      { num: '5',  sup: '+', label: 'Years experience' },
      { num: '20', sup: '%', label: 'Load time cut'    },
      { num: '10', sup: '+', label: 'Live projects'    },
      { num: '2',  sup: '',  label: 'Certifications'   },
    ],
  },

  // ── Work experience ───────────────────────────────────────────────────────
  experience: [
    {
      id:       1,
      num:      '01 / 02',
      company:  'AppGenix Infotech',
      location: 'Surat, India · Remote',
      date:     'Aug 2023 — Present',
      current:  true,               // shows pulsing "Currently here" badge
      badge:    'Currently here',
      role:     'Front-End Developer',
      tags:     ['HTML', 'CSS', 'JavaScript', 'React.js', 'SCSS', 'Git', 'Figma', 'VS Code'],
      bullets: [
        'Built and shipped responsive web applications using HTML, CSS, JavaScript and React.js across multiple client projects.',
        'Converted Figma designs into pixel-perfect, cross-browser-compatible interactive interfaces.',
        'Reduced page load times by up to 20% through code splitting, lazy loading and asset optimisation.',
        'Architected a reusable component library that cut development time by 30% across the team.',
        'Led front-end reviews and mentored junior developers on coding standards and best practices.',
        'Integrated third-party APIs and worked closely with back-end teams to deliver end-to-end features.',
      ],
    },
    {
      id:       2,
      num:      '02 / 02',
      company:  'Rejoice Talent Academy',
      location: 'Surat, India',
      date:     'May 2019 — Jul 2023',
      current:  false,
      badge:    '4 years',
      role:     'Junior Web Developer',
      tags:     ['HTML', 'CSS', 'JavaScript', 'PHP', 'React.js', 'MySQL', 'Git'],
      bullets: [
        'Designed and maintained responsive websites ensuring consistent cross-browser compatibility.',
        'Developed reusable UI components to improve code efficiency and long-term scalability.',
        'Collaborated closely with designers and back-end developers to deliver seamless user experiences.',
        'Conducted thorough testing and debugging to enhance performance and eliminate regressions.',
        'Managed MySQL databases and built dynamic PHP-backed interfaces for client platforms.',
      ],
    },
  ],

  // ── Skills grid ───────────────────────────────────────────────────────────
  skills: [
    { num: '01', name: 'React.js',                desc: 'Hooks, Context API, state management, reusable components and performant SPAs at scale.' },
    { num: '02', name: 'HTML & CSS / SCSS',        desc: 'Semantic markup, BEM methodology, responsive layouts, animations and cross-browser support.' },
    { num: '03', name: 'JavaScript / TypeScript',  desc: 'ES6+, TypeScript, DOM manipulation, async/await patterns and third-party API integrations.' },
    { num: '04', name: 'Tailwind CSS',             desc: 'Rapid UI development with utility-first styling, dark mode, responsive design and design tokens.' },
    { num: '05', name: 'Node.js & REST APIs',      desc: 'Building and consuming REST APIs, Express.js basics, JSON data handling and async workflows.' },
    { num: '06', name: 'Next.js',                  desc: 'Server-side rendering, static site generation, routing and optimised React applications.' },
    { num: '07', name: 'SEO & Performance',        desc: 'Core Web Vitals, lazy loading, code splitting, bundle optimisation and LCP/CLS tuning.' },
    { num: '08', name: 'Figma & UI Design',        desc: 'Design handoff, prototyping, component libraries, design systems and developer collaboration.' },
    { num: '09', name: 'Git & GitHub',             desc: 'Version control, branching strategies, pull requests, CI/CD pipelines and team workflows.' },
    { num: '10', name: 'MySQL & Databases',        desc: 'Schema design, complex queries, indexing and Oracle DB for backend data management.' },
    { num: '11', name: 'Python & Data Analytics',  desc: 'Pandas, NumPy, data visualisation, machine learning fundamentals and AI model concepts.' },
    { num: '12', name: 'PHP & WordPress',          desc: 'Dynamic backend scripting, CMS customisation, theme development and plugin integration.' },
    { num: '13', name: 'C / C++',                 desc: 'Algorithms, data structures, memory management and systems-level problem solving.' },
    { num: '14', name: 'Cybersecurity',            desc: 'Certified in cyber security fundamentals, cryptography, secure coding and threat awareness.' },
    { num: '15', name: 'Testing & Debugging',      desc: 'Browser DevTools, cross-device QA, performance profiling and regression testing workflows.' },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      id:         1,
      num:        '01 / 03',
      name:       'Delogate',
      desc:       'Web platform for outsourcing software development. Responsive interfaces, reusable components, and optimised page load times.',
      tags:       ['HTML', 'CSS', 'JavaScript', 'PHP'],
      url:        '#',
      thumbClass: 'proj-thumb-1',   // CSS class for gradient background
      thumbLabel: 'Web Platform',
      thumbEmoji: '🤝',
    },
    {
      id:         2,
      num:        '02 / 03',
      name:       'SuperESG',
      desc:       'Comprehensive ESG investment platform with data visualisation tools for transparency and stakeholder trust.',
      tags:       ['HTML', 'CSS', 'JavaScript', 'PHP'],
      url:        '#',
      thumbClass: 'proj-thumb-2',
      thumbLabel: 'Investment Platform',
      thumbEmoji: '📈',
    },
    {
      id:         3,
      num:        '03 / 03',
      name:       'EVS Charging Point',
      desc:       'EV charging slot booking platform for customers and a management dashboard for station owners.',
      tags:       ['HTML', 'CSS', 'JavaScript', 'PHP'],
      url:        '#',
      thumbClass: 'proj-thumb-3',
      thumbLabel: 'Booking System',
      thumbEmoji: '⚡',
    },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      id:     1,
      year:   '2025 – April 2026',
      school: 'Saskatchewan Polytechnic',
      degree: 'Post-Graduate Certificate in Artificial Intelligence and Data Analytics',
    },
    {
      id:     2,
      year:   '2024 – 2025',
      school: 'Saskatchewan Polytechnic',
      degree: 'Post-Graduate Certificate in Technology Management',
    },
    {
      id:     3,
      year:   '2020 – 2023',
      school: 'Veer Narmad South Gujarat University',
      degree: 'Bachelor of Computer Application (BCA) · Surat, India',
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    { id: 1, label: 'Cyber Security Fundamentals — Jan 2023' },
    { id: 2, label: 'Cryptography Fundamentals — May 2023'   },
  ],
};
