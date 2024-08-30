import { Send } from 'lucide-react';
import React, { useState } from 'react';

const services = [
    { name: "Marketing et Communication" },
    { name: "Design Graphique" },
    { name: "Événementiel" },
    { name: "Contrôle des Lignes Électriques par Drones" },
    { name: 'Autre' },
];

const QuoteRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePhone = (phone) => phone === '' || /^\+?\d{9,15}$/.test(phone);

    const handleValidation = () => {
        let validationErrors = {};
        let formIsValid = true;

        if (!formData.name) {
            formIsValid = false;
            validationErrors["name"] = "Le nom est requis";
        }

        if (!formData.email) {
            formIsValid = false;
            validationErrors["email"] = "L'email est requis";
        } else if (!validateEmail(formData.email)) {
            formIsValid = false;
            validationErrors["email"] = "L'adresse e-mail est invalide";
        }

        if (!validatePhone(formData.phone)) {
            formIsValid = false;
            validationErrors["phone"] = "Le numéro de téléphone n'est pas valide";
        }

        if (!formData.service) {
            formIsValid = false;
            validationErrors["service"] = "Le service est requis";
        }

        setErrors(validationErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            console.log('Form submitted:', formData);
            alert('Votre demande de devis a été envoyée !');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
            setErrors({});
        } else {
            console.log('Form has errors.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Demande de Devis</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Nom</label>
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            className={`w-full bg-transparent rounded-md border ${errors.name ? 'border-red-500' : 'border-dark'} py-[10px] pl-5 pr-12 text-dark-6 outline-none transition`}
                        />
                    </div>
                    {errors.name && <p className="mt-[10px] text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                    <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Email</label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            className={`w-full bg-transparent rounded-md border ${errors.email ? 'border-red-500' : 'border-dark'} py-[10px] pl-5 pr-12 text-dark-6 outline-none transition`}
                        />
                    </div>
                    {errors.email && <p className="mt-[10px] text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Téléphone</label>
                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Votre téléphone"
                            className={`w-full bg-transparent rounded-md border ${errors.phone ? 'border-red-500' : 'border-dark'} py-[10px] pl-5 pr-12 text-dark-6 outline-none transition`}
                        />
                    </div>
                    {errors.phone && <p className="mt-[10px] text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                    <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Service</label>
                    <div className="relative">
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full bg-transparent rounded-md border ${errors.service ? 'border-red-500' : 'border-dark'} py-[10px] pl-5 pr-12 text-dark-6 outline-none transition`}
                        >
                            <option value="">Sélectionnez un service</option>
                            {services.map((service, i) => (
                                <option key={i} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.service && <p className="mt-[10px] text-sm text-red-500">{errors.service}</p>}
                </div>

                <div>
                    <label className="mb-[10px] block text-base font-medium text-dark dark:text-white">Message</label>
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Votre message"
                            className={`w-full bg-transparent rounded-md border ${errors.message ? 'border-red-500' : 'border-dark'} py-[10px] pl-5 pr-12 text-dark-6 outline-none transition`}
                        ></textarea>
                    </div>
                    {errors.message && <p className="mt-[10px] text-sm text-red-500">{errors.message}</p>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center p-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Envoyer la demande
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QuoteRequestForm;
