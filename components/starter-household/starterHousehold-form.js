import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import styles from "../../styles/Home.module.css";

export default function StarterHouseholdForm() {
  //this is to store our inputs
  const [difficulty, setDifficulty] = useState("0");
  const [lifespan, setLifespan] = useState("-1");
  const [isShown, setIsShown] = useState(false);
  const [numberOfSims, setNumberOfSims] = useState("-1");
  function handleSubmit(e) {
    e.preventDefault();
    setIsShown(true);
    document.getElementById("config-panel").classList.add("invisible");
  }
  const handleDifficulty = (event) => {
    event.preventDefault();
    setDifficulty(event.target.value);
  };
  const handleLifespan = (event) => {
    event.preventDefault();
    setLifespan(event.target.value);
  };

  const handleNumberOfSims = (event) => {
    event.preventDefault();
    setNumberOfSims(event.target.value);
  };

  return (
    <div>
      <form id="config-panel" action="#" method="post" onSubmit={handleSubmit}>
        <div id="game-mode-config">
          <label htmlFor="difficulty-game">
            Difficulty:
            <select value={difficulty} onChange={handleDifficulty}>
              <option value="0">Random</option>
              <option value="1">Easy</option>
              <option value="2">Normal</option>
              <option value="3">Hard</option>
            </select>
          </label>
        </div>

        <div id="lifespan-config">
          <label htmlFor="lifespan-sim">
            Lifespan:
            <select value={lifespan} onChange={handleLifespan}>
              <option value="-1">Random</option>
              <option value="0">Short</option>
              <option value="1">Normal</option>
              <option value="2">Long</option>
            </select>
          </label>
        </div>

        <div id="number-of-sims-config">
          <label htmlFor="number-of-sims-sim">
            Number of sims in the household:
            <select value={numberOfSims} onChange={handleNumberOfSims}>
              <option value="-1">Random</option>
              {Array(8).fill(null).map((value, index) => (
            <option key={index} value={index + 1}>{index + 1}</option>
            ))}
              
            </select>
          </label>
        </div>
        <input type="submit" value="Start" className="start-btn"></input>
    </form>

    {isShown && (
        <ResultsContainer
          difficulty={difficulty}
          lifespan={lifespan}
          numberOfSims={numberOfSims}
        />
      )}
    </div>
  );
}
