import useFetch from './customHook'
import Data from './Data'

export default function ResultsContainer() {
  
    const { data, loadingState, error } = useFetch('http://localhost:8090/individual/age');
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && <Data data={data} />}
      </div>
      
    )
}