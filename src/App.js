import './App.css';
import { Route , Routes} from 'react-router-dom';
import Header from './Menu/Header';
import Home from './View/AboutMe';
import AboutMe from './Menu/AboutMe';

function App() {
  return (
    
   <div className='App'>
    <Header />
  <Routes>
   <Route path= '/' element={<Home/>}/>
   <Route path= '/aboutme' element={<AboutMe/>}/>
   </Routes>
   </div>
   
  );
}

export default App;
