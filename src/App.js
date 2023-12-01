import AboutMe from './View/AboutMe';
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Projects from './Menu/Projects';
import Header from './Menu/Header';

function App() {
  return (
   <>
   <Header/>
   
   <Routes>

   <Route path= '/' element={<AboutMe/>}/>
   <Route path= '/projects' element={<Projects/>}/>

 
   </Routes>
   </>
  );
}

export default App;
