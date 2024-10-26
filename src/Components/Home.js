import React from 'react';
import Lottie from  "lottie-react";
import Coding from "../LottieFiles/coding.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/photo.png';
import Skills from './Skills.js';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SATYAVARSSHENI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={Coding} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I have a solid foundation in <b>Python programming, Java Programming, MongoDB,
          ReactJS and JavaScript, Spring Framework, Testing </b>. 
          <br/>
          Currently working as an <b>EDGE IT Analyst at DTCC </b>
         <br/>
          I also have a great learning experience
          as a <b>backend developer(Developed APIs using Spring tool Suite)</b> in my past internship at DTCC.
          <br /><br />
          What sets me apart is not only my technical skills but also my ability to collaborate effectively
          within multidisciplinary teams. I thrive in fast-paced environments, where creative 
          problem-solving and continuous learning are essential.   
          <br /><br />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Springboot' />
        
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='C' />
        <Skills skill='Javascript' />
        <Skills skill='PHP' />

        <Skills skill='MongoDb' />
        <Skills skill='Postgresql'/>
        <Skills skill='MySQL' />
        <Skills skill='Oracle' />
        <Skills skill='Cloud' />
        <Skills skill='ML'/>
        <Skills skill='AI'/>

        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Streamlit' />

        <Skills skill='AWS'/>
        <Skills skill='Selenium'/>
        <Skills skill='ApacheKafka'/>
        
      </div>
    </div>
  )
}

export default Home