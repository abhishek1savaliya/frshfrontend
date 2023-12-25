import React, { useContext } from "react";
import noteContext from "../context/NoteContext";
import { FaRegEdit } from "react-icons/fa";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="md:w-1/4 p-4">
      <div className="border border-gray-700 rounded-lg p-4">
        <h5 className="text-red-500 text-lg mb-2">{note.title}</h5>
        <p className="text-gray-700">{note.description}</p>

        <div className="mt-3">
        <button
          className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
          onClick={() => {
            updateNote(note);
          }}
        >
          <FaRegEdit className="text-lg" />

        </button>

        <button
          className="text-gray-700 hover:text-red-500 mx-3 transition duration-300 ease-in-out"
          onClick={() => {
            deleteNote(note._id);
            props.showAlert("Deleted Successfully", "danger");
          }}
        >
          
          <i className="far fa-trash-alt"></i>
        </button>
        </div>

  
      </div>
    </div>
  );
};

export default Noteitem;
