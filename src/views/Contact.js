import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="px-[3%] w-full">
                <Navbar />
                <div className="flex flex-row mt-[3%]">
                    <div className=" w-[60%] bg-white p-6 rounded-lg shadow-lg mt-6 mb-6">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" name="firstName" placeholder="Prenume" className="border p-2 rounded" onChange={handleChange} required />
                                <input type="text" name="lastName" placeholder="Nume" className="border p-2 rounded" onChange={handleChange} required />
                            </div>
                            <input type="text" name="phone" placeholder="Telefon" className="border p-2 rounded" onChange={handleChange} />
                            <input type="email" name="email" placeholder="Email" className="border p-2 rounded" onChange={handleChange} required />
                            <input type="text" name="subject" placeholder="Subiect" className="border p-2 rounded" onChange={handleChange} />
                            <textarea name="message" placeholder="Mesaj" rows="4" className="border p-2 rounded" onChange={handleChange} required></textarea>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="terms" id="terms" className="w-4 h-4" onChange={handleChange} required />
                                <label htmlFor="terms" className="text-sm">Am citit și sunt de acord cu Termenii și condițiile.</label>
                            </div>
                            <button type="submit" className="bg-[#83c5be] text-white text-xl font-bold px-6 py-3 rounded-md shadow-lg">Trimite mesaj</button>
                        </form>
                    </div>
                    <div className="w-[40%] text-[#006d77] mt-6 mb-6 text-center bg-white justify-center items-center rounded-lg shadow-lg gap-[5%] flex flex-col">
                        <h2 className="text-5xl font-bold">DATE DE CONTACT</h2>
                        <p className="text-xl font-semibold">Nr. Reg. Com: F16/1240/2021</p>
                        <p className="text-xl font-semibold">C.U.I. : 44861657</p>
                        <p className="text-xl font-semibold">Adresa: sat Brădești, com. Brădești, str. Aleea Garii, nr. 12</p>
                        <p className="text-xl font-semibold">Telefon: 0766708934</p>
                        <p className="text-xl font-semibold">Email: <a href="mailto:peleti@iijiroveanu.ro" className="text-[#006d77]">peleti@iijiroveanu.ro</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;