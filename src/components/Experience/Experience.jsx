import React from 'react'
import './experience.css'
// import { BsPatchCheckFill } from 'react-icons/bs'
import html from "../../assets/html5.jpeg"
import css from "../../assets/css3.jpeg"
import js from "../../assets/js.png"
import jquery from "../../assets/jquery.png"
import bootstrap from "../../assets/bootstrap.jpeg"
import tailwind from "../../assets/tailwind.png"
import react from "../../assets/react.jpeg"
import vue from "../../assets/vue.jpeg" 
import node from "../../assets/node.png" 
import express from "../../assets/express.jpeg"
import mongo from "../../assets/mongo.png"
import rest from "../../assets/rest.png"
import sql from "../../assets/sql.png" 
import data from "../../assets/data.png" 
import api from "../../assets/api.png" 
import jwt from "../../assets/jwt.png" 


const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='900'>What are my skills?</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#experience"  data-aos-duration='700'>My Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-right" data-aos-anchor=".experience__container"  data-aos-duration="900">
        <h3>Frontend Development</h3>
            <div className="experience__content">
              {/* HTML  */}
              <article className="experience__details">
              <div>
                <img className='experience__details-image' src={html} alt="" />
                <h4>HTML 5</h4>
                </div>
              </article>

              {/* CSS  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={css} alt="" />
                <h4>CSS 3</h4>
                </div>
              </article>

              {/* JavaScript  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={js} alt=""  />
                <h4>JavaScript</h4>
                </div>
            </article>
            
                {/* Jquery  */}
                <article className="experience__details">
                <div>
                <img className='experience__details-image' src={jquery} alt=""  />
  
                <h4>JQUERY</h4>
                </div>
            </article>            

              {/* bootstrap  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={bootstrap} alt=""  />
                <h4>BootStrap</h4>
                </div>
              </article>
              {/* Tailwind  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={tailwind} alt=""  />
                <h4>Tailwind CSS</h4>
                </div>
              </article>

              {/* React  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={react} alt=""  />
                <h4>React JS</h4>
                </div>
            </article>
            
                {/* Vue  */}
                <article className="experience__details">
                <div>
                <img className='experience__details-image' src={vue} alt=""  />
                <h4>Vue JS</h4>
                </div>
            </article>
            
            </div>
        </div>

        {/* BACKEND sKILLS */}
      
        <div className="experence__backend" data-aos="fade-left" data-aos-anchor=".experience__container"  data-aos-duration="1200">
           <h3>Backend Development</h3>
            <div className="experience__content">
              {/* Node JS  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={node} alt="" />
                <h4>Node JS</h4>
                </div>
              </article>
              {/* Express  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={express} alt="" />
                <h4>Express JS</h4>
                
                </div>
            </article>
            
              {/* MongoDB  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={mongo} alt="" />
                <h4>MongoDB</h4>
                
                </div>
              </article>
              
              {/* MySQL  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={sql} alt="" />
                <h4>MySQL</h4>
                
                </div>
              </article>

              {/* REST  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={rest} alt="" />
                <h4>REST</h4>
                
                </div>
              </article>

              {/* JWT  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={jwt} alt="" />
                <h4>JWT</h4>
                </div>
            </article>
                {/* API design  */}
                <article className="experience__details">
                <div>
                <img className='experience__details-image' src={api} alt="" />
                <h4>API Design</h4>
                </div>
              </article>

              {/* Database Design  */}
              <article className="experience__details">
                <div>
                <img className='experience__details-image' src={data} alt="" />
                <h4>DB Design</h4>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience