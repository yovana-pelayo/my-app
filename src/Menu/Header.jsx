import './Header.css';
import LinkedIn from './LinkedIn';
import Projects from './Projects';
// import { BrowserRouter as Router, Switch } from "react-router-dom";





function Header () {


    return (

<div className='header'> 

<Projects/>
<LinkedIn/>
    </div>


    );
}

export default Header;