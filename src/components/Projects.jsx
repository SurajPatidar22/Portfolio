import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All Projects');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['All Projects', 'Data Visualization', 'API Integration', 'Dashboard', 'Predictive Analysis'];

  const projects = [
    {
      title: 'AI Dungeons & Dragons Assistant',
      description: 'An AI-powered assistant for Dungeons & Dragons that helps in generating campaigns, characters, and storylines. Built to enhance the tabletop gaming experience with automated features.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: ['API Integration'],
      tags: ['Python', 'Requests', 'API', 'Threading'],
      sourceCode: 'https://github.com/SurajPatidar22/AI-Dungeons-Dragons-Assistant',
      featured: true,
      fallbackImg: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Death Statistics Dashboard',
      description: 'A data analytics dashboard that empowers users to monitor and analyze trends in major causes of death. With interactive charts, categorized data filters, and an interactive dashboard, it offers a complete overview of statistics by year and state.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: ['Data Visualization', 'Dashboard'],
      tags: ['Python', 'Pandas', 'Plotly', 'React'],

      sourceCode: 'https://github.com/SurajPatidar22/Analysing-dataset-of-Leading-Causes-of-Death-United-States-1999-2017-',
      featured: false,
      fallbackImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Singapore Employment Rate Dashboard',
      description: 'An interactive Excel dashboard analyzing the graduated employment rate in Singapore. It provides visual insights into employment trends across different degree types and universities over time.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: ['Dashboard', 'Data Visualization'],
      tags: ['Excel', 'Data Analysis', 'Pivot Tables'],
      sourceCode: 'https://github.com/SurajPatidar22/Analysing-graduated-employment-rate-of-singapore-with-the-help-of-excel-dashboard',
      featured: true,
      fallbackImg: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'US Suicide Death Rates Predictive Analysis',
      description: 'A predictive analysis project modeling U.S. suicide death rates based on demographic factors like sex, race, Hispanic origin, and age. Uses machine learning to uncover significant predictors.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4bffa25?w=800&auto=format&fit=crop&q=80',
      category: ['Predictive Analysis', 'Data Visualization'],
      tags: ['Python', 'Machine Learning', 'Data Science'],
      sourceCode: 'https://github.com/SurajPatidar22/Predictive-Analysis-of-U.S.-Suicide-Death-Rates-by-Sex-Race-Hispanic-Origin-and-Age',
      featured: true,
      fallbackImg: 'https://images.unsplash.com/photo-1504868584819-f8e8b4bffa25?w=800&auto=format&fit=crop&q=80'
    }
  ];

  const filteredProjects = filter === 'All Projects'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" style={{ padding: '80px 20px', backgroundColor: '#0b1121', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            marginBottom: '10px',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '-1px'
          }}>
            Featured Projects
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #60a5fa, #c084fc)', margin: '0 auto 20px', borderRadius: '4px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            A showcase of my work spanning web applications, APIs, and responsive interfaces.
          </p>
        </motion.div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {filters.map(f => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isActive ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : '#1e293b',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(79, 70, 229, 0.4)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.target.style.background = '#334155';
                    e.target.style.color = '#f8fafc';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.target.style.background = '#1e293b';
                    e.target.style.color = '#94a3b8';
                  }
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px'
        }}>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              style={{
                position: 'relative',
                background: '#151e32',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #1e293b',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                aspectRatio: '16/10', // Maintain consistent shape for images
                cursor: 'pointer'
              }}
            >
              {/* Background Image Container */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#0f172a',
                transition: 'transform 0.5s ease',
                transform: hoveredProject === project.title ? 'scale(1.05)' : 'scale(1)'
              }}>
                <img
                  src={project.fallbackImg}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                />
              </div>

              {/* Always Visible Header (Badges & Title Bottom Gradient) */}
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {project.featured && (
                    <div style={{
                      background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                      color: 'white',
                      padding: '6px 16px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: '600',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
                      letterSpacing: '0.5px'
                    }}>
                      Featured
                    </div>
                  )}
                </div>

                {/* Title overlay when not hovered */}
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{
                    opacity: hoveredProject === project.title ? 0 : 1,
                    y: hoveredProject === project.title ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'linear-gradient(to top, rgba(11, 17, 33, 0.9) 0%, rgba(11, 17, 33, 0) 100%)',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '40px 24px 24px',
                    pointerEvents: 'none'
                  }}
                >
                  <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                    {project.category.map(cat => (
                      <span key={cat} style={{ background: 'rgba(51, 65, 85, 0.6)', color: '#cbd5e1', padding: '4px 12px', borderRadius: '4px', fontSize: '12px', backdropFilter: 'blur(4px)' }}>
                        {cat}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Hover Overlay Content */}
              <AnimatePresence>
                {hoveredProject === project.title && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(11, 17, 33, 0.85)',
                      padding: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <motion.h3
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{ fontSize: '1.8rem', color: '#38bdf8', marginBottom: '16px', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack Pills */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}
                    >
                      {project.tags.map(tag => (
                        <span key={tag} style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#bae6fd', padding: '6px 16px', borderRadius: '9999px', fontSize: '12px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}
                    >
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          flex: 1,
                          textAlign: 'center',
                          background: 'linear-gradient(135deg, #4f46e5, #3b82f6)',
                          color: 'white',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          boxShadow: '0 4px 10px rgba(79, 70, 229, 0.3)',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseOver={(e) => e.target.style.opacity = '0.9'}
                        onMouseOut={(e) => e.target.style.opacity = '1'}
                      >
                        View project on GitHub
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
