import { useState } from 'react';
import useFetch from './customHook';


export default function Generator({generator}) {
  const { id, url,btn,title } = generator;
  const { data, loadingState, error } = useFetch(url);
  const values = data;
  const [valuesId,setValuesId] = useState("0");
  const [isRun, setIsRun] = useState(false);
  const [numberOfSims,setNumberOfSims] = useState("0");
  
  const changeColour = () => {
    if(isRun){
      let result = document.getElementById(`${id}`);
    
      result.classList.add('color-change-to-yellow');
    setTimeout(() => {
      result.classList.remove('color-change-to-yellow')}, 300);
    }
  };
  const handleUsualRandomizersResult = () => {
    setIsRun(true);
    setValuesId(Math.floor(Math.random() * values.length));
    changeColour();
  };

  const handleNumberOfSimsRandomizerResult = () => {
    setIsRun(true);
    setNumberOfSims(Math.floor(Math.random() * 8) + 1); //from 1 to 8
    changeColour();
  };

  return (
    <>
      {id != 11 && 
      <div className="individual-randomizer-card">
        <h3>{title}</h3>
        {isRun && <p className="" id={id} >{values[valuesId].name}</p>}
        <button className='btn ctas-individual-randomizers mt-auto' onClick={handleUsualRandomizersResult}>{btn}</button>
      </div>
    }
    {id == 11 && <div className="individual-randomizer-card">
    <h3>{title}</h3>
    {isRun && <p className="" id={id} >{numberOfSims}</p>}
    <button className='btn ctas-individual-randomizers mt-auto' onClick={handleNumberOfSimsRandomizerResult}>{btn}</button>
  </div>}
  </>
    
  );
}
