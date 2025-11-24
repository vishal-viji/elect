import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Screens/Home.jsx';
import LoginScreen from './components/Screens/LoginScreen.jsx';

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

