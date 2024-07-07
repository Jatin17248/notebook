import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import UserDetails from './components/UserDetails';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      message, type
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert} />
        <div className='container'>
        <Routes>
          <Route
            exact
            path="/about"
            element={<About/>}/>
          
          <Route
            exact
            path="/"
            element={
              <Home showAlert={showAlert} />}/>
          <Route
            exact
            path="/login"
            element={
              <Login showAlert={showAlert} />
              }/>
              <Route
            exact
            path="/signup"
            element={
              <Signup showAlert={showAlert} />
              }/>
              <Route
            exact
            path="/user"
            element={
              <UserDetails/>
              }/>
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
