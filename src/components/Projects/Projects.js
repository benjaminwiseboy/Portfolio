import { Fade } from 'react-reveal'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Mes réalisations</h2>
      <Fade right>
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </Fade>
    </section>
  )
}

export default Projects
