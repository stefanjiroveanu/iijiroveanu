import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../external/pellets1.jpg";
import image2 from "../external/pellets2.jpg";
import image3 from "../external/pellets2.jpg";
import image4 from "../external/pellets2.jpg";

const images = [
    image1, image2, image3, image4
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="px-[3%] w-full">
                <Navbar />
                <div className="bg-[#006d77] text-white w-full py-[2%] px-[3%] rounded-lg flex flex-col">
                    <h1 className="text-3xl font-bold mb-4 items-center text-center">Soluții de Încălzire Eficiente și Ecologice</h1>
                    <p className="text-xl">
                        Ne dedicăm transformării resturilor vegetale în soluții de încălzire eficiente și ecologice, într-o lume în care sustenabilitatea și minimizarea impactului asupra mediului sunt prioritare.
                        Peletii noștri sunt fabricați exclusiv din materiale ecologice, precum paie, coceni, lucernă și fân, transformând deșeurile agricole într-o sursă de energie curată și eficientă.
                    </p>
                </div>

                <div className="w-full text-[#006d77] mt-6">
                    <p className="text-xl">
                        Ne propunem să revoluționăm modul în care vă încălziți locuința.
                        Peleții noștri sunt fabricați exclusiv din materiale ecologice, precum paie, coceni, lucernă și fân, transformând deșeurile agricole într-o sursă de energie curată și eficientă.
                        Astfel, nu numai că reducem cantitatea de deșeuri, dar oferim și un combustibil prietenos cu mediul înconjurător.
                    </p>
                    <p className="text-xl mt-4">
                        Peleții sunt un tip de combustibil realizat prin compactarea resturilor vegetale, precum paiele, cojile de semințe și alte materiale biodegradabile. Aceștia sunt o alternativă ecologică la combustibilii tradiționali, oferind multiple avantaje:
                    </p>
                    <div className="flex flex-row">
                        <div className="w-[75%]">
                            <ul className="list-disc list-inside text-xl text-left mx-auto  mt-4">
                                <li>Eficiență ridicată: Peleții au un conținut energetic mare, producând multă căldură la ardere.</li>
                                <li>Emisii reduse: Fiind fabricați din materiale vegetale, peleții generează mai puține emisii nocive.</li>
                                <li>Utilizare versatilă: Peleții pot fi folosiți în diverse tipuri de sisteme de încălzire, inclusiv sobe, centrale și cazane.</li>
                            </ul>
                            <p className="text-xl mt-4">
                                Peleții noștri oferă un raport calitate-preț excelent, combinând economia cu eficiența. Prin utilizarea peleților noștri, puteți reduce semnificativ costurile de încălzire în comparație cu alte forme de combustibil.
                            </p>
                            <h3 className="text-xl mt-4 font-bold">
                                Avantajele alegerii peleților de la ijiroveanu.ro
                            </h3>
                            <ol className="list-disc list-inside text-xl text-left mx-auto  mt-4 mb-4">
                                <li>Calitate superioară: Peleții noștri sunt fabricați din materii prime de cea mai bună calitate, asigurând o ardere eficientă și constantă.</li>
                                <li>Sustenabilitate: Prin utilizarea resturilor vegetale, contribuim la reducerea deșeurilor și la protejarea resurselor naturale.</li>
                                <li>Diversitate: Oferim peleți în diverse cantități.</li>
                                <li>Accesibilitate: Prin intermediul platformei noastre online, puteți comanda rapid și simplu peleții de care aveți nevoie.</li>
                            </ol>
                        </div>
                        <div className="relative bottom-10 w-[40%] mt-6 mb-6 px-[5%]">
                            <img src={images[currentIndex]} alt="Pellet Image" className="rounded-lg shadow-lg" />
                            <button
                                onClick={prevSlide}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                            >
                                <ChevronLeft size={24} className="text-[#006d77]" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                            >
                                <ChevronRight size={24} className="text-[#006d77]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;
