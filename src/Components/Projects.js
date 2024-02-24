import React from 'react';
import ProjectBox from './ProjectBox';
import MobeazeImage from '../images/mobeaze.png';
import ChatbotImage from '../images/chatbot-clg.png';
import ExamImage from '../images/exam-reg.png';
import SchoolImage from '../images/school-mgmt.png';
import GoldImage from '../images/gold.png';
import SampleImage from '../images/planets.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MobeazeImage} projectName="Mobeaze_Ecommerce_website" />
        <ProjectBox projectPhoto={ChatbotImage} projectName="Chatbot_for_College_Enquiry" />
        <ProjectBox projectPhoto={GoldImage} projectName="Sentiment_analysis_of_Gold" />
        <ProjectBox projectPhoto={SchoolImage} projectName="School_Management_System" />
        <ProjectBox projectPhoto={ExamImage} projectName="Exam_Registration_System" />
        <ProjectBox projectPhoto={SampleImage} projectName="House_Price_Prediction" />
        <ProjectBox projectPhoto={SampleImage} projectName="Emotion_Recognition" />
        <ProjectBox projectPhoto={SampleImage} projectName="Sales_Field_Tracker" />
        <ProjectBox projectPhoto={SampleImage} projectName="Forex_Candlestick" /> 
      </div>

    </div>
  )
}

export default Projects