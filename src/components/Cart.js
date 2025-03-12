import { useContext, useRef } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ isVisible, setCartVisible }) => {
    const { cart, removeFromCart } = useContext(CartContext);
    const cartRef = useRef(null);

    return (
        <div 
            ref={cartRef} 
            onMouseEnter={() => setCartVisible(true)}
            onMouseLeave={() => setCartVisible(false)}
            className={`absolute top-12 right-0 w-80 bg-white shadow-lg p-4 rounded-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <h2 className="text-2xl font-bold">Coș de cumpărături</h2>
            {cart.length === 0 ? (
                <p className="text-lg mt-4">Coșul este gol.</p>
            ) : (
                <div>
                <ul className="mt-4">
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-2">
                            <span>{item.name}</span>
                            <button onClick={() => removeFromCart(index)} className="text-red-500 font-bold">✖</button>
                        </li>
                    ))}
                </ul>
                <button className="bg-[#83c5be] text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg mt-4">Finalizează comanda</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
