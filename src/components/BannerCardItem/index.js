// Write your code here.
import './index.css'

const BannerCard = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails
  return (
    <div className="cards-container">
      <li className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button">Show More</button>
      </li>
    </div>
  )
}

export default BannerCard
