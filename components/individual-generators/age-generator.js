import { useState } from "react";
import ResultsContainer from "./resultsContainer";
import styles from "../../styles/Home.module.css";

export default function AgeGenerator() {
  //this is to store our inputs
  const [isShown, setIsShown] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsShown(true);
    document.getElementById("start-btn").classList.add("invisible");
  }

  return (
    <div>
      
      {isShown && (<ResultsContainer/>)}


        <button id="start-btn" type="submit" value="Start" className="start-btn" onClick={handleSubmit}>Get Age</button>

    
    </div>
  );
}
