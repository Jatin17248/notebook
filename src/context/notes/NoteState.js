import NoteContext from "./noteContext";
import { useState } from "react";
const host = "http://localhost:4000";

const NoteState = (props) =>{
  
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);
    const authToken = localStorage.getItem('token');
    const allNotes = async() => {
      setNotes(notesInitial);
      const url = `${host}/api/notes/fetchallnotes`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json"
        }
      });
      let noteResponse = await response.json();
      setNotes(noteResponse);
    }

    const addNote = async(title, description, tag) => {
      const url = `${host}/api/notes/addnote`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          "title": title,
          "description": description,
          "tag": tag
        }),
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json"
        }
      });
      let noteResponse = await response.json();

      setNotes(notes.concat(noteResponse));
      console.log(!noteResponse === 0);
    }
    const deleteNote = async(id) =>{
      const url = `${host}/api/notes/deletenote/${id}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "auth-token": authToken,
          "Content-Type": "application/json"
        }
      });
      // console.log(response.Success + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }

    const editNote = async(id, title, description, tag) =>{
         
          const url = `${host}/api/notes/updatenote/${id}`;
          const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({
              "title": title,
              "description": description,
              "tag": tag
            }),
            headers: {
              "auth-token": authToken,
              "Content-Type": "application/json"
            }
          });

          let noteResponse = await response.json();
          setNotes(notesInitial);
          allNotes();
          console.log(!noteResponse === 0);
        }
      const [user, setUser] = useState({"":""})
        const getUser = async() => {
          const url = `${host}/api/auth/getuser`;
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "auth-token": authToken,
              "Content-Type": "application/json"
            }
          });

          let userResponse = await response.json();
          setUser(userResponse);
          
        }
    
return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, allNotes, setNotes, getUser, user}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;