import "../styles/valentine.css"
import { useState } from "react"
import Love from "../components/Love"

function ValentinePage() {
  const [click, setClick] = useState(false)
  // play https://www.youtube.com/watch?v=_QGIzmtIr3E as music when clicked
  return (
    <div className='valentine'>
      <div className={click ? "hidden" : "letter_container"}>
        <img
          src={process.env.PUBLIC_URL + "/letter.png"}
          alt='letter'
          onClick={() => setClick(true)}
          className='letter'
        />
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
            buhay. Napapasaya mo ako ng sobra ikaw ang aking lahat, ang aking layunin ang aking buhay ang aking mahal.
          </i>
        </div>
        <div>
          <Love />
        </div>
      </div>
    </div>
  )
}
export default ValentinePage
