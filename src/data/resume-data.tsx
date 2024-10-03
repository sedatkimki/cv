import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sedat Korkmaz",
  initials: "SK",
  location: "Izmir, Turkey",
  locationLink: "https://www.google.com/maps/place/Izmir",
  about: "Software developer experienced in web and mobile technologies.",
  summary:
    "I am a software developer with a strong background in computer engineering and 2 years of working experience. I am a creative and solution-oriented developer, committed to solving problems with the most efficient solutions. I prioritize code quality and performance optimization in the projects I work on. Throughout my internship experiences, I contributed actively to the teams I worked with, which helped me develop strong teamwork and communication skills. Currently, I focus on developing projects with React and React Native, using TypeScript in my professional life. I am also interested in mobile technologies and continue to expand my skills in Swift and SwiftUI. I am always open to continuous learning and adapting to new technologies. I value collaboration and knowledge sharing, and I strive to bring my technical expertise and problem-solving skills to dynamic and innovative teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68056590?v=4",
  contact: {
    email: "korkmz.sedat@gmail.com",
    tel: "+90 551 122 31 22",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sedatkimki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sedat-korkmaz-4a2581209/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/sedat_kimki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Ege University",
      degree: "Bachelor's Degree in Computer Engineering(GPA: 3.8/4.0)",
      start: "2022",
      end: "2024",
    },
    {
      school: "Bakırçay University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Innovance Consultancy",
      link: "https://www.innovance.com.tr/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "2024/10",
      end: "present",
      description:
        "I am part of a team developing a banking application that includes both an online banking platform and a mobile application, utilizing TypeScript, Next.js, React Native, and RTK Query. I work together with team members to design and implement essential features, including user authentication, account creation, transaction history, account management, settings, and transfer functionalities. Additionally, I contribute to maintaining the performance and reliability of these features in the production environment.",
    },
    {
      company: "Innovance Consultancy",
      link: "https://www.innovance.com.tr/",
      badges: ["Remote"],
      title: "Software Developer Intern(React/React Native)",
      start: "2024/02",
      end: "2024/10",
      description: "",
    },
    {
      company: "Arcelik Global",
      link: "https://www.arcelikglobal.com/",
      badges: ["Remote"],
      title: "Software Developer Intern PREP",
      start: "2022/12",
      end: "2024/02",
      description:
        "I worked on an employee management application called Connecta at Arçelik. In this project, I contributed to a module developed for employees to enter expenses. I utilized technologies such as React, Redux Saga, and Material UI.",
    },
    {
      company: "Producter",
      link: "https://producter.co/",
      badges: ["Remote"],
      title: "Frontend Developer Intern",
      start: "2022/07",
      end: "2022/10",
      description:
        "During my time at Producter, I worked on the development of a comprehensive cycle that included feedback collection, task management, roadmap tracking, and update sharing for teams. I developed a block text editor using slate.js and dndkit libraries for the Documentation module. I Built billing and plans pages using Stripe API, and created a custom checkout pageusing Stripe API for the payment screen. I also used GraphQL and Redux Toolkit technologies",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Web Technologies",
    "Mobile Technologies",
    "Database Management(SQL & NoSQL)",
    "Git version control",
    "Team Collaboration",
    "OOP",
    "Figma",
    "RESTful APIs",
    "System Design",
  ],
  projects: [
    {
      title: "RestroPOS",
      techStack: ["React", "TypeScript", "Vite", "Spring Boot", "Firebase"],
      description:
        "RestroPOS is a cloud-based digital solution that offers QR code-based menu and order management for restaurants, aiming to enhance operational efficiency.",
      link: {
        href: "https://github.com/sedatkimki/restroPOS",
      },
    },
    {
      title: "Dayanikli Gelecek",
      techStack: ["Next.js", "TypeScript"],
      description:
        "Dayanikli Gelecek is an open-source social responsibility project aimed at raising awareness among people in Turkey about earthquake preparedness.",
      link: {
        href: "https://dayanikli-gelecek.vercel.app/",
      },
    },
  ],
} as const;
