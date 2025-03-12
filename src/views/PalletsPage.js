import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import image1 from "../external/pellets1.jpg";
import image2 from "../external/pellets2.jpg";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Products = () => {
    const { addToCart } = useContext(CartContext);


    const products = [
        {
            id: 1,
            name: "Peleți din paie - 15kg",
            description: "Peleți ecologici din paie, ideali pentru încălzire, ambalaj de 15kg.",
            price: "50 lei",
            image: image1,
        },
        {
            id: 2,
            name: "Peleți din lemn - 15kg",
            description: "Peleți din lemn de calitate superioară, potriviți pentru sobe și centrale.",
            price: "55 lei",
            image: image2,
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="px-[3%] w-full">
                <Navbar />
                <div className="bg-white shadow-md text-[#006d77] w-full py-[2%] px-[3%] rounded-lg flex flex-col items-center text-center">
                    <h1 className="text-3xl font-bold mb-4">Produsele Noastre</h1>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6 mb-6  text-[#006d77]">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                            <div className="relative bottom-[30%] justify-center items-center mx-[10%] py-3 bg-white rounded-xl shadow-lg">
                                <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
                                <p className="text-lg mt-2">{product.description}</p>
                                <p className="text-xl font-bold mt-2">{product.price}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-[#83c5be] text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg "
                                >
                                    Adaugă în coș
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
