import React from 'react';
import ProjectBox from './ProjectBox';
import MobeazeImage from '../images/mobeaze.png';
import ChatbotImage from '../images/chatbot-clg.png';
import ExamImage from '../images/exam-reg.png';
import SchoolImage from '../images/school-mgmt.png';
import GoldImage from '../images/gold.png';
import SampleImage from '../images/planets.png';
import KafkaImage from '../images/kafka.png';
import EmotionImage from '../images/speechrecog.png';
import ForexImage from '../images/candlestick.jpg';
import HouseImage from '../images/house.png';
import cbdpImage from '../images/cbdp.png';
import expenseImage from '../images/expense.png';
import cbdptImage from '../images/cbdpt.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={cbdptImage} projectName="CBDP_Twitter_Clone" />
        <ProjectBox projectPhoto={cbdpImage} projectName="Cyberbullying_DetectionPrevention" />
        <ProjectBox projectPhoto={MobeazeImage} projectName="Mobeaze_Ecommerce_website" />
        <ProjectBox projectPhoto={ChatbotImage} projectName="Chatbot_for_College_Enquiry" />
        <ProjectBox projectPhoto={GoldImage} projectName="Sentiment_analysis_of_Gold" />
        <ProjectBox projectPhoto={SchoolImage} projectName="School_Management_System" />
        <ProjectBox projectPhoto={ExamImage} projectName="Exam_Registration_System" />
        <ProjectBox projectPhoto={HouseImage} projectName="House_Price_Prediction" />
        <ProjectBox projectPhoto={EmotionImage} projectName="Emotion_Recognition" />
        <ProjectBox projectPhoto={SampleImage} projectName="Sales_Field_Tracker" />
        <ProjectBox projectPhoto={ForexImage} projectName="Forex_Candlestick" />
        <ProjectBox projectPhoto={KafkaImage} projectName="Kafka_Inorder_Processing" />
        <ProjectBox projectPhoto={expenseImage} projectName="Budget_Tracking_Application" />

      </div>
    </div>
  )
}

export default Projects