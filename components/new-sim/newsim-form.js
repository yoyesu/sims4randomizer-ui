import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import AspirationDropdownContainer from "./aspirationDropdownContainer";
import getAspirations from "./dropdownApiHook";
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
    <div className="starter-household-component">
      <form id="config-panel" action="#" method="post" onSubmit={handleSubmit} className="container">
        <div className="row">
        <div id="game-mode-config" className="dropdown col">
          <label htmlFor="difficulty-game">
            Difficulty:
            <select value={difficulty} onChange={handleChange} className="form-select">
              <option value="-1">Random</option>
              <option value="0">Easy</option>
              <option value="1">Normal</option>
              <option value="2">Hard</option>
            </select>
          </label>
        </div>
        

        <div id="lifespan-config" className="dropdown col">
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

        <div id="age-config" className="dropdown col">
          <label htmlFor="age-sim">
            Age:
            <select value={age} onChange={handleAge} className="form-select">
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
        </div>
        
        {/* START OF SECOND ROW */}
        <div className="row">
        <div id="gender-config" className="dropdown col">
          <label htmlFor="gender-sim">
            Gender:
            <select value={gender} onChange={handleGender} className="form-select">
              <option value="-1">Random</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
          </label>
        </div>

        {age >= 3 && (
          <div id="aspiration-config" className="dropdown col">
            <label htmlFor="aspiration-sim">
              Aspiration:
              <select value={aspiration} onChange={handleAspiration} className="form-select">
                <AspirationDropdownContainer age={age} />
              </select>
            </label>
          </div>
        )}

        {age < 3 && age > 0 && (
          <div id="child-aspiration-config" className="dropdown col">
            <label htmlFor="child-aspiration-sim">
              Aspiration:
              <select value={aspiration} onChange={handleAspiration} className="form-select">
                <AspirationDropdownContainer age={age}/>
              </select>
            </label>
          </div>
        )}

        {age >= 3 && (
          <div id="job-config" className="dropdown col">
            <label htmlFor="job-sim">
              Job:
              <select value={job} onChange={handleJob} className="form-select">
                <JobDropdownContainer age={age} />
              </select>
            </label>
          </div>
        )}

        {age == 2 && (
                  <div id="teen-job-config" className="dropdown col">
                    <label htmlFor="teen-job-sim">
                      Job:
                      <select value={job} onChange={handleJob} className="form-select">
                        <JobDropdownContainer age={age}/>
                      </select>
                    </label>
                  </div>
                )}
        </div>

        {/* START OF THIRD ROW */}

        <div className="row">
        {age >= 3 && (
          <div id="job-level-config" className="dropdown col">
            <label htmlFor="job-level-sim">
              Job level:
              <select value={jobLevel} onChange={handleJobLevel} className="form-select">
              <option value="-1">Random</option>
              {Array(10).fill(null).map((value, index) => (
            <option key={index} value={index+1}>{index+1}</option>
            ))}
              </select>
            </label>
          </div>
        )}

        {age >= 3 && (
          <div id="children-config" className="dropdown col">
            <label htmlFor="children">
              Children to have:
              <select value={children} onChange={handleChildren} className="form-select">
                <option value="-1">Random</option>
              {Array(8).fill(null).map((value, index) => (
            <option key={index} value={index}>{index}</option>
            ))}
              </select>
            </label>
          </div>
        )}
      
        {age >= 3 && (
          <div id="marital-status-config" className="dropdown col">
            <label htmlFor="marital-status">
              Already married?:
              <select value={married} onChange={handleMarried} className="form-select">
                <option value="-1">Random</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </label>
          </div>
        )}

</div>

          {/* START OF FOURTH ROW */}
          <div className="row">
        {age >= 3 && (
          <div id="wedding-config" className="dropdown col">
            <label htmlFor="wedding">
              Will marry? (ever or again):
              <select value={wedding} onChange={handleWedding} className="form-select">
                <option value="-1">Random</option>
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </label>
          </div>
        )}

        {age >= 2 && (
          <div id="sexuality-config" className="dropdown col">
            <label htmlFor="sexuality">
              Sexuality:
              <select value={sexuality} onChange={handleSexuality} className="form-select">
                <option value="-1">Random</option>
                <option value="0">Straight</option>
                <option value="1">Gay</option>
                <option value="2">Bisexual</option>
              </select>
            </label>
          </div>
        )}

          <div id="max-number-skills-config" className="dropdown col">
            <label htmlFor="max-number-skills">
              How many skills should they max?:
              <select value={maxNumberOfSkills} onChange={handleMaxNumberOfSkills} className="form-select">
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
          </div>
          <div className="row align-items-center">
            <div className="col">
          <input type="submit" value="Randomize" className="btn btn-light"></input>
          </div>
          </div>
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
