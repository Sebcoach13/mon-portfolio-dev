// components/Header.js - 


import Link from 'next/link'; 

export default function Header() {
  const navItems = [
    { name: 'Accueil', href: '#accueil' }, 
    { name: 'Compétences', href: '#skills' }, 
    { name: 'Projets', href: '#projets' },   
  ];

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold tracking-wider hover:text-indigo-400 transition duration-300">
          DevCodeMaster_13
        </Link>
        
        <div className="space-x-8 hidden md:flex">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium hover:text-indigo-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a 
          href="/votre-cv.pdf" 
          download 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hidden md:block"
        >
          Télécharger CV
        </a>
      </nav>
    </header>
  );
}