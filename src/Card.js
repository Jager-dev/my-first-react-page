import './card.css'
import './rating.css'
import Rating from "./Rating";


const Card = () => {
    return (
      <div className="card">
        <div>
          <h3 className="card-title">LOREM IPSUM</h3>
          <p className="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      <Rating />
      </div>
    )
}
export default Card