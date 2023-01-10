import React from 'react';

export default function Data({data}) {

  const {difficulty, household: {lifeSpan}, sims} = data;
  return (
  
        <div className='results-container'>
        <div>Lifespan: {lifeSpan.name}</div>
        <p>Difficulty: {difficulty.name}</p>

        {sims.map((sim,index) => 
          <div key={index}>
          <p>Age: {sim.ageGroup.name}</p>
          <p>Gender: {sim.gender.name}</p>
          {sim.heir == true && <div>
            {sim.ageGroup.id >= 2 && <p>Aspiration: {sim.aspiration.name}</p>}
          {sim.ageGroup.id >= 4 && <p>Children to have: {sim.children}</p>}
          {sim.ageGroup.id >= 4 && <p>Is married?: {sim.isMarried}</p>}
          {sim.ageGroup.id >= 4 && <p>Will get married (ever or again)?: {sim.willMarry}</p>}
          <p>Skills to max: {sim.skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}</p>
          {sim.ageGroup.id >= 3 && <p>Sexual preference: {sim.sexualPreference.name}</p>}
          {sim.ageGroup.id >= 3 && <p>Job: {sim.job.name}</p>}
          {sim.ageGroup.id >= 3 && <p>Job Level: {sim.job.level}</p>}
            
            </div>}
          
          </div>
        )}

        </div>
    
  );
};