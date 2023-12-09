import './App.css';
import { Route , Routes} from 'react-router-dom';
import Projects from './Menu/AboutMe';
import Header from './Menu/Header';
import Pictures from './View/Pictures';
import Home from './View/AboutMe';

function App() {
  return (
    
   <div className='App'>
    <Header />
  <Routes>
   <Route path= '/' element={<Home/>}/>
   <Route path= '/aboutme' element={<Pictures/>}/>
   </Routes>
   {/* <Pictures/> */}
   </div>
   
  );
}

export default App;
