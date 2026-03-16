import { useState, useEffect } from 'react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Projects'); // Setting default to Projects to match screenshot

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Training', href: '#experience' },
    { name: 'Certifications', href: '#certificates' },
    { name: 'Resume', action: onOpenResume },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: scrolled ? 'rgba(11, 17, 33, 0.95)' : '#0b1121', 
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#" style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={{ color: '#8b5cf6' }}>SP</span> Portfolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1" style={{ display: 'flex', gap: '0.25rem' }}>
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a 
                key={link.name} 
                href={link.href || '#'} 
                onClick={(e) => {
                  if (link.action) {
                    e.preventDefault();
                    link.action();
                  } else {
                    setActiveTab(link.name);
                  }
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  backgroundColor: isActive ? '#3730a3' : 'transparent', // dark indigo background for active
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  if (!isActive) e.target.style.color = '#ffffff';
                }}
                onMouseOut={(e) => {
                  if (!isActive) e.target.style.color = '#cbd5e1';
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
