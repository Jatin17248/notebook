import React from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(noteContext);
const {notes} = context;
  return (
    <div>
      <div className="mb-3">
  <h2>Your Notes</h2>
  <div className='row'>
    {notes.map((not)=>{
      return <NoteItem key={not._id} note={not}/>
    })}
  </div>
</div>
    </div>
  )
}
