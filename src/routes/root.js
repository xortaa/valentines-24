import "../styles/root.css"
import { useState } from "react"

export default function Root() {
  const [hidden, setHidden] = useState(true)

  return (
    <div className='homePage'>
      <img
        src='https://scontent.xx.fbcdn.net/v/t39.1997-6/69037885_1459634297494642_2555601142797041664_n.webp?_nc_cat=103&ccb=1-7&_nc_sid=ba09c1&_nc_eui2=AeHkExaMXe-lufVZ1LGhViI2MiA2-eRFR2IyIDb55EVHYlPmKOGjowOYNzpW_HKbs8ScLZLXuJVuWruVxJNhP2TH&_nc_ohc=_IIkSXfA6DQAX8720Z-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfB4fsS2ih4FZXaa0ibNNss9v_8NJ2hmrIz3YOVNyGylBg&oe=65C7093E'
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
