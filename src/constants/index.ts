import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT: string = `As a passionate front-end developer and dedicated computer science student, I've honed my skills in cutting-edge technologies like React, TypeScript, JavaScript, HTML, and CSS. My journey in the tech world has been fueled by a relentless pursuit of innovation and excellence.`;

export const ABOUT_TEXT: string = `I am a dedicated front-end developer with a passion for creating efficient and user-friendly web applications. My journey began with summer training in college, where I honed my skills in HTML, CSS, JavaScript, React, and more. I specialize in building dynamic, responsive interfaces using technologies like TypeScript, Node.js, Express.js, and Python. I thrive in collaborative environments, solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects. Let's connect and bring innovative ideas to life!`;

export const EXPERIENCES: any[] = [];

interface Project {
  title: string;
  image: string; // Uncomment when images are imported
  description: string;
  technologies: string[];
  link: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "#"
  },
  {
    title: "Users Website",
    image: project2,
    description:
      "This is web site display users after fetch them from api and navigate from pages with react router",
    technologies: ["HTML", "CSS", "React", "React route", "Remix icon"],
    link: "https://ahmed7757.github.io/Users-React/"
  },
  {
    title: "Traveler Website",
    image: project3,
    description:
      "This is front end project and this site directed to non-Egyptians who wish to visit Egypt and take some trips to the most famous places in Egypt",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://ahmed7757.github.io/Traveler/"
  },
  {
    title: "Move it website",
    image: project4,
    description:
      "this is front end project and This site is a site for shipping goods online such as FedEx.",
    technologies: ["HTML", "Bootstrap"],
    link: "https://ahmed7757.github.io/move-it/"
  },
  {
    title: "Login Page",
    image: project5,
    description: "A simple Login and Register page.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://ahmed7757.github.io/Login-Page/#"
  }
];

export const CONTACT: { address: string; phoneNo: string; email: string } = {
  address: "Isbeko, Elsalam city, Cairo, Egypt ",
  phoneNo: "+201117590628",
  email: "ag8496001@gmail.com",
};

interface experience {
  title: string;
  type: string,
  description: string;
  technologies: string[];
}

export const Experiences: experience[] = [
  {
    title: "Tiba Academy Training",
    type: "Summer Training",
    description: "Front-End Summer training at Tiba Academy, which is where I enrolled as a computer science student. In this training, I learned front-end basics like HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"]
  },
  {
    title: "DEPI Internship",
    type: "Internship",
    description: "Interned for 6 months in the MERN stack at Digital Egypt Pioneers with the Ministry of Communications and Information Technology, where I learned modern web technologies such as React.js, Node.js, Express.js, and MongoDB.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "TailwindCSS", "React.js", "JQuery", "Node.js", "Express.js", "MongoDB"]
  }
]