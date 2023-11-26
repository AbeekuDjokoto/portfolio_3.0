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