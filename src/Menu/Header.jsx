import { Link } from 'react-router-dom';
import './Header.css';
// import { BrowserRouter as Router, Switch } from "react-router-dom";





function Header () { 

    return (
<div className='header'> 
    <a className='home'>
      <Link to ='/'>Home</Link>
    </a>
        <a className='projects'> 
        <Link to= '/projects'>Projects</Link>
        </a>

 </div>

    );
}

export default Header;