import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light' ){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled", "success");
    }
  }
  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
     }

  return (
    <>
    <Router>
        <Navbar title ="TextUtils" aboutText="About" homeText="Home" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
            <Routes>
                <Route path='/about' element={<About mode={mode}/>} /> 
                <Route path='/' element ={<TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>}/>
            </Routes>
        </div> 
    </Router>
    </>
  );
}

export default App;
