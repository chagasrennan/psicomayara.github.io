/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const birthDate = new Date("1992-09-15");
const currentDate = new Date();
const myage = Math.floor((currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

const firstxp = new Date("2012-01-01");
const totalxp = Math.floor((currentDate - firstxp) / (365.25 * 24 * 60 * 60 * 1000));

const greeting = {
  username: "Home",
  title: "Mayara Medeiros Costa",
  subTitle: emoji(
    `Psicóloga Clínica`
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/17ylDJ0VQmW2Ep32ZvoLaPLeQ0PlzIdSh/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // display: True, // Set true to display this section, defaults to false
  // github: "https://github.com/chagasrennan",
  // linkedin: "https://www.linkedin.com/in/rseimetz/",
  // gmail: "chagasrennan@gmail.com",
  instagram: "https://www.instagram.com/mayaracostapsi/",
  whatsapp: "5521996243504",
  youtube: "@mayaracostapsi",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Cuidado psicológico fundamentado em ciência e excelência.",
  subTitle: "Sou Mayara Costa, psicóloga clínica especializada em Terapia Cognitivo-Comportamental (TCC).Ajudo adolescentes e adultos a lidarem com ansiedade, estresse e outras questões emocionais,sempre com base em métodos embasados cientificamente."  ,
  skills: [
    "Meu objetivo é oferecer um atendimento acolhedor, focado em ajudar você a superar desafios,conquistar equilíbrio e viver de forma mais leve e significativa.",
    "Se você busca cuidadopsicológico de confiança, estou aqui para caminhar ao seu lado. Vamos começar sua jornada detransformação?",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "Data Science",
    //   fontAwesomeClassname: "fas fa-chart-line"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Federal University of Rio de Janeiro - UFRJ",
      logo: require("./assets/images/ufrj-vertical-cor-rgb-telas.png"),
      subHeader: "Doctor of Science in Industrial Engineering - Operations Research",
      duration: "June 2015 - September 2022",
      desc: "Planning offshore supply deliveries with multiproduct vessels",
      descBullets: [
        "Interniship at CIRRELT - Centre interuniversitaire de recherche sur les reseaux d'entreprise, la logistique et le transport. Montreal - Canada",
      ]
    },
    {
      schoolName: "Federal University of Rio de Janeiro - UFRJ",
      logo: require("./assets/images/ufrj-vertical-cor-rgb-telas.png"),
      subHeader: "Master of Science in Industrial Engineering - Operations Research",
      duration: "March 2013 - May 2015",
      desc: "The Berth Scheduling Problem for Offshore Supply Operations",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Fluminense Federal University - UFF",
      logo: require("./assets/images/UFF_brasao.png"),
      subHeader: "Bachelor in Industrial Engineering",
      duration: "March 2008 - December 2012",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Portuguese - Native", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "English - Fluent",
      progressPercentage: "100%"
    },
    {
      Stack: "French - Advanced",
      progressPercentage: "80%"
    },
    {
      Stack: "German - Basic",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Me sinto sempre preocupado e sobrecarregado.",
      desc: "Você tem a sensação de que sua mente nunca descansa? Pensamentos constantes e preocupações podem ser sinais de ansiedade. Entenda como a terapia pode ajudar a recuperar sua calma.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    {
      role: "Estou sempre cansado, mesmo sem fazer muito.",
      desc: "Se o cansaço físico e emocional tem tirado sua energia, pode ser mais do que apenas estresse.Descubra como a terapia pode identificar a causa e trazer alívio.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    {
      role: "Nada me deixa realmente feliz.",
      desc: "Aquela alegria que você costumava sentir parece distante? Saiba como a terapia pode ajudá-lo aredescobrir o prazer de viver.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    {
      role: "Eu me preocupo demais com o futuro.",
      desc: "A insegurança sobre o amanhã pode ser paralisante. Na terapia, você aprende a viver o presente e criar estratégias para lidar com as incertezas.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    {
      role: "Tenho dificuldade em lidar com mudanças.",
      desc: "Mudanças, mesmo as positivas, podem ser desafiadoras. Veja como a terapia pode ajudá-lo a se adaptar com mais segurança e equilíbrio.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    {
      role: "Sinto que não sou bom o suficiente.",
      desc: "Pensamentos de autocrítica constante podem minar sua autoestima. A terapia ajuda você aconstruir uma relação mais saudável consigo mesmo.",
      companylogo: require("./assets/images/tormented.jpeg"),
    },
    
  ]
};

const testimonials = {
  display: true,
  testimonials: [
    {
      text: "O Consultório de psicologia foi incrível! O atendimento foi acolhedor e profissional, e o ambiente era muito acolhedor. Recomendo a todos que procuram um espaço de apoio e escuta. Muito obrigado Victória!",
      name: "Leonel Messi",
      image: require("./assets/images/DESTAQUES_1.png")
    },
    {
      text: "O Consultório de Psicologia foi incrível! O atendimento foi excepcional e o profissionalismo da equipe foi impressionante. Fiquei muito satisfeito com o serviço prestado e recomendo a todos que procuram ajuda psicológica. Muito obrigado, Victória!",
      name: "Cristiano Ronaldo",
      image: require("./assets/images/DESTAQUES_1.png")
    },
    {
      text: "O Consultório de Psicologia foi incrível! O atendimento foi excepcional e o profissionalismo da equipe foi impressionante. Fiquei muito satisfeito com o serviço prestado e recomendo a todos que procuram ajuda psicológica. Muito obrigado, Victória!",
      name: "Neymar Jr",
      image: require("./assets/images/DESTAQUES_1.png")
    },
    // Add more testimonials
  ]
};

export const media = {
  display: true,
  items: [
    {
      videoId: "897SEqrooOI", // YouTube video ID
      title: "A terapia cognitiva pode mudar sua vida! "
    },
    {
      videoId: "TV-Ftkz2mWE",
      title: "O que é Psicologia baseada em evidências?"
    },
    {
      videoId: "_fvhlI4njxQ",
      title: "Psicologia é ciência!"
    },
    // Add more media items
  ]
};


export const faq = {
  display: true,
  faqs: [
    {
      question: "Quais serviços de psicologia você oferece?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Qual faixa etária você atende?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Você trabalha com atendimento presencial?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Aceita convênio?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Como Agendar?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    // Add more FAQs
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "fasle", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ANP Award for Technological Innovation",
      subtitle:
        "Finalist - 2018",
      image: require("./assets/images/Anp-logo-3.png"),
      imageAlt: "ANP Prize",
      footerLink: [
        {
          name: "View ANP website (portuguese only)",
          url: "https://www.gov.br/anp/pt-br/assuntos/tecnologia-meio-ambiente/premio-anp-inovacao-tecnologica/edicoes-anteriores/premio-anp-inovacao-tecnologica-2018"
        },
      ]
    },
    {
      title: "Brazilian Physics Olympiad",
      subtitle:
        "Silver Medal - 2007",
      image: require("./assets/images/obf.webp"),
      imageAlt: "Obf",
      footerLink: [
        {
          name: "OBF Website",
          url: "https://sec.sbfisica.org.br/olimpiadas/obf2007/resultadofinal_1serie.htm"
        }
      ]
    },
    {
      title: "Rio de Janeiro State Chemistry Olympiad",
      subtitle:
        "Silver Medal  - 2007 ",
      image: require("./assets/images/oqrj.jpeg"),
      imageAlt: "Oqrj",
      footerLink: [
        {
          name: "OQRJ Website",
          url: ""
        }
      ]
    },
    {
      title: "Rio de Janeiro State Mathematics Olympiad",
      subtitle:
        "Bonze Medal  - 2007",
      image: require("./assets/images/omerj_sq.png"),
      imageAlt: "Omerj",
      footerLink: [
        {
          name: "OMERJ Website",
          url: "https://sites.google.com/site/omerj314/lista-de-premiados?authuser=0"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

// Publications Section

const publicationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Relax-and-fix heuristics for the Multi-Commodity PSV Planning Problem with Order Selection and Time Window Decisions",
      logo: require("./assets/images/academic.png"),
      subHeader: "Computers & Industrial Engineering",
      duration: "March 2023",
      desc: "https://doi.org/10.1016/j.cie.2023.109040",
      // descBullets: [
      //   "",
      // ]
    },
    {
      schoolName: "A solution framework for the integrated periodic supply vessel planning and port scheduling in oil and gas supply logistics",
      logo: require("./assets/images/academic.png"),
      subHeader: "Optimization and Engineering",
      duration: "April 2022",
      desc: "https://doi.org/10.1007/s11081-022-09723-6",
    },
    {
      schoolName: "A solution framework for the integrated problem of cargo assignment, fleet sizing, and delivery planning in offshore logistics",
      logo: require("./assets/images/academic.png"),
      subHeader: "Computers & Industrial Engineering",
      duration: "November 2021",
      desc: "https://doi.org/10.1016/j.cie.2021.107653",
    },
    {
      schoolName: "Programação de Cargas em Barcos de Suprimento de Unidades Marítimas",
      logo: require("./assets/images/conference.png"),
      subHeader: "Anais do Simpósio Brasileiro de Pesquisa Operacional",
      duration: "2018",
      desc: "https://doi.org/10.59254/sbpo-2018-85367",
    },
    {
      schoolName: "Decision suport tool applied to supply vessel scheduling in offshore logistics",
      logo: require("./assets/images/conference.png"),
      subHeader: "Rio Oil & Gas Conference, 19., 2018, Rio de Janeiro",
      duration: "2018",
      desc: "https://biblioteca.ibp.org.br/scripts/bnmapi.exe?router=upload/32127",
    },
    {
      schoolName: "The problem of scheduling offshore supply port operations",
      logo: require("./assets/images/conference.png"),
      subHeader: "XVIII Latin-Iberoamerican Conference on Operations Research, CLAIO 2016",
      duration: "2018",
      desc: "https://easychair.org/smart-program/CLAIO-2016/2016-10-03.html#talk:32088",
    },
  ]
};


const contactInfo = {
  title: emoji("Agende uma consulta"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  // email_address: "chagasrennan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  testimonials,
  openSource,
  bigProjects,
  achievementSection,
  publicationInfo,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
