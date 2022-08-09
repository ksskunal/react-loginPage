import './App.css';
import LoginPage from './page/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './page/HomePage';
import { ContextApi } from './ContextApi';
import { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { MyProfilePage } from './page/MyProfilePage';
import { SignupPage } from './page/SignupPage';


function App() {
  const [username, setUsername] = useState(window.localStorage.getItem('username'));
  const [password, setpassword] = useState(window.localStorage.getItem('password'));
  const [loginStatus,setLoginStatus] = useState(window.localStorage.getItem('loginStatus'))
  
  return (
   <>
   <Router>
    <ContextApi.Provider value={{username, setUsername,password, setpassword,loginStatus,setLoginStatus}}>

    <Navbar/>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/myprofile' element={<MyProfilePage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
  
    </Routes>

    </ContextApi.Provider>
   </Router>
   </>
  );
}

export default App;
