import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, [getNotes, navigate]);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />

      {/* Hidden Button */}
      <button
        ref={ref}
        type="button"
        className="hidden"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-gray-900 text-white rounded-2xl border border-gray-700">

            <div className="modal-header border-b border-gray-700">
              <h5 className="text-xl font-semibold text-pink-400">
                Edit Note
              </h5>
              <button
                type="button"
                className="text-gray-400"
                data-bs-dismiss="modal"
              >
                ✖
              </button>
            </div>

            <div className="modal-body space-y-4">

              <input
                type="text"
                name="etitle"
                value={note.etitle}
                onChange={onChange}
                placeholder="Title"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
              />

              <input
                type="text"
                name="edescription"
                value={note.edescription}
                onChange={onChange}
                placeholder="Description"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
              />

              <input
                type="text"
                name="etag"
                value={note.etag}
                onChange={onChange}
                placeholder="Tag"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
              />

            </div>

            <div className="flex justify-end gap-3 p-4 border-t border-gray-700">

              <button
                ref={refClose}
                className="px-4 py-2 bg-gray-700 rounded-lg"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5
                }
                onClick={handleClick}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 disabled:opacity-50"
              >
                Update
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-10">

        <h2 className="text-3xl font-bold mb-8 text-pink-400">
          Your Notes
        </h2>

        {notes.length === 0 ? (
          <div className="text-gray-400 text-lg">
            No notes yet... ✨
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {notes.map((note) => (
              <Noteitem
                key={note._id}
                note={note}
                updateNote={updateNote}
                showAlert={props.showAlert}
              />
            ))}

          </div>
        )}
      </div>
    </>
  );
}

export default Notes;