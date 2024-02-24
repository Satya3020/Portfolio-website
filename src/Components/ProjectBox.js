import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Mobeaze_Ecommerce_websiteDesc : "A user-friendly e-commerce platform providing seamless shopping experiences, featuring secure authentication, a diverse product catalog, and efficient order management.",
    Mobeaze_Ecommerce_websiteGithub : "https://github.com/Satya3020/E-commerce-Mobile-shopping",

    Chatbot_for_College_EnquiryDesc : "This Chatbot is an application designed specifically for the admission process at the National Economics University This chatbot serves as a virtual assistant, providing information and support to prospective students throughout their admission journey.",
    Chatbot_for_College_EnquiryGithub : "https://github.com/Satya3020/Chatbot-for-College-Enquiry-process",

    Sentiment_analysis_of_GoldDesc:"Examining the sentiment expressed in news articles related to the gold market, traders and investors can gain valuable insights into market reactions, gauge overall sentiment, and make informed decisions.",
    Sentiment_analysis_of_GoldGithub:"https://github.com/Satya3020/Sentiment-analysis-of-Gold-Commodity",
    
    School_Management_SystemDesc:"The School management system is a web-based system that provides the students, teachers, parents and other school staff, an easy and convenient way to interact as well as maintain reports. It also acts as an interface that displays students’ details and reports when necessary.",
    School_Management_SystemGithub:"https://github.com/Satya3020/School-Management-System",

    Exam_Registration_SystemDesc:"The exam registration system provides students with an easy and convenient way to register for their corresponding exams without any confusion. It also acts as an interface between the students and the examination administrators in issuing hall tickets and updating necessary information.",
    Exam_Registration_SystemGithub:"https://github.com/Satya3020/Exam-Registration-system",

    House_Price_PredictionDesc:"Predicts house prices at certain locations and time ranges.",
    House_Price_PredictionGithub:"https://github.com/Satya3020/House-price-prediction",

    Emotion_RecognitionDesc:"AI model to recognize the emotional state of a speaker based on voice and tone",
    Emotion_RecognitionGithub:"",

    Sales_Field_TrackerDesc:"Using Q-learning - reinforcement learning and Structure2vec - Deep learning",
    Sales_Field_TrackerGithub:"",

    Forex_CandlestickDesc:"Trade Analysis - Forex trade analysis using candlesticks for a day, week, month and trends",
    Forex_CandlestickGithub:"",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox