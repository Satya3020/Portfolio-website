import React from 'react'; 

import {FaReact, FaPython, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaJava, FaPhp, FaAws} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";
import { BiLogoSpringBoot,BiLogoPostgresql  } from "react-icons/bi";
import { SiMongodb, SiPostman, SiMysql, SiOracle, SiStreamlit, SiSelenium, SiApachekafka} from "react-icons/si";
import { TbCircleLetterC,TbCloudComputing, TbLetterA, TbLetterM } from "react-icons/tb";
//add hibernate if possible
const Skills = ({skill}) => {
    const icon = {
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Python: <FaPython/>,
        Javascript: <DiJavascript1/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Java: <FaJava />,
        Springboot: <BiLogoSpringBoot/>,
        Postgresql:   <BiLogoPostgresql/>,
        MySQL : <SiMysql/>,
        C :<TbCircleLetterC/>,
        PHP: <FaPhp/>,
        Oracle: <SiOracle/>,
        Cloud: <TbCloudComputing/>,
        ML: <TbLetterM/>,
        AI: <TbLetterA/>,
        Streamlit: <SiStreamlit/>,
        AWS : <FaAws/>,
        Selenium: <SiSelenium/>,
        ApacheKafka: <SiApachekafka/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills