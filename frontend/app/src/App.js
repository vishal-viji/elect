import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
<<<<<<< HEAD
import Home from './components/screens/Home.jsx';
import LoginScreen from './components/screens/LoginScreen.jsx';
import EditApplicant from './components/screens/EditApplicant.jsx';
import Stats from './components/screens/Stats.jsx';
=======
import Home from './components/screens/Home';
import Header from './components/screens/Header';
>>>>>>> 3d31305 (Update frontend and remove README)

function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
<<<<<<< HEAD
=======


>>>>>>> 3d31305 (Update frontend and remove README)

