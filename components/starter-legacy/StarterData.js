import React from 'react';

export default function StarterData({data}) {

  const {difficulty, household: {lifeSpan, sims}} = data;
  const convertSkillsArrayToString = (index) => {
    let newArray = [];
    sims[index].skillsToMaster.map((skill) => {
      newArray.push(skill.name);
    });
      return newArray.join(", ");
  };
  return (
  
      <div className='results-container'>

        <div id='first-row-results-container' className='d-flex justify-content-around'>
          <div id='lifespan-difficulty-results-container' className='results-container-item'>
            <p>Lifespan: <span className='randomized-results'>{lifeSpan.name}</span></p>
            <p>Difficulty: <span className='randomized-results'>{difficulty.name}</span></p>
          </div>

          <div id='summary-results-container' className='results-container-item'>
            <p>Sims: <span className='randomized-results'>{sims.length}</span></p>
          </div>
        </div>  

        <div className='sims-container d-flex justify-content-around flex-wrap'>
        {sims.map((sim,index) => 
          <div key={index} className="sim-card overflow-auto scrollbar scrollbar-young-passion">
          <p>Age: <span className='randomized-results'>{sim.ageGroup.name}</span></p>
        <p>Gender: <span className='randomized-results'>{sim.gender.name}</span></p>
          {sim.ageGroup.id >= 2 && <p>Aspiration: <span className='randomized-results'>{sim.aspiration.name}</span></p>}
          {sim.ageGroup.id >= 4 && <p>Children to have: <span className='randomized-results'>{sim.children}</span></p>}
          {sim.ageGroup.id >= 4 && <p>Is married?: <span className='randomized-results'>{sim.isMarried}</span></p>}
          {sim.ageGroup.id >= 4 && <p>Will get married (ever or again)?: <span className='randomized-results'>{sim.willMarry}</span></p>}
          <p>Skills to master ({sim.skillsToMaster.length}): <span className='randomized-results'>{convertSkillsArrayToString(index)}</span></p>
          {sim.ageGroup.id >= 3 && <p>Sexual preference: <span className='randomized-results'>{sim.sexualPreference.name}</span></p>}
          {sim.ageGroup.id >= 3 && <p>Job: <span className='randomized-results'>{sim.job.name} ({sim.job.level})</span></p>}
          </div>
        )}
        </div>

        </div>
    
  );
};