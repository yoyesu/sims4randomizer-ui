import { useState } from 'react';
import useFetch from './customHook';


export default function Generator({generator}) {
  const { id, url,btn,title } = generator;
  const { data, loadingState, error } = useFetch(url);
  const values = data;
  const [valuesId,setVauesId] = useState("0");
  const [isRun, setIsRun] = useState(false);
  
  const handleResult = (event) => {
    setIsRun(true);
    setVauesId(Math.floor(Math.random() * values.length));
  };

  return (
    
      <div className="individual-randomizer-card" key={id}>
        <h3>{title}</h3>
        {isRun && <p>{values[valuesId].name}</p>}
        <button className='btn ctas-individual-randomizers mt-auto' onClick={handleResult}>{btn}</button>
      </div>
    
  );
}
