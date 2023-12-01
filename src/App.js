import AboutMe from './View/AboutMe';
import './App.css';
import Header from './Menu/Header';

function App() {
  return (
    <div className="App">
        <Header/>
      <div> 
      <AboutMe/>
        My name is Yovana!
      </div>
      </div>
  );
}

export default App;
