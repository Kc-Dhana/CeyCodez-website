// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';

// const CeyCodezPortfolio = () => {
//   const [loading, setLoading] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [activeSection, setActiveSection] = useState('home');

//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const packagesRef = useRef(null);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLoadingProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           setTimeout(() => setLoading(false), 500);
//           return 100;
//         }
//         return prev + 2;
//       });
//     }, 30);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         { id: 'home', ref: homeRef },
//         { id: 'about', ref: aboutRef },
//         { id: 'packages', ref: packagesRef },
//         { id: 'contact', ref: contactRef }
//       ];

//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         if (section.ref.current) {
//           const { offsetTop, offsetHeight } = section.ref.current;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section.id);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//     setMobileMenuOpen(false);
//   };

//   if (loading) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center relative overflow-hidden">
//       <AnimatedBackground />

//       <div className="text-center relative z-10">
//         {/* Logo */}
//         <div className="mb-3">
//           <img
//             src="/CeyCodez_Logo.png"
//             alt="CeyCodez Logo"
//             className="w-80 h-80 mx-auto object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
//           />
//         </div>

//         {/* Progress Bar */}
//         <div className="w-[450px] h-3 bg-gray-900 rounded-full border border-cyan-500 mx-auto overflow-hidden mb-4">
//           <div
//             className="h-full bg-cyan-400 transition-all duration-300"
//             style={{ width: `${loadingProgress}%` }}
//           />
//         </div>

//         {/* Loading Text */}
//         <p className="text-white text-lg tracking-[0.3em]">INITIALIZING...</p>
//       </div>
//     </div>
//   );
// }



//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
//       <AnimatedBackground />
      
//       {/* Navigation */}
//       <nav className="fixed w-full z-50 border-b border-cyan-500/20 bg-black/40 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <div className="flex items-center space-x-4">
//               <img
//                 src="/CeyCodez_Logo.png"
//                 alt="CeyCodez Logo"
//                 className="w-16 h-16 object-contain drop-shadow-[0_0_12px_rgba(96,165,250,0.4)]"
//               />
//               <img
//                 src="/CeyCodez_name.png"
//                 alt="CeyCodez Name"
//                 className="w-44 h-auto object-contain"
//               />
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-10">
//               {[
//                 { name: 'HOME', ref: homeRef, id: 'home' },
//                 { name: 'ABOUT', ref: aboutRef, id: 'about' },
//                 { name: 'PACKAGES', ref: packagesRef, id: 'packages' },
//                 { name: 'CONTACT', ref: contactRef, id: 'contact' },
//               ].map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`text-base font-semibold tracking-wide relative pb-2 transition-colors duration-300 ${
//                     activeSection === item.id
//                       ? 'text-cyan-400'
//                       : 'text-white hover:text-cyan-400'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden mt-4 pb-4 space-y-3">
//               {[
//                 { name: 'HOME', ref: homeRef, id: 'home' },
//                 { name: 'ABOUT', ref: aboutRef, id: 'about' },
//                 { name: 'PACKAGES', ref: packagesRef, id: 'packages' },
//                 { name: 'CONTACT', ref: contactRef, id: 'contact' },
//               ].map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.ref)}
//                   className={`block w-full text-left px-4 py-2 text-white font-semibold hover:text-cyan-400 transition-colors duration-300 ${
//                     activeSection === item.id ? 'text-cyan-400' : ''
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Home Section */}
//       <section ref={homeRef} className="min-h-screen pt-20 flex flex-col justify-center relative">
//         <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
//           <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">DECODE THE FUTURE</h1>
//           <p className="text-3xl text-cyan-400 mb-16">Code.Create.Evolve.</p>
//           <button 
//             onClick={() => scrollToSection(packagesRef)}
//             className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all font-bold text-lg tracking-wide"
//           >
//             EXPLORE SOLUTIONS
//           </button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section ref={aboutRef} className="min-h-screen py-20 flex flex-col justify-center relative">
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-bold mb-6">ABOUT US</h2>
//             <p className="text-2xl text-gray-300">Decoding the Future of Technology, Together.</p>
//           </div>

//           <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6 relative z-10">
//             {/* Our Mission Card */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 left-20 w-20 h-0.5 bg-cyan-400"></div>
//               <div className="absolute top-0 right-0 w-28 h-0.5 bg-gradient-to-l from-transparent via-cyan-400/50 to-transparent"></div>
//               <div className="absolute top-0 left-0 w-0.5 h-12 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-10 flex items-start space-x-5">
//                 <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
//                   <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M12 2L2 7l10 5 10-5-10-5z"/>
//                     <path d="M2 17l10 5 10-5"/>
//                     <path d="M2 12l10 5 10-5"/>
//                   </svg>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-3xl font-bold mb-4">OUR MISSION</h3>
//                   <p className="text-gray-300 leading-relaxed text-base">Lorem ipsum dolor, viatamintitle ste rezernteand diet ats matatluene ttorsalduconsul bycudinis the teriditane batut.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Our Vission Card */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 left-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
//               <div className="absolute top-0 right-20 w-20 h-0.5 bg-cyan-400"></div>
//               <div className="absolute top-0 right-0 w-0.5 h-12 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-10 flex items-start space-x-5">
//                 <div className="flex-1">
//                   <h3 className="text-3xl font-bold mb-4">OUR VISSION</h3>
//                   <p className="text-gray-300 leading-relaxed text-base">nosingi healsitic nometies pre-cthethone Peer on Iamt termnting amcituk aat clergam.</p>
//                 </div>
//                 <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
//                   <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M12 2L2 7l10 5 10-5-10-5z"/>
//                     <path d="M2 17l10 5 10-5"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Meet Our Team */}
//           <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30 flex justify-center">
//             <div className="absolute top-0 left-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
//             <div className="absolute top-0 right-1/4 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//             <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//             <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-cyan-400"></div>
//             <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>

//             <div className="p-12 w-full max-w-6xl text-center">
//               <h3 className="text-4xl font-bold text-center mb-14">MEET OUR TEAM</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
//                 {[
//                   { name: 'Kavinda Appuhamy', role: 'Founder & Fullstack Software Engineer' },
//                   { name: 'Dhananjaya Perera', role: 'Fullstack Software Engineer' },
//                   { name: 'Thamalu Amarasinhe', role: 'Fullstack Software Engineer' },
//                 ].map((member, idx) => (
//                   <div key={idx} className="text-center">
//                     <div className="w-36 h-36 mx-auto mb-5 rounded-full border-4 border-cyan-400 bg-gray-800 overflow-hidden">
//                       <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
//                     </div>
//                     <h4 className="font-bold text-lg mb-1">{member.name}</h4>
//                     <p className="text-sm text-gray-400">{member.role}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Packages Section */}
//       <section ref={packagesRef} className="min-h-screen py-20 flex flex-col justify-center relative">
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-bold mb-4">FULL-STACK DEVELOPMENT</h2>
//             <h3 className="text-4xl md:text-5xl font-bold">PACKAGES & PRICING</h3>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {/* Basic Package */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
//               <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-2">BASIC PACKAGE</h3>
//                 <p className="text-sm text-gray-400 mb-6">STARTER WEBSITE</p>
//                 <div className="mb-8">
//                   <span className="text-6xl font-bold text-cyan-400">$198</span>
//                   <span className="text-gray-400 text-lg">/month</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>1-5 static/sem/dynamic pages</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Responsive UI (React + Tailwind)</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Basic backend (Node.js)</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>MOGGEB/MYCL integration</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Contact form</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Deployment on low-cost hosting</span>
//                   </li>
//                 </ul>
//                 {/* <div className="text-center">
//                   <span className="text-cyan-400 text-3xl">✓</span>
//                 </div> */}
//               </div>
//             </div>

//             {/* Standard Package */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
//               <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-2">STANDARD PACKAGE</h3>
//                 <p className="text-sm text-gray-400 mb-6">BUSINESS WEB APP</p>
//                 <div className="mb-8">
//                   <span className="text-6xl font-bold text-cyan-400">$295</span>
//                   <span className="text-gray-400 text-lg">/month</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Ut np 10-112 pages/modules</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Full CRUD opredules</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Secure authentication</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Secure authentication (JWT)</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>API integration</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Deta0mase design & optimization</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Deployment with domain, SSL</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>1-month free maintenance</span>
//                   </li>
//                 </ul>
//                 {/* <div className="text-center">
//                   <span className="text-cyan-400 text-3xl">✓</span>
//                 </div> */}
//               </div>
//             </div>

//             {/* Premium Package */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-400">
//               <div className="absolute -top-4 right-8 bg-cyan-400 text-black px-5 py-1.5 font-bold text-sm">PREMIUM</div>
//               <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-2">PREMIUM</h3>
//                 <p className="text-sm text-gray-400 mb-6">LATEESTEME SVECTS</p>
//                 <div className="mb-8">
//                   <span className="text-6xl font-bold text-cyan-400">$522</span>
//                   <span className="text-gray-400 text-lg">/month</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Unlimited scalable architecture (MERN)</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Admin panel file analytics</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Advanced web file uploads</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Advance backend file updates</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>3-month maintenance & Cloud/DigitalOcean</span>
//                   </li>
//                   <li className="flex items-start space-x-2 text-sm">
//                     <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
//                     <span>Full documentation & minor code handover</span>
//                   </li>
//                 </ul>
//                 {/* <div className="text-center">
//                   <span className="text-cyan-400 text-3xl">✓</span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section ref={contactRef} className="min-h-screen py-20 flex flex-col justify-center relative">
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-6xl md:text-7xl font-bold mb-6">GET IN TOUCH</h2>
//             <p className="text-2xl text-gray-300">Let's build the future together.</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             {/* Contact Form */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 left-16 w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
//               <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-10">
//                 <h3 className="text-3xl font-bold mb-8">SEND MESSAGE</h3>
//                 <form className="space-y-5">
//                   <div>
//                     <label className="block text-sm text-gray-400 mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-400 mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-400 mb-2">Phone</label>
//                     <input
//                       type="text"
//                       className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-400 mb-2">Message</label>
//                     <textarea
//                       rows="4"
//                       className="w-full bg-gray-950/70 border border-gray-600 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-cyan-400 hover:bg-cyan-500 text-black py-3.5 font-bold transition-all text-lg"
//                   >
//                     SEND MESSAGE
//                   </button>
//                 </form>
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="relative bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/30">
//               <div className="absolute top-0 right-16 w-24 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-cyan-400"></div>
//               <div className="absolute bottom-0 left-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-cyan-400"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-0.5 bg-cyan-400"></div>
              
//               <div className="p-10">
//                 <h3 className="text-3xl font-bold mb-8">CONTACT INFORMATION</h3>
                
//                 <div className="space-y-7 mb-10">
//                   <div className="flex items-start space-x-4">
//                     <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
//                       <Mail className="w-7 h-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400 mb-2">Email:</p>
//                       <p className="font-semibold text-base">contact@ceycodez.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
//                       <Phone className="w-7 h-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400 mb-2">Phone:</p>
//                       <p className="font-semibold text-base">+1 (555) 123-4567</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <div className="p-4 border-2 border-cyan-400 bg-cyan-400/10 flex-shrink-0">
//                       <MapPin className="w-7 h-7 text-cyan-400" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-400 mb-2">Address:</p>
//                       <p className="font-semibold text-base">123 Tech Street, Digital City</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-700 pt-6">
//                   <h4 className="text-lg font-bold mb-4">BUSINESS HOURS</h4>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex justify-between">
//                       <span>Monday - Friday:</span>
//                       <span>9:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Saturday:</span>
//                       <span>10:00 AM - 4:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Sunday:</span>
//                       <span>Closed</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center text-sm text-gray-500 border-t border-cyan-500/20 pt-10">
//             <p>© 2025 CeyCodez. All rights reserved. | Privacy Policy | Terms of Service</p>
//             <p className="mt-2">Designed and developed by CeyCodez Team</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Animated Background Component (same as before)
// const AnimatedBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const particleCount = 80;
    
//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.radius = Math.random() * 2 + 1;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     function connectParticles() {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 150)})`;
//             ctx.lineWidth = 1;
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });
      
//       connectParticles();
//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none"
//       style={{ zIndex: 1 }}
//     />
//   );
// };

// export default CeyCodezPortfolio;