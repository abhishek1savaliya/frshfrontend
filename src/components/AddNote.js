import React, { useState, useContext } from "react";
import noteContext from "../context/NoteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container px-4">
      <h2 className="text-blue-500 text-2xl mb-4">ADD A NOTE</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            <h5 className="text-gray-900">Title</h5>
          </label>
          <input
            value={note.title}
            minLength={5}
            required
            type="text"
            className="border border-gray-300 p-2 w-full"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            <h5 className="text-gray-900">Description</h5>
          </label>
          <textarea
            value={note.description}
            minLength={5}
            required
            className="border border-gray-300 p-2 w-full"
            id="description"
            name="description"
            rows="4"
            onChange={onChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="tag" className="block text-gray-700">
            <h5 className="text-gray-900">Tag</h5>
          </label>
          <input
            type="text"
            value={note.tag}
            className="border border-gray-300 p-2 w-full"
            minLength={5}
            required
            id="tag"
            name="tag"
            onChange={onChange}
          />
        </div>

        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
