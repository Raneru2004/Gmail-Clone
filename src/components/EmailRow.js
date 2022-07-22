import React from 'react';
import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/counter/mailSlice';


function EmailRow({id, title, subject, description, time}) {
    let history=useNavigate();
    const dispatch= useDispatch();

    const openMail=()=>{
        dispatch(
            selectMail({
            id, 
            title, 
            subject, 
            description, 
            time
        })
        )
        history("/mail")
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow__options'>
                <CheckBoxOutlineBlankIcon/>
                <IconButton>
                   <StarBorderIcon/>
                </IconButton>
                <IconButton>
                   <LabelImportantIcon/>
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject}{" - "}
                <span className='emailRow__description'>
                    {description}
                </span>
                </h4>
            </div>
            <p className='emailRow__time'>
                {time}
            </p>
        </div>
    );
}

export default EmailRow;
