import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Header from './component/Header';
import SliderHero from './component/SliderHero';

import { ArrowRight, Building, Camera, Newspaper } from 'lucide-react';


import AOS from 'aos';
import 'aos/dist/aos.css';
import DialogModal from './component/DialogModal';
import ScrollToHashElement from './component/ScrollToHashElement';
import Sky from './page/index';
import Agriculture from './page/Agriculture';
import Inspection from './page/Inspection';
import { useLocation } from "react-router-dom";
import ServiceList from './component/ServiceList';
import DemandeDevisApp from './component/DemandeDevisApp';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const companyData=[
    {
    title:"Payper prod",
    description:"Leader en marketing, média, et design graphique, avec une expertise unique dans le contrôle des lignes électriques par drones.",
    icon:<Camera className="w-12 h-12 text-blue-500" />,
    logo:"/company/prod.png",
    url:"http://localhost:4000/"
    },
    {
    title:"Ready Building",
    description:"Spécialiste de la construction civile et des infrastructures VRD, bâtissant des environnements durables et fonctionnels.",
    icon:<Building className="w-12 h-12 text-green-500" />,
    logo:"/company/Building.png",
    url:"/"
    },
    {
    title:"Trend News",
    description:"Votre source fiable pour les dernières nouvelles, avec un focus sur l'actualité locale, nationale et internationale.",
    icon:<Newspaper className="w-12 h-12 text-red-500" />,
    logo:"/company/news.png",
    url:"https://trendnews.ma/"
    },
]
const aos_list = [
    //"fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "flip-up",
    "flip-down",
    "flip-left",
    "flip-right",
    ///"slide-up",
    //"slide-down",
    "slide-left",
    "slide-right",
    "zoom-in",
    //"zoom-out",
    "zoom-in-up",
    "zoom-in-down",
    "zoom-in-left",
    "zoom-in-right",
    //"zoom-out-up",
    // "zoom-out-down",
    //"zoom-out-left",
    //"zoom-out-right",
    "flip-up-left",
    "flip-up-right",
    "flip-down-left",
    "flip-down-right"
];

const shuffledAosList = shuffleArray(aos_list);


function ScrollToTop() {
    let location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
        console.log(location.hash, location.hash.length)
    }, [location.hash]);

    return null;
}
const Layout = () => {
    return (
        <div className='scroll-smooth overflow-hidden'>
            <Header />
            <div className="mt-20">
                <Outlet />
            </div>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="mt-2">&copy; 2024 {dataInfo.companyInfo.name}. Tous droits réservés.</p>
                    {/*           <p className="mt-2">S.A.R.L. au capital de {dataInfo.companyInfo.capital} dhs</p>
                    <p className="mt-2">R.C : {dataInfo.companyInfo.rc} | C.N.S.S : {dataInfo.companyInfo.cnss} | I.F : {dataInfo.companyInfo.if} | ICE : {dataInfo.companyInfo.ice}</p>
                 */}</div>
            </footer>
        </div>
    )
};


const About = () => {
    return <h1 className="text-4xl font-bold text-gray-800">About Page</h1>;
};

const Contact = () => {
    return <h1 className="text-4xl font-bold text-gray-800">Contact Page</h1>;
};
const NotFound = () => {
    return <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <p className="text-base font-semibold text-red-600">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Go back home</a>
      <a href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">→</span></a>
    </div>
  </div>
</main>
;
};

export default function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <BrowserRouter>
            <ScrollToHashElement />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Sky" element={<Sky />} />
                    <Route path="Sky/Agriculture" element={<Agriculture />} />
                    <Route path="Sky/Inspection" element={<Inspection />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}




const dataInfo = {
    header: {
        //video_url: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/cat-space-med-1.mp4",
        video_url: "/cat-space-med-1.mp4",
        h1: "PAYPER PROD",
        p: "PRINT • DIGITALE • MEDIA • MARKETING"
    },
    hero: {
        title: "Découvrez nos services",
        subtitle: "Nous offrons une gamme complète de solutions professionnelles"
    },
    about: {
        title: "À propos de nous",
        description: "PAYPER PROD est une agence publicitaire spécialisée en marketing, communication et stratégie. Elle offre une gamme complète de services de communication intégrant les outils les plus modernes pour répondre aux besoins spécifiques de ses clients. En combinant créativité, innovation et expertise, PAYPER PROD accompagne les entreprises de toutes tailles dans la réalisation de leurs projets."
    },
    child: [
        { logo: "/child/sky.png", name: "Sky", url: "/sky" },
        { logo: "/child/studio.png", name: "Studio", url: "/sky" },
        { logo: "/child/digital.png", name: "Digital", url: "/sky" },
        { logo: "/child/event.png", name: "Event", url: "/sky" },
    ],
    service: [
        { icon: "fa-solid fa-palette", title: "Design Graphique", description: "Création d’identités visuelles (PRINT 2D) : flyers, brochures, plaquettes, affiches.Utilisation des logiciels leaders du marché pour des créations graphiques percutantes" },
        { icon: "fa-solid fa-compass-drafting", title: "Illustration", description: "Création de motifs, personnages, illustrations jeunesse, storyboards, pictogrammes, signalétique" },
        { icon: "fa-solid fa-globe", title: "Web & Webdesign", description: "Conception de sites web : CMS, templates PSD, sur-mesure, sites institutionnels, blogs, sites de marque.Services de webdesign et développement web" },
        { icon: "fa-solid fa-print", title: "Impression", description: "Impression offset et numérique.Techniques de fabrication et personnalisation.Objets publicitaires" },
        { icon: "fa-solid fa-video", title: "Média", description: "Vidéo / Reportages.Photographie corporate et publicitaire.Motion Design.Retouche photo.Photographie Aérienne : Utilisation de drones pour des prises de vue aériennes spectaculaires" },
        { icon: "fa-solid fa-music", title: "Sound Design", description: "Stratégie musicale.Création et production audio.Audio branding.Synchronisation / Voix / Radio.Composition et performances live" },
        { icon: "fa-solid fa-users-rays", title: "Conseil & Communication", description: "Audit de communication.Stratégie et conseils adaptés à l'organisation et à l'identité de l'entreprise.Préconisations concrètes basées sur les tendances du secteur" },
    ],
    domains: [
        "Print / Web", "Identité Visuelle", "Covering", "Illustration", "Marketing",
        "Photographie", "Webdesign", "Vidéo / Spot Vidéo", "3D", "Photographie Aérienne", "Video Making"
    ],

    portfolio: [
        {
            img: "https://spring-slider.uiinitiative.com/images/1.jpg",
            title: "Project 1",
            description: "A modern website design showcasing clean lines and a minimalist approach.",
           // video: `https://www.youtube.com/embed/sEhS83z3XRM?autoplay=1&mute=1`
        },
        {
            img: "https://spring-slider.uiinitiative.com/images/2.jpg",
            title: "Project 2",
            description: "An e-commerce platform with an emphasis on user experience and accessibility."
        },
        {
            img: "https://spring-slider.uiinitiative.com/images/3.jpg",
            title: "Project 3",
            description: "A mobile app interface designed to enhance productivity with intuitive navigation."
        },
        {
            img: "https://spring-slider.uiinitiative.com/images/4.jpg",
            title: "Project 4",
            description: "A corporate website with a focus on delivering key information effectively."
        },
        {
            img: "https://spring-slider.uiinitiative.com/images/5.jpg",
            title: "Project 5",
            description: "An interactive dashboard designed for data visualization and real-time updates."
        },
        {
            img: "https://spring-slider.uiinitiative.com/images/6.jpg",
            title: "Project 6",
            description: "A creative portfolio site featuring dynamic elements and engaging visuals."
        }
    ]
    ,
    clients: [
        { logo: "/clients/ocp.svg", name: "ocp" },
        { logo: "/clients/radees.png", name: "radees" },
        { logo: "/clients/actsafi.png", name: "actsafi" },
        { logo: "/clients/marsa.png", name: "marsa" },
        { logo: "/clients/ADEMA_ENERGY.png", name: "ADEMA_ENERGY" },
        { logo: "/clients/BBC.png", name: "BBC" },

    ],
    contactForm: {
        namePlaceholder: "Votre nom",
        emailPlaceholder: "Votre email",
        messagePlaceholder: "Votre message",
        submitButton: "Envoyer"
    },
    companyInfo: {
        name: "PAYPER PROD",
        legalForm: "S.A.R.L.",
        capital: "100.000,00 dhs",
        rc: "14131",
        cnss: "4962075",
        if: "53914407",
        ice: "003351687000019"
    }
};



const Home = () => {
    const [open, setOpen] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the form data to a server
    };
    function closeModal() {
        setOpen(false);
    }
    return (
        <div className="font-sans">
            <SliderHero />
            {/* Presentation */}
            <section className="py-20 bg-gray-100 ">
                <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-center">{dataInfo.about.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto">
                    <div className="flex justify-center items-center w-full px-4 ">
                        <p data-aos="flip-down" className="text-lg text-justify max-w-3xl mx-auto">
                            {dataInfo.about.description}
                        </p>
                    </div>
                    <div className="w-full mx-auto px-4" data-aos="zoom-out" data-aos-delay={200}>
                        <iframe className="w-full aspect-video overflow-hidden rounded-2xl" src="https://www.youtube.com/embed/sEhS83z3XRM?autoplay=1&mute=1" title="Digital" allowFullScreen />
                    </div>

                </div>

            </section>
      {/* Company Sections */}
{/*       {dataInfo.child.map((company, index) => (
        <CompanySection key={index} company={company} />
      ))} */}
    

   {/*  <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {companyData.map((item,i)=><CompanyCard 
            title={item.title}
            description={item.description}
            icon={item.icon}
            logo={item.logo}
            url={item.url}
          />)}
          

        </section> */}

       {/*      <section id="Group" className="w-full px-4 py-20 sm:px-6  mx-auto">
                <h2 data-aos="zoom-in" className="text-2xl font-semibold mb-4 text-blue-500 text-center">PAYPER PROD GROUP</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {dataInfo.child.map((item, i) => <Link to={item.url} key={i} className=" h-56 flex flex-col justify-center items-center border border-gray-200 rounded-xl text-center p-4 md:p-5 hover:bg-blue-400/30 shadow-lg bg-white transform transition duration-300 group-hover:scale-105">
                        <div data-aos="zoom-in" className="flex justify-center items-center h-20  rounded-2xl mx-auto">
                            <img src={item.logo} className="h-20" />
                        </div>
                        <div data-aos="zoom-in" className="mt-3">
                            <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-neutral-200 uppercase">
                                PAYPER {item.name}
                            </h3>
                            <div className="w-full flex justify-center items-center">
                                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                    Plus de détails
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>)}


                </div>

            </section>
 */}



      {/* Company Sections */}
{/*       {dataInfo.child.map((company, index) => (
        <CompanySection key={index} company={company} />
      ))}
 */}

<ServiceList/>
            {/* Services */}
  {/*           <section id="services" className="py-20 bg-cover bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop')` }} >
                <div className="container mx-auto px-4">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mb-12 text-center">Nos Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dataInfo.service.map((service, index) => {
                            const randomNumber = Math.floor(Math.random() * aos_list.length);

                            return <div data-aos={shuffledAosList[index]} data-aos-offset={10 * (1 + index)} key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <i className={`${service.icon} text-4xl mb-4 bg-gradient-to-r --from-blue-400 --via-blue-500 --to-blue-600 inline-block --text-transparent --bg-clip-text text-[#0094d9]`}></i>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p>{service.description.split(".")?.map((dec, i) => <li data-aos="fade-left" data-aos-delay={100 * i} key={i} className="flex gap-x-2">
                                    <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    <span className="text-gray-800 dark:text-neutral-400">
                                        {dec}.
                                    </span>
                                </li>

                                )}</p>
                            </div>
                        })}
                    </div>
                </div>
            </section> */}
            {/* Section 4: Nos Clients */}
            <section id="nos_clients" className="py-20">
                <div className="container mx-auto px-4">
                    <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Clients</h3>
                    <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                        {dataInfo.clients.map((item, i) =>
                            <div key={i} data-aos="zoom-in" data-aos-offset={25} className="py-3 lg:py-5 w-20 flex justify-center items-center"><img src={item.logo} alt={item.name} className="w-full h-auto" /></div>)}

                    </div>

                </div>
            </section>
            <DemandeDevisApp/>

            {/* Portfolio */}
            <section id="project" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-800 mb-12">Projets récents</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {dataInfo.portfolio?.map((item, index) => (
                            <div data-aos="zoom-in" data-aos-offset={25 * index} key={index} className="group block relative overflow-hidden rounded-lg">
                                <img
                                    className="w-full aspect-video object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                                    src={item.img}
                                    alt={item.title}
                                />

                                <Modal data={item} className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
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
                                </Modal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Domains of Expertise */}
            <section id='secteurs' className="py-20">
                <div className="container mx-auto px-4">
                    <h2 data-aos="fade-up" className="text-3xl font-bold mb-12 text-center">Domaines de Compétences</h2>
                    <div className="flex flex-wrap justify-center">
                        {dataInfo.domains.map((domain, index) => (
                            <span data-aos="zoom-in" data-aos-delay={100 * index} key={index} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium  text-sm  text-center me-2 mb-2  px-4 py-2 rounded-full m-2">
                                {domain}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contactez-nous */}
            <section id="contact" className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 data-aos="fade-up" className="text-3xl font-bold mb-4">Contactez-nous</h3>
                    <p className="text-xl mb-8">Prêt à sublimer votre image ? Contactez-nous pour une stratégie sur mesure.</p>
                    <div
                        data-aos="fade-up" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                        <form className="space-y-6" >
                            <input type="text" placeholder="Nom" className="w-full p-2 border rounded text-gray-800" />
                            <input type="email" placeholder="Email" className="w-full p-2 border rounded text-gray-800" />
                            <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded text-gray-800"></textarea>
                            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">Envoyer</button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    );
};


function Modal({ data, children }) {
    const [open, setOpen] = useState(false);
    function closeModal() {
        setOpen(false);
    }
    return (
        <>
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition" onClick={() => { setOpen(true) }} >{children}</div>
            <DialogModal maxWidth='4xl' isOpen={open} onClose={closeModal}>
                <DialogModal.Content title={data.title}>

                    {data?.video ? <iframe className="w-full aspect-video overflow-auto rounded-md shadow" src={data.video} title={data.title} allowFullScreen /> : <img
                        className="w-full aspect-video object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src={data.img}
                        alt={data.title}
                    />}

                    <p>{data.description}</p>
                </DialogModal.Content>
                {/*                 <DialogModal.Footer>
                    <div
                        className="m-1 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                        onClick={closeModal}
                    >
                        Exit
                    </div>

                </DialogModal.Footer> */}
            </DialogModal>
        </>

    );
}


const CompanyCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          En savoir plus
<svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </a>
      </div>
    );
  };


  const CompanySection = ({ company }) => {
    return true
    return (
      <section id={company.name.toLowerCase()} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <img src={company.logo} alt={company.name} className="h-16 mr-4" />
            <h2 className="text-3xl font-bold text-blue-600">PAYPER {company.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About PAYPER {company.name}</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="text-blue-500 mr-2" />
                  <span>Key feature or service 1</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-blue-500 mr-2" />
                  <span>Key feature or service 2</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-blue-500 mr-2" />
                  <span>Key feature or service 3</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="text-lg font-medium text-blue-600">Service 1</h4>
                  <p className="text-gray-600">Brief description of service 1.</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-blue-600">Service 2</h4>
                  <p className="text-gray-600">Brief description of service 2.</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium text-blue-600">Service 3</h4>
                  <p className="text-gray-600">Brief description of service 3.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to={company.url} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Learn More About PAYPER {company.name}
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    );
  };