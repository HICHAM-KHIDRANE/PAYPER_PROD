import React from 'react';
import { Megaphone, Paintbrush, Calendar, Plane } from 'lucide-react';


const DroneIcon = ({ className }) => (
<svg width={100} height="43.02" className={className} fill="currentColor"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 43.02">
  <path id="drone" d="M19.53,28.49A3.852,3.852,0,0,0,16,30.833c-9.291.531-16.026,1.424-16,2.122s6.712,1,15.928.724a3.856,3.856,0,0,0,1.738,2.027h-1.5v2.742H14.34a.874.874,0,0,0-.875.874v1.954a.874.874,0,0,0,.874.874H26.655c3.1.73,3.45,1.843,5.774,3.88-.38,2.113-.94,4.42-1.378,6.414V69.417a2.092,2.092,0,0,0,4.185,0V61.21c-.048-6.9,1.066-9.69,4.9-15.031l.965-.448c0,4.146,2.866,4.4,6.908,5.32H44.978A1.675,1.675,0,0,0,43.3,52.726v10A1.675,1.675,0,0,0,44.978,64.4H55.022A1.675,1.675,0,0,0,56.7,62.726v-10a1.674,1.674,0,0,0-1.674-1.674H51.989c4.041-.928,6.9-1.176,6.9-5.321l.965.448c4.857,5.026,4.905,8.447,4.905,15.03v8.207a2.092,2.092,0,0,0,4.185,0V52.444c-.513-2.191-1.062-4.487-1.58-6.762a11.514,11.514,0,0,1,5.956-3.532H85.661a.874.874,0,0,0,.874-.874V39.322a.874.874,0,0,0-.874-.874H83.83V35.706h-1.5a3.852,3.852,0,0,0,1.738-2.027c9.216.273,15.9-.031,15.928-.724s-6.706-1.59-16-2.122a3.852,3.852,0,0,0-6.943-.3c-9.307-.283-16.1.018-16.142.716s6.615,1.58,15.827,2.112a3.852,3.852,0,0,0,1.839,2.347h-1.5v2.742C67.654,38.426,60.352,33.685,50,33.49c-10,.212-18.38,4.958-27.088,4.958V35.706h-1.5a3.852,3.852,0,0,0,1.839-2.347c9.212-.532,15.856-1.42,15.827-2.112s-6.835-1-16.142-.716a3.852,3.852,0,0,0-3.41-2.04ZM50,53.5a4.277,4.277,0,1,1-4.278,4.276A4.295,4.295,0,0,1,50,53.5Zm0,2.51a1.766,1.766,0,1,0,1.765,1.766A1.748,1.748,0,0,0,50,56.013Z" transform="translate(0 -28.49)" />
</svg>)
// Sample data
const servicesData = [
  {
    name: "Marketing et Communication",
    icon: Megaphone,
    services: [
      {
        name: "Stratégie de marque",
        description: "Développement de stratégies pour renforcer l'identité de votre entreprise et atteindre votre public cible."
      },
      {
        name: "Campagnes publicitaires",
        description: "Création de campagnes innovantes sur divers canaux pour maximiser votre visibilité."
      },
      {
        name: "Marketing digital",
        description: "Solutions complètes en SEO, SEM, gestion des réseaux sociaux et marketing par email."
      },
      {
        name: "Relations publiques",
        description: "Gestion de votre image publique avec des stratégies de communication efficace."
      }
    ]
  },
  {
    name: "Design Graphique",
    icon: Paintbrush,
    services: [
      {
        name: "Identité visuelle",
        description: "Conception de logos, chartes graphiques, et autres éléments visuels pour définir votre marque."
      },
      {
        name: "Supports imprimés",
        description: "Création de brochures, cartes de visite, affiches, et autres supports print."
      },
      {
        name: "Design web et mobile",
        description: "Développement de sites web ergonomiques et responsives, ainsi que d'applications mobiles."
      },
      {
        name: "Infographies",
        description: "Présentation visuelle de données complexes pour une communication claire et percutante."
      }
    ]
  },
  {
    name: "Événementiel",
    icon: Calendar,
    services: [
      {
        name: "Organisation de conférences",
        description: "Planification et exécution d’événements professionnels de haute qualité."
      },
      {
        name: "Lancements de produits",
        description: "Création d’événements marquants pour introduire vos nouveaux produits sur le marché."
      },
      {
        name: "Salons professionnels",
        description: "Coordination et gestion complète de votre présence sur des salons et foires."
      }
    ]
  },
  {
    name: "Contrôle des Lignes Électriques par Drones",
    icon: DroneIcon
,
    services: [
      {
        name: "Technologies utilisées",
        description: "Exploitation des dernières innovations en UV, ULTRA SoNG, et INFRAROUGE pour des inspections précises."
      },
      {
        name: "Avantages",
        description: "Réduction des risques, efficacité accrue, et réduction des coûts grâce à l’utilisation de drones."
      },
      {
        name: "Processus d'inspection",
        description: "Étapes détaillées de l’inspection, de la planification à l'analyse des données."
      },
      {
        name: "Études de cas",
        description: "Exemples concrets de projets réalisés avec succès."
      }
    ]
  }
];

const ServiceList = () => {
  return (
    <section id="services" className="py-20 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')` }} >
        <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-12 text-center">Nos Services</h2>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
        {servicesData.map((category) => {
          const IconComponent = category.icon;
          return (
            <div key={category.name} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <div className="flex items-center">
                  <IconComponent className="size-12 text-white mr-4" />
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>
              </div>
              <ul className="divide-y divide-gray-200">
                {category.services.map((service) => (
                  <li key={service.name} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
    </section>
  );
};
export default ServiceList;
