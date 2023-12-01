import AboutMe from './View/AboutMe';
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Projects from './Menu/Projects';

function App() {
  return (
   <>
   <Routes>

   <Route path= '/' element={<AboutMe/>}/>
   <Route path= '/projects' element={<Projects/>}/>

 
   </Routes>
   </>
  );
}

export default App;
