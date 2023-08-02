// Notes.tsx
import React from "react";
import { useState } from "react";

type NotesProps = {};

const Notes: React.FC<NotesProps> = (): JSX.Element => {
  const [displayNotes, setDisplayNotes] = useState(false);

  return (
    <div className="pb-20 flex justify-center">

      <div className="flex justify-center mt-40">
        <button onClick={()=>(setDisplayNotes(!displayNotes))} className="text-white py-3 px-6 text-xs rounded-lg border border-slate-900 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950">
          {displayNotes ? "Hide Code Documentation" : "Show Code Documentation"}
        </button>
        <span className="h-[5px] w-[5px] ml-[-10px] relative animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      </div>

      {displayNotes === true && <div className="text-xs bg-gradient-to-tr from-emerald-200 via-sky-200 to-violet-300 border border-4 drop-shadow-lg border-sky-500/30 rounded p-5 my-10 mx-20">
        <ul className="list-inside list-disc">
          <p className="font-semibold">Project Description:</p>
          <li>This project is a simplified front-end clone of Netflix</li>
          <li>
            It was created with ReactJS, Typescript, JavaScript, HTML and CSS.
          </li>
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
          <li>Coded Header</li>
          <li>Insert Cover Art Image</li>
          <li>Made Vignette Gradient Top & Bottom of Cover Art</li>
          <li>Added Cover Art Title & Description & Button</li>
          <li>Style Header Components</li>
          <li>Install react-icons</li>
          <li>Added Hard-Coded Cards</li>
          <li>Test & See API Data</li>
          <li>Install axios</li>
          <li>Make custom Hooks for each Card Label</li>
          <li>Test display 2 movies on each Label</li>
          <li>Make new page for each movie and display movie details</li>
          <li>useParams to get url key</li>
          <li>Install react router dom for paging</li>
          <li>Make Movie details to display each movie info</li>
          <li>Make Movie category page to display category from Header</li>
          <li>Connect all pages</li>
          <li>Check & Fix for Desktop Layout</li>
          <li>Fixed some more layouts</li>
        </ol>
        <br />
        <ol className="list-inside list-decimal">
          <p className="font-semibold">Libraries used:</p>
          <li>npm install -D tailwindcss</li>
          <li>npm install react-icons --save</li>
          <li>npm install axios</li>
          <li>npm install react-router-dom</li>
        </ol>
      </div>}

    </div>
  );
};

export default Notes;