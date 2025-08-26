// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  
  export const education = [
    {
      id: 0,
      school: "ITER SOA University, Bhubaneswar",
      date: "2023 - 2027",
      //grade: "8.56 CGPA",
      desc: "I am currently pursuing my Bachelor's degree (B.Tech) in Computer Science and Engineering at ITER, SOA University, Bhubaneswar. My coursework includes Data Structures, Algorithms, Web Development, and Software Engineering. I have actively participated in hackathons, and technical events, which have strengthened my practical knowledge and problem-solving skills. My academic journey so far has helped me build a strong foundation in computer science while nurturing my passion for full-stack development and emerging technologies.",
      degree: "Bachelor of Technology - B.Tech, Computer Science and Engineering",
    },
    {
      id: 1,
      school: "SBD International School,Bhadrak ",
      date: "2022 – 2023",
      //grade: "64.83%",
      desc: "I completed my class 12 education from SBD International School,Bhadrak, under the CBSE board, where I studied Physics, Chemistry, Biology and Mathematics ",
      degree: "CBSE(XII) - Science",
    },
    {
      id: 2,
      school: "SBD International School,Bhadrak ",
      date: "2020 – 2021",
      //grade: "81%",
      desc: "I completed my class 10 education from SBD International School,Bhadrak, under the CBSE board, where I studied Science. ",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "HiveMind",
      description:
        "I built a real-time discussion platform featuring user authentication, chat, and reputation scoring to encourage meaningful engagement. The frontend was developed using React.js with reusable components styled in TailwindCSS, ensuring a clean and consistent user interface. Additionally, I implemented tag-based search and an upvote/downvote system to improve content discoverability and highlight quality discussions.",
      
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Aditya-Gopal-Nayak/HiveMind-Frontend",
    },
    {
      id: 1,
      title: "InstaMark Smart Attendance",
      description:
        "I developed a Smart Attendance System that leverages face recognition and dynamic QR codes to ensure secure and efficient attendance tracking. The system incorporates fraud detection mechanisms such as spoofing prevention, device tracing, and IP monitoring to eliminate proxy attendance. Additionally, I built an end-to-end event management platform with real-time attendance tracking, providing a reliable and scalable solution for academic and organizational use.",
      
      tags: ["React JS", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Aditya-Gopal-Nayak/InstaMark-Smart_Attendance-"
        },
    {
      id: 2,
      title: "Personal Portolio",
      description:
        "A sleek and responsive personal portfolio website built using React.js and TailwindCSS, showcasing projects, skills, and achievements with smooth animations and a modern UI.",
      tags: ["React.js", "TailwindCSS"],
      github: "https://github.com/Aditya-Gopal-Nayak/Portfolio",
    },
    
  ];  