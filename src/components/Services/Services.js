import { Fade } from 'react-reveal'
import uniqid from 'uniqid'
import { services } from '../../portfolio'
import './Services.css'
import ServiceContainer from './ServiceContainer'

const Services = () => {
  if (!services.length) return null

  return (
    <section className='section services' id='skills'>
      <h2 className='section__title'>Ce que je sais faire</h2>
      <Fade left>
        <div className='services__grid'>
          {services.map((service) => (
            <ServiceContainer key={uniqid()} service={service} />
          ))}
        </div>
      </Fade>
    </section>
  )
}

export default Services
