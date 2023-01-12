import getAspirations from './dropdownApiHook'

export default function AspirationDropdownContainer({age}) {

    let url = age == 1 ? 'http://localhost:8090/enums/child-aspirations' : 'http://localhost:8090/enums/aspirations';
    
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