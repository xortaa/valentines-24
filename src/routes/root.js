import "../styles/root.css"
import { useState } from "react"

export default function Root() {
  return (
    <div className='homePage'>
      <div className='typewriter'>
        <h1>WILL YOU BE MY VALENTINE? 🙈🙈</h1>
      </div>
      <div className='button_container'>
        <button className='button' id='yes'>
          YES
        </button>
        <button className='button' id='no'>
          NO
        </button>
      </div>
      <img src={process.env.PUBLIC_URL + "/heart.png"} alt='heart' className='heart' id='heart1' />
      <img src={process.env.PUBLIC_URL + "/heart.png"} alt='heart' className='heart' id='heart2' />
      <img src={process.env.PUBLIC_URL + "/heart.png"} alt='heart' className='heart' id='heart3' />
    </div>
  )
}
