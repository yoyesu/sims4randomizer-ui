import useFetch from '../starter-legacy/customHook'
import LegacyData from './LegacyData';
import StarterData from './StarterData';

export default function LegacyAndStarterResultsContainer({isLegacy,difficulty,lifespan,numberOfSims}) {
    let url = isLegacy ? 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/legacy' : 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/starter-household';
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