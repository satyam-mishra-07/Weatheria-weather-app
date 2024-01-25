import React from 'react'
import './Weather.css'
import '../images/search_icon.png'

export default function Weather(props) {
  async function handleSearch(){
    props.setLocation(document.getElementsByClassName('search').value)
    let Wdata = await props.getData(props.location);
    // console.log(Wdata.main);
    return Wdata.main
  }
  
  function handleOnChange(event) {
    props.setLocation(event.target.value);
  }

  return (
    <>
      <div className="main">
        <form action="#">
          <input type="text" id='location' className='search' placeholder='Location' value={props.location} onChange={handleOnChange} />
          <button onClick={handleSearch} className='btn'><img src={require("../images/search_icon.png")} alt='search'/></button>
        </form>
        <div className="display">

        </div>
      </div>
    </>
  )
}
