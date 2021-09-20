import { useState } from "react";
import "./styles.css";
import marvelposter from "./../src/marvel.svg";

const MarvelMovies = {
  IronMan: [
    {
      name: "Iron Man",
      year:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
      runtime: "2 hours, 6 minutes"
    },
    {
      name: "Iron Man 2",
      year:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
      runtime: "2 hours, 4 minutes"
    },
    {
      name: "Iron Man 3",
      year:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      runtime: "2 hours, 10 minutes"
    }
  ],
  ThorOdinson: [
    {
      name: "Thor",
      year:
        "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
      runtime: "1 hour, 55 minutes"
    },
    {
      name: " Thor: The Dark World",
      year:
        "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
      runtime: "1 hour, 52 minutes"
    },
    {
      name: " ThorRagnarok",
      year:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      runtime: "2 hours, 10 minutes"
    }
  ],
  CaptainAmerica: [
    {
      name: "CA: The First Avenger ",
      year:
        "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      runtime: "2 hours, 4 minutes"
    },
    {
      name: "CA: The Winter Soldier",
      year:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
      runtime: "2 hours, 16 minutes"
    },
    {
      name: "CA: Civil War",
      year:
        "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
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
                <div style={{ fontSize: "small", backgroundColor: "#AFF" }}>
                  {marvel.year} <br />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <img src={marvelposter} />
      </footer>
    </div>
  );
}
