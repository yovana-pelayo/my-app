import './App.css';
import { Route , Routes} from 'react-router-dom';
import Header from './Menu/Header';
import Home from './View/Home';
import AboutMe from './Menu/AboutMe';
import Apps from './Menu/Apps';

function App() {
  return (
    
   <div className='App'>
    <Header />
  <Routes>
   <Route path= '/' element={<Home/>}/>
   <Route path= '/about' element={<AboutMe/>}/>
   <Route path= '/apps' element={<Apps/>}/>

   </Routes>
   </div>
   
  );
}

export default App;
