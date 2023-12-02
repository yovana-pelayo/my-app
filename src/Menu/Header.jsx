import { Link } from 'react-router-dom';
import './Header.css';
import Projects from './Projects';
// import { BrowserRouter as Router, Switch } from "react-router-dom";





function Header () {


    return (
<div className='header'> 
    <ul>
        <li>
      <Link to ='/'>Home</Link>
    </li>
    <li>
        <Link to= '/projects'>Projects</Link>
    </li>
</ul>
 </div>

    );
}

export default Header;