import { NavigationItem, Project } from "./definitions";
import link from '@/app/assets/icons/link.svg'
import twitter from '@/app/assets/icons/twitter.svg'
import github from '@/app/assets/icons/github.svg'
import figma from '@/app/assets/icons/figma.png'
import tailwind from '@/app/assets/icons/tailwind.png'
import react from '@/app/assets/icons/react.png'
import seedfi from '@/app/assets/images/seedfi.png'
import colorsElements from '@/app/assets/images/colorsElements.svg'
import componentsUi from '@/app/assets/images/components-ui.svg'
import typographyUi from '@/app/assets/images/typographyelement.svg'
import typescript from '@/app/assets/icons/typescript.png'
import graphql from '@/app/assets/icons/graphql.png'
import sibyl from '@/app/assets/icons/sibyl.png'
import angular from '@/app/assets/icons/angular.svg'
import kreditAfricaLogo from '@/app/assets/icons/kreditAfrica.svg'
import surgeClient from '@/app/assets/icons/surge-client.png'
import dashqardClient from '@/app/assets/icons/dashqard-client.png'
import customerInterviews from '@/app/assets/icons/customerInterviews.svg'
import marketResearch from '@/app/assets/icons/marketResearch.svg'
import prototypeTesting from '@/app/assets/icons/prototypeTesting.svg'
import customerJourney from '@/app/assets/icons/customerJourney.svg'
import persona from '@/app/assets/icons/persona.svg'
import informationArch from '@/app/assets/icons/informationArch.svg'
import fredoEngineering from '@/app/assets/icons/fredoEngineering.svg'
import jest from '@/app/assets/icons/jest.png'
import sass from '@/app/assets/icons/sass.png'
import git from '@/app/assets/icons/git.png'
import whiteArrow from '@/app/assets/icons/whiteArrow.svg'
import tanstack from '@/app/assets/icons/tanstack.png'
import zeroWaste from '@/app/assets/images/zeroWaste.gif'
import voltaVoyage from '@/app/assets/images/voltaVoyage.gif'
import kreditAfrica from '@/app/assets/images/kreditAfrica.gif'
import goldbucks from '@/app/assets/images/goldbucks.jpg'
import surgeAfrica from '@/app/assets/images/surgeAfrica.png'
import surgeAtlas from '@/app/assets/images/surgeAtlas.png'
import surgeMobile from '@/app/assets/images/surgeMobile.png'
import zeroWasteHome from "@/app/assets/images/zeroWasteHome.svg";
import zeroWaste404 from "@/app/assets/images/zeroWaste404.svg";
import zeroWasteCalender from "@/app/assets/images/zeroWasteCalendar.svg";
import zeroWasteReferral from "@/app/assets/images/zeroWasteReferral.svg";
import voltaVoyageExplore from "@/app/assets/images/voltaVoyageExplore.svg";
import voltaVoyageHome from "@/app/assets/images/voltaVoyageHome.svg";
import voltaVoyageProfile from "@/app/assets/images/voltaVoyageProfile.svg";
import voltaVoyageRoom from "@/app/assets/images/voltaVoyageRoom.svg";


export const NavigationList: NavigationItem[] = [
    {
      title: "Work",
      href: "/"
    },
    {
        title: "About",
        href: "/about"
    }
]

export const SkillsAndTools = [
  { title: "Software Developer" },
  { title: "UI/UX Designer" },
  { title: "Mobile Developer" },
];

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
      target: null,
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
      href: "/product/volta-voyage",
      image: voltaVoyage,
      title: "Volta Voyage",
      target: null,
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
        href: "https://www.kreditafrica.com/",
        image: kreditAfrica,
        title: "Kredit Africa",
        target: "_blank",
        description:
          "Kredit Africa's mission is to revolutionize the financial landscape by providing innovative credit-related data and solutions that promote financial inclusion and empower individuals to achieve their financial aspirations.",
        role: "Software Engineer",
        keywords: [
          { title: "react", icon: react },
          { title: "tailwind", icon: tailwind },
          { title: "typescript", icon: typescript },
          { title: "tanstack", icon: tanstack },
          { title: "jest", icon: jest },
          { title: "sass", icon: sass },
          { title: "git", icon: git }
        ],
      },
    {
      id: 4,
      href: "https://app.goldbucks.ng/",
      image: goldbucks,
      title: "GoldBucks",
      target: "_blank",
      description:
        "GoldBucks is a savings and investment platform for naira and dollar wallets, target and group savings, fixed and locked funds, and investment notes, with tiered account verification.",
      role: "Software Engineer",
      keywords: [
        { title: "react", icon: react },
        { title: "tailwind", icon: tailwind },
        { title: "tanstack", icon: tanstack },
      ],
    },
    {
      id: 5,
      href: "https://surge.africa/",
      image: surgeAfrica,
      title: "Surge",
      target: "_blank",
      description:
        "Surge offers salary-backed loans and secure deposits in Ghana, including pension-backed, controller, police, and employer-assisted loans, plus savings deposits and fixed deposits.",
      role: "Software Engineer",
      keywords: [
        { title: "react", icon: react },
      ],
    },
    {
      id: 6,
      href: "https://atlas.surge.africa/auth/signup",
      image: surgeAtlas,
      title: "Surge Atlas",
      target: "_blank",
      description:
        "Surge Atlas is the loan platform where customers start an application and agents track submissions, commissions, and follow-ups through identity verification.",
      role: "Software Engineer",
      keywords: [
        { title: "angular", icon: angular },
      ],
    },
    {
      id: 7,
      href: "https://surge.africa/",
      image: surgeMobile,
      title: "Surge Mobile",
      target: "_blank",
      description:
        "The Surge mobile app lets customers apply for a loan, follow recent applications, and complete identity verification with a Ghana Card and a facial scan.",
      role: "Software Engineer",
      keywords: [
        { title: "react native", icon: react },
      ],
    },
    {
      id: 8,
      href: "https://theseedfi.com/",
      image: seedfi,
      title: "Seedfi",
      target: "_blank",
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
  title: "Software developer, UI/UX designer, and mobile developer at Surge, building fintech products that help people access loans, savings, and deposits across Ghana.",
  specialization1:
    "I ship across the stack Surge needs: React web experiences, Angular agent platforms, and React Native mobile apps — with a focus on performance, accessibility, and clear flows for verification and onboarding.",
  specialization2:
    "On the design side, I translate research and business requirements into interfaces, prototypes, and UI patterns that stay consistent from marketing pages through production apps.",
};

export const Experience = {
  category: "Experience",
  experience: [
    {
      id: 1,
      jobTitle: "Software Developer · UI/UX Designer · Mobile Developer",
      industry: "Surge, Ghana – present",
      tasks: [
        {
          id: 1,
          task: "Build and maintain Surge’s public web experience, internal Angular loan platform (Surge Atlas), and React Native customer app — from application flows to Ghana Card and facial verification.",
        },
        {
          id: 2,
          task: "Design and refine UI/UX for loan onboarding, agent workflows, and mobile journeys in close collaboration with product and engineering.",
        },
        {
          id: 3,
          task: "Implement responsive, accessible interfaces with React, Angular, and React Native, using shared patterns for forms, status, and error handling.",
        },
        {
          id: 4,
          task: "Prototype flows and visual systems to align marketing, product, and engineering before features ship.",
        },
      ],
    },
    {
      id: 2,
      jobTitle: "Product Designer",
      industry: "Sibyl Systems, Akosombo – Sept 2023 to 2024",
      tasks: [
        {
          id: 1,
          task: "Conducted usability tests with more than 30 users to better understand user behaviors and usability patterns on responsive devices, leading to optimized user experiences.",
        },
        {
          id: 2,
          task: "In less than 4 months, designed elegant flows and interactions for a mobile platform partnered with hardware systems, resulting in a 20% increase in user engagement.",
        },
        {
          id: 3,
          task: "Conducted user research, including interviews and usability testing, to inform design decisions, resulting in data-driven design solutions.",
        },
        {
          id: 4,
          task: "Led user-centered design projects resulting in improved satisfaction.",
        },
        {
          id: 5,
          task: "Fostered collaboration and consistency across teams by working closely with product managers, designers, and engineers.",
        },
      ],
    },
    {
      id: 3,
      jobTitle: "Software Engineer",
      industry: "Enyata, Ghana – East Legon – Apr 2022 to 2024",
      tasks: [
        {
          id: 1,
          task: "Successfully implemented unit testing infrastructure using Jest and Sonar Cloud, leading to a 10% decrease in software issues.",
        },
        {
          id: 2,
          task: "Optimized images and code, resulting in a 30-second increase in Time on Page, improving web performance and scalability.",
        },
        {
          id: 3,
          task: "Developed a fully responsive model ensuring compatibility with a wide range of device viewports, resulting in improved user experience.",
        },
        {
          id: 4,
          task: "Built reusable components and patterns for React applications across client projects.",
        },
        {
          id: 5,
          task: "Collaborated with designers and backend teams to ship production features for fintech and HR products.",
        },
      ],
    },
  ],
};

export const Skills = {
  category: "Skills",
  skills: [
    {
      id: 3,
      under: "Web Development",
      description: `I build production web apps with React and Angular — marketing sites, dashboards, and multi-step flows — with an emphasis on performance, responsive layout, and maintainable component structure.`,
    },
    {
      id: 4,
      under: "Mobile Development",
      description: `I develop React Native apps for iOS and Android, including identity verification, application tracking, and offline-friendly UX, keeping parity with web where it matters for users.`,
    },
    {
      id: 1,
      under: "UI/UX Design",
      description: `I turn user research and product goals into wireframes, prototypes, and polished UI — especially for fintech flows where clarity, trust, and error recovery matter.`,
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
    { id: 1, keyword: "React & Angular" },
    { id: 2, keyword: "React Native" },
    { id: 3, keyword: "UI/UX & Prototyping" },
    { id: 4, keyword: "Design Systems" },
    { id: 5, keyword: "Fintech Flows" },
    { id: 6, keyword: "Usability Testing" },
  ],
}

export const Clients = {
  category: "Clients worked with",
  clientList: [
    { id: 1, clientName: surgeClient, alt: "Surge", width: 120, height: 40 },
    {
      id: 2,
      clientName: kreditAfricaLogo,
      alt: "Kredit Africa",
      width: 120,
      height: 40,
    },
    {
      id: 3,
      clientName: dashqardClient,
      alt: "Dashqard",
      width: 120,
      height: 36,
    },
    { id: 4, clientName: sibyl, alt: "Sibyl Systems", width: 89, height: 32 },
    {
      id: 5,
      clientName: fredoEngineering,
      alt: "Fredo Engineering",
      width: 89,
      height: 32,
    },
  ],
};

export const AboutPageDetails = [
  {
    id: "zero-waste",
    client: { title: "client", description: "Sibyl Systems" },
    role: [
      { id: 1, title: "UI Researcher" },
      { id: 2, title: "UX Designer" },
    ],
    summary: "I lead the design on the first Zero Waste App",
    topImage: zeroWaste,
    problemStatement: {
      title: "problem statement",
      subtitle: `Trash pickup and delivery is a time-consuming and inconvenient task
    for many Ghanaians. It can be difficult to find a time that works
    for both the person who needs their trash picked up and the trash
    removal service. Additionally, trash removal services can be
    expensive, especially for large or bulky items.`,
    },
    topScreens: [
      { id: 1, img: zeroWasteHome, alt: "Zero waste home page" },
      { id: 2, img: zeroWaste404, alt: "Zero waste 404 page" },
    ],
    bottomScreens: [
      { id: 1, img: zeroWasteReferral, alt: "Zero waste referral page" },
      { id: 2, img: zeroWasteCalender, alt: "Zero waste calendar page" },
    ],
    projectGoals: {
      title: "Project Goals",
      goals: [
        { id: 1, paragraph: "Simplify trash pickup coordination." },
        { id: 2, paragraph: "Provide transparent cost information." },
        { id: 3, paragraph: "Ensure user-friendly mobile interface." },
        { id: 4, paragraph: "Gather quick user input for improvement." },
        {
          id: 5,
          paragraph:
            "Encourage eco-friendly waste disposal through the interface.",
        },
      ],
    },
    uielements: [
      { id: 1, element: colorsElements, alt: "color element" },
      { id: 3, element: typographyUi, alt: "typography element" },
      { id: 2, element: componentsUi, alt: "component element" },
    ],
    researchMethods: {
      title: "Research Methods",
      methods: [
        {
          id: 1,
          image: customerInterviews,
          paragraph: "Customer interviews",
        },
        {
          id: 2,
          image: marketResearch,
          paragraph: "Market research analysis",
        },
        { id: 3, image: prototypeTesting, paragraph: "Prototype testing" },
        { id: 4, image: customerJourney, paragraph: "Customer journey" },
        { id: 5, image: persona, paragraph: "Persona" },
        {
          id: 6,
          image: informationArch,
          paragraph: "Information Architecture",
        },
      ],
    },
    researchFinding: `We reached to 50 customers to gain insights on their needs,
    motivations and frustrations to help shape the app solutions.`,
    keyFocusAreas: {
      title: "Key focus areas",
      areas: [
        {
          id: 1,
          paragraph:
            "What are the challenges or barriers with app use & adoption?",
        },
        { id: 2, paragraph: "What’s important for a great app experience?" },
        {
          id: 3,
          paragraph:
            "How are customers interacting with their smart phones in- store?",
        },
        { id: 4, paragraph: "Lo-fi prototype feedback" },
      ],
    },
    customerNeeds: {
      title: "Core Customer needs",
      needs: [
        {
          id: 1,
          title: "Convenience in Scheduling",
          subtitle:
            "Users require a convenient and flexible scheduling system that allows them to pick a trash pickup time that aligns with their availability.",
        },
        {
          id: 2,
          title: "Cost-Effective Solutions",
          subtitle:
            "Users are looking for affordable trash pickup services, especially for large or bulky items.",
        },
        {
          id: 3,
          title: "Time and Effort Savings",
          subtitle:
            "Users want a solution that minimizes the time and effort required for trash removal.",
        },
        {
          id: 4,
          title: "Environmental Consciousness",
          subtitle:
            "Users are interested in contributing to environmental sustainability by reducing the impact of trash disposal.",
        },
      ],
    },
  },
  {
    id: "volta-voyage",
    client: { title: "client", description: "Sibyl Systems" },
    role: [
      { id: 1, title: "UI Researcher" },
      { id: 2, title: "UX Designer" },
    ],
    summary: "I lead the design on the first Volta Voyage App",
    topImage: voltaVoyage,
    problemStatement: {
      title: "problem statement",
      subtitle: `Tourists and visitors in Akosombo face challenges in exploring the diverse attractions and activities in the area due to unclear locations, limited information, and remote settings. They lack a reliable and user-friendly resource to discover, navigate to, and understand the offerings of various places of interest, resulting in missed opportunities to experience the beauty and culture of Akosombo.`,
    },
    topScreens: [
      { id: 1, img: voltaVoyageHome, alt: "volta voyage home page" },
      { id: 2, img: voltaVoyageExplore, alt: "volta voyage explore page" },
    ],
    bottomScreens: [
      { id: 1, img: voltaVoyageProfile, alt: "volta voyage profile page" },
      { id: 2, img: voltaVoyageRoom, alt: "volta voyage room page" },
    ],
    projectGoals: {
      title: "Project Goals",
      goals: [
        { id: 1, paragraph: "Analyze Akosombo tourism apps, identify strengths and weaknesses, and position your app with unique features for an enhanced tourist experience." },
        { id: 2, paragraph: "Determine what features, functionalities, and content users would find most valuable and user-friendly in the app." },
        { id: 3, paragraph: "Identify the specific challenges faced, pain points, and needs of tourists and visitors using existing apps when it comes to exploring attractions and activities." }
      ],
    },
    uielements: [
      { id: 1, element: colorsElements, alt: "color element" },
      { id: 3, element: typographyUi, alt: "typography element" },
      { id: 2, element: componentsUi, alt: "component element" },
    ],
    researchMethods: {
      title: "Research Methods",
      methods: [
        {
          id: 1,
          image: customerInterviews,
          paragraph: "Customer interviews",
        },
        {
          id: 2,
          image: marketResearch,
          paragraph: "Market research analysis",
        },
        { id: 3, image: prototypeTesting, paragraph: "Prototype testing" },
        { id: 4, image: customerJourney, paragraph: "Customer journey" },
        { id: 5, image: persona, paragraph: "Persona" },
        {
          id: 6,
          image: informationArch,
          paragraph: "Information Architecture",
        },
      ],
    },
    researchFinding: `I delved into a detailed analysis of several key players in the industry. This research involved studying and scrutinizing companies that are direct or potential competitors, including Peek, Redzy, Musement, and FareHarbor. I examined their profiles, offerings, market positioning, strengths, and weaknesses. The purpose of this in-depth exploration was to gain a comprehensive understanding of the competitive landscape and to identify opportunities and areas for differentiation within the market.`,
    keyFocusAreas: {
      title: "Key focus areas",
      areas: [
        {
          id: 1,
          paragraph:
            "Are potential users aware of the app and its benefits, or are there misconceptions that need to be addressed?",
        },
        { id: 2, paragraph: "Is the app easy to navigate, with clear menus and a logical flow?" },
        {
          id: 3,
          paragraph:
            "How can location-based services enhance the in-store experience for users?",
        },
        { id: 4, paragraph: "How are user opinions on specific features or functionalities captured through feedback forms within the prototype?" },
      ],
    },
    customerNeeds: {
      title: "Core Customer needs",
      needs: [
        {
          id: 1,
          title: "Secure Payment options",
          subtitle:
            "Values secure payment options and is cautious about sharing personal information online.",
        },
        {
          id: 2,
          title: "Efficient scheduling process",
          subtitle:
            `Busy work schedule leaves limited time for thorough travel planning, so 
            she seeks efficient solutions.`,
        },
        {
          id: 3,
          title: "Easy Map Navigation",
          subtitle:
            "Difficulties with map navigation, especially in remote areas where mobile signals are weak",
        },
      ],
    },
  }
];
