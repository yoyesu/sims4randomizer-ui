import React from 'react';

export default function Data({data}) {

  const {difficulty, household: {lifeSpan}, sims} = data;
  return (
  
        <div className='ui card' id='weather-card'>
        <div className='weather-content'>
        <div id='weather-text'>
        <div className='temp'>Lifespan: {lifeSpan}</div>
        <p>Difficulty: {difficulty}</p>
        <p>Age: {sims[0].ageGroup.name}</p>
        <p>Gender: {sims[0].gender}</p>
        {sims[0].ageGroup.id >= 2 && <p>Aspiration: {sims[0].aspiration}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Children to have: {sims[0].children}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Is married?: {sims[0].isMarried}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Will get married (ever or again)?: {sims[0].willMarry}</p>}
        <p>Skills to max: {sims[0].skills.map((skill) => <li key={skill}>{skill}</li>)}</p>
        {sims[0].ageGroup.id >= 3 && <p>Sexual preference: {sims[0].sexualPreference}</p>}
        {sims[0].ageGroup.id >= 3 && <p>Job: {sims[0].job.jobName}</p>}
        {sims[0].ageGroup.id >= 3 && <p>Job Level: {sims[0].job.level}</p>}

        </div>
        
      </div>
    </div>
    
  );
};