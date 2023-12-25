import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full space-y-6">

                <div className="flex justify-center">
                    <img
                        src="https://i.ibb.co/rvcNTg4/SAVE-20230812-213425.jpg"
                        alt="Abhishek Savaliya"
                        className="rounded-full w-[250px] h-[250px] transform transition-transform duration-300 hover:scale-125"
                    />
                </div>

                <div className="text-center text-blue-600 ransform transition-transform duration-300 hover:scale-125">
                    <h1 className="text-2xl font-semibold">Abhishek Savaliya</h1>
                    <p className="text-gray-600">Student | MERN Stack Developer Intern</p>
                    <p className="text-pink-900">Surat</p>
                </div>

                <div className="space-y-2  text-gray-700 ransform transition-transform duration-300 hover:scale-125">
                    <p><strong>Email:</strong> <a href="mailto:abhisheksavaliya555@gmail.com" className="text-blue-500 hover:text-blue-700">abhisheksavaliya555@gmail.com</a></p>
                    <p><strong>Phone:</strong> 8160059914</p>
                    <p><strong>LinkedIn:</strong> <Link to="https://linkedin.com/in/abhishek-savaliya-22547b200" target="_blank" className="text-blue-500 hover:text-blue-700">Abhishek Savaliya</Link></p>
                    <p><strong>Github:</strong> <Link to="https://github.com/abhishek1savaliya" target="_blank" className="text-blue-500 hover:text-blue-700">abhishek1savaliya</Link></p>
                </div>

                <div className="border-t pt-4 ransform transition-transform duration-300 hover:scale-125">
                    <h2 className="text-xl font-semibold text-purple-600">Objective</h2>
                    <p className="text-gray-700">Seeking for an internship/job opportunity with a company that offers a positive atmosphere to implement new ideas or technological skills for the betterment of the organization.</p>
                </div>

                <div className="border-t pt-4 ransform transition-transform duration-300 hover:scale-125">
                    <h2 className="text-xl font-semibold text-green-600">Technical Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>C / Java / Python (BASIC)</li>
                        <li>Data Structures & Algorithms (BASIC)</li>
                        <li>CSS / HTML / JavaScript</li>
                        <li>Node.js / Express / MongoDB</li>
                        <li>React.js / Next.js</li>
                        <li>Version Control: Git</li>
                    </ul>
                </div>

                <div className="border-t pt-4 ransform transition-transform duration-300 hover:scale-125">
                    <h2 className="text-xl font-semibold text-indigo-600">Soft Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>Leadership</li>
                        <li>Management Skill</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>

                <div className="border-t pt-4 ransform transition-transform duration-300 hover:scale-125">
                    <h2 className="text-xl font-semibold text-yellow-600">Academic Background</h2>
                    <p className="text-gray-700">Shri Swami Atmanand Saraswati Institute Of Technology - (GTU)</p>
                    <p className="text-gray-700">Bachelor Of Engineering, Computer Engineering | 2020 - Pursuing 4th Year</p>
                </div>

                <div className="border-t pt-4 ransform transition-transform duration-300 hover:scale-125">
                    <h2 className="text-xl font-semibold text-red-600">Projects</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><a href="https://abhishek1savaliya.github.io/react-textutil" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Word Counter</a></li>
                        <li><a href="https://the-rickand-morty.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">RickyandMorty</a></li>
                        <li><a href="https://frshfrontend.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Note App</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
