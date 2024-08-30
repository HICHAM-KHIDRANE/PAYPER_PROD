import React from 'react';

const data = [
  {
    "title": "Avantages de l'inspection par drones",
    "sections": [
      {
        "title": "Amélioration de la sécurité",
        "content": [
          "Détection précoce des risques potentiels",
          "Réduction des risques pour le personnel",
          "Surveillance à distance"
        ]
      },
      {
        "title": "Efficacité opérationnelle accrue",
        "content": [
          "Gain de temps considérable",
          "Collecte de données précises",
          "Optimisation des ressources"
        ]
      },
      {
        "title": "Réduction des coûts et de l'impact environnemental",
        "content": [
          "Diminution des coûts d'inspection",
          "Minimisation de l'empreinte environnementale",
          "Amélioration de l'efficacité énergétique"
        ]
      }
    ]
  },
  {
    "title": "Technologies utilisées dans l'inspection par drones",
    "sections": [
      {
        "title": "Utilisation des drones pour l'inspection",
        "content": [
          "Drones équipés de caméras haute résolution",
          "Utilisation de capteurs thermiques",
          "Technologie LiDAR pour la cartographie 3D"
        ]
      },
      {
        "title": "Analyse et traitement des données",
        "content": [
          "Logiciel d'analyse d'images",
          "Systèmes de gestion de données",
          "Intégration de l'intelligence artificielle"
        ]
      }
    ]
  },
  {
    "title": "Normes de sécurité dans l'inspection par drones",
    "sections": [
      {
        "title": "Normes de sécurité",
        "content": [
          "Équipement de protection individuelle",
          "Formation et certification",
          "Sécurité des données"
        ]
      },
      {
        "title": "Risques potentiels",
        "content": [
          "Interférences électromagnétiques",
          "Conditions météorologiques",
          "Obstacles et collisions"
        ]
      },
      {
        "title": "Avantages de conformité",
        "content": [
          "Amélioration de la sécurité",
          "Optimisation des performances",
          "Conformité réglementaire"
        ]
      }
    ]
  },
  {
    "title": "Processus d'inspection par drones",
    "sections": [
      {
        "title": "Planification de l'inspection",
        "content": [
          "Identification des zones à inspecter",
          "Élaboration du plan de vol",
          "Vérification des conditions météorologiques",
          "Autorisations et permis"
        ]
      },
      {
        "title": "Déploiement des drones",
        "content": [
          "Préparation des équipements",
          "Calibrage des capteurs",
          "Lancement des drones",
          "Contrôle en temps réel"
        ]
      },
      {
        "title": "Acquisition et analyse des données",
        "content": [
          "Collecte de données visuelles",
          "Enregistrement des données thermographiques",
          "Transmission sécurisée des données",
          "Analyse et interprétation des résultats"
        ]
      },
      {
        "title": "Rapports d'inspection et recommandations",
        "content": [
          "Génération de rapports détaillés",
          "Priorisation des actions à entreprendre",
          "Consultation avec les parties prenantes",
          "Suivi et mise à jour des rapports"
        ]
      },
      {
        "title": "Intégration des résultats dans la gestion de l'actif",
        "content": [
          "Intégration des données dans le système de gestion",
          "Actualisation des prévisions d'entretien",
          "Amélioration continue des processus",
          "Optimisation des investissements"
        ]
      }
    ]
  }
];
const image_sky = [
  "/sky/Inspection/sky-1.jpeg",
  "/sky/Inspection/sky-2.jpeg",
  "/sky/Inspection/sky-3.jpeg",
  "/sky/Inspection/sky-4.jpeg",
]
const image_drone = [
  "/sky/slide/Image-0.png",
  "/sky/slide/Image-1.png",
  "/sky/slide/Image-2.png",
]
function Section({ title, content, id = 0 }) {
  const randomNumber = Math.floor(Math.random() * 3);

  return <div data-aos="zoom-in" dir={id % 2 ? "rtl" : "ltr"} className="grid grid-cols-1 md:grid-cols-2  gap-6 backdrop-blur-md bg-white/60 shadow-lg  sm:p-20 bg-clip-padding  border border-gray-200/20  my-8 p-6 g rounded-md">
    <div className="h-full flex justify-center items-center">
      <div dir='ltr' className="">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">{title}</h2>
        <ul className="list-disc list-inside space-y-2">
          {content.map((item, index) => (
            <li data-aos="fade-left" data-aos-offset={25 * (1 + index)} key={index} className="text-gray-800 flex space-x-3">
              <svg className="flex-shrink-0 size-6  text-blue-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div></div>
    <div className="w-max-full">
      <img data-aos="zoom-in" className='w-full' src={image_drone[randomNumber]} />
    </div>

  </div>
}






const Article = ({ title, sections, id = 0 }) => (
  <article  className="overflow-hidden backdrop-blur-sm  mx-auto -p-6 bg-gradient-to-r from-blue-100 to-white  px-2  my-8 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url('${image_sky[id]}')` }} >
    {/* <img src={`https://spring-slider.uiinitiative.com/images/${id+1}.jpg`} alt="Hero" className="w-full aspect-[16/6] object-cover rounded-lg mb-6" /> */}
    <div className="w-full aspect-[16/6] object-cover flex justify-center items-center">
    <h1 data-aos="fade-up" className="text-center text-6xl font-extrabold   bg-gradient-to-r to-blue-400 via-blue-500 from-blue-600 text-transparent bg-clip-text">{title}</h1>
    </div>
    {sections.map((section, index) => (
      <Section key={index} id={index} title={section.title} content={section.content} />
    ))}
  </article>
);

const Inspection = () => {

  return (
    <div className="bg-gray-200 min-h-screen container mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold ">Services inspections par drones “Installations HTB”</h1>
        <p className="text-lg text-gray-600 mt-2"></p>
      </header>
      {data.map((item, index) => (
        <Article key={index} id={index} title={item.title} sections={item.sections} />
      ))}
    </div>
  );
};

export default Inspection;
