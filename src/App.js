import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectSendMessageIsOpen } from './features/counter/mailSlice'
import { login, selectUser} from './features/counter/userSlice'
import Login from './components/Login';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db, auth, provider,firebaseApp} from "./firebase";



function App() {
  const sendMessageIsOpen= useSelector(selectSendMessageIsOpen)
  const user =useSelector(selectUser)
  console.log(sendMessageIsOpen)
  const dispatch=useDispatch();
  const auth = getAuth(firebaseApp);

  useEffect(()=>{

    onAuthStateChanged(auth, (user) =>{
      if (user) {
        dispatch(
          login({
          displayName:user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })

  },[])


  return (
    
    <Router>
      {! user ? (
        <Login/>
      ):(
        <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar/>
          
            <Routes>
              <Route path="/mail" element={<Mail/>}/>
              <Route path="/" element={<EmailList/>}/>
            </Routes>
          
      </div>
      {sendMessageIsOpen && < SendMail/>}
    </div>
      )}
    
    </Router>
    
  );
}

export default App;
