import { Zoom } from 'react-reveal'
import { MovingComponent } from 'react-moving-text'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import './Background.css'

const About = () => {
  const { name, role, resume, social } = about

  return (
    <>
      {/* Background */}
      <div className='area'>
        <ul className='circles'>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
        </ul>
      </div>
      <Zoom bottom cascade>
        <div className='about center'>
          <h2>Salut, je suis</h2> <br />
          {name && (
            <h1>
              <span className='about__name'> {name}.</span>
            </h1>
          )}
          {role.length && (
            <h1 className='about__role'>
              <MovingComponent
                type='typewriter'
                dataText={role}
                className='about__role'
              />
            </h1>
          )}
          <div className='about__contact center'>
            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  Mon CV
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <GitHubIcon />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </Zoom>
    </>
  )
}

export default About
