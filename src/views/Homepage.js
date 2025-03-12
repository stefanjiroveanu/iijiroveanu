import Navbar from "../components/navbar";
import program from "../external/program.bmp";
import { ReactComponent as CheckMark } from "../external/check.svg"
import { Footer } from "../components/footer";

const Homepage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className=" px-[3%]">
                <Navbar />
                <div className="bg-[#006d77] text-white w-[100%] py-[2%] px-[3%] h-[1%] flex rounded-lg flex-col">
                    <h1 className="text-2xl text-left font-bold mb-[0.5%]">JIROVEANU ENACHE CLAUDIU INTREPRINDERE PERSONALA</h1>
                    <div className="flex flex-col gap-[3%] text-left">
                        <span className="text-xl text-left">👷 Atelier peleti</span>
                        <span className="text-xl text-left">📚 Cod CAEN 1629</span>
                        <span className="text-xl text-left">🪵 Fabricarea de produse din lemn, fabricarea articolelor de plută, paie și din alte materiale vegetale</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[3%] w-[100%] h-[1%] flex rounded-lg flex-col mt-[1%]">
                    <img src={program}></img>
                    <div className=" bg-[#83c5be] text-white rounded-lg px-[3%] py-[2%]">
                        <h1 className="text-2xl text-left font-bold"> ATELIER DE PROUDCTIE PELETI - JIROVEANU ENACHE CLAUDIU I.I.</h1>
                        <div className="flex flex-col py-[2%] gap-2 text-left mb-[5%]">
                            <span className="text-xl font-semibold text-left mb-[3%]"> Cod CAEN 1629:  fabricarea de produse din lemn; fabricarea articolelor de pluta, paie, si din alte materiale vegetale împletite.</span>
                            <span className="text-xl text-left">🔥 Încalzirea cu peleți: convenabilă, accesibilă și durabilă</span>
                            <span className="text-xl text-left">🔥 Sunt o alternativă stabilă, regenerabilă, de încalzire a locuințelor</span>
                            <span className="text-xl text-left">🔥 Reprezintă o sursă de energie ecologică, curată;</span>
                            <span className="text-xl text-left">🔥 Mai multă căldură, costuri mai mici</span>
                        </div>
                        <div className="flex flex-col gap-2 text-left">
                            <span className="text-xl text-left">Proiect finanțat cu fonduri europene nerambursabile prin Programul National de Dezvoltare Rural -  <a className="text-[#006d77]">PNDR</a></span>
                            <span className="text-xl text-left">Programul National de Dezvoltare Rural este implementat de Agenția pentru Finanțarea Investițiilor Rurale -   <a className="text-[#006d77]">AFIR</a></span>
                            <span className="text-xl text-left">Proiectul este finanțat de Uniunea Europeană și de Guvernul României prin Fondul European Agricol pentru Dezvoltare Rurală - <a className="text-[#006d77]">FEADR</a></span>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] mb-[10%]">
                    <h1 className="text-3xl text-left font-bold mt-[5%] text-[#006d77] text-center mb-[5%]">INFORMATII DESPRE PRODUSELE OFERITE</h1>
                    <div className="grid grid-cols-2 text-[#006d77] font-bold text-xl gap-x-[10%] gap-y-[35%]">
                        <div className="flex flex-row">
                            <CheckMark className="w-[30%] h-[100%] px-[5%]" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-normal">INCALZIREA CU PELETI</h1>
                                <span className="font-light">
                                    Alegerea sistemului de incalzire centrala este o problema la majoritatea gospodariilor, eficienta
                                    produselor este extrem de importanta pentru a lua decizia corecta.
                                </span>
                                <button className="bg-[#83c5be] rounded-md text-white py-[1%] mt-[1%]">Afla mai multe</button>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <CheckMark className="w-[30%] h-[100%] px-[5%]" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-normal">DESPRE PELETI</h1>
                                <span className="font-light">
                                    Alegerea sistemului de incalzire centrala este o problema la majoritatea gospodariilor, eficienta
                                    produselor este extrem de importanta pentru a lua decizia corecta.
                                </span>
                                <button className="bg-[#83c5be] rounded-md text-white py-[1%] mt-[1%]">Afla mai multe</button>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <CheckMark className="w-[30%] h-[100%] px-[5%]" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-normal">PRODUSE FABRICATE</h1>
                                <span className="font-light">
                                    Alegerea sistemului de incalzire centrala este o problema la majoritatea gospodariilor, eficienta
                                    produselor este extrem de importanta pentru a lua decizia corecta.
                                </span>
                                <button className="bg-[#83c5be] rounded-md text-white py-[1%] mt-[1%]">Afla mai multe</button>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <CheckMark className="w-[30%] h-[100%] px-[5%]" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-normal">VANZARE PRODUSE</h1>
                                <span className="font-light">
                                    Alegerea sistemului de incalzire centrala este o problema la majoritatea gospodariilor, eficienta
                                    produselor este extrem de importanta pentru a lua decizia corecta.
                                </span>
                                <button className="bg-[#83c5be] rounded-md text-white py-[1%] mt-[1%]">Afla mai multe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;