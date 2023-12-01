import { Link } from 'react-router-dom';
import './Header.css';
import Projects from './Projects';
// import { BrowserRouter as Router, Switch } from "react-router-dom";





function Header () {


    return (

<nav>
    <ul>
        <li>
      <Link to ='/'>Home</Link>
    </li>
    <li>
        <Link to= '/projects' element={<Projects />}>Projects</Link>
    </li>
</ul>
</nav>
    );
}

export default Header;