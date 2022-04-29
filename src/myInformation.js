import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PortfolioImg from "./resource/portfolioimg.jpg"
import keeperImg from "./resource/keeper.png";
import todoImg from "./resource/todo.png";
import reactHooksImg from "./resource/react_hook.png";
import AIImg from "./resource/gioi-thieu-ai.jpg";
import AboutME from "./resource/me1.png";
import HeaderME from "./resource/me3.png";
import AVTR1 from "./resource/avatar1.jpg"
import AVTR2 from "./resource/avatar2.jpg"
import AVTR3 from "./resource/avatar3.jpg"
import AVTR4 from "./resource/avatar4.jpg"
import CVFullstack from './resource/CV_Fullstack.pdf'
import ReactCertificate from "./resource/WebDevelopementNodeJSReactJs.pdf"
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