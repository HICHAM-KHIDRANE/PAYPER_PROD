import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    img: "/sky/type/Agriculture.png",
    name: "Agriculture",
    url: "/sky/Agriculture"
  },
  {
    img: "/sky/type/Mapping.png",
    name: "Mapping",
    url: "/sky/Mapping"
  },
  {
    img: "/sky/type/Inspection.png",
    name: "Inspection",
    url: "/sky/Inspection"
  },
];

const services = [
  {
    title: "Photographie Aérienne",
    dec: "Capturez des images époustouflantes depuis les airs avec nos drones professionnels."
  },
  {
    title: "Vidéographie Aérienne",
    dec: "Créez des vidéos impressionnantes avec nos drones équipés de caméras haute définition."
  },
  {
    title: "Cartographie Aérienne",
    dec: "Réalisez des cartes détaillées de vos terres et propriétés grâce à nos solutions de cartographie par drone."
  }
];

const avantages = [
  {
    title: "Efficacité et Précision",
    dec: "Nos drones vous permettent de surveiller vos cultures avec une grande précision et une efficacité accrue."
  },
  {
    title: "Détection Précoce des Problèmes",
    dec: "Identifiez rapidement les problèmes liés à vos cultures pour y remédier à temps."
  },
  {
    title: "Solutions sur Mesure",
    dec: "Nous développons des solutions adaptées à vos besoins spécifiques pour optimiser votre activité agricole."
  }
];

const nous_sommes = [
  {
    title: "Qualité",
    dec: "Nos services sont de haute qualité, et nous continuons à améliorer nos processus pour toujours répondre à vos attentes."
  },
  {
    title: "Professionnel",
    dec: "Une équipe de professionnels experts est à votre disposition pour vous écouter, vous assister et réussir ensemble vos projets."
  },
  {
    title: "Confiance",
    dec: "Vous nous confiez vos projets, nous serons à la hauteur de votre confiance et nous traiterons vos projets dans la totale discrétion."
  }
];

const Sky = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center mb-12 py-8 bg-blue-100 shadow-md   bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url('/sky/bg.jpg')` }}>
        <h1 className="text-5xl font-extrabold text-gray-900 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">Sky : Domaines d’Application</h1>
        <p className="text-xl text-gray-500 mt-4">Explorez les différentes applications de nos drones</p>
      </header>

      <section className="max-w-7xl px-6 py-10 sm:px-8 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <Link to={item.url} key={i} data-aos="zoom-in" className="group relative">
              <div className="overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 group-hover:scale-105">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">{item.name}</h3>
                  <div className="w-full flex justify-center items-center">
                    <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                      Plus de détails
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div key={i} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold mb-6">Avantages & Solutions Personnalisées</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((item, i) => (
              <div key={i} className="transition-transform transform hover:scale-105">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white opacity-90">{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nous sommes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {nous_sommes.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sky;
