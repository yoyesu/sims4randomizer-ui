import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, difficultyy,lifespanChoice,ageGroup,simGender,simAspiration,simJob,childrenToHave,married,wedding,simSexuality,levelOfJob,maxNumberOfSkills) {
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [difficulty, setDifficulty] = useState(difficultyy);
    const [lifespan, setLifeSpan] = useState(lifespanChoice);
    const [age, setAge] = useState(ageGroup);
    const [gender, setGender] = useState(simGender);
    const [aspiration, setAspiration] = useState(simAspiration);
    const [job, setJob] = useState(simJob);
    const [children, setChildren] = useState(childrenToHave);
    const [isMarried, setIsMarried] = useState(married);
    const [willMarry, setWillMarry] = useState(wedding);
    const [sexuality, setSexuality] = useState(simSexuality);
    const [jobLevel, setJobLevel] = useState(levelOfJob);
    const [skillsArrayLength, setSkillsArrayLength] = useState(maxNumberOfSkills);
   
    useEffect(() => {
    
      (async function () {
        try {
          setLoading(true);
          const res = await axios.post(url, {
            difficulty: difficulty,
            lifespan: lifespan,
            age: age,
            gender:gender,
            aspiration:aspiration,
            job:job,
            children:children,
            isMarried:isMarried,
            willMarry:willMarry,
            sexuality:sexuality,
            jobLevel:jobLevel,
            skillsArrayLength:skillsArrayLength,
            });
          setData(res.data);
        } catch (error) {
          console.log('Error occured', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
    }, [url]);

  return { loading, data, error };
}