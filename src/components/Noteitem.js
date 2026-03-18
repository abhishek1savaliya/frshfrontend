import React, { useContext } from "react";
import noteContext from "../context/NoteContext";
import { FaRegEdit, FaRegCopy } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const handleCopy = () => {
    const text = `${note.title}\n${note.description}`;
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  return (
    <div className="w-full">

      <div className="h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300">

        {/* Title */}
        <h5 className="text-lg font-semibold text-pink-400 mb-2 truncate">
          {note.title}
        </h5>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3">
          {note.description}
        </p>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-4 text-gray-400">

          {/* Edit */}
          <button
            onClick={() => updateNote(note)}
            className="hover:text-blue-400"
          >
            <FaRegEdit />
          </button>

          {/* Delete */}
          <button
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Successfully", "error");
            }}
            className="hover:text-red-400"
          >
            <FiTrash2 />
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="hover:text-green-400"
          >
            <FaRegCopy />
          </button>

        </div>
      </div>
    </div>
  );
};

export default Noteitem;