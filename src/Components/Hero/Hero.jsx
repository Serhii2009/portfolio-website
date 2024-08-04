import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I’m Serhii Kravchenko,</span> full stack developer based in
        Ukraine.
      </h1>
      <p>
        I specialize in building dynamic and responsive web applications,
        leveraging a wide range of technologies to deliver high-quality
        solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
