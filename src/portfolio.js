import LaptopIcon from '@material-ui/icons/Laptop'
import BrushIcon from '@material-ui/icons/Brush'
import StorageIcon from '@material-ui/icons/Storage'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import ProfileImage from './images/me_portrait.jpeg'
import SgLogo from './images/companies/sg-logo.png'
import LimLogo from './images/companies/3il-logo.png'
import UqacLogo from './images/companies/uqac-logo.jpg'
import CrciImg from './images/projects/crci.jpg'
import DeliciousImg from './images/projects/delicious.jpg'
import ChessImg from './images/projects/echecs.png'
import EfsImg from './images/projects/efs-gestion.jpg'
import PrixBImg from './images/projects/prixbanque.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '../public/index.html',
  title: 'NNB.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Benjamin NGABMEN',
  role: ['Ingénieur logiciel', 'Développeur full-stack', 'UI/UX Designer'],
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/benjamin-ngabmen-njawat-762317196/',
    github: 'https://github.com/benjaminwiseboy',
  },
}
const profile = {
  description:
    "Depuis tout petit, je nourris une passion ardente pour la création de nouvelles solutions technologiques à forte valeur ajoutée pour la société. D’ailleurs mon métier de rêve plus jeune était de devenir un inventeur de génie, tout comme Léonard de Vinci ou Nicolas Tesla.\n Ce rêve, je l'ai réalisé car aujourd'hui, je suis réellement devenu un inventeur, créateur de solutions informatique robustes, ergonomiques, maintenables et parfaitement taillées au besoin de l’utilisateur. Votre application, j’en fais mon affaire.",
  image: ProfileImage,
}
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CRCI',
    image: CrciImg,
    description: 'Plateforme web de recherche de chambre universitaire ',
    stack: ['Bootstrap', 'JS', 'Code igniter'],
    sourceCode: 'https://github.com/benjaminwiseboy/CRCI-UI',
    livePreview: 'www.crci.cm',
  },
  {
    name: 'Delicious',
    image: DeliciousImg,
    description: 'Application mobile de recettes de cuisine type Marmiton',
    stack: ['Android Studio', 'Kotlin'],
    sourceCode: 'https://github.com/benjaminwiseboy/Delicious',
    livePreview: 'https://github.com/benjaminwiseboy/Delicious',
  },
  {
    name: 'EFS Gestion',
    image: EfsImg,
    description:
      "Application de gestion d’une organisation de collecte de sang. Rédaction d'un cahier de charges complet",
    stack: ['JavaFX', 'Java', 'Rédaction'],
    sourceCode: 'https://github.com/dev-appli-21/g37-maxxxx',
    livePreview: 'https://github.com/dev-appli-21/g37-maxxxx',
  },
  {
    name: 'PrixBanque',
    image: PrixBImg,
    description:
      "Application de fintech. Rédaction d'une documentation d'architecture technique complète de l'application",
    stack: ['Java', 'Angular', 'Micro-services', 'Rédaction'],
    sourceCode: 'https://github.com/PP3-8INF853',
    livePreview: 'https://github.com/PP3-8INF853',
  },
  {
    name: "Jeu d'échecs",
    image: ChessImg,
    description:
      'Serveur multi-threading permettant de gérer des parties d’échec multi joueur',
    stack: ['Java', 'AOP'],
    sourceCode: 'https://github.com/benjaminwiseboy/Chess',
    livePreview: 'https://github.com/benjaminwiseboy/Chess',
  },
]

const services = [
  {
    icon: <StorageIcon className='icon' style={{ fontSize: 60 }} />,
    title: 'Architecture logicielle',
    description:
      'Je conçois pour vous un document d’architecture technique de votre application, tenant en compte vos exigences fonctionnelles et non fonctionnelles',
  },
  {
    icon: <CloudQueueIcon className='icon' style={{ fontSize: 60 }} />,
    title: 'Micro-services',
    description:
      'Je développe pour vous un ou plusieurs micro-services de votre application, répondant aux exigences et pouvant être facilement déployées sur le cloud.',
  },
  {
    icon: <LaptopIcon className='icon' style={{ fontSize: 60 }} />,
    title: 'Applications web',
    description:
      'Je conçois pour vous une application web moderne, utilisant des Framework les plus utilisés tels que React et Node JS. ',
  },
  {
    icon: <BrushIcon className='icon' style={{ fontSize: 60 }} />,
    title: 'Infographie et design',
    description:
      "Je vous propose des maquettes de site web modernes, ergonomiques et adaptées à l’expérience utilisateur. Je conçois également l'identité graphique de votre entreprise",
  },
]

const hardSkills = [
  {
    title: 'Java / Spring Boot',
    rate: 5,
  },
  {
    title: 'React JS / Jest / React Testing Library',
    rate: 5,
  },
  {
    title: 'Docker / Kubernetes / Jenkins',
    rate: 3,
  },
  {
    title: 'UML /  Architecture technique',
    rate: 4,
  },
  {
    title: 'Prototypage / UX Design / Infographie',
    rate: 6,
  },
]

const softSkills = [
  {
    title: 'Esprit d’analyse et de synthèse',
    rate: 6,
  },
  {
    title: 'Capacités rédactionnelles',
    rate: 4,
  },
  {
    title: 'Bilinguisme : Anglais / Français',
    rate: 5,
  },
  {
    title: 'Aisance relationnelle',
    rate: 5,
  },
  {
    title: 'Rigueur et sens de la critique',
    rate: 6,
  },
]
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const experience = {
  jobs: [
    {
      title: 'Développeur full stack Java / React Js',
      description:
        'Tâches réalisées : Correction de bugs, ajout de nouvelles fonctionnalités, Rédaction de tests front-end & back-end, Rédaction de la documentation, Création de pipelines de CI/CD automatiques, Création de dashboard de monitoring, Conception de maquettes d’application ',
      image: SgLogo,
      startDate: '2021',
      endDate: '2023',
      company: 'Société Générale ',
    },
  ],
  studies: [
    {
      title: 'Diplôme d’ingénieur informatique généraliste',
      description: 'Majeurs : Développement web & IA et robotique',
      image: LimLogo,
      startDate: '2020',
      endDate: '2023',
      school: 'Institut d’ingénierie informatique de Limoges (3iL)',
    },
    {
      title: 'Maîtrise en Informatique',
      description:
        'Semestre d’échange (Java professionnel, Développement mobile, UX design, Architecture d’applications d’entreprise, Business Intelligence)',
      image: UqacLogo,
      startDate: 'Sept 2022',
      endDate: 'Dec 2022',
      school: 'Université du Québec à Chicoutimi, Canada ',
    },
  ],
}
const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'benjamin.ngabmen@gmail.com',
}

export {
  header,
  about,
  projects,
  softSkills,
  hardSkills,
  skills,
  contact,
  profile,
  services,
  experience,
}
