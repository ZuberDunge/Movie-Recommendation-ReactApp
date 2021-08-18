import { useState } from "react";
import "./styles.css";
import marvelposter from "./../src/marvel.svg";

const MarvelMovies = {
  IronMan: [
    {
      name: "Iron Man",
      year: "2008",
      runtime: "2 hours, 6 minutes"
    },
    {
      name: "Iron Man 2",
      year: "2010",
      runtime: "2 hours, 4 minutes"
    },
    {
      name: "Iron Man 3",
      year: "2013",
      runtime: "2 hours, 10 minutes"
    }
  ],
  ThorOdinson: [
    {
      name: "Thor",
      year: "2011",
      runtime: "1 hour, 55 minutes"
    },
    {
      name: " Thor: The Dark World",
      year: "2013",
      runtime: "1 hour, 52 minutes"
    },
    {
      name: " ThorRagnarok",
      year: "2017",
      runtime: "2 hours, 10 minutes"
    }
  ],
  CaptainAmerica: [
    {
      name: "CA: The First Avenger ",
      year: "2011",
      runtime: "2 hours, 4 minutes"
    },
    {
      name: "CA: The Winter Soldier",
      year: "2014",
      runtime: "2 hours, 16 minutes"
    },
    {
      name: "CA: Civil War",
      year: "2016",
      runtime: " hours, 27 minutes"
    }
  ]
};
export default function App() {
  const [selectedActor, setActor] = useState("IronMan");

  function genreClickHandler(category) {
    setActor(category);
  }
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#4338CA",
          padding: "1rem",
          borderRadius: "0.5rem",
          color: "white"
        }}
      >
        Best Marvel Triology
      </h1>
      <p style={{ fontSize: "medium" }}>
        Some of the Greatest Marvel Triologies By Character Name!
      </p>
      <div>
        {Object.keys(MarvelMovies).map((category) => (
          <button
            onClick={() => genreClickHandler(category)}
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "2px solid black",
              backgroundColor: "#E0E7FF",
              marginRight: "1rem",
              marginBottom: "1rem",
              cursor: "pointer"
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {MarvelMovies[selectedActor].map((marvel) => (
            <li
              key={marvel.name}
              style={{
                listStyle: "none",
                border: "2px solid black",
                backgroundColor: "#A4D4FF",
                padding: "1rem",
                borderRadius: "0.5rem",
                width: "300px",
                textAlign: "center",
                margin: "auto",
                marginTop: "1rem"
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "large",
                    fontWeight: "bold"
                  }}
                >
                  {marvel.name} <br />
                </div>
                <div style={{ fontSize: "small" }}>{marvel.runtime}</div>
                <div style={{ fontSize: "small" }}>
                  {marvel.year} <br />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p className="social">
          Made with Love 💕 by<strong> Zuber Dunge </strong>
        </p>
        <img src={marvelposter} />
      </footer>
    </div>
  );
}
