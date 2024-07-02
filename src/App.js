import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
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
      </BrowserRouter>
    </>
  );
}

export default App;
