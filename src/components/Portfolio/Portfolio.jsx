import { useState } from 'react'
import './portfolio.css'
import Modal from '../Modal/Modal'

const Portfolio = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [ 
    // { 
    //   name : "Starship",
    //   deployedLink: "https://still-cliffs-68409.herokuapp.com/dashboard/app",
    //   image: require('../../assets/starship.png'),
    //   fadeDuration:'1000',
    //   description: 'StarShip provides users the platform to track stock market data. Users are able to track the market in general or they can search up a specific stock.',
    //   toolsUsed: ['React','MongoDb','NodeJs','Express','MUI','GraphQl', 'JWT', 'PWA']
    
    // },
    {
      name: "Netflix-clone",
      deployedLink: "https://marvelous-mousse-c43566.netlify.app/",
      image: require('../../assets/netflix.jpeg'),
      description: "Welcome to Netflix clone, a movie app that uses TMDB Data Base allows users to see movie trailers depending on gener.",
      fadeDuration: "1100",
      toolsUsed: ['React','TMDB DB','Firebase']
    },
    {
      name : "Amazon-clone",
      deployedLink: "https://clone-147f6.web.app",
      image: require('../../assets/amazon.jpeg'),
      fadeDuration:'1200',
      description:"Welcome to Amazon clone, an e-commerce app that users can login, cerate account, order product,pa online using stripe payment method,and can control his order",
      toolsUsed: ['React','Firebase','NodeJs','Express','Stripe']
    },
    {
      name:"Evangadi-Forum",
      deployedLink: "https://evangadiforum-frontend-72c.pages.dev/",
      image: require('../../assets/Evangadi.jpeg'),
      fadeDuration:'1300',
      description:"A web application designed to interact using question and answer user has to login or create a account to post a question and answer   .",
      toolsUsed: ['React','Node js','Express js','sql','JWT']
    },
    {
      name: "Alex Man And Van Moving Company",
      deployedLink: "https://alexmanandvan.co.uk/",
      image: require('../../assets/AlexMan.png'),
      fadeDuration:'1400',
      description:"A full stack web application that allows users to Set apointments, book Moving Days and so much more",
      toolsUsed: ['WordPress','wpmailSMTP Plugin']
    },
    
    // {
    //   name:"AwesomeEditorPWA",
    //   deployedLink: "https://salty-everglades-36024.herokuapp.com/",
    //   image: require('../../assets/text-editor.png'),
    //   fadeDuration:'1500',
    //   description:"A Progressive web application that allows users to create notes or code snippets with or without an internet connection so they can reliably retrieve them for later use",
    //   toolsUsed: ['indexDb','HTML/CSS','localStorage','Webpack']
    // }
  ]

  const handleClick = project => {
    setSelectedProject(project);
    setIsModalOpen(!isModalOpen);
  };




  return (
    <section id='portfolio'>
        <h5 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='700'>My most recent projects</h5>
        <h2 data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration='900'>My Portfolio</h2>

        <div className="container portfolio__container">

         { 
          projects.map( ({name,image,deployedLink,description,toolsUsed, fadeDuration}) => (
          <article className='portfolio__item' key={name} data-aos="fade-up" data-aos-anchor=".portfolio__container"  data-aos-duration={fadeDuration}
          >
              <div className="portfolio__item-image">
                  <img src={image} alt={`${name} app Screenshot`} />
              </div>
              <h3 
               className='portfolio__item-name'
               onClick={() => handleClick({name,image,deployedLink, toolsUsed, description})}
              >{name}</h3>

              <div className="portfolio__item-cta">
                <a className='btn' 
                  href={`https://github.com/Nathnael-Abera/${name}`}
                  target='_blank'
                  rel="noreferrer"
                >GitHub</a>
                <a className='btn btn-primary' 
                  href={deployedLink}
                  target='_blank'
                  rel="noreferrer"
                >Live Demo</a>
              </div>
          </article>
           ))
         }

        </div>

         {isModalOpen && (<Modal
           closeModal={handleClick}
           project={selectedProject}
         />)}
    </section>
  )
}

export default Portfolio