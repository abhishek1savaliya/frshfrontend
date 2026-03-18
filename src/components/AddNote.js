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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div className="w-full max-w-xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Add a Note
        </h2>

        <form className="space-y-5">

          {/* Title */}
          <div>
            <label className="text-gray-300 text-sm">Title</label>
            <input
              value={note.title}
              minLength={5}
              required
              type="text"
              id="title"
              name="title"
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Enter note title..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm">Description</label>
            <textarea
              value={note.description}
              minLength={5}
              required
              id="description"
              name="description"
              rows="4"
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Write your note..."
            ></textarea>
          </div>

          {/* Tag */}
          <div>
            <label className="text-gray-300 text-sm">Tag</label>
            <input
              type="text"
              value={note.tag}
              minLength={5}
              required
              id="tag"
              name="tag"
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="e.g. Work, Personal"
            />
          </div>

          {/* Button */}
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            onClick={handleClick}
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Note
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddNote;
