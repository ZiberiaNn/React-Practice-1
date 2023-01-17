import logo from './logo.svg';
import './App.css';
import Testimony from './Components/Testimony.js'

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre...</h1>
        <Testimony 
        name="Emma Bostian"
        country="Suecia"
        image="emma"
        job="Ingeniera de Software"
        company="Spotify"
        testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </div>
      <Testimony 
        name="Shawn Wang"
        country="Singapur"
        image="shawn"
        job="Ingeniera de Software"
        company="Amazon"
        testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Testimony 
        name="Sarah Chima"
        country="Nigeria"
        image="sarah"
        job="Ingeniera de Software"
        company="ChatDesk"
        testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
    </div>
  );
}

export default App;
