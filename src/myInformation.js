import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const CVData = [
  {CV: process.env.PUBLIC_URL + "/resource/CV_Fullstack.pdf", downloadDescription: "Download CV"},
  {CV: process.env.PUBLIC_URL + "/resource/WebDevelopementNodeJSReactJs.pdf", downloadDescription: "Download My React "},
]

const AboutData = {
  HeaderME:process.env.PUBLIC_URL + "/resource/me3.png",
  AboutME:process.env.PUBLIC_URL + "/resource/me1.png"
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
  {imgSrc: process.env.PUBLIC_URL + "/resource/portfolioimg.jpg", imgAlt: "Portfolio", projectGithubLink: "https://github.com/mathisi99/Portfolio", projectLink: "https://portfoliozhan.herokuapp.com"},
  {imgSrc: process.env.PUBLIC_URL + "/resource/keeper.png", imgAlt: "Note Keeper", projectGithubLink: "https://github.com/mathisi99/Note-Keeper", projectLink: ""},
  {imgSrc: process.env.PUBLIC_URL + "/resource/todo.png", imgAlt: "Todo List", projectGithubLink: "https://github.com/mathisi99/Todolist", projectLink: ""},
  {imgSrc: process.env.PUBLIC_URL + "/resource/react_hook.png", imgAlt: "React Hooks", projectGithubLink: "https://github.com/mathisi99/useCallback-React", projectLink: ""},
  {imgSrc: process.env.PUBLIC_URL + "/resource/gioi-thieu-ai.jpg", imgAlt: "AI Personal project", projectGithubLink: "https://github.com/Ronpie", projectLink: ""},
]



const testimonialData = [
  {avatar: process.env.PUBLIC_URL + "/resource/avatar1.jpg", name: "Test User 1", content: "High quality Product"},
  {avatar: process.env.PUBLIC_URL + "/resource/avatar2.jpg", name: "Test User 2", content: "High quality Product"},
  {avatar: process.env.PUBLIC_URL + "/resource/avatar3.jpg", name: "Test User 3", content: "High quality Product"},
  {avatar: process.env.PUBLIC_URL + "/resource/avatar4.jpg", name: "Test User 4", content: "High quality Product"},
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