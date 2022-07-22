import React,{useState} from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux/es/exports';
import { closeSendMessage } from '../features/counter/mailSlice.js'
import {db, auth, provider} from '../firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";



function SendMail() {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const dispatch=useDispatch();


    const handleSubmit = event =>{
        const currentDateTime= Date().toLocaleString()
        console.log(currentDateTime)
        
        event.preventDefault();
        console.log(to)
        console.log(subject)
        console.log(message)
        const email =
            {to:to,
             subject: subject,
             message: message,
             timestamp:currentDateTime
             
            }
        addDoc(collection(db, "emails"), email)    


        

        dispatch(closeSendMessage())
        setTo("");
        setSubject("");
        setMessage("");
        // const post={
        //     title:"Finish Interview section",
        //     description:"Do Frontend Simplified",
        //     uid:user.uid,
            
        //   }
        //   addDoc(collection(db, "posts"), post)

    }

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon  
                className='sendMail__close'
                onClick={() => dispatch(closeSendMessage())}/>
            </div> 

            <form onSubmit={handleSubmit}>
                <input 
                id="to" 
                name="to" 
                type="email" 
                placeholder='To' 
                required
                onChange={event => setTo(event.target.value)}/>
                <input 
                id="subject" 
                name="subject" 
                type="text" 
                placeholder='Subject'
                onChange={event => setSubject(event.target.value)}/>
                <input 
                id="message"
                name="message"
                required
                type="text" 
                className='sendMail__message'
                onChange={event => setMessage(event.target.value)}
                />

                {/* {errors.to &&
                    <p className='sendMail__error'>To is required</p>
                } */}

                <div className='sendMail__options'>
                    <Button 
                    className='sendMail__send'
                    variant='contained'
                    color="primary"
                    type="submit"
                    >Send</Button>
                </div>

            </form>       
        </div>
    );
}

export default SendMail;
