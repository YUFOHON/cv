import {
  mobile,
  backend,
  creator,
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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  CRM,
  todo,
  Inventory
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
    name: "Event Management System",
    description:
      "Web-based platform that allows users to  manage event.",
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
    demo: "https://thankful-cliff-08e539200.3.azurestaticapps.net/"

  },
  {
    name: "Inventory Management App",
    description:
      "Android application that allows users to manage inventory.",
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
    source_code_link: "https://github.com/YUFOHON/Inventory_Management_System_JetPackCompose",
    demo: "https://youtu.be/gqZfwexQ4qA"
  }, {
    name: "Online room booking website",
    description:
      "an online marketplace for short- and long-term homestays and experiences.",
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
      }
    ],
    image: brucebnb,
    source_code_link: "https://github.com/YUFOHON/brucebnb",
    demo: "https://brucebnb.vercel.app/"
  }, {
    name: "To Do List APP",
    description:
      "an mobile TO DO List app.",
    tags: [
      {
        name: "Flutter",
        color: "black-text-gradient",
      },

      {
        name: "Dart",
        color: "blue-text-gradient",
      }
    ],
    image: todo,
    source_code_link: "https://github.com/YUFOHON/flutter.git",
    demo: "https://youtube.com/shorts/KYLzsNGo6NQ"
  },

];

export { services, technologies, experiences, testimonials, projects };