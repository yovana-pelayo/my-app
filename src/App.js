import AboutMe from './View/AboutMe';
import './App.css';
import { Route , Routes} from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>

   <Route path= '/' element={<AboutMe/>}/>
   
   </Routes>
   </>
  );
}

export default App;
