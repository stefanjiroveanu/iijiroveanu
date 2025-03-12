import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../external/logo.png';
import Cart from "./Cart";

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <nav className="relative flex items-center p-[1%] bg-white text-black w-[100%]">
      <div className="flex items-center gap-[3%] w-[100%]">
        <img src={logo} alt="logo" className="w-[5%]" />
        <h1 className="text-[#006d77] text-xl font-bold">I.I. Jiroveanu Enache Claudiu</h1>
      </div>
      <div className="flex justify-end gap-[5%] w-[100%] text-lg text-[#006d77] relative">
        <Link to="/">Acasa</Link>
        <Link to="/about">Despre peleti</Link>
        <Link to="/gallery">Galerie</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cumpara">Cumpara Peleti</Link>
        <div 
          className="relative"
          onMouseEnter={() => setCartVisible(true)}
        >
          <Link to="/cart">Coș</Link>
          <Cart isVisible={cartVisible} setCartVisible={setCartVisible}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
