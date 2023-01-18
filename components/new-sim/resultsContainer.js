import useFetch from './customHook'
import Data from './Data'

export default function ResultsContainer({difficulty,lifespan,age,gender,aspiration,job,children,married,wedding,sexuality,jobLevel,maxNumberOfSkills}) {
  
    const { data, loadingState, error } = useFetch('http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/new-sim', difficulty,lifespan,age,gender,aspiration,job,children,married,wedding,sexuality,jobLevel,maxNumberOfSkills);
    console.log("this is the results container", data);
    return (
      <div>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      {data && <Data data={data} />}
      </div>
      
    )
}