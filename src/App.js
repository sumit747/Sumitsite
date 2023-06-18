// import logo from './logo.svg';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Testimorials from './Components/Testimorials/Testimorials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';

function App () {
  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;
  // const lightMode = theme.state.lightMode;
  return (
    <div className='App'
    style={{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Testimorials/>
      <Contact/> 
      <Footer />  
     </div>
  );
}

export default App;
