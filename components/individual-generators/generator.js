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
    <div className="projects">
      <div className="project" key={id}>
        <h2>{title}</h2>
        {isRun && <p>{values[valuesId].name}</p>}
        <button onClick={handleResult}>{btn}</button>
      </div>
    </div>
  );
}
