import useFetch from './customHook'
import Data from './Data'

export default function ResultsContainer({difficulty,lifespan,numberOfSims}) {
  
    const { data, loadingState, error } = useFetch('http://localhost:8090/legacy', difficulty,lifespan,numberOfSims);
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && <Data data={data} />}
      </div>
      
    )
}