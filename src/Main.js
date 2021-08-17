import Card from "./Card";
import './main.css'

const Main = () => {
  return (
    <div className="section">
      <div>
        <div>
          <h1 className="main-title">Shop</h1>
          <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row">
          <Card/>
        </div>
      </div>
    </div>
  )
}
export default Main
