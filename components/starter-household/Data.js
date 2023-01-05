import React from 'react';

export default function Data({data}) {

  const {difficulty, household: {lifeSpan}, sims} = data;
  return (
  
        <div className='ui card' id='weather-card'>
        <div className='weather-content'>
        <div id='weather-text'>
        <div className='temp'>Lifespan: {lifeSpan}</div>
        <p>Difficulty: {difficulty}</p>

        {sims.map((sim,index) => 
          <div key={index}>
          <p>Age: {sim.ageGroup.name}</p>
          <p>Gender: {sim.gender}</p>
          {sim.ageGroup.id >= 2 && <p>Aspiration: {sim.aspiration}</p>}
          {sim.ageGroup.id >= 4 && <p>Children to have: {sim.children}</p>}
          {sim.ageGroup.id >= 4 && <p>Is married?: {sim.isMarried}</p>}
          {sim.ageGroup.id >= 4 && <p>Will get married (ever or again)?: {sim.willMarry}</p>}
          <p>Skills to max: {sim.skills.map((skill) => <li key={skill}>{skill}</li>)}</p>
          {sim.ageGroup.id >= 3 && <p>Sexual preference: {sim.sexualPreference}</p>}
          {sim.ageGroup.id >= 3 && <p>Job: {sim.job.jobName}</p>}
          {sim.ageGroup.id >= 3 && <p>Job Level: {sim.job.level}</p>}
          </div>
        )}

        </div>
        
      </div>
    </div>
    
  );
};