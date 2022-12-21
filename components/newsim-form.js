import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import styles from "../styles/Home.module.css";

export default function NewSimForm() {
  //this is to store our inputs
  const [difficulty, setDifficulty] = useState("0");
  const [lifespan, setLifespan] = useState("-1");
  const [isShown, setIsShown] = useState(false);

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

        {/* <div id="number-sims-config">
            <label th:for="gender-sim">Gender:</label>
            <select th:field="*{gender}">
                <option
                        th:each="gender : ${T(com.ms.sims4randomnizer.model.enums.Gender).values()}"
                        th:value="${gender.ordinal()}"
                        th:text="${gender}" ></option>
                <option
                        th:value="${-1}"
                        th:text="RANDOM" ></option>
            </select>

        </div>

        <div id="age-sims-config">
            <label th:for="age-sim">Age:
            <select th:field="*{age}">
                <option
                        th:each="age : ${T(com.ms.sims4randomnizer.model.enums.AgeGroup).values()}"
                        th:value="${age.ordinal()}"
                        th:text="${age}"></option>
                <option
                        th:value="${-1}"
                        th:text="RANDOM" ></option>
            </select>
            </label>
        </div>

        <div id="aspiration-sims-config">
            <label th:for="aspiration-sim">Aspiration:
            <select th:field="*{aspiration}">
                <option
                        th:each="asp : ${T(com.ms.sims4randomnizer.model.enums.Aspiration).values()}"
                        th:value="${asp.ordinal()}"
                        th:text="${asp}" ></option>
                <option
                        th:value="${-1}"
                        th:text="RANDOM" ></option>
            </select>

            </label>
        </div>

        <div id="jobs-sims-config">
            <label th:for="jobs-sim">Job:
                <select th:field="*{job}">
                    <option
                            th:each="job : ${T(com.ms.sims4randomnizer.model.enums.Job).values()}"
                            th:value="${job.ordinal()}"
                            th:text="${job}"></option>
                    <option
                            th:disabled="${config.age != 2}"
                            th:each="teenJob : ${T(com.ms.sims4randomnizer.model.enums.TeenJob).values()}"
                            th:value="${teenJob.ordinal()}"
                            th:text="${teenJob}"></option>
                    <option
                            th:value="${-1}"
                            th:text="RANDOM"></option>
                </select>

            </label>
        </div> */}

        <input type="submit" value="Start" className="start-btn"></input>
      </form>
      {isShown && <ResultsContainer difficulty={difficulty} lifespan={lifespan} />}
    </div>
  );
}
