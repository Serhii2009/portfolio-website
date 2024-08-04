import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I have a track record of successfully delivering projects ranging
              from small business websites to complex enterprise applications.
              My commitment to staying updated with the latest industry trends
              and technologies ensures that I provide cutting-edge solutions to
              my clients.
            </p>
            <p>
              Outside of coding, I enjoy contributing to open-source projects
              and participating in tech communities. My passion for continuous
              learning drives me to constantly enhance my skills and knowledge.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '50%' }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '70%' }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '60%' }} />
            </div>

            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: '50%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
