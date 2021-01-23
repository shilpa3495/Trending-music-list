import React, { useState } from "react";
import "./styles.css";
const musicDatabase = {
  English: [
    {
      name: "Drivers License",
      singer: "Olivia Rodrigo"
    },
    {
      name: "The Weeknd",
      singer: "Save Your Tears"
    }
  ],
  Spanish: [
    {
      name: "HawáiMaluma",
      singer: "Maluma"
    },
    {
      name: "Relación",
      singer: "Sech"
    }
  ],
  Hindi: [
    {
      name: "Naach Meri Rani",
      singer: "Guru Randhawa & Nikhita Gandhi."
    },
    {
      name: "Judaiyaan",
      singer: "Darshan Raval, Shreya Ghoshal"
    }
  ]
};
export default function App() {
  const [language, setlanguage] = useState("English");
  var musicList = Object.keys(musicDatabase);
  function buttonClickHandler(language) {
    setlanguage(language);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span>🎶 </span> <span>Music List</span>
      </h1>
      <p>Checkout 2021 trending music. Select a language to get started</p>
      {musicList.map(function (language) {
        return (
          <button onClick={() => buttonClickHandler(language)}>
            {language}
          </button>
        );
      })}
      <div className="list-container">
        {musicDatabase[language].map(function (music) {
          return (
            <div className="music-content" key={music}>
              <div className="music-name"> {music.name}</div>
              <div className="music-singer">{music.singer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
