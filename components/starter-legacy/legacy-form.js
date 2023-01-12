import { useState } from "react";
import LegacyAndStarterResultsContainer from "./LegacyAndStarterResultsContainer";

export default function LegacyForm() {
  //this is to store our inputs
  const [difficulty, setDifficulty] = useState("-1");
  const [lifespan, setLifespan] = useState("-1");
  const [isShown, setIsShown] = useState(false);
  const [numberOfSims, setNumberOfSims] = useState("-1");
  const [showRestart,setShowRestart] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsShown(true);
    setShowRestart(true);
    document.getElementById("config-panel").classList.add("invisible");
  };
  function handleRestart(e) {
    e.preventDefault();
    setIsShown(false);
    setShowRestart(false);
    document.getElementById("config-panel").classList.remove("invisible");
  };
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
    <div className="starter-household-component">
      <form id="config-panel" action="#" method="post" onSubmit={handleSubmit} className="container">
        <div className="row align-items-center">
        <div id="game-mode-config" className="dropdown col col-md-3 offset-md-3">
          <label htmlFor="difficulty-game">
            Difficulty:
            <select value={difficulty} onChange={handleDifficulty} className="form-select">
              <option value="-1">Random</option>
              <option value="0" >Easy</option>
              <option value="1" >Normal</option>
              <option value="2" >Hard</option>
            </select>
          </label>
        </div>

        <div id="lifespan-config" className="dropdown col col-md-3">
          <label htmlFor="lifespan-sim">
            Lifespan:
            <select value={lifespan} onChange={handleLifespan} className="form-select">
              <option value="-1">Random</option>
              <option value="0">Short</option>
              <option value="1">Normal</option>
              <option value="2">Long</option>
            </select>
          </label>
        </div>
        </div>

      <div className="row align-items-center">
        <div id="number-of-sims-config" className="dropdown col">
          <label htmlFor="number-of-sims-sim">
            Number of sims in the household:
            <select value={numberOfSims} onChange={handleNumberOfSims} className="form-select">
              <option value="-1">Random</option>
              {Array(8).fill(null).map((value, index) => (
            <option key={index} value={index + 1}>{index + 1}</option>
            ))}
              
            </select>
          </label>
        </div>
        </div>
        <div className="row align-items-center">
            <div className="col">
          {!showRestart && <input type="submit" value="Randomize" className="btn btn-light"></input>}
          </div>
        
        </div>
        
    </form>

    {isShown && (
        <LegacyAndStarterResultsContainer
          difficulty={difficulty}
          lifespan={lifespan}
          numberOfSims={numberOfSims}
          isLegacy={true}
        />
      )}

{showRestart && <input type="submit" value="Restart" className="btn btn-light" onClick={handleRestart}></input>}
    </div>
  );
}
