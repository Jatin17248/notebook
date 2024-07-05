import React from 'react'
import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';


export default function AddNote() {
    const [note, setNote] = useState({title: "", description: "", tag:"default"});
    const context = useContext(noteContext);
    const {addNote} = context;
    const handleChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value});
    }
    const handleClick = () =>{
        console.log(note);
        addNote(note.title, note.description, note.tag);
    }        
  return (
    <div>
      <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name="title" placeholder="title" onChange={handleChange} required/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Description  </label>
  <textarea className="form-control" id="description" name="description" rows="3" onChange={handleChange} required></textarea>
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Tag  </label>
  <input type="text" className="form-control" id="tag" name="tag"  onChange={handleChange}/>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3" onClick={handleClick}>Add Note</button>
  </div>

    </div>
  )
}
