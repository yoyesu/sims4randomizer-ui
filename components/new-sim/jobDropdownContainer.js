import getAspirations, { getJobs } from './dropdownApiHook'

export default function JobDropdownContainer({age}) {

    let url = age == 2 ? 'http://localhost:8090/enums/teen-jobs' : 'http://localhost:8090/enums/jobs';
    
  
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