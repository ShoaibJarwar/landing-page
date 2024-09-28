import './Hero.css'
import arrow_btn from '../../assets/arrow.png'
import play_btn from '../../assets/play.png'
import pause_btn from '../../assets/pause.png'

const Hero = ({heroCount, setHeroCount, playStatus, setPlayStatus, data}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{data.text1}</p>
        <p>{data.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="arrow" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? "hero-dot current" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? "hero-dot current" : "hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? "hero-dot current" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_btn : play_btn} alt="" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
