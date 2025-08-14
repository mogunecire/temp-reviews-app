import { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]

  const [readMore, setReadMore] = useState(false)

  const prevReview = () => {
    // index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1)
    setIndex((currIndex) => {
      const newIndex = (currIndex - 1 + reviews.length) % reviews.length
      return newIndex
    })
    setReadMore(false)
  }
  const nextReview = () => {
    // index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1)
    setIndex((currIndex) => {
      const newIndex = (currIndex + 1) % reviews.length
      return newIndex
    })
    setReadMore(false)
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    console.log(randomNumber)
    if (randomNumber === index) {
      randomNumber = (index + 1) % reviews.length
    }
    setIndex(randomNumber)
  }
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">
          {readMore ? text : `${text.substring(0, 120)}... `}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          surpise me
        </button>
      </article>
    </main>
  )
}
export default App
