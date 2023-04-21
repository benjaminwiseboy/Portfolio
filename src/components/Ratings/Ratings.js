import './Ratings.css'

const Ratings = ({ title, rate, total }) => {
  const emptyNumber = total - rate
  const filledSlots = Array.from({ length: rate })
  const emptySlots = Array.from({ length: emptyNumber })

  return (
    <>
      <p>{title}</p>
      <div className='ratings'>
        {filledSlots.map(() => (
          <div className='slot filled'>&nbsp;</div>
        ))}
        {emptySlots.map(() => (
          <div className='slot empty'>&nbsp;</div>
        ))}
      </div>
    </>
  )
}

export default Ratings
