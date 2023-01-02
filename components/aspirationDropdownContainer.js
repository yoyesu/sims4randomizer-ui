import getAspirations from './dropdownApiHook'

export default function AspirationDropdownContainer({age}) {

    let url = age == 1 ? 'http://localhost:8090/enums/child-aspirations' : 'http://localhost:8090/enums/aspirations';
    
  
    const { data, loadingState, error } = getAspirations(url);

    return (
      <>
      {/* {loadingState && <Loader />}
      {error && <Error message={error.message} />} */}
      
      <option value="-1">Random</option>
      {data && data.map((asp, indx) => <option value={indx}>{asp}</option>)}

      </>
      
    )
}