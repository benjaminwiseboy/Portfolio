import { Fade, Slide } from 'react-reveal'
import { profile, softSkills, hardSkills } from '../../portfolio'
import Ratings from '../Ratings/Ratings'
import './Profile.css'

const Profile = () => {
  const { description, image } = profile
  return (
    <section id='profile' className='section'>
      <h2 className='section__title'>Qui suis-je ?</h2>
      <div className='profile_description'>
        <p>{description}</p>
      </div>
      <div className='profile__grid'>
        <Slide right>
          <div className='profile_skills'>
            <h3 className='profile_section_title'>Soft Skills</h3>
            {softSkills.map((skill) => (
              <Ratings title={skill.title} rate={skill.rate} total={7} />
            ))}
          </div>
        </Slide>
        <Fade>
          <div className='profile_image'>
            <img src={image} alt='profile_pic' />
          </div>
        </Fade>

        <Slide left>
          <div className='profile_skills'>
            <h3 className='profile_section_title'>Hard Skills</h3>
            {hardSkills.map((skill) => (
              <Ratings title={skill.title} rate={skill.rate} total={7} />
            ))}
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default Profile
