import { useState } from "react"
import "../styles/love.css"

function Love() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((prevCounter) => (prevCounter < 4 ? prevCounter + 1 : 4))
  }

  const shouldHide = (hideCounters) => {
    return hideCounters.includes(counter) ? "hide" : ""
  }

  return (
    <div className='mahal' onClick={handleClick}>
      <p>Ikaw</p>
      <p className={shouldHide([1, 2])}>Lang</p>
      <p className={shouldHide([1, 3, 4])}>Ang</p>
      <p className={shouldHide([2, 3, 4])}>Minamahal</p>
      <p className={shouldHide([2, 3, 4])}>Ko</p>
      <p className={shouldHide([1, 2, 3, 4])}>Sa</p>
      <p className={shouldHide([1, 3, 4])}>Buong</p>
      <p className={shouldHide([1, 3, 4])}>Mundo</p>
    </div>
  )
}

export default Love
