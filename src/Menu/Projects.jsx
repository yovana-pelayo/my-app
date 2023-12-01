import React from "react";
import { useNavigate } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
 const navigate = useNavigate();
 return (
    <div className="container">
       <div className="title">
          <h1>This is a project</h1>
       </div>
       <button className="btn" onClick={() => navigate('order-summary')}>
          Place Order
       </button>
    </div>
 );
};

export default Projects;