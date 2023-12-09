import { Link } from 'react-router-dom'
import './Header.css';






function Header () { 

    return (
<div className='header'> 
    <a className='home'>
      <Link to ='/'>Home</Link>
    </a>
        <a className='aboutMe'> 
        <Link to= '/aboutme'>About Me</Link>
        </a>

 </div>

    );
}

export default Header;