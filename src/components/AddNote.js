import React from "react";
import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const context = useContext(noteContext);
  const { addNote } = context;
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" });
    props.showAlert("You SuccessFully Added a Note", "success");
  };
  return (
    <div>
      <div className="mb-3"><h2>Add A Note</h2>
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={note.title}
          placeholder="title"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description{" "}
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={note.description}
          rows="3"
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tag{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          name="tag"
          value={note.tag === "default" ? " " : note.tag}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto">
        <p className="text-danger">
          {(note.title.length < 5 || note.description.length < 5) &&
            "Title & descritpion should have minimum length of 5 or more characters."}
        </p>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleClick}
        >
          Add Note
        </button>
      </div>
    </div>
  );
}
