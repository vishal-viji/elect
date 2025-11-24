import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Screens/Home.jsx';
import LoginScreen from './components/Screens/LoginScreen.jsx';
import EditApplicant from './components/Screens/EditApplicant.jsx';
import Stats from './components/Screens/Stats.jsx';

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

