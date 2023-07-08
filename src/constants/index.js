import {
  mobile,
  backend,
  creator,
  web,
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
  atinati,
  dolphin,
  webiz,
  g,
  wiv,
  clubspeed,
  webshop,
  dropship,
  at,
  dolph,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Junior React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,//asd
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Atinati",
    icon: atinati,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Developed UI design, high-precision code transfer with styled-components.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Dolphin Software",
    icon: dolphin,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Developed Full compliance with NBG regulations, cash-desk, currency exchange, money transfers,utility payments.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Webiz international",
    icon: webiz,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Took part in creating 3 different systems, one for a community manager, one for members, and an admin panel.",
      "Developed a key features of the app, an advanced amenities booking system and a smart calendar.",
      "Developed adding events, polls and posts with their reactions, comments and replies.",
      "Worked on a live chat, also on channel and push notifications.",
      "Developed an advanced/configurable analytics system.",
      "Created an advanced payments system with merchant, multiple/dynamic vendors and shoppers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js, React Native Developer",
    company_name: "2G",
    icon: g,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developed E-Commerce SEO friendly site and app with content management capabilities, promotion-discount code tools, online order processing.",
      "Developed an online booking feature to enable customers to conveniently book activities and manage both onsite and online bookings through a single platform.",
      "Implemented instant payments, customizable deposits, and organized payment plans to optimize revenue collection while minimizing the risk of costly no-shows.",
      "Implemented real-time schedule availability to prevent overbooking, ensuring a smooth and efficient booking process for customers while optimizing venue operations.",
      "Developed a cloud-based venue management software, with a focus on flexibility, adaptability, and scalability.",
      "Developer the online booking system to be mobile-friendly, considering the significant percentage of website traffic coming from mobile devices.",
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
    name: "Wiv Club",
    description:
      "Wiv's platform eases the process of building and running communities, regardless of where members are located. With wiv's powerful app, you can communicate directly with your people, create events, form groups around shared interests, and solve problems.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "redux thunk",
        color: "pink-text-gradient",
      },
      {
        name: "i18next",
        color: "blue-text-gradient",
      },
      {
        name: "pusher",
        color: "green-text-gradient",
      },
      {
        name: "blue snap",
        color: "pink-text-gradient",
      },
      {
        name: "high charts",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
    ],
    image: wiv,
    source_code_link: "https://www.wiv.club/",
  },
  {
    name: "Club Booking",
    description:
      "Reduce overhead, ramp up revenue and provide a superior guest experience. Clubspeed’s cloud-based software provides a seamless online booking experience, enabling guests to choose their own dates, times and packages and book their experience directly from your website.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "next js",
        color: "pink-text-gradient",
      },
      {
        name: "react query",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ant design",
        color: "pink-text-gradient",
      },
    ],
    image: webshop,
    source_code_link: "https://clubspeed.com/club-booking/",
  },
  {
    name: "Clubspeed",
    description:
      "The World's Leading Venue Management Software for Family Entertainment Centers. Streamline and automate everyday tasks like scheduling, financials, reservations, membership tracking, and more with our comprehensive suite of tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "redux saga",
        color: "pink-text-gradient",
      },
      {
        name: "material ui",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: clubspeed,
    source_code_link: "https://clubspeed.com/",
  },
  {
    name: "365Dropship",
    description:
      "At 365DROPSHIP, we help you showcase your products through our online business partners across the globe, increase your order volumes, and ultimately grow your business. Apart from connecting you with our worldwide partners, we also make it easy to sell your products with us.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "styled components",
        color: "blue-text-gradient",
      },
    ],
    image: dropship,
    source_code_link: "https://www.365dropship.com/",
  },
  {
    name: "Dolphin Software",
    description:
      "Dolphin Software is a local market leader in credit and financial technologies. Company have been growing and developing along with its partner companies, which have gone the way from small credit offices to national MFI networks. Therefore product has always been excelled as reliable, high-quality and feasible.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "redux saga",
        color: "blue-text-gradient",
      },
    ],
    image: dolph,
    source_code_link: "https://github.com/",
  },
  {
    name: "Atinati",
    description:
      "Atinati is a new media platform, created with the purpose of producing and curating high-quality digital content about Georgian art and culture. Atinati promotes representatives of the art field and reveals their work to the world. It manifests local art, fashion, architecture, literature, theatre, film, and a variety of cultural realms via its media platform.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "handlebars",
        color: "pink-text-gradient",
      },
    ],
    image: at,
    source_code_link: "https://www.atinati.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
