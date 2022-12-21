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
        <p>Skills to max: {sims[0].skills.map((skill) => <li key={skill}>{skill}</li>)}</p>
        {sims[0].ageGroup.id >= 4 && <p>Sexual preference: {sims[0].sexualPreference}</p>}
        </div>
        
      </div>
    </div>
    
  );
};