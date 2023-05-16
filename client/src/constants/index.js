import {
    mobile,
    backend,
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
    alfatraining,
    socialapp1,
    cssillustrator1,
    restaurant1,
    threejs,
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-end Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Digital Career Institute",
      icon: dci,
      iconBg: "#383E56",
      date: "May 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other trainee developers.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "Alfatraining",
      icon: alfatraining,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - March 2020",
      points: [
        "Designing and styling and coding websites using HTML, CSS, and Javascript.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Information Technology and Computing",
      company_name: "Arab Open University",
      icon: aou,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing applications using various programming languages and technologies.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "MetaTech",
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2022",
      points: [
        "Developing and maintaining 1.",
        "Collaborating 2 to create high-quality products.",
        "Implementing 3.",
        "Participating 4 to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rami proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rami does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "IRT E-Restaurant",
      description:
        "Web application that enables users to order food and food products online",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Social App",
      description:
        "Web application that enables users to share their thoughts, photos, and GIF videos with others, as well as interact with other users' content by liking, commenting,repying and making posts and profiles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
            name: "mongodb",
            color: "pink-text-gradient",
        }
      ],
      image: socialapp1,
      source_code_link: "https://github.com/Rami24t/SocialAppMERN",
    },
    {
      name: "Chat app CSS illustration",
      description:
        "Building out a feature illustration using HTML & CSS and get it looking as close to provided design images as possible, and making it responsive to all screen sizes, and adding a nice animation to it.",
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
      image: cssillustrator1,
      source_code_link: "https://github.com/Rami24t/Chat-app-CSS-illustration_Frontend-Mentor-Challenge",
    },
  ];
  
  export { navLinks, services, technologies, experiences, testimonials, projects };