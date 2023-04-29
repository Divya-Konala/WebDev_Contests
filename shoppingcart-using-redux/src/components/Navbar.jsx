import { NavLink as Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="logo">
        <Link to="/">Shoppify</Link>
        </div>
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar