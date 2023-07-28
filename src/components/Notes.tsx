// Notes.tsx
import React from "react";

type NotesProps = {};

const Notes: React.FC<NotesProps> = (): JSX.Element => {
  return (
    <div className="text-xs bg-gradient-to-tr from-emerald-200 via-sky-200 to-violet-300 border border-4 drop-shadow-lg border-sky-500/30 rounded p-5 my-10 mx-20">
      <ul className="list-inside list-disc">
        <p className="font-semibold">Project Description:</p>
        <li>This project is a simplified front-end clone of Netflix</li>
        <li>It was created with ReactJS, Typescript, JavaScript, HTML and CSS.</li>
        <li>It uses TheMovieDB API to display movies </li>
        <li>and show details like genre, description and score.</li>
        <li>The data gets updated weekly</li>
      </ul>
      <br />
      <ol className="list-inside list-decimal">
        <p className="font-semibold">How this was coded:</p>
        <li>Install typescript</li>
        <li>Install tailwindcss</li>
        <li>Figure out what to code</li>
        <li>Take screenshots of netflix for model</li>
        <li>Register account on TMDB for API</li>
        <li>Make ENV to store API key</li>
      </ol>
      <br />
      <ol className="list-inside list-decimal">
        <p className="font-semibold">Libraries used:</p>
        <li>npm install -D tailwindcss</li>
        <li>-</li>
      </ol>
    </div>
  );
};

export default Notes;


// Hi xxx@gmail.com,

// Your request for an API key has been approved. You can start using this key immediately.

// API Key: xxx

// Here's an example API request:

// https://api.themoviedb.org/3/movie/550?api_key={xxx}
// Useful Links

// Documentation
// Support forum
// Wrappers & libraries
// Service status
// If you have any questions, feel free to create a new discussion in our support forum.

// --
// The Movie Database Team
// https://www.themoviedb.org