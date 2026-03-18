import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <NoteState>
      <BrowserRouter>

        {/* ✅ FULL PAGE BACKGROUND */}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

          <Navbar />

          {/* ✅ FIXED ALERT */}
          <Alert alert={alert} setAlert={setAlert} />

          {/* ❌ REMOVED container */}
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </div>

      </BrowserRouter>
    </NoteState>
  );
}

export default App;