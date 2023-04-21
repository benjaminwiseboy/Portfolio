import './ServiceContainer.css'

const ServiceContainer = ({ service }) => (
  <div className='service'>
    <span>{service.icon}</span>
    <h3>{service.title}</h3>
    <p className='service__description'>{service.description}</p>
  </div>
)

export default ServiceContainer
