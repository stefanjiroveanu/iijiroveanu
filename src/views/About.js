import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import image from "../external/3.jpg";

const AboutPellets = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="px-[3%]">
                <Navbar />
                <div className="text-[#006d77] w-[100%] py-[2%] px-[3%] rounded-lg flex flex-col shadow-lg">
                    <div>
                        <h1 className="text-2xl text-left font-bold mb-[0.5%]">ÎNCĂLZIREA CU PELEȚI: CONVENABILĂ, ACCESIBILĂ ȘI DURABILĂ</h1>
                        <p className="text-xl text-left">Alegerea sistemului de încălzire centrală este o problemă în majoritatea gospodăriilor. Compararea soluțiilor și eficiența produselor sunt extrem de importante pentru a lua decizia corectă. Totuși, alegerea finală nu este deloc dificilă, pentru că implică doar puțină cunoaștere, informație și analiză.</p>
                    </div>
                    <div className="flex justify-between mt-[2%]">
                        <div>
                            <h2 className="text-xl font-bold mt-[2%]">Motive pentru folosirea încălzirii cu peleți</h2>
                            <ul className="list-disc list-inside text-xl">
                                <li>O soluție eficientă atunci când nu ai acces la gaz</li>
                                <li>Folosești un combustibil ecologic</li>
                                <li>Te bucuri de un grad ridicat de confort</li>
                                <li>Peleții au un randament mai bun de ardere</li>
                                <li>Costurile vor fi foarte mici</li>
                                <li>Peleții au o calitate garantată</li>
                                <li>Obții o mobilitate sporită</li>
                            </ul>
                        </div>
                        <img src={image} className="w-[30%] rounded-lg shadow-lg ml-[5%]"></img>
                    </div>
                </div>
                <div className="w-[100%] text-[#006d77] mt-[5%] mb-[5%]">
                    <h1 className="text-3xl text-center font-bold mb-[5%]">Beneficiile încălzirii cu peleți</h1>
                    <div className="grid grid-cols-2 gap-[5%] text-xl">
                        <div className="bg-white p-[3%] rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold">Confort ridicat</h2>
                            <p>Spre deosebire de încălzirea tradițională cu lemne, peleții nu necesită să fie tăiați sau divizați, economisind timp și efort fizic. În plus, ocupă mai puțin spațiu decât cărbunele și lemnul.</p>
                        </div>
                        <div className="bg-white p-[3%] rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold">Costuri reduse</h2>
                            <p>Investiția inițială poate fi mai mare, dar costurile anuale sunt mai mici decât în cazul încălzirii cu gaze naturale sau electricitate, iar eficiența ridicată permite recuperarea rapidă a investiției.</p>
                        </div>
                        <div className="bg-white p-[3%] rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold">Sursă ecologică</h2>
                            <p>Peleții sunt o sursă regenerabilă de energie și au un nivel scăzut de umiditate, ceea ce îi face foarte eficienți în timpul arderii.</p>
                        </div>
                        <button className="bg-[#83c5be] text-white text-xl font-bold px-[5%] py-[1%] mb-[1%] rounded-md shadow-lg">Vreau să cumpăr peleți - apasă aici</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default AboutPellets;