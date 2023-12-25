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
                        className="rounded-full w-32 h-32"
                    />
                </div>

                <div className="text-center">
                    <h1 className="text-2xl font-semibold">Abhishek Savaliya</h1>
                    <p className="text-gray-600">Student | MERN Stack Developer Intern</p>
                    <p className="text-gray-500">Surat</p>
                </div>

                <div className="space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:abhisheksavaliya555@gmail.com" className="text-blue-500">abhisheksavaliya555@gmail.com</a></p>
                    <p><strong>Phone:</strong> 8160059914</p>
                    <p><strong>LinkedIn:</strong> <Link to="https://linkedin.com/in/abhishek-savaliya-22547b200" target="_blank" className="text-blue-500">Abhishek Savaliya</Link></p>
                    <p><strong>Github:</strong> <Link to="https://github.com/abhishek1savaliya" target="_blank" className="text-blue-500">abhishek1savaliya</Link></p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold">Objective</h2>
                    <p>Seeking for an internship/job opportunity with a company that offers a positive atmosphere to implement new ideas or technological skills for the betterment of the organization.</p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold">Technical Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>C / Java / Python (BASIC)</li>
                        <li>Data Structures & Algorithms (BASIC)</li>
                        <li>CSS / HTML / JavaScript</li>
                        <li>Node.js / Express / MongoDB</li>
                        <li>React.js / Next.js</li>
                        <li>Version Control: Git</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold">Soft Skills</h2>
                    <ul className="list-disc list-inside">
                        <li>Leadership</li>
                        <li>Management Skill</li>
                        <li>Problem Solving</li>
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold">Academic Background</h2>
                    <p>Shri Swami Atmanand Saraswati Institute Of Technology - (GTU)</p>
                    <p>Bachelor Of Engineering, Computer Engineering | 2020 - Pursuing 4th Year</p>
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-xl font-semibold">Projects</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><a href="https://abhishek1savaliya.github.io/react-textutil" target="_blank" className="text-blue-500">Word Counter</a></li>
                        <li><a href="https://the-rickand-morty.vercel.app" target="_blank" className="text-blue-500">RickyandMorty</a></li>
                        <li><a href="https://frshfrontend.vercel.app" target="_blank" className="text-blue-500">Note App</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
