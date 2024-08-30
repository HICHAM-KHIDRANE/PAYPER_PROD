import React from 'react';
import { ArrowRight, Building, Camera, Newspaper } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">360° Expertise</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Accueil</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Services</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">À propos</a></li>
            <li><a href="#" className="text-blue-600 hover:text-blue-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto mt-16">
        <section className="text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            L'expertise à 360° : Marketing, Construction, et Actualités
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Découvrez nos trois entreprises leaders dans leurs domaines respectifs.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <CompanyCard 
            title="Payperprod" 
            description="Leader en marketing, média, et design graphique, avec une expertise unique dans le contrôle des lignes électriques par drones."
            icon={<Camera className="w-12 h-12 text-blue-500" />}
          />
          <CompanyCard 
            title="Ready Building" 
            description="Spécialiste de la construction civile et des infrastructures VRD, bâtissant des environnements durables et fonctionnels."
            icon={<Building className="w-12 h-12 text-green-500" />}
          />
          <CompanyCard 
            title="TrendNews" 
            description="Votre source fiable pour les dernières nouvelles, avec un focus sur l'actualité locale, nationale et internationale."
            icon={<Newspaper className="w-12 h-12 text-red-500" />}
          />
        </section>

        <section className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-blue-800 mb-8">Nos Clients</h3>
          <div className="flex justify-center space-x-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white mt-24 py-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 360° Expertise. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

const CompanyCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default LandingPage;
