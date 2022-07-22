import React, {useState, useEffect} from 'react';
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import {db, auth, provider} from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";




function EmailList(){
 const [emails, setEmails] = useState([]);
 let newEmails=[];


async function getAllEmails(){
  const {docs} = await getDocs(collection(db, "emails"))
  const emails =docs.map(doc=> ({id : doc.id, data:doc.data()}))
  console.log(emails)
  
  //setEmails(emails)
  return emails 
}
useEffect(()=>{
  async function getAllEmails(){
    const {docs} = await getDocs(collection(db, "emails"))
    const emails =docs.map(doc=> ({id : doc.id, data:doc.data()}))
    console.log(emails)
    setEmails(emails)
    return emails

  }
  getAllEmails();
    
},[])


//const querySnapshot = await getDocs(collection(db, "emails"));

// useEffect(()=>{
//   db.collection("emails").onSnapShot((snapshot)=>
//   setEmails(
//     snapshot.docs.map((doc) =>({
//       id:doc.id,
//       data:doc.data(),
//     }))
//   ))

// },[])

// useEffect(()=>{
//   const {docs}= getDocs(collection(db, "emails")).onSnapShot
//   const emails =docs.map(doc=> ({id : doc.id, data: doc.data()}))
//   setEmail()
// },[])





    return (
      
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settings--left'>
                   <CheckBoxOutlineBlankIcon className='blankCheckBox'/>
                   <IconButton>
                     <ArrowDropDownIcon/>
                   </IconButton>
                   <IconButton>
                     <RedoIcon/>
                   </IconButton>
                   <IconButton>
                     <MoreVertIcon/>
                   </IconButton> 
                </div>
                <div className='emailList__settings--right'>
                    <IconButton>
                      <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                      <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                      <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                      <SettingsIcon/>
                    </IconButton>
                </div>
            </div> 
            <div className='emailList__sections'>
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className='emailList__list'>
              {emails.map(({id, data:{to, subject, message, timestamp
              }})=>(
                <EmailRow
                id={id}
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={timestamp}
                />
              ))}
              
                
                
            </div>
        </div>
    );
}

export default EmailList;
