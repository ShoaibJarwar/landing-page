import './Background.css'
import img1 from '../../assets/car.jpg'
import img2 from '../../assets/car2.jpg'
import img3 from '../../assets/car3.jpg'
import video1 from '../../assets/video.mp4'

const Background = ({heroCount, playStatus}) => {
  if(playStatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
      </video>
  )}
  else if(heroCount === 0){
    return(
      <img src={img1} className='background fade-in' alt="" />
    )
  }
  else if(heroCount === 1){
    return(
      <img src={img2} className='background fade-in' alt=''/>
    )
  }
  else if(heroCount === 2){
    return(
      <img src={img3} className='background fade-in' alt=''/>
    )
  }
}

export default Background
