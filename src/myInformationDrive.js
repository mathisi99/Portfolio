import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PortfolioImg from "https://drive.google.com/file/d/12xZrO1j_lY1510Y3vNU6-jPxAweV7fy-/view?usp=sharing"
import keeperImg from "https://drive.google.com/file/d/1BJM__tXbKkg9tgs1lzNz8XiUJWzcuIrs/view?usp=sharing";
import todoImg from "https://drive.google.com/file/d/1lN34BYrQ9Qsf64c6r8M4yw_JVPf-6vKc/view?usp=sharing";
import reactHooksImg from "https://drive.google.com/file/d/1gi5lqlnhp_WMM3_YpyGZv4wa91-qvHEV/view?usp=sharing";
import AboutME from "https://drive.google.com/file/d/1Zj0c2S48YZRGatmdsL6tFOeZk8BOOvyI/view?usp=sharing"
import HeaderME from "https://drive.google.com/file/d/1tE74deEqEcB4rcvWKQEaiQEboZ6WyK6z/view?usp=sharing";
import AIImg from "https://drive.google.com/file/d/11nZr2djtEdEkU-lfSMVOxv_VSg-acUTC/view?usp=sharing";
import AVTR1 from "https://drive.google.com/file/d/1RNEsY2uPqfh7umVCIrHWuz_Dau0svmL4/view?usp=sharing"
import AVTR2 from "https://drive.google.com/file/d/1lkcw7T6PGpkgkzBGLLwR-Vx8O0UqlqV1/view?usp=sharing"
import AVTR3 from "https://drive.google.com/file/d/1wmOxTmVId0bk5VjsoXwiD2Pr97QOP0DJ/view?usp=sharing"
import AVTR4 from "https://drive.google.com/file/d/16VWVECkUkmD6duH3EoBpRwkNypTClzgf/view?usp=sharing"
import CVFullstack from 'https://drive.google.com/file/d/1M8Or5kfI_htw7hf-3RufY2B5Kq4RwIod/view?usp=sharing'
import ReactCertificate from "https://drive.google.com/file/d/1xuoLWVRY9s0mwVBgCFDmz8pqONHKl1Ht/view?usp=sharing"

const CVData = [
  {CV: CVFullstack, downloadDescription: "Download CV"},
  {CV: ReactCertificate, downloadDescription: "Download My React "},
]

const AboutData = {
  HeaderME:HeaderME,
  AboutME:AboutME
}

const SocialData = [
  {link: "https://shorturl.ae/xDiNn", icon: LinkedInIcon},
  {link: "https://shorturl.ae/fTQc7", icon: GitHubIcon },
  {link: "https://shorturl.ae/kDzW9", icon: FacebookIcon}
]

const ExperienceData = {
  frontend:{
    "HTML & CSS": "Experienced",
    "ES6" : "Intermediate",
    "React" : "Intermediate",
    "Bootstrap": "Experienced",
    "Mui material-ui": "Experienced",
    "TypeScript": "Experienced",
    "NextJS": "Intermediate"
  },
  backend:{
    "Nodejs": "Intermediate",
    "QueryOne" : "Intermediate",
    "MongoDB & Mongoose" : "Experienced",
  }
}

const ServicesData = [
  {service: "Build Website", contents: ["Build Customize Website", "Clarify Customer Needs", "Planning", "Giving Demo & Get Feedback", "Modify & Optimize", "Get Confirm", "Transfer"]},
  {service: "Build Computer Vision Model", contents: ["Reading Paper & Article to Gap Big Picture", "Consider Props & Cons of Model", "Build & Test", "Analyze Dataset & Find Improvement Direction"]}, 
  {service: "Solving Programming Problems/Projects", contents: ["Work as Freelancer", "Receive Problem from Freelancer", "Make clear request", "Programming", "Transmit project and understanding"]},
  {service: "Teaching Programming Concepts", contents: ["Teaching in University", "Sharing in Study Group"]},
]

const RecentWork = [
  {imgSrc: PortfolioImg, imgAlt: "Portfolio", projectGithubLink: "https://github.com/mathisi99/Portfolio", projectLink: ""},
  {imgSrc: keeperImg, imgAlt: "Note Keeper", projectGithubLink: "https://github.com/mathisi99/Note-Keeper", projectLink: ""},
  {imgSrc: todoImg, imgAlt: "Todo List", projectGithubLink: "https://github.com/mathisi99/Todolist", projectLink: ""},
  {imgSrc: reactHooksImg, imgAlt: "React Hooks", projectGithubLink: "https://github.com/mathisi99/useCallback-React", projectLink: ""},
  {imgSrc: AIImg, imgAlt: "AI Personal project", projectGithubLink: "https://github.com/Ronpie", projectLink: ""},
]



const testimonialData = [
  {avatar: AVTR1, name: "Test User 1", content: "High quality Product"},
  {avatar: AVTR2, name: "Test User 2", content: "High quality Product"},
  {avatar: AVTR3, name: "Test User 3", content: "High quality Product"},
  {avatar: AVTR4, name: "Test User 4", content: "High quality Product"},
]


const sectionData = [
  {text: "Home", linkTo:"#home"},
  {text: "About", linkTo:"#about"},
  {text: "Experience", linkTo:"#experience"},
  {text: "Services", linkTo:"#services"},
  {text: "Portfolio", linkTo:"#portfolio"},
  {text: "Testimonials", linkTo:"#testimonials"},
  {text: "Contact", linkTo:"#contact"},
]

export {CVData, AboutData, SocialData, ExperienceData, ServicesData, RecentWork, sectionData, testimonialData}