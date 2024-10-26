import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import femcoder from '../LottieFiles/femcoder.json';
import Hobbies from '../LottieFiles/hobbies.json';
import Education from '../LottieFiles/education.json';
import Work from '../LottieFiles/working.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Satyavarssheni</b> and I am from Chennai, India.
            I'm <b> currently working as an</b> <b>EDGE IT Analyst(Full-Time) at DTCC, Chennai</b>. <br/><br/>
            I also have a valuable experience as a <b>Software developer intern</b> at DTCC, Chennai.
            <br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute my skills and knowledge and actively participate in projects. 
            I am continuously looking for ways to improve my technical skills and knowledge.
            Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={femcoder} 
              loop={true} 
            />
            
          </Tilt>
        </div>
      </div>
      <div className='AboutPage'>
      <div className='AboutText'>
          <h1 className='AboutTextHeading' >Work Experience</h1>
          <p>
          <b>DTCC</b>-Depository Trust & Clearing Corporation<br></br><br></br>
            <b>EDGE IT Analyst</b> July 2024 - Current
            <br/>
          I developed a <b>Kafka-based application for in-order data processing</b> using <b>Java Spring Framework</b>. <br/>
          Currently, I am working on a <b>Distrubed Processing based project</b> and also being trained in <b>AWS and DevOps</b>, with experience in backend development for <b>REST and batch applications</b>, along with <b>test frameworks, automation testing and Selenium</b>.
          <br /><br />
            <b>DTCC</b>-Depository Trust & Clearing Corporation<br></br><br></br>
            <b>Software Developer Intern</b> 2 months - June & July 2023
            <br></br>
            worked as a <b>Backend Developer</b> on Forex candlestick project (A trade analysis project)<br></br>
            
            Gained <b>hands-on experience in real-time project execution </b> and enjoyed a rewarding
              learning experience while contributing to project success.<br></br>
          </p>
        </div>
        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Work} 
              loop={true} 
            />           
          </Tilt>
        </div>
        </div>
      <div className='AboutPage'>
      <div className='AboutText'>
          <h1 className='AboutTextHeading' >Education</h1>
          <p>
            <b>LICET</b>-Loyola-ICAM College of Engineering and Technology<br></br><br></br>
            <b>B.E Computer Science and Engineering</b> Nov 2020 - Expected graduation date - June 2024
            <br></br>
            <b>CGPA - 9</b><br></br>
            Participated in <b>Innovathon, Technoteen, TechnoVIT, SurveySparrow hackathon</b>
            <br></br>
            Won 1st place in <b>Cybersecurity Pals Quiz</b><br></br>
            Won 3rd place in <b>Makeathon competition</b><br></br><br/>
            <b>Velammal Vidhyashram</b><br></br><br></br>
            <b> 10th grade </b>-96%  <br/>
            <b> 12th grade </b>-93%
            <br/><br/>
          </p>
        </div>
        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Education} 
              loop={true} 
            />           
          </Tilt>
        </div>
        </div>
        <div className='AboutPage'>
      <div className='AboutText'>
          <h1 className='AboutTextHeading' >Languages</h1>
          <p>
            <b>English</b>-Advanced<br></br>
            <b>Tamil</b>-Advanced<br></br>
            <b>Telugu</b>-Native<br></br>
            <b>Hindi</b>-Basic<br></br>
          </p><br></br>
          <h1 className='AboutTextHeading' >Hobbies</h1>
          <p>
            Reading books and comics<br></br>
            Playing Carrom and badminton<br></br>
          </p>
        </div>
        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Hobbies} 
              loop={true} 
            />           
          </Tilt>
        </div>
        </div>

    </>
  )
}

export default About