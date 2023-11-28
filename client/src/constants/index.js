import {
  // mobile,
  // backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  aou,
  dci,
  fcc,
  alkis,
  alfatraining,
  lettersOnFire,
  lettersOnFire2,
  socialapp1,
  socialapp2,
  cssillustrator1,
  cssillustrator2,
  socialUI1,
  socialUI2,
  gnr1,
  gnr2,
  st1,
  st2,
  bubbles,
  bubbles2,
  restaurant1,
  cat,
  ttt1,
  ttt2,
  aoa1,
  aoa2,
  edmundo1,
  edmundo2,
  sM1,
  sM2,
  gsl,
  gsl2,
  cashier,
  currencyConverter,
  weatherApp,
  deedsProject,
  deedTracker1,
  glowingLettersSCSS,
  goldenRatioArt,
  jsTicTacToeReact1,
  jsTicTacToeReact2,
  reactBoat,
  reactBoat2,
  reactCarSpeedometer,
  songPlayerFlex,
  secretUnfoldsAnim,
  portfolio3d,
  // threejs,
  // inosoft,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Career",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const careers = [
  // {
  //   title: "Full stack Developer",
  // company_name: "Inosoft",
  // icon: inosoft,
  //   iconBg: "#fefefe",
  //   date: "Dec 2023 - Present",
  //   points: [
  //     "Developing and maintaining 1.",
  //     "Collaborating 2 to create high-quality products.",
  //     "Implementing 3.",
  //     "Participating 4 to other developers.",
  //   ],
  // },
  {
    title: "JavaScript Algorithms and Data Structures Developer",
    company_name: "freeCodeCamp.org",
    icon: fcc,
    iconBg: "#fefefe",
    date: "Juli 2023 - August 2023",
    points: [
      "Honed JavaScript, Programming, Algorithms, and Data Structures skills and knowledge (eq 300 hours).",
      "Built multiple projects successfully including the: Palindrome Checker, Roman Numeral Converter, Caesars Cipher, Telephone Number Validator, and Cash Register.",
    ],
  },
  {
    title: "Web Developer / React.js Developer / MERN Stack",
    company_name: "Digital Career Institute GmbH, Berlin (Remote)",
    icon: dci,
    iconBg: "#fefefe",
    date: "March 2022 - June 2023",
    points: [
      "Developing and maintaining web applications using frameworks like React.js and Tailwind CSS, and languages like HTML, CSS, JavaScript, JSX, and technologies like Node, Express, and MongoDB, Visual Studio Code IDE, npm package manager, and GIT version controller.",
      "Honing web development skills in frontend and backend techologies focusing on the MERN tech stack and ECMAScript/JavaScript programming.",
      "Implementing responsive designs and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other trainee developers. Collaborating with cross-functional teams and other developers to create high-quality products.",
      "Awards: React Developer, JavaScript Developer, User Interface Developer, Backend Developer, and Fullstack Web Developer with full marks.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "alfatraining Bildungszentrum, Giessen",
    icon: alfatraining,
    iconBg: "#fefefe",
    date: "Jan 2020 - March 2020",
    points: [
      "Designing, styling and coding websites using HTML 5, CSS 3, and JavaScript.",
      "Creating fully responsive web sites and ensuring SEO and cross-browser compatibility.",
      "Awards: Web Designer with full marks.",
    ],
  },
  {
    title: "Information Technology and Computing",
    company_name: "Arab Open University, Beirut",
    icon: aou,
    iconBg: "#fefefe",
    date: "Sep 2006 - Jul 2011",
    points: [
      "Developing software applications using various programming languages and technologies.",
      "Acquiring knowledge and key skills in IT including Communication and Information Technologies, Object Oriented Programming, Software Engineering, Data Management and Analysis",
      "Awards: Bachelor of Science, first class honors, and a distinguished student award.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rami's proficiency is beyond doubt. He has exceptional analytical abilities and is a master in finding ingenious solutions to challenging problems.",
    name: " Alkis Kastrisios",
    designation: "PhDc, MSc, Senior",
    company: "DCI",
    image: alkis,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rami does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image1: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rami optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image1: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Shopping List",
    description:
      "A simple shopping list web application that enables users to add, delete, edit, check, and uncheck items. The design includes dark and light modes, a ltr and rtl layouts to support the choosable Arabic, English, or German languages' options. Functionalities include the ability to undo actions, clear lists or reset to default, toggle sound, toggle light/dark themes, offline work, installing the app, and list data permanency.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "PWA",
        color: "green-text-gradient",
      },
      {
        name: "local-storage",
        color: "pink-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    images: [gsl2, gsl],
    source_code_link:
      "https://github.com/Rami24t/Grocery-Shopping-List-Tracker",
  },
  {
    name: "Social App",
    description:
      "A dynamic web application that enables users to share their thoughts, photos, and GIF videos with others, as well as interact with other users' content by liking, commenting,repying and making posts and profiles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    images: [socialapp2, socialapp1],
    source_code_link: "https://github.com/Rami24t/SocialAppMERN",
  },
  {
    name: "IRT E-Restaurant",
    description:
      "A Web application that enables users to order food and food products online",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API consumption",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "MDB",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    images: [restaurant1, cat],
    source_code_link: "https://github.com/Rami24t/React-E-Mall",
  },
  {
    name: "Chat app CSS illustration",
    description:
      "A fully responsive CSS illustration of a chat app with animated chat bubbles.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    images: [cssillustrator1, cssillustrator2],
    source_code_link:
      "https://github.com/Rami24t/Chat-app-CSS-illustration_Frontend-Mentor-Challenge",
  },
  {
    name: "Spirituelle Menschen",
    description:
      "A website of multiple pages that enables users to learn about four spiritual people, their history, and their role in culture.",
    tags: [
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "JQuery",
        color: "green-text-gradient",
      },
    ],
    images: [sM1, sM2],
    source_code_link: "https://github.com/Rami24t/SpirituelleMensch",
  },
  {
    name: "EdMundo",
    description:
      "Full stack schooling platform for educational institutions that require a sudden transition to online learning.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
    ],
    images: [edmundo1, edmundo2],
    source_code_link: "https://github.com/Rami24t/EdMundo",
  },
  {
    name: "Social Network UI",
    description:
      "A fully responsive and accurate implementation of a social network UI design.",
    tags: [
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    images: [socialUI1, socialUI2],
    source_code_link:
      "https://github.com/Rami24t/Social-Network-Page-Imitation",
  },
  {
    name: "Bubbles",
    description:
      "An artistic webpage with two dimensional quotes, poppable bubbles, custom-made cursor, and endlessly fresh images.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    images: [bubbles, bubbles2],
    source_code_link: "https://github.com/Rami24t/2dQuotes-BubblesV2-",
  },
  {
    name: "Letters on Fire",
    description:
      "A CLI multi-player game that enables users to play against each other by guessing the missing letters of a book's title.",
    tags: [
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
      {
        name: "Software Engineering",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    images: [lettersOnFire, lettersOnFire2],
    source_code_link:
      "https://github.com/Rami24t/RamiAl-Saadi-s-LettersOnFire-aFullyOOP-nodeJS-game",
  },
  {
    name: "Social Ticketing System",
    description:
      "A fullstack Web application for a simple ticketing system. It includes a simple voice interaction feature that can take commands to: navigate the app pages, do small talk, tell you the current news or the weather conditions in your area.",
    tags: [
      {
        name: "RESTful API consumption",
        color: "pink-text-gradient",
      },
      {
        name: "Alan AI",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    images: [st1, st2],
    source_code_link: "https://social-ticketing-one.vercel.app/",
  },
  {
    name: "Git New Remote Helper",
    description:
      "A simple web application that helps users change to a new remote URL of a GitHub repository by providing them with the necessary git commands.",
    tags: [
      {
        name: "Vanilla JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    images: [gnr1, gnr2],
    source_code_link: "https://github.com/Rami24t/GitHub-Remote-URLs-Changer",
  },
  {
    name: "Tic Tac Toe",
    description:
      "A 2 players offline Tic Tac Toe game with an undo to any previous move and restart options.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "useReducer",
        color: "pink-text-gradient",
      },
    ],
    images: [ttt1, ttt2],
    source_code_link:
      "https://github.com/Rami24t/React-JS-TicTacToe-Revisted-Session",
  },
  {
    name: "Open AI Chat",
    description:
      "Azure-OpenAI-Chat-Completion-Web-App Chat App Adv. Live Demo. A chatbot that can chat with you about anything you want. It can be powered by the Azure Open AI GPT-3.5 turbo API.",
    tags: [
      {
        name: "Azure Open AI GPT-3.5 turbo API",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    images: [aoa1, aoa2],
    source_code_link:
      "https://github.com/Rami24t/Azure-OpenAI-Chat-Completion-Web-App",
  },
  {
    name: "Others",
    description:
      "Other projects can be found on my GitHub profile. They include a live BitCoin currency converter, a react Car and a react Boat speedometers' simulations, a CLI cashier return solution, handcrafted CSS illustrations and animations, artistic pages, websites' coding challenges, web development exercises, JavaScript challenges and tests, and more.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful APIs",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    images: [
      cashier,
      currencyConverter,
      weatherApp,
      deedsProject,
      deedTracker1,
      glowingLettersSCSS,
      goldenRatioArt,
      jsTicTacToeReact1,
      jsTicTacToeReact2,
      reactBoat,
      reactBoat2,
      reactCarSpeedometer,
      songPlayerFlex,
      secretUnfoldsAnim,
      portfolio3d,
    ],
    source_code_link: "github.com/Rami24t",
  },
];

export { navLinks, services, technologies, careers, testimonials, projects };
