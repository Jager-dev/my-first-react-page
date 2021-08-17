import Logo from "./Logo";
import Nav from "./Nav";
import './header.css';



const Header = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Nav />
      </header>
    </div>
  )
}
export default Header