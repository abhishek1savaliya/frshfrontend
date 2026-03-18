import React from "react";

function Alert(props) {
  const capitalized = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      {props.alert && (
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-xl shadow-lg backdrop-blur-md border transition-all duration-300
          ${
            props.alert.type === "success"
              ? "bg-green-500/10 border-green-400 text-green-300"
              : props.alert.type === "error"
              ? "bg-red-500/10 border-red-400 text-red-300"
              : "bg-blue-500/10 border-blue-400 text-blue-300"
          }`}
          role="alert"
        >
          {/* Left Side */}
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {props.alert.type === "success" && "✅"}
              {props.alert.type === "error" && "❌"}
              {props.alert.type === "info" && "ℹ️"}
            </span>

            <span className="text-sm font-medium">
              <strong>{capitalized(props.alert.type)}</strong>:{" "}
              {props.alert.msg}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => props.setAlert(null)}
            className="text-gray-400 hover:text-white transition"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;