import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import AspirationDropdownContainer from "./aspirationDropdownContainer";
import getAspirations from "../dropdownApiHook";
import JobDropdownContainer from "./jobDropdownContainer";

export default function NewSimForm() {
  //this is to store our inputs
  const [difficulty, setDifficulty] = useState("-1");
  const [lifespan, setLifespan] = useState("-1");
  const [isShown, setIsShown] = useState(false);
  const [age, setAge] = useState("-1");
  const [gender, setGender] = useState("-1");
  const [aspiration, setAspiration] = useState("-1");
  const [job, setJob] = useState("-1");
  const [children, setChildren] = useState("-1");
  const [married, setMarried] = useState("-1");
  const [wedding, setWedding] = useState("-1");
  const [sexuality, setSexuality] = useState("-1");
  const [jobLevel, setJobLevel] = useState("-1");
  const [maxNumberOfSkills, setMaxNumberOfSkills] = useState("-1");

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

  const handleChildren = (event) => {
    event.preventDefault();
    setChildren(event.target.value);
  };

  const handleWedding = (event) => {
    event.preventDefault();
    setWedding(event.target.value);
  };

  const handleMarried = (event) => {
    event.preventDefault();
    setMarried(event.target.value);
  };

  const handleSexuality = (event) => {
    event.preventDefault();
    setSexuality(event.target.value);
  };

  const handleJobLevel = (event) => {
    event.preventDefault();
    setJobLevel(event.target.value);
  };

  const handleMaxNumberOfSkills = (event) => {
    event.preventDefault();
    setMaxNumberOfSkills(event.target.value);
  };

  return (
    <div>
      <form id="config-panel" action="#" method="post" onSubmit={handleSubmit}>
        <div id="game-mode-config">
          <label htmlFor="difficulty-game">
            Difficulty:
            <select value={difficulty} onChange={handleChange}>
              <option value="-1">Random</option>
              <option value="0">Easy</option>
              <option value="1">Normal</option>
              <option value="2">Hard</option>
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
        {age >= 3 && (
          <div id="job-level-config">
            <label htmlFor="job-level-sim">
              Job:
              <select value={jobLevel} onChange={handleJobLevel}>
              <option value="-1">Random</option>
              {Array(10).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}
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

        {age >= 3 && (
          <div id="children-config">
            <label htmlFor="children">
              Children to have:
              <select value={children} onChange={handleChildren}>
                <option value="-1">Random</option>
              {Array(8).fill(null).map((value, index) => (
            <option key={index} value={index}>{index}</option>
            ))}
              </select>
            </label>
          </div>
        )}

        {age >= 3 && (
          <div id="marital-status-config">
            <label htmlFor="marital-status">
              Already married?:
              <select value={married} onChange={handleMarried}>
                <option value="-1">Random</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </label>
          </div>
        )}

        {age >= 3 && (
          <div id="wedding-config">
            <label htmlFor="wedding">
              Will marry? (ever or again):
              <select value={wedding} onChange={handleWedding}>
                <option value="-1">Random</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </label>
          </div>
        )}

        {age >= 2 && (
          <div id="sexuality-config">
            <label htmlFor="sexuality">
              Sexuality:
              <select value={sexuality} onChange={handleSexuality}>
                <option value="-1">Random</option>
                <option value="0">Straight</option>
                <option value="1">Gay</option>
                <option value="2">Bisexual</option>
              </select>
            </label>
          </div>
        )}

          <div id="max-number-skills-config">
            <label htmlFor="max-number-skills">
              How many skills should they max?:
              <select value={maxNumberOfSkills} onChange={handleMaxNumberOfSkills}>
              <option value="-1">Random</option>
              {age == -1 && Array(4).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}
            {age == 1 && Array(4).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}
              {age >= 2 && Array(25).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}

            {age == 0 && Array(5).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}
              </select>
            </label>
            <br/>
              <small className="text-muted">Choose Toddler to select up to 5 skills, or Teen or older to select up to 25.</small>
          </div>

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
          children={children}
          married={married}
          wedding={wedding}
          sexuality={sexuality}
          jobLevel={jobLevel}
          maxNumberOfSkills={maxNumberOfSkills}
        />
      )}
    </div>
  );
}
