import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import styles from "../styles/Home.module.css";
import AspirationDropdownContainer from "./aspirationDropdownContainer";
import getAspirations from "./dropdownApiHook";
import JobDropdownContainer from "./jobDropdownContainer";

export default function NewSimForm() {
  //this is to store our inputs
  const [difficulty, setDifficulty] = useState("0");
  const [lifespan, setLifespan] = useState("-1");
  const [isShown, setIsShown] = useState(false);
  const [age, setAge] = useState("-1");
  const [gender, setGender] = useState("-1");
  const [aspiration, setAspiration] = useState("-1");
  const [job, setJob] = useState("-1");

  function handleSubmit(e) {
    e.preventDefault();
    setIsShown(true);
    document.getElementById("config-panel").classList.add("invisible");
  }
  const handleChange = (event) => {
    event.preventDefault();
    setDifficulty(event.target.value);
  };
  const handleLifespan = (event) => {
    event.preventDefault();
    setLifespan(event.target.value);
  };

  const handleAge = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };

  const handleGender = (event) => {
    event.preventDefault();
    setGender(event.target.value);
  };
  const handleAspiration = (event) => {
    event.preventDefault();
    setAspiration(event.target.value);
  };

  const handleJob = (event) => {
    event.preventDefault();
    setJob(event.target.value);
  };

  return (
    <div>
      <form id="config-panel" action="#" method="post" onSubmit={handleSubmit}>
        <div id="game-mode-config">
          <label htmlFor="difficulty-game">
            Difficulty:
            <select value={difficulty} onChange={handleChange}>
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

        <div id="age-config">
          <label htmlFor="age-sim">
            Age:
            <select value={age} onChange={handleAge}>
              <option value="-1">Random</option>
              <option value="0">Toddler</option>
              <option value="1">Child</option>
              <option value="2">Teen</option>
              <option value="3">Young Adult</option>
              <option value="4">Adult</option>
              <option value="5">Elder</option>
            </select>
          </label>
        </div>

        <div id="gender-config">
          <label htmlFor="gender-sim">
            Gender:
            <select value={gender} onChange={handleGender}>
              <option value="-1">Random</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </label>
        </div>

        {age >= 3 && (
          <div id="aspiration-config">
            <label htmlFor="aspiration-sim">
              Aspiration:
              <select value={aspiration} onChange={handleAspiration}>
                <AspirationDropdownContainer age={age} />
              </select>
            </label>
          </div>
        )}

        {age < 3 && age > 0 && (
          <div id="child-aspiration-config">
            <label htmlFor="child-aspiration-sim">
              Aspiration:
              <select value={aspiration} onChange={handleAspiration}>
                <AspirationDropdownContainer age={age}/>
              </select>
            </label>
          </div>
        )}

        {age >= 3 && (
          <div id="job-config">
            <label htmlFor="job-sim">
              Job:
              <select value={job} onChange={handleJob}>
                <JobDropdownContainer age={age} />
              </select>
            </label>
          </div>
        )}

        {age == 2 && (
          <div id="teen-job-config">
            <label htmlFor="teen-job-sim">
              Job:
              <select value={job} onChange={handleJob}>
                <JobDropdownContainer age={age}/>
              </select>
            </label>
          </div>
        )}

        <input type="submit" value="Start" className="start-btn"></input>
      </form>
      {isShown && (
        <ResultsContainer
          difficulty={difficulty}
          lifespan={lifespan}
          age={age}
          gender={gender}
          aspiration={aspiration}
          job={job}
        />
      )}
    </div>
  );
}
