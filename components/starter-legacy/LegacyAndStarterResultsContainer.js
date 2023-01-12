import useFetch from '../starter-legacy/customHook'
import LegacyData from './LegacyData';
import StarterData from './StarterData';

export default function LegacyAndStarterResultsContainer({isLegacy,difficulty,lifespan,numberOfSims}) {
    let url = isLegacy ? 'http://localhost:8090/legacy' : 'http://localhost:8090/starter-household';
    const { data, loadingState, error } = useFetch(url, difficulty,lifespan,numberOfSims);
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && isLegacy && <LegacyData data={data} />}
      {data && !isLegacy && <StarterData data={data} />}
      </div>
      
    )
}