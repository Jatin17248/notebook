import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes, allNotes, editNote } = context;
  useEffect(() => {
    allNotes();
    // eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const ref = useRef(null);
  const handleClick = async () => {
    await editNote(note._id, note.etitle, note.edescription, note.etag);
    ref.current.click(); //closing modal
    props.showAlert("You SuccessFully Edited a Note", "success");
  };

  const updateNote = (note) => {
    ref.current.click(); //opening modal
    // filling the form with currnt note values
    setNote({
      ...note,
      etitle: note.title,
      edescription: note.description,
      etag: note.tag,
    });
    
  };
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  value={note.etitle}
                  name="etitle"
                  placeholder="title"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  rows="3"
                  value={note.edescription}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={note.etag}
                  id="etag"
                  name="etag"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <p className="text-danger">
                {(note.etitle.length < 5 || note.edescription.length < 5) &&
                  "Title & descritpion should have minimum length of 5 or more characters."}
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <h2>Your Notes</h2>
        <div className="container row">
          <h2>{notes.length === 0 && "No Notes To Display"}</h2>
          {notes.map((not) => {
            return (
              <NoteItem key={not._id} note={not} updateNote={updateNote} showAlert={props.showAlert} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
