import { useEffect, useState } from 'react';
import axios from 'axios';

export default function getAspirations(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
    
      (async function () {
        try {
          setLoading(true);
          const res = await axios.get(url);
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

export function getJobs(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 
  useEffect(() => {
  
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
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