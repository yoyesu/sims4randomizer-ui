import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url, difficultyy,lifespanChoice) {
    let levelOfDifficulty = Object.values(difficultyy);
  
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [difficulty, setDifficulty] = useState(levelOfDifficulty[0]);
    const [lifespan, setLifeSpan] = useState(lifespanChoice);
   
    useEffect(() => {
    
      (async function () {
        try {
          setLoading(true);
          const res = await axios.post(url, {
            difficulty: difficulty,
            lifespan: lifespan,
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