import React from 'react';

function About() {
  return (
    <div className="text-center">
      <h1 className="text-red-500 text-5xl font-bold mb-5">
        Hi <span className="text-green-500">!</span> I am Abhishek &#128171;
      </h1>
      <h4 className="mt-5 text-xl">
        <span className="text-blue-500">Email</span>: abhisheksavaliya<span className="text-green-500">555</span>@gmail.com
      </h4>
      <h4 className="mt-3 text-xl">
        <span className="text-blue-500">Phone</span>:<span className="text-green-500">+91 </span>8160059914
      </h4>
      <h4 className="mt-3 text-xl mb-5">
        <span className="text-blue-500">Place</span>: Surat, Gujarat
      </h4>
      <div className="my-5">
        <p className="text-4xl">&#127801; Jay Shree Krishna &#127801;</p>
      </div>
    </div>
  );
}

export default About;
