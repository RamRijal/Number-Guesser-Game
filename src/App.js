import React,{useState} from 'react'
import './App.css';
import Header from './components/header.js';
import Home from './components/home.js'
import Main from './components/main.js';
function App() {
  return (
    <div className="App">
            <Home/>
            {/* <Main/> */}
    </div>
  );
  // const App = () => {
  //   const [currentComponent, setCurrentComponent] = useState('home');
  
  //   const switchComponent = (component) => {
  //     setCurrentComponent(component);
  //   };
  
  //   return (
  //     <div>
  //       {currentComponent === 'home' && <Home switchComponent={switchComponent} />}
  //       {currentComponent === 'main' && <Main switchComponent={switchComponent} />}
  //     </div>
  //   );
  // };
  
}

export default App;
