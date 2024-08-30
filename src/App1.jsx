
import React from 'react';
import HeadN from './component/HeadN';
const services = [
  { icon: "fa-bullseye", title: "Stratégie et Conseil", desc: "Audit de communication, conseils personnalisés, élaboration de stratégies" },
  { icon: "fa-palette", title: "Design de Contenu", desc: "Illustrations, design graphique, identités visuelles" },
  { icon: "fa-globe", title: "Numérique", desc: "Sites web, référencement SEO/SEA, réseaux sociaux" },
  { icon: "fa-print", title: "Impression", desc: "Identités visuelles PRINT 2D, impression offset et numérique" },
  { icon: "fa-video", title: "Média", desc: "Production vidéo, reportages, motion design, photographie" },
  { icon: "fa-pencil-ruler", title: "Design d'Espace", desc: "Stands, design intérieur, merchandising, signalétique" },
  { icon: "fa-bullhorn", title: "Marketing", desc: "Marketing digital, stratégie de communication, réseaux sociaux" },
  { icon: "fa-music", title: "Sound Design", desc: "Stratégie musicale, création et production audio, branding audio" },
  { icon: "fa-camera", title: "Photographie Aérienne", desc: "Images haute résolution pour l'immobilier, les événements et les paysages" },
  { icon: "fa-paper-plane", title: "Vidéographie par Drone", desc: "Vidéos 4K époustouflantes pour les publicités, documentaires, et plus encore" },
  { icon: "fa-map", title: "Cartographie et Topographie", desc: "Cartographie aérienne précise et modélisation 3D pour la construction et l'agriculture" },
  { icon: "fa-industry", title: "Inspections Industrielles", desc: "Inspections sécurisées et efficaces de grandes structures et zones difficiles d'accès" },
  { icon: "fa-film", title: "Couverture d'Événements", desc: "Perspectives uniques pour les mariages, événements sportifs et festivals" },
  { icon: "fa-building", title: "Visites Immobilières", desc: "Mise en valeur des propriétés avec des visites aériennes immersives et des photos" }
];

const imagess = [
  'https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
const clients = ["Agences de communication", "Architectes", "Secteur BTP", "Culture et arts", "Grandes entreprises", "Imprimeurs", "Secteur de la restauration", "Beauté et luxe", "Associations et institutions", "PME/PMI", "Secteur des voyages", "Secteur de la santé"]
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
<HeadN/>
      {/* Section 1: En-tête */}
{/*       <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-600">SkyView Drones</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="text-gray-600 hover:text-sky-600">Services</a></li>
              <li><a href="#portfolio" className="text-gray-600 hover:text-sky-600">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-sky-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/cat-space-med-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-20 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue chez PAYPER PROD</h1>
          <p className="text-xl md:text-2xl mb-8">Votre partenaire en marketing, communication et stratégie</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Découvrez nos services</button>
        </div>
      </section>
      <main>
        {/* Section 2: À propos de nous */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Qui sommes-nous ?</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-600 mb-6">PAYPER PROD est une agence publicitaire spécialisée en marketing, communication et stratégie. Nous offrons des solutions graphiques uniques et percutantes, adaptées à vos besoins.</p>
              <p className="text-xl text-gray-600">Notre équipe polyvalente accompagne toutes les entreprises dans la réalisation de leurs projets, créant une synergie entre passion, créativité, intuition et innovation.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Nos Services */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services?.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <i className={`fas ${service.icon} text-4xl text-sky-600 mb-4`}></i>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 3: Nos Services */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service, index) => (
                <div key={index} className="group flex gap-y-6 size-full hover:bg-white rounded-lg  hover:shadow-md p-5">
                  <i className={`fas ${service.icon} text-3xl group-hover:text-sky-600 text-gray-800 mt-0.5 me-6 dark:text-neutral-200`} />
                  <div>
                    <div>
                      <h3 className="block font-bold text-gray-800 group-hover:text-sky-600 dark:text-white">{service.title}</h3>
                      <p className="text-gray-600 dark:text-neutral-400">{service.desc}</p>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Nos Clients */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Clients</h3>
            <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
              
<svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 dark:text-neutral-500"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="119px" height="50px" viewBox="0 0 120 50" version="1.1">
  <g id="surface1">
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 83.847656 17.074219 C 77.855469 17.074219 71.808594 19.71875 71.808594 25.621094 C 71.808594 28.390625 73.128906 30.65625 75.605469 32.175781 C 77.695312 33.449219 80.558594 34.15625 83.664062 34.15625 C 85.640625 34.15625 87.5625 33.90625 89.609375 33.222656 L 88.484375 30.433594 C 87.152344 30.75 85.992188 30.851562 84.992188 30.851562 C 80.128906 30.851562 77.332031 28.949219 77.332031 25.621094 C 77.332031 22.296875 80.265625 20.3125 84.980469 20.3125 C 85.914062 20.3125 86.800781 20.402344 87.9375 20.652344 L 89.628906 18 C 87.574219 17.15625 85.6875 17.074219 83.84375 17.074219 M 59.09375 17.074219 C 53.84375 17.074219 48.195312 19.742188 48.195312 25.597656 C 48.195312 31.457031 53.84375 34.167969 59.09375 34.167969 C 64.34375 34.167969 69.996094 31.488281 69.996094 25.597656 C 69.996094 19.707031 64.34375 17.074219 59.09375 17.074219 M 59.09375 31.160156 C 55.921875 31.160156 53.71875 28.867188 53.71875 25.597656 C 53.71875 22.324219 55.878906 20.023438 59.09375 20.023438 C 62.3125 20.023438 64.46875 22.269531 64.46875 25.597656 C 64.46875 28.925781 62.253906 31.160156 59.09375 31.160156 M 99.441406 17.074219 C 97.03125 17.074219 94.734375 17.398438 92.203125 18.101562 L 92.203125 33.894531 L 97.628906 33.894531 L 97.628906 20.265625 C 98.230469 20.175781 98.796875 20.128906 99.320312 20.128906 C 100.546875 20.128906 104.539062 20.402344 104.539062 23.96875 C 104.539062 26.542969 102.199219 27.703125 99.867188 27.703125 C 99.761719 27.703125 99.511719 27.691406 99.320312 27.683594 L 98.242188 29.972656 C 99.285156 30.085938 99.84375 30.121094 100.402344 30.121094 C 105.207031 30.121094 110.0625 28.125 110.0625 23.671875 C 110.0625 19.660156 105.707031 17.074219 99.445312 17.074219 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 39.8125 31.175781 C 41.351562 29.855469 44.398438 27.324219 43.3125 21.414062 C 43.300781 21.347656 43.203125 21.351562 43.199219 21.417969 C 43.042969 23.753906 41.804688 25.230469 41.21875 27.070312 C 41.203125 27.125 41.125 27.113281 41.125 27.054688 C 41.144531 25.269531 39.664062 23.890625 39.4375 22.824219 C 39.421875 22.761719 39.332031 22.761719 39.320312 22.824219 C 38.753906 26.375 40.417969 28.769531 39.722656 31.117188 C 39.707031 31.171875 39.769531 31.214844 39.8125 31.175781 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 42.394531 30.003906 C 40.550781 32.21875 40.277344 32.046875 38.285156 33.996094 C 38.246094 34.039062 38.179688 33.988281 38.210938 33.9375 C 39.535156 31.757812 38.761719 30 38.421875 29.261719 C 38.394531 29.207031 38.316406 29.222656 38.3125 29.28125 C 38.203125 31.5 36.566406 36.417969 28.847656 39.425781 C 28.558594 39.535156 28.421875 39.722656 28.445312 39.855469 C 28.445312 39.855469 28.445312 40.035156 28.859375 40.015625 C 30.875 39.921875 39.246094 38.128906 42.476562 30.054688 C 42.5 30 42.429688 29.960938 42.394531 30.003906 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 27.132812 14.671875 C 26.351562 16.09375 25.402344 18.808594 25.234375 19.667969 L 24.453125 19.667969 C 24.417969 19.667969 24.390625 19.699219 24.394531 19.730469 C 24.472656 20.6875 26.324219 22.0625 27.050781 22.566406 C 27.089844 22.59375 27.140625 22.566406 27.140625 22.515625 L 27.242188 14.703125 C 27.242188 14.640625 27.164062 14.617188 27.132812 14.671875 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 27.566406 14.671875 C 28.351562 16.09375 29.296875 18.808594 29.464844 19.667969 L 30.246094 19.667969 C 30.28125 19.667969 30.308594 19.699219 30.308594 19.730469 C 30.230469 20.6875 28.375 22.0625 27.648438 22.566406 C 27.613281 22.59375 27.5625 22.566406 27.5625 22.515625 L 27.460938 14.703125 C 27.460938 14.640625 27.539062 14.617188 27.570312 14.671875 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 17.5625 21.960938 C 18.671875 23.148438 20.953125 24.890625 21.71875 25.3125 L 21.476562 26.058594 C 21.46875 26.09375 21.484375 26.128906 21.519531 26.136719 C 22.449219 26.355469 24.328125 25.015625 25.03125 24.476562 C 25.066406 24.449219 25.054688 24.394531 25.011719 24.378906 L 17.628906 21.867188 C 17.574219 21.851562 17.523438 21.917969 17.566406 21.960938 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 17.699219 21.546875 C 19.289062 21.242188 22.160156 21.175781 23.027344 21.285156 L 23.269531 20.539062 C 23.277344 20.503906 23.3125 20.488281 23.347656 20.5 C 24.230469 20.867188 24.960938 23.0625 25.214844 23.910156 C 25.226562 23.953125 25.183594 23.992188 25.140625 23.980469 L 17.695312 21.660156 C 17.636719 21.644531 17.640625 21.558594 17.699219 21.546875 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 21.523438 33.335938 C 22.992188 32.648438 25.351562 31.011719 25.988281 30.414062 L 26.621094 30.875 C 26.648438 30.894531 26.6875 30.886719 26.707031 30.859375 C 27.203125 30.039062 26.507812 27.835938 26.21875 27 C 26.203125 26.953125 26.144531 26.949219 26.117188 26.988281 L 21.457031 33.25 C 21.417969 33.296875 21.46875 33.363281 21.523438 33.335938 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 21.171875 33.082031 C 21.375 31.472656 22.199219 28.714844 22.570312 27.921875 L 21.933594 27.460938 C 21.90625 27.441406 21.902344 27.402344 21.921875 27.375 C 22.546875 26.648438 24.851562 26.628906 25.734375 26.648438 C 25.78125 26.648438 25.804688 26.703125 25.777344 26.742188 L 21.277344 33.121094 C 21.246094 33.171875 21.164062 33.144531 21.171875 33.085938 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 33.539062 33.082031 C 33.335938 31.46875 32.511719 28.714844 32.144531 27.917969 L 32.777344 27.457031 C 32.804688 27.4375 32.808594 27.398438 32.789062 27.371094 C 32.164062 26.644531 29.859375 26.625 28.972656 26.644531 C 28.925781 26.644531 28.902344 26.699219 28.929688 26.738281 L 33.429688 33.121094 C 33.464844 33.167969 33.546875 33.140625 33.535156 33.082031 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 33.1875 33.335938 C 31.722656 32.648438 29.363281 31.007812 28.722656 30.410156 L 28.089844 30.871094 C 28.0625 30.890625 28.023438 30.886719 28.003906 30.855469 C 27.507812 30.035156 28.203125 27.832031 28.492188 26.996094 C 28.507812 26.953125 28.566406 26.945312 28.59375 26.984375 L 33.257812 33.246094 C 33.292969 33.296875 33.242188 33.363281 33.1875 33.335938 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 37.007812 21.546875 C 35.417969 21.238281 32.546875 21.175781 31.679688 21.28125 L 31.4375 20.535156 C 31.429688 20.503906 31.390625 20.484375 31.359375 20.496094 C 30.476562 20.867188 29.746094 23.058594 29.492188 23.90625 C 29.480469 23.953125 29.523438 23.992188 29.566406 23.976562 L 37.011719 21.660156 C 37.070312 21.640625 37.066406 21.558594 37.007812 21.546875 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 37.140625 21.960938 C 36.035156 23.148438 33.75 24.890625 32.988281 25.3125 L 33.230469 26.058594 C 33.238281 26.09375 33.222656 26.128906 33.1875 26.136719 C 32.257812 26.355469 30.378906 25.015625 29.675781 24.476562 C 29.640625 24.449219 29.652344 24.394531 29.695312 24.378906 L 37.078125 21.867188 C 37.132812 21.851562 37.179688 21.917969 37.140625 21.960938 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 37.441406 13.542969 C 36.960938 13.105469 36.257812 12.890625 35.539062 12.820312 C 35.476562 12.816406 35.414062 12.796875 35.359375 12.769531 C 34.097656 12.089844 32.75 11.511719 31.351562 11.195312 C 31.347656 11.195312 31.332031 11.191406 31.332031 11.191406 C 31.296875 11.183594 31.265625 11.203125 31.257812 11.238281 C 31.253906 11.269531 31.273438 11.300781 31.304688 11.3125 C 31.304688 11.3125 31.320312 11.3125 31.328125 11.316406 C 32.804688 11.679688 34.277344 12.355469 35.132812 13.066406 C 35.191406 13.113281 35.234375 13.175781 35.265625 13.246094 C 35.507812 13.824219 35.777344 14.359375 36.257812 14.800781 C 36.722656 15.226562 37.378906 15.296875 37.703125 14.953125 C 38.027344 14.609375 37.964844 14.023438 37.445312 13.542969 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 40.367188 18.78125 L 38.953125 16.976562 C 37.886719 15.621094 37.398438 16.011719 36.582031 16.054688 C 36.4375 16.0625 36.296875 16.019531 36.183594 15.929688 C 34.722656 14.75 33.082031 13.640625 30.910156 13.179688 C 30.902344 13.179688 30.886719 13.175781 30.886719 13.175781 C 30.859375 13.167969 30.828125 13.1875 30.824219 13.214844 C 30.816406 13.242188 30.835938 13.269531 30.859375 13.273438 C 30.859375 13.273438 30.984375 13.308594 31.046875 13.324219 C 32.804688 13.792969 34.308594 14.640625 35.644531 16 C 37.878906 18.695312 39.332031 18.347656 40.292969 18.863281 C 40.347656 18.894531 40.40625 18.828125 40.367188 18.777344 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 40.90625 18.539062 C 40.703125 17.410156 41 15.449219 39.582031 13.863281 C 39.53125 13.796875 39.449219 13.714844 39.367188 13.632812 C 37.414062 11.527344 34.808594 9.984375 31.75 9.332031 C 31.5 9.28125 31.25 9.234375 30.992188 9.191406 C 30.988281 9.191406 30.976562 9.1875 30.976562 9.1875 C 30.949219 9.1875 30.921875 9.203125 30.917969 9.230469 C 30.914062 9.257812 30.933594 9.285156 30.960938 9.289062 C 30.960938 9.289062 30.988281 9.292969 31 9.296875 C 31.242188 9.339844 31.484375 9.390625 31.722656 9.441406 C 34.542969 10.082031 36.929688 11.421875 38.804688 13.652344 C 38.910156 13.78125 38.941406 13.953125 38.886719 14.109375 C 38.667969 14.703125 38.5 15.171875 39.058594 15.992188 C 39.21875 16.234375 40.355469 17.917969 40.800781 18.578125 C 40.835938 18.628906 40.914062 18.597656 40.902344 18.539062 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 41.367188 21.421875 C 41.367188 21.476562 41.292969 21.492188 41.273438 21.441406 C 41.128906 21.074219 40.835938 20.472656 40.324219 19.984375 C 39.679688 19.363281 38.972656 19.316406 38.4375 18.816406 C 38.394531 18.773438 38.324219 18.8125 38.335938 18.871094 C 39.003906 22.039062 40.984375 22.171875 41.25 23.960938 C 41.257812 24.019531 41.339844 24.027344 41.359375 23.96875 C 41.898438 22.320312 44.226562 19.824219 41.304688 16.039062 C 41.265625 15.988281 41.183594 16.03125 41.203125 16.09375 C 41.863281 18.089844 41.324219 19.839844 41.367188 21.421875 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 14.894531 31.175781 C 13.355469 29.855469 10.308594 27.324219 11.390625 21.414062 C 11.402344 21.347656 11.5 21.351562 11.507812 21.417969 C 11.660156 23.753906 12.898438 25.230469 13.484375 27.070312 C 13.5 27.125 13.578125 27.113281 13.578125 27.054688 C 13.558594 25.269531 15.039062 23.890625 15.265625 22.824219 C 15.285156 22.761719 15.375 22.761719 15.382812 22.824219 C 15.953125 26.375 14.285156 28.769531 14.980469 31.117188 C 14.996094 31.171875 14.9375 31.214844 14.894531 31.175781 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 12.3125 30.003906 C 14.15625 32.21875 14.425781 32.046875 16.417969 33.996094 C 16.460938 34.039062 16.527344 33.988281 16.496094 33.9375 C 15.167969 31.757812 15.941406 30 16.285156 29.261719 C 16.308594 29.207031 16.386719 29.222656 16.390625 29.28125 C 16.503906 31.5 18.140625 36.417969 25.855469 39.425781 C 26.144531 39.535156 26.28125 39.722656 26.257812 39.855469 C 26.257812 39.855469 26.257812 40.035156 25.84375 40.015625 C 23.832031 39.921875 15.457031 38.128906 12.226562 30.054688 C 12.207031 30 12.277344 29.960938 12.3125 30.003906 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 17.261719 13.542969 C 17.742188 13.105469 18.449219 12.890625 19.164062 12.820312 C 19.230469 12.816406 19.289062 12.796875 19.34375 12.769531 C 20.605469 12.089844 21.957031 11.511719 23.351562 11.195312 C 23.355469 11.195312 23.371094 11.191406 23.371094 11.191406 C 23.402344 11.183594 23.4375 11.203125 23.445312 11.238281 C 23.449219 11.269531 23.429688 11.300781 23.398438 11.3125 C 23.398438 11.3125 23.382812 11.3125 23.375 11.316406 C 21.898438 11.679688 20.425781 12.355469 19.570312 13.066406 C 19.511719 13.113281 19.46875 13.175781 19.4375 13.246094 C 19.195312 13.824219 18.925781 14.359375 18.445312 14.800781 C 17.980469 15.226562 17.324219 15.296875 17 14.953125 C 16.675781 14.609375 16.738281 14.023438 17.257812 13.542969 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 14.339844 18.78125 L 15.753906 16.976562 C 16.820312 15.621094 17.308594 16.011719 18.121094 16.054688 C 18.265625 16.0625 18.40625 16.019531 18.519531 15.929688 C 19.980469 14.75 21.621094 13.640625 23.792969 13.179688 C 23.800781 13.179688 23.820312 13.175781 23.820312 13.175781 C 23.847656 13.167969 23.875 13.1875 23.878906 13.214844 C 23.886719 13.242188 23.871094 13.269531 23.84375 13.273438 C 23.84375 13.273438 23.71875 13.308594 23.65625 13.324219 C 21.898438 13.792969 20.394531 14.640625 19.058594 16 C 16.824219 18.695312 15.375 18.347656 14.410156 18.863281 C 14.359375 18.894531 14.300781 18.828125 14.339844 18.777344 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 13.796875 18.539062 C 14 17.410156 13.703125 15.449219 15.121094 13.863281 C 15.175781 13.796875 15.253906 13.714844 15.335938 13.632812 C 17.292969 11.527344 19.894531 9.984375 22.957031 9.332031 C 23.207031 9.28125 23.457031 9.234375 23.710938 9.191406 C 23.71875 9.191406 23.730469 9.1875 23.730469 9.1875 C 23.757812 9.1875 23.78125 9.203125 23.785156 9.230469 C 23.789062 9.257812 23.769531 9.285156 23.742188 9.289062 C 23.742188 9.289062 23.71875 9.292969 23.707031 9.296875 C 23.460938 9.339844 23.21875 9.390625 22.980469 9.441406 C 20.160156 10.082031 17.773438 11.421875 15.902344 13.652344 C 15.796875 13.78125 15.765625 13.953125 15.820312 14.109375 C 16.039062 14.703125 16.207031 15.171875 15.648438 15.992188 C 15.484375 16.234375 14.351562 17.917969 13.90625 18.578125 C 13.871094 18.628906 13.789062 18.597656 13.800781 18.539062 " />
    <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(20%,62.745098%,17.254902%)', fillOpacity: 1}} d="M 13.5 16.09375 C 13.523438 16.03125 13.441406 15.988281 13.398438 16.039062 C 10.476562 19.824219 12.804688 22.324219 13.34375 23.972656 C 13.363281 24.027344 13.445312 24.019531 13.453125 23.960938 C 13.722656 22.171875 15.703125 22.039062 16.367188 18.871094 C 16.378906 18.8125 16.308594 18.773438 16.265625 18.816406 C 15.730469 19.316406 15.027344 19.359375 14.378906 19.984375 C 13.867188 20.472656 13.578125 21.074219 13.429688 21.441406 C 13.410156 21.492188 13.335938 21.476562 13.335938 21.421875 C 13.378906 19.839844 12.839844 18.089844 13.5 16.09375 " />
  </g>
</svg>


  <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 dark:text-neutral-500" enableBackground="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor" /></svg>
  <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 dark:text-neutral-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 1002"><path fillRule="evenodd" clipRule="evenodd" d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z" fill="currentColor" /></svg>
  <svg className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500 dark:text-neutral-500" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width={2500} height={610}><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="currentColor" /></svg>
</div>

          </div>
        </section>

        {/* Section 5: Portfolio */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Projets récents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={`https://www.claudeusercontent.com/api/placeholder/400/300?text=Drone+Photo+${item}`} alt={`Drone Photo ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">Project {item}</h4>
                    <p className="text-gray-600">Description of drone photography project {item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Portfolio */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Projets récents</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {imagess?.map((src, index) => (
                <div key={index} className="group block relative overflow-hidden rounded-lg">
                  <img
                    className="w-full aspect-video object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                    src={src}
                    alt="Project"
                  />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg
                        className="shrink-0 size-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">View</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
<Service/>
        {/* Section 6: Contactez-nous */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Contactez-nous</h3>
            <p className="text-xl mb-8">Prêt à sublimer votre image ? Contactez-nous pour une stratégie sur mesure.</p>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <input type="text" placeholder="Nom" className="w-full p-2 border rounded text-gray-800" />
                <input type="email" placeholder="Email" className="w-full p-2 border rounded text-gray-800" />
                <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded text-gray-800"></textarea>
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">Envoyer</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Section 7: Mentions légales */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">PAYPER PROD</p>
          <p className="mb-2">APPT NR 03 IMM 102 RUE BOURNAZI SAFI</p>
          <p className="mb-2">Téléphone: +212615918139 | Email: payperprod@gmail.com</p>
          {/* <p className="text-sm mt-4">S.A.R.L. au capital de 100.000,00 dhs | R.C : 14131 | C.N.S.S: 4962075 | I.F : 53914407 | ICE : 003351687000019</p> */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

function Service(){
  const servicesData = [
    { icon: "fa-bullseye", title: "Stratégie et Conseil", desc: "Audit de communication, conseils personnalisés, élaboration de stratégies" },
    { icon: "fa-palette", title: "Design de Contenu", desc: "Illustrations, design graphique, identités visuelles" },
    { icon: "fa-globe", title: "Numérique", desc: "Sites web, référencement SEO/SEA, réseaux sociaux" },
    { icon: "fa-print", title: "Impression", desc: "Identités visuelles PRINT 2D, impression offset et numérique" },
    { icon: "fa-video", title: "Média", desc: "Production vidéo, reportages, motion design, photographie" },
    { icon: "fa-pencil-ruler", title: "Design d'Espace", desc: "Stands, design intérieur, merchandising, signalétique" },
    { icon: "fa-bullhorn", title: "Marketing", desc: "Marketing digital, stratégie de communication, réseaux sociaux" },
    { icon: "fa-music", title: "Sound Design", desc: "Stratégie musicale, création et production audio, branding audio" },
    { icon: "fa-camera", title: "Photographie Aérienne", desc: "Images haute résolution pour l'immobilier, les événements et les paysages" },
    { icon: "fa-paper-plane", title: "Vidéographie par Drone", desc: "Vidéos 4K époustouflantes pour les publicités, documentaires, et plus encore" },
    { icon: "fa-map", title: "Cartographie et Topographie", desc: "Cartographie aérienne précise et modélisation 3D pour la construction et l'agriculture" },
    { icon: "fa-industry", title: "Inspections Industrielles", desc: "Inspections sécurisées et efficaces de grandes structures et zones difficiles d'accès" },
    { icon: "fa-film", title: "Couverture d'Événements", desc: "Perspectives uniques pour les mariages, événements sportifs et festivals" },
    { icon: "fa-building", title: "Visites Immobilières", desc: "Mise en valeur des propriétés avec des visites aériennes immersives et des photos" }
  ];
  return <div className='grid grid-cols-1 gap-8'>
    {servicesData?.map((item,i)=>
      
{
  let numberI=Math.floor(Math.random() * (imagess.length - 0 + 1)) + 0
  return <div style={{backgroundImage: `url("${imagess[numberI]}")`}} className='w-full h-[400px] flex justify-center items-center bg-cover bg-fixed bg-center bg-no-repeat shadow-lg'>
    <div className=" shadow backdrop-blur-sm  bg-black/10 rounded w-[80%] h-64 flex justify-center items-center">
    <div className="p-8">
                <h3 className='text-4xl text-white '><i className={`fas ${item.icon} m-2 text-4xl text-sky-600 mb-4`}></i>
                {item.title}</h3>
    <p>{item.desc}</p>
    </div>

    </div>

</div>}
    )}

  </div>
}