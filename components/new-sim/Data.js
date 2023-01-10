import React from 'react';

export default function Data({data}) {

  const {difficulty, household: {lifeSpan}, sims} = data;
  return (
  
        <div className='results-container'>
        <div>Lifespan: {lifeSpan.name}</div>
        <p>Difficulty: {difficulty.name}</p>
        <p>Age: {sims[0].ageGroup.name}</p>
        <p>Gender: {sims[0].gender.name}</p>
        {sims[0].ageGroup.id >= 2 && <p>Aspiration: {sims[0].aspiration.name}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Children to have: {sims[0].children}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Is married?: {sims[0].isMarried}</p>}
        {sims[0].ageGroup.id >= 4 && <p>Will get married (ever or again)?: {sims[0].willMarry}</p>}
        <p>Skills to max: {sims[0].skills.map((skill) => <li key={skill.name}>{skill.name}</li>)}</p>
        {sims[0].ageGroup.id >= 3 && <p>Sexual preference: {sims[0].sexualPreference.name}</p>}
        {sims[0].ageGroup.id >= 3 && <p>Job: {sims[0].job.name}</p>}
        {sims[0].ageGroup.id >= 3 && <p>Job Level: {sims[0].job.level}</p>}

        </div>
    
  );
};