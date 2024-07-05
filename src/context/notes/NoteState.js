import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "66869aac6d00b2dd84c7cd39",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        },
        {
          "_id": "66869ab16d00b2dd84c7cd3b",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote2",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        },
        {
          "_id": "66869abd6d00b2dd84c7cd3d",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote3",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        },
        {
          "_id": "66869ac16d00b2dd84c7cd3f",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote4",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        },
        {
          "_id": "66869ac66d00b2dd84c7cd41",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote5",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        },
        {
          "_id": "66869acd6d00b2dd84c7cd43",
          "user": "66869a1c4f555d7b5f4f70dd",
          "title": "myFirstNote6",
          "description": "myFirstNote is best note of the world",
          "tag": "new",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial);
    const addNote = (title, description, tag) => {
      const note = {
        "_id": "66869acd6d00b2dd84c7cd43",
        "user": "66869a1c4f555d7b5f4f70dd",
        "title": title,
        "description": description,
        "tag": tag,
        "__v": 0
      };
      setNotes(notes.concat(note));
    }
    const deleteNote = (id) =>{
      console.log("Deleteing Note" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }
return (
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;