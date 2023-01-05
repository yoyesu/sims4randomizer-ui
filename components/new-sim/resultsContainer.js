import useFetch from './customHook'
import Data from './Data'

export default function ResultsContainer({difficulty,lifespan,age,gender,aspiration,job,children,married,wedding,sexuality,jobLevel,maxNumberOfSkills}) {
  
    const { data, loadingState, error } = useFetch('http://localhost:8090/new-sim', difficulty,lifespan,age,gender,aspiration,job,children,married,wedding,sexuality,jobLevel,maxNumberOfSkills);
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && <Data data={data} />}
      </div>
      
    )
}