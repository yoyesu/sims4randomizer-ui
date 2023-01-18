import getAspirations from './dropdownApiHook'

export default function AspirationDropdownContainer({age}) {

    let url = age == 1 ? 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/enums/child-aspirations' : 'http://sims4randomizer-env.eba-a2nzq8i3.eu-west-2.elasticbeanstalk.com/enums/aspirations';
    
    console.log("aspiration container has been called")
    const { data, loadingState, error } = getAspirations(url);
    console.log("this is the data from aspiration container ",data);

    return (
      <>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      
      <option value="-1">Random</option>
      {data && data.map((asp, indx) => <option key={indx} value={indx}>{asp.name}</option>)}

      </>
      
    )
}