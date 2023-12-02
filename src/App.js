import AboutMe from './View/AboutMe';
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Projects from './Menu/Projects';
import Header from './Menu/Header';
import Bio from './View/Bio';
function App() {
  return (
   <>
   <div>
    <header>
   <Header />
    </header >
    {/* <Bio/> */}
     <Routes>
   <Route path= '/' element={<AboutMe/>}/>
   <Route path= '/projects' element={<Projects/>}/>
   </Routes>
   </div>
   </>
  );
}

export default App;
