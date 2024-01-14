
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sedat Korkmaz",
  initials: "SK",
  location: "Izmir, Turkey",
  locationLink: "https://www.google.com/maps/place/Izmir",
  about:
    "A computer engineering student and software developer experienced in web technologies.",
  summary:
    "I am a senior computer engineering student and a software developer with 1.5 years of internship experience. As a creative and solution-oriented software developer, I am committed to solving problems with the most efficient solutions. I work carefully on code quality and performance optimization in the projects I implement or participate in. I have been actively contributed in my previous internship experiences and in the process, I have developed my skills in working in a team and communicating effectively. I am actively working on web technologies, especially in my internship experience, I have successfully used React, JavaScript and Redux technologies. I am also focusing on Swift and React Native to improve myself in mobile programming. I am always open to continuous learning and adapting to new technologies. I value collaboration and knowledge sharing within a team, and I can contribute using my technical knowledge and problem solving skills by working as part of a dynamic and innovative team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68056590?s=400&u=9ac4f57e4cca3caf7b97f095aeb2c87297646617&v=4",
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
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2022",
      end: "present(expected graduation 2024)",
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
      company: "Arcelik Global",
      link: "https://www.arcelikglobal.com/",
      badges: ["Remote"],
      title: "Software Developer Intern PREP",
      start: "2022/12",
      end: "present",
      description:
        "I am working on an employee management application called Connecta at Arçelik. In this project, I am working on a module developed for employees to enter expenses. I contribute to this project by using technologies such as React, Redux Saga and Material UI.",
    },
    {
      company: "Producter",
      link: "https://producter.co/",
      badges: ["Remote"],
      title: "Frontend Developer Intern",
      start: "2022/07",
      end: "2022/10",
      description:
        "During my time at Producter, I worked on the development of a comprehensive cyclethat included feedback collection, task management, roadmap tracking, and update sharing for teams. I developed a block text editor using slate.js and dndkit libraries for the Documentation module. I Built billing and plans pages using Stripe API, and created a custom checkout pageusing Stripe API for the payment screen. I also used GraphQL and Redux Toolkit technologies",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "SQL",
    "NoSQL",
    "Git",
    "Figma"
  ],
  
} as const;
