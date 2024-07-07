import React, { useEffect } from 'react';
import Notes from './Notes';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
export default function Home(props) {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const {setNotes} = context;
  const notesInitial = [];
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setNotes(notesInitial);
    }
    else{
      navigate("/login");
    }
    //eslint-disable-next-line
  },[])
  return (
    <div>
{localStorage.getItem('token') && <>
<AddNote showAlert={props.showAlert} />

<Notes showAlert={props.showAlert}/></>}
</div>
  )
}
