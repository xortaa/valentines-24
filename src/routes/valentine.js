import "../styles/valentine.css"
import { useState, useRef } from "react"
import Love from "../components/Love"
import YouTube from "react-youtube"

const hiddenOpts = {
  height: "1",
  width: "1",
  playerVars: {
    autoplay: 0,
  },
}

const visibleOpts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
}

function ValentinePage() {
  const [click, setClick] = useState(false)
  const playerRef = useRef(null)

  const onReady = (event) => {
    playerRef.current = event.target
  }

  const handleClick = () => {
    setClick(true)
    // play the video
    if (playerRef.current) {
      playerRef.current.playVideo() // play the video
    }
  }

  return (
    <div className='valentine'>
      <div className={click ? "hidden" : "letter_container"}>
        <img src={process.env.PUBLIC_URL + "/letter.png"} alt='letter' onClick={handleClick} className='letter' />
        <i>click me</i>
      </div>
      <div className={click ? "secret" : "hidden"}>
        <div className='note_container'>
          <i>
            Sobrang saya ko na nakilala kita & naging parte ka ng buhay ko. Nabura mo ang mga nararamdaman kong mga
            kamalasan noon dahil natabunan na ng kaswertehan ko sayo. Matagal na kitang hinahanap hanap na kahit di pa
            tayo magkakilala pinapangarap ko nang matagpuan ka. Minsan hindi ako makapaniwala kung gano ka kaperpekto,
            na pano naging posible na may taong kasing ganda mo, kaakit akit, nakakatawa, maalahanin at sobra pa. Di ko
            nang napigilan mahulog sayo ng una nating pagkikita ngunit dati pa kitang inaakit sa pagkatao mo na mas lalo
            pa akong nahulog ng nasilayan ko kagandahan mo. Walang araw na lumilipas na hindi kita namimiss. Hinihintay
            hintay ko nalang ang mga pagkakataon na magkasama tayo dahil wala akong nararamdaman kundi pagibig at
            kasayahan kapag kasama ka; Na tumatahimik ang mundo at nakakalimutan ko ang mga problema ko. Nasasabik na
            ako sa mga plano natin, mga lugar na gustong puntahan, mga pagkain na gustong tikman. Parang adventure pag
            magkasama tayo na masaya akong kasama ka kahit anong mangyari na gusto kitang makasama sa lahat at sa habang
            buhay. Napapasaya mo ako ng sobra ikaw ang aking lahat, ang aking layunin ang aking buhay ang aking mahal. Taging layunin ko lang sa buhay ay ang makasama ka at mapasaya ka. Mahal na mahal kita. Happy Valentine's Day my love.
          </i>
        </div>
        <div>
          <Love />
        </div>
      </div>
      <YouTube videoId='PCQldI3q6yc' opts={click ? visibleOpts : hiddenOpts} onReady={onReady} />
    </div>
  )
}
export default ValentinePage
