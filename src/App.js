import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1000);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      document.title = 'TextUtils - Light Mode';
    }

  }
  return (
    <>
      {/* { <Navbar title="TextUtils" aboutText='About TextUtils'/>}
   {<Navbar} */}
   {/* hello */}
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        {/* <div className='container my-3'> */}
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}/> */}
              
            

            {/* <Route path="/" element={}/> */}
              

            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
      {/* </Router> */}
       {/* </div> */}
        </>
  );
}

export default App;
