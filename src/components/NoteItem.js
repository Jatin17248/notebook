import React from 'react'
import { useContext} from 'react';
import noteContext from '../context/notes/noteContext';


export default function NoteItem(props) {
  const context = useContext(noteContext);
const {deleteNote} = context;
  const note = props.note;
  return (
    <div className='col-md-3 my-3'>
      <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p className="card-text">{note.tag}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    <i className="bi bi-pencil-square mx-2"></i>  
    <i className="bi bi-trash-fill mx-2" onClick={() => {deleteNote(note._id)}}></i>  
  </div>
</div>
    </div>
  )
}
