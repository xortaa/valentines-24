import "../styles/root.css"
import { useState } from "react"

export default function Root() {
  const [hidden, setHidden] = useState(true)

  return (
    <div className='homePage'>
      <img
        src={process.env.PUBLIC_URL + "/catshakira-cat.gif"}
        alt='shakira cat'
        className={hidden ? "cat" : "cat cat_hover"}
      />
      <div className='typewriter'>
        <h1>WILL YOU BE MY VALENTINE?</h1>
      </div>
      <div className='button_container'>
        <a href='to-my-valentine'>
          <button
            className='button'
            id='yes'
            onMouseEnter={() => setHidden(false)}
            onMouseLeave={() => setHidden(true)}>
            {hidden ? "YES" : "😳😳"}
          </button>
        </a>
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
