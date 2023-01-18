import getAspirations, { getJobs } from './dropdownApiHook'

export default function JobDropdownContainer({age}) {

    let url = age == 2 ? 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/enums/teen-jobs' : 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/enums/jobs';
    
  
    const { data, loadingState, error } = getJobs(url);

    return (
      <>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      
      <option value="-1">Random</option>
      {data && data.map((asp, indx) => <option key={indx} value={indx}>{asp.name}</option>)}

      </>
      
    )
}