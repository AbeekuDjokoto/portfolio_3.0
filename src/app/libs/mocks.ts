import { NavigationItem, Project } from "./definitions";
import link from '@/app/assets/icons/link.svg'
import twitter from '@/app/assets/icons/twitter.svg'
import github from '@/app/assets/icons/github.svg'
import figma from '@/app/assets/icons/figma.png'
import tailwind from '@/app/assets/icons/tailwind.png'
import react from '@/app/assets/icons/react.png'
import seedfi from '@/app/assets/images/seedfi.png'
import typescript from '@/app/assets/icons/typescript.png'
import graphql from '@/app/assets/icons/graphql.png'
import next from '@/app/assets/icons/next.png'
import sibyl from '@/app/assets/icons/sibyl.png'
import enyata from '@/app/assets/icons/enyata.svg'
import fredoEngineering from '@/app/assets/icons/fredoEngineering.svg'
import jest from '@/app/assets/icons/jest.png'
import sass from '@/app/assets/icons/sass.png'
import git from '@/app/assets/icons/git.png'
import whiteArrow from '@/app/assets/icons/whiteArrow.svg'
import tanstack from '@/app/assets/icons/tanstack.png'
import zeroWaste from '@/app/assets/images/zeroWaste.gif'
import voltaVoyage from '@/app/assets/images/voltaVoyage.gif'
import kreditAfrica from '@/app/assets/images/kreditAfrica.gif'
import hrms from '@/app/assets/images/hrms.gif'

export const NavigationList: NavigationItem[] = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Store",
        href: "/store"
    },
    {
        title: "Work",
        href: "/work"
    }
]

export const SkillsAndTools = [ 
    {title: "software engineer"},
    {title: "product designer"},
    {title: "web developer"}
]

export const Links = [
    {href: "/about", icon: link},
    {href: "https://twitter.com/AbeekuDjokoto", icon: twitter},
    {href: "https://github.com/AbeekuDjokoto", icon: github}
]

export const Projects: Project[] = [
    {
      id: 1,
      href: "/product/zero-waste",
      image: zeroWaste,
      title: "Zero Waste",
      description:
        "Zero Waste is an innovative trash pickup app, offering users in Ghana a seamless way to schedule pickups at their convenience, compare quotes from different services, and save on costs. Aligned with the Zero Waste Company's mission, the app encourages recycling and composting, providing a user-friendly and eco-conscious solution to simplify waste management.",
      role: "Product Designer",
      keywords: [
        { title: "figma", icon: figma },
        { title: "User Research", icon: "" },
      ],
    },
    {
      id: 2,
      href: "/about",
      image: voltaVoyage,
      title: "Volta Voyage",
      description:
        "Volta Voyage: Your go-to travel app for seamless hotel and restaurant discovery in Akosombo. Easily book accommodations, explore dining options, and get real-time pricing updates for a hassle-free and memorable travel experience.",
      role: "Product Designer",
      keywords: [
        { title: "figma", icon: figma },
        { title: "User Research", icon: "" },
        { title: "Prototype", icon: "" },
        { title: "User flow", icon: "" },
      ],
    },
    {
        id: 3,
        href: "/about",
        image: kreditAfrica,
        title: "Kredit Africa",
        description:
          "Kredit Africa's mission is to revolutionize the financial landscape by providing innovative credit-related data and solutions that promote financial inclusion and empower individuals to achieve their financial aspirations.",
        role: "Software Engineer",
        keywords: [
          { title: "next", icon: next },
          { title: "tailwind", icon: tailwind },
          { title: "typescript", icon: typescript },
          { title: "graphql", icon: graphql },
          { title: "jest", icon: jest },
          { title: "sass", icon: sass },
          { title: "git", icon: git }
        ],
      },
    {
      id: 4,
      href: "/about",
      image: hrms,
      title: "HRMS",
      description:
        "Take your HR management to the next level with HRMS. Streamline your operations, enhance productivity, and drive organizational success.",
      role: "Software Engineer",
      keywords: [
        { title: "react", icon: react },
        { title: "tailwind", icon: tailwind },
        { title: "graphql", icon: graphql },
        { title: "jest", icon: jest },
        { title: "sass", icon: sass },
        { title: "git", icon: git },
      ],
    },
    {
      id: 5,
      href: "/about",
      image: seedfi,
      title: "Seedfi",
      description:
        "SeedFi provides simplified digital lending. Apply online, get quick approval, and access funds for your needs. No more hassle!",
      role: "Software Engineer",
      keywords: [
        { title: "react", icon: react },
        { title: "tailwind", icon: tailwind },
        { title: "jest", icon: jest },
        { title: "sass", icon: sass },
        { title: "git", icon: git },
        { title: "tanstack", icon: tanstack },
      ],
    },
];

export const FooterNavigation = [
    {id: 1, title: "Latest Updates", href: "https://twitter.com/AbeekuDjokoto", hrefTitle: "Twitter", icon: whiteArrow},
    {id: 2, title: "Connect", href: "mailto:djokotoabeeku619@gmail.com?subject=Interested%20in%20Working%20Together&body=Hello%20there,%0A%0AI%20am%20interested%20in%20working%20with%20you.%20Let's%20discuss%20the%20details.%0A%0ABest%20regards.", hrefTitle: "Mail", icon: whiteArrow}
]

export const ResumeHeader = {
  title: "Experienced Front End Developer with a year of expertise in HTML, CSS, JavaScript, and TypeScript. Specializing in creating inituitive and high performing web applications. Skilled in UI/UX design, usability testing, and data-driven solutions.",
  specialization1: "Passionate about leveraging my frontend skills to transform concepts into seamless and visually appealing user interfaces. Whether collaborating with teams, refining ideas, or mentoring fellow developers, I bring a team-first philosophy to every project.",
  specialization2: "Specializing in bringing ideas to life through prototyping, visual design, and UI systems — along with strategic thinking grounded in a user-centered approach and the endless insights on human behavior and perception from cognitive and behavioral sciences.",
} 

export const Experience = {
  category: "Experience",
  experience: [
{
  id: 1,
  jobTitle: "Product Designer",
  industry: "Sibyl Systems - Akosombo - Sept 2023 to present",
  tasks: [
    { id: 1, task: "Conducted usability tests with more than 30 users to better understand user behaviors and usability patterns on responsive devices, leading to optimized user experiences."},
    { id: 2, task: "In less than 4 months, designed elegant flows and interactions for mobile platform partnered with hardware systems, resulting in a 20% increase in user engagement."},
    { id: 3, task: "Conducted user research, including interviews and usability testing, to inform design decisions, resulting in data-driven design solutions."},
    { id: 4, task: "Led user-centered design projects resulting in improved satisfaction."},
    { id: 5, task: "Fostered collaboration and consistency across teams by working closely with product managers, designers and engineers."},
  ]
},
{
  id: 2,
  jobTitle: "Software Engineer",
  industry: "Enyata, Ghana – East Legon - Apr 2022 to present",
  tasks: [
    { id: 1, task: "Successfully implemented unit testing infrastructure using Jest and Sonar Cloud, leading to a 10% decrease in software issues."},
    { id: 2, task: "Optimized images and code, resulting in a 30-second increase in Time on Page, improving web performance and scalability."},
    { id: 3, task: "Developed a fully responsive model ensuring compatibility with a wide range of device viewports, resulting in improved user experience."},
    { id: 4, task: "Building reusable code for future use."},
    { id: 5, task: "Utilizing a variety of markup languages to write web pages."},
  ]
}
  ]
}

export const Skills = {
  category: "Skills",
  skills: [
    {
      id: 3,
      under: "Web Development",
      description: `Passionate about web development, I thrive on crafting digital experiences that seamlessly blend creativity with functionality. 
      From designing interactive and user-friendly interfaces to optimizing performance and ensuring responsiveness across devices, 
      I am dedicated to delivering robust and engaging web solutions. My detail-oriented approach ensures that every line of code contributes 
      to the overall efficiency and success of the projects I undertake.`
    },
{
  id: 1,
  under: "Product Design",
  description: `I like how product design empowers us to leverage user insights to craft products that effectively address real-
  world challenges, while delivering value to users. I work closely with cross-functional teams, including engineers 
  and business strategists, to identify user needs, create design concepts, and refine product designs through 
  testing and iteration.`
},
{
  id: 2,
  under: "Design Systems",
  description: `Being detail-oriented, I find immense joy in creating systems that bring value to both internal teams and clients. 
  I’m a firm believer that design systems play a critical role in ensuring that the design process is efficient, effective, 
  and consistent, which can ultimately help organizations create better products and services.`
},
  ],
  group: [
    {id: 1, keyword: "Landing Pages"},
    {id: 2, keyword: "Apps"},
    {id: 3, keyword: "Prototyping"},
    {id: 4, keyword: "Websites"},
    {id: 5, keyword: "Design Guidelines"},
    {id: 6, keyword: "Illustration"},
  ]
}

export const Clients = {
  category: "Selected Clients",
  clientList: [
    {id: 1, clientName: sibyl},
    {id: 2, clientName: enyata},
    {id: 3, clientName: fredoEngineering},
  ]
}