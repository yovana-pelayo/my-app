import React from "react";
// import { useNavigate } from 'react-router-dom';
import './AboutMe.css'
import Pictures from "../View/Pictures";

const AboutMe = () => {
//  const navigate = useNavigate();
 return (
    <div className="container">
       <div className="title">
          <h1>This is a project</h1>
          <Pictures/>
       </div>
    </div>

 );
};

export default AboutMe;