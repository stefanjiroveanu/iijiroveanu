import { Link } from "react-router-dom"
import sigla from "../external/sigla-afir.png"
import anpc_sol from "../external/anpc-sol.png"
import anpc_sal from "../external/anpc-sal.png"

export const Footer = () => {
    return (
        <div>
            <div className="bg-[#006d77] w-[100%] flex text-white flex-col py-[2%]">
                <div className="grid grid-cols-4 px-[3%]">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">Termeni si conditii</h3>
                        <p className="pr-[10%]">Toate informațiile și materialele folosite în acest site sunt rezervate în exclusivitate JIROVEANU ENACHE CLAUDIU INT. IND. Folosirea oricărui text, imagine, material, fișier sau obiect de construcție din acest site în alte scopuri decât cele necomerciale și cele specificate în site fără acordul scris al JIROVEANU ENACHE CLAUDIU INT. IND. este interzisă.</p>
                        <Link className="text-[#83c5be]">Termeni si conditii</Link>
                        <Link className="text-[#83c5be]">Livrare - Returnare</Link>
                        <Link className="text-[#83c5be]">Politica de Cookies</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">Date de identificare fiscala</h3>
                        <div>Nr. Reg. Com: F16/1240/2021</div>
                        <div>C.U.I. 44861657</div>
                        <div className="font-semibold text-lg">Adresa:</div>
                        <div>Sat Brădești, Com. Brădești,</div>
                        <div>Str. Aleea Garii,  nr. 12</div>
                        <img src={sigla} className="w-[75%]"></img>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">Date de contact</h3>
                        <div className="flex flex-row gap-6">📧  <a href="mailto:peleti@iijroveanu.ro">peleti@iijroveanu.ro</a></div>
                        <div className="flex flex-row gap-6">📞  <a href="tel:0040766708934">0040766708934</a> </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">Suport clienti</h3>
                        <Link to="https://anpc.ro/" className="text-[#83c5be]">ANPC</Link>
                        <Link to="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" className="text-[#83c5be]">ANPC - SOL</Link>
                        <Link to="https://anpc.ro/ce-este-sal/?ref=footer_3_5" className="text-[#83c5be]">ANPC - SAL</Link>
                        <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ROhttps://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"><img src={anpc_sol} className="w-[50%]"></img></a>
                        <a href="https://anpc.ro/ce-este-sal/"><img src={anpc_sal} className="w-[50%]"></img></a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#83c5be] py-[1%] text-center text-white">© Copyright 2023 - www.iijiroveanu.ro. Toate drepturile rezervate | Atelier Productie Peleti ‐ JIROVEANU ENACHE CLAUDIU I. I. </div>
        </div>
    )
}