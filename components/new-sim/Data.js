import React from 'react';

export default function Data({data}) {

  const {difficulty, household: {lifeSpan, sims}} = data;
  const convertSkillsArrayToString = () => {
    let newArray = [];
    sims[0].skillsToMaster.map((skill) => {
      newArray.push(skill.name);
    });
      return newArray.join(", ");
  };
  return (
  
        <div className='results-container d-flex justify-content-around'>
          <div id='new-sim-lifespan-difficulty-results-container' className='results-container-item'>
            <p>Lifespan: <span className='randomized-results'>{lifeSpan.name}</span></p>
            <p>Difficulty: <span className='randomized-results'>{difficulty.name}</span></p>
          </div>
        
        <div id='non-lifespan-difficulty-results-container' className='results-container-item'>
        <p>Age: <span className='randomized-results'>{sims[0].ageGroup.name}</span></p>
        <p>Gender: <span className='randomized-results'>{sims[0].gender.name}</span></p>
        {sims[0].ageGroup.id >= 2 && <p>Aspiration: <span className='randomized-results'>{sims[0].aspiration.name}</span></p>}
        {sims[0].ageGroup.id >= 4 && <p>Children to have: <span className='randomized-results'>{sims[0].children}</span></p>}
        {sims[0].ageGroup.id >= 4 && <p>Is married?: <span className='randomized-results'>{sims[0].isMarried}</span></p>}
        {sims[0].ageGroup.id >= 4 && <p>Will get married (ever or again)?: <span className='randomized-results'>{sims[0].willMarry}</span></p>}
        <p>Skills to master: <span className='randomized-results'>{convertSkillsArrayToString()}</span></p>
        {sims[0].ageGroup.id >= 3 && <p>Sexual preference: <span className='randomized-results'>{sims[0].sexualPreference.name}</span></p>}
        {sims[0].ageGroup.id >= 3 && <p>Job: <span className='randomized-results'>{sims[0].job.name} ({sims[0].job.level})</span></p>}
        </div>
        
        </div>
    
  );
};