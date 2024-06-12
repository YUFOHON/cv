import {
  mobile,
  backend,
  brucebnb,
  web,
  android,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  threejs,
  CRM,
  cardio,
  Inventory,
  dashboard,
  File_Security,
  brucedrive,
} from "../assets";

export const navLinks = [
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Vue and React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: android,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Starbucks",
    icon: javascript,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vue Developer",
    company_name: "Tesla",
    icon: css,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
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
    name: "Online room booking website",
    description:
      "an online marketplace for homestays.",
    tags: [
      {
        name: "Next.js",
        color: "black-text-gradient",
      },

      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "purple-text-gradient",
      },
    ],
    image: brucebnb,
    source_code_link: "https://github.com/YUFOHON/brucebnb",
    demo: "https://brucebnb.vercel.app/",
  },
  {
    name: "brucedrive",
    description:
      "an online drive like google drive.",
    tags: [
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },

      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Mybatis",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "ffmpeg",
        color: "purple-text-gradient",
      },
    ],
    image: brucedrive,
    source_code_link: "https://github.com/YUFOHON/brucedrive",
    demo: "http://34.96.216.102/brucedrive/",
  },
  {
    name: "Cardio Game",
    description: "an cross-platform cardio game powered by computer vision.",
    tags: [
      {
        name: "Unity",
        color: "black-text-gradient",
      },

      {
        name: "Pose estimation",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
    ],
    image: cardio,
    source_code_link: "https://youtu.be/LOaHQANZimQ",
    demo: "https://youtu.be/LOaHQANZimQ",
  },
  {
    name: "Dashboard",
    description: "Dashboard for brucebnb, day and night UI mode.",
    tags: [
      {
        name: "Typescript",
        color: "black-text-gradient",
      },

      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/YUFOHON/admin",
    demo: "https://admin-alpha-henna.vercel.app/",
  },
  {
    name: "File Encryption App",
    description: "File Encryption App using AES+RSA Encrytion/Decryption algorithm.",
    tags: [
      {
        name: "Javascript",
        color: "black-text-gradient",
      },

      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: File_Security,
    source_code_link: "https://github.com/YUFOHON/security.git",
    demo: "https://yufohon.eu.org/security/",
  },
  {
    name: "Event Management System",
    description: "Web-based platform that allows users to  manage event.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: CRM,
    source_code_link: "https://github.com/YUFOHON/Event-Management-System",
    demo: "https://thankful-cliff-08e539200.3.azurestaticapps.net/",
  },
  {
    name: "Inventory Management App",
    description: "Android application that allows users to manage inventory.",
    tags: [
      {
        name: "Jetpack Compose",
        color: "green-text-gradient",
      },

      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: Inventory,
    source_code_link:
      "https://github.com/YUFOHON/Inventory_Management_System_JetPackCompose",
    demo: "https://youtu.be/gqZfwexQ4qA",
  },
  // https://admin-alpha-henna.vercel.app/
];

export { services, technologies, experiences, testimonials, projects };
