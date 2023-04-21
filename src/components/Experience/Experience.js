import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  const { jobs, studies } = experience
  return (
    <section className='section'>
      <h2 className='section__title'>Mon parcours</h2>
      <div className='experience__container'>
        <div className='experience__content'>
          <div className='experience__title'>
            <h3>Expériences professionnelles</h3>
          </div>
          {jobs.map((job) => (
            <div className='experience__content__data'>
              <div>
                <img src={job.image} alt='company logo' />
              </div>
              <div>
                <h4 className='primary-color'>{job.title}</h4>
                <div>
                  <h5>{job.company}</h5>
                  <p>
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='experience__content'>
          <h3 className='experience__title'>Expériences académiques</h3>
          {studies.map((study) => (
            <div className='experience__content__data'>
              <div>
                <img src={study.image} alt='company logo' />
              </div>
              <div>
                <h4 className='primary-color'>{study.title}</h4>
                <div>
                  <h5>{study.school}</h5>
                  <p>
                    {study.startDate} - {study.endDate}
                  </p>
                </div>
                <p>{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
