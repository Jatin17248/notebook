import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar/>
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
              <Home/>}/>
          
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
