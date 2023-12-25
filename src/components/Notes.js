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
    if (localStorage.getItem('token')) {
      getNotes();
    }
    else {
      navigate('/login')
    }

  }, [])


  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    props.showAlert("Updated Successfully", "success")

  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <div className="mb-2">
                  <label htmlFor="etitle" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={note.etitle}
                    id="etitle"
                    minLength={5}
                    required
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="edescription" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <input
                    type="text"
                    minLength={5}
                    required
                    className="mt-1 p-2 w-full border rounded-md"
                    value={note.edescription}
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="etag" className="block text-sm font-medium text-gray-700">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    id="etag"
                    value={note.etag}
                    name="etag"
                    onChange={onChange}
                  />
                </div>
              </form>

            </div>
            <div className="flex justify-end space-x-4 p-2">
              <button ref={refClose} type="button" className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className={`px-4 py-2 bg-blue-500 text-white rounded ${note.etitle.length < 5 || note.edescription.length < 5 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`} onClick={handleClick}>Update Note</button>
            </div>

          </div>
        </div>
      </div>
      <div className="container row my-3 ">
        <h2>Your Notes</h2>
        <div className="container text-danger display-6">
          {notes.length === 0 ? 'Empty notes !' : ''}
        </div>
        {notes.map((note) => {
          return <Noteitem note={note} updateNote={updateNote} showAlert={props.showAlert} />;
        })}
      </div>
    </>
  );
}

export default Notes;
