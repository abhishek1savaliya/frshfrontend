import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div className="w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 space-y-8">

        {/* Profile Image */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://i.ibb.co/rvcNTg4/SAVE-20230812-213425.jpg"
            alt="Abhishek"
            className="w-36 h-36 rounded-full border-4 border-pink-500 shadow-lg hover:scale-110 transition duration-300"
          />

          <h1 className="text-2xl font-bold mt-4 text-white">
            Abhishek Savaliya
          </h1>

          <p className="text-gray-400">
            MERN Stack Developer 🚀
          </p>

          <p className="text-pink-400 text-sm">📍 Surat</p>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">

          <p>
            📧{" "}
            <a
              href="mailto:abhisheksavaliya555@gmail.com"
              className="text-pink-400 hover:underline"
            >
              abhisheksavaliya555@gmail.com
            </a>
          </p>

          <p>📞 8160059914</p>

          <p>
            🔗{" "}
            <a
              href="https://linkedin.com/in/abhishek-savaliya-22547b200"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </p>

          <p>
            💻{" "}
            <a
              href="https://github.com/abhishek1savaliya"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:underline"
            >
              GitHub
            </a>
          </p>

        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold text-pink-400 mb-3">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "C",
              "Java",
              "Python",
              "DSA",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Next.js",
              "Git",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-gray-300 hover:bg-pink-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-semibold text-purple-400 mb-2">
            Education
          </h2>

          <p className="text-gray-300">
            🎓 Shri Swami Atmanand Saraswati Institute Of Technology (GTU)
          </p>

          <p className="text-gray-400 text-sm">
            BE Computer Engineering (2020 - Present)
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-lg font-semibold text-green-400 mb-3">
            Projects
          </h2>

          <div className="space-y-2 text-sm">

            <a
              href="https://abhishek1savaliya.github.io/react-textutil"
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              📄 Word Counter
            </a>

            <a
              href="https://the-rickand-morty.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              👾 Rick & Morty App
            </a>

            <a
              href="https://frshfrontend.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="block p-3 rounded-lg bg-white/5 hover:bg-white/10 transition"
            >
              📝 Note App
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;