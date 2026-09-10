// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import nodeLogo from './assets/tech_logo/node.png';
import expressLogo from './assets/tech_logo/express.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postmanLogo from './assets/tech_logo/postman.png';



// Experience Section Logo's
import ridezzup from './assets/company_logo/Ridezzup.png';


// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu_logo.png';
import upboardLogo from './assets/education_logo/upboard_logo.png';


// Project Section Logo's

import AILogo from './assets/work_logo/notepilot.png';
import EMSLogo from './assets/work_logo/ems_login.png';
import TutorLogo from './assets/work_logo/E-Tutor.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo },
      { name: 'MongoDB', logo: mongodbLogo },
       { name: 'MySQL', logo: mysqlLogo },
      
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
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Postman', logo: postmanLogo }
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ridezzup,
      role: "Web Developer/ Frontend Developer",
      company: "Ridezzup",
      date: "July 2025 - October 2025",
      desc: "Worked on developing and maintaining responsive web pages using HTML, CSS, JavaScript, and React. Assisted in improving UI components, fixing layout issues, and ensuring cross-browser compatibility. Collaborated with team members to update content, enhance user experience, and support ongoing web development tasks.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
       
    },
   ];
  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      imgClass: "w-40 h-15",
      school: "Dr. AKTU University, Lucknow",
      date: "April 2021 - July 2025",
      grade: "7.24 CGPA",
      desc: " I am a B.Tech student in Computer Science & Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU) with a strong interest in the IT sector. I have worked on multiple projects using HTML, CSS, JavaScript, and React, which helped me build a solid foundation in software development. I am eager to start my career in the IT industry where I can apply my technical skills, learn continuously, and grow as a software professional.",
      degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    },
    {
      id: 1,
      img: upboardLogo,
       imgClass: "w-20 h-20", 
      school: "V N J I C Maharajganj",
      date: "Apr 2020 - Mar 2021",
      grade: "72%",
      desc: "Completed Class 12th from UP Board with a focus on Physics, Chemistry, and Mathematics. Gained a solid understanding of scientific concepts and logical reasoning, building a strong base for engineering and technical studies.",
      degree: "UP(XII) - PCM",
    },
    {
      id: 2,
      img: upboardLogo,
       imgClass: "w-20 h-20", 
      school: "V N J I C Ratanpur",
      date: "Apr 2019 - March 2020",
      grade: "83.33%",
      desc: "Completed Class 10th from UP Board with a strong academic foundation. Studied core subjects including Mathematics, Science, and English, which helped develop analytical thinking and problem-solving skills.",
      degree: "UP(X) - PCM",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "NotePilot — AI Exam Notes Generator (MERN Stack)",
      description:
      "Built responsive full-stack features with React, Node.js, Express, MongoDB, and AI integration to improve student productivity and learning outcomes.",
      image: AILogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB", "JWT", "Google Gemini API" ],
      github: "https://github.com/abhizit-14ry/NotePilot---AI-Exam-Notes-Generator",
      webapp: "",
    },
    
    {
      id: 1,
      title: "Employee Management System (MERN Stack)",
      description:
      "Built a full-stack Employee Management System using MongoDB, Express.js, React, and Node.js to streamline employee records, roles, attendance, and administrative workflows.",
      image: EMSLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB", "Cloudinary" ],
      github: "https://github.com/abhizit-14ry/Employee-Management-System",
      webapp: "",
    },  
    
    
    {
      id: 2,
      title: "E-Tutor — Online Learning Platform (Frontend)",
      description:
      "Built a responsive E-Tutor web application using React.js, featuring modern UI/UX, interactive learning modules, seamless navigation, and optimized performance for an enhanced online learning experience.",
      image: TutorLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Vite", "React DOM"],
      github: "https://github.com/abhizit-14ry/E-Tutor-Website.git",
      webapp: "https://e-tutor-website.vercel.app/",
    },
    
  ];  
