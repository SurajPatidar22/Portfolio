import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FileText } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('Education');

  const tabs = ['Education', 'Training', 'Projects'];

  // User's data structured by tabs
  const data = {
    Education: [
      {
        title: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        subtitle: 'Bachelor of Technology - Computer Science and Engineering',
        date: 'Since August 2023',
        description: 'CGPA: 6.56'
      },
      {
        title: 'Ben\'s Public School',
        location: 'Khandwa, Madhya Pradesh',
        subtitle: 'Intermediate (PCM)',
        date: 'March 2022 - May 2023',
        description: 'Percentage: 62%'
      },
      {
        title: 'Holy Spirit Convent School',
        location: 'Khandwa, Madhya Pradesh',
        subtitle: 'Matriculation',
        date: 'March 2020 - May 2021',
        description: 'Percentage: 76%'
      }
    ],
    Training: [
      {
        title: 'Android Developer Pro Training',
        location: 'Lovely Professional University',
        subtitle: 'Professional Enhancement',
        date: 'June 2025 - July 2025',
        description: 'Completed hands-on training in Android development (Kotlin & XML). Developed multiple Android applications integrating REST APIs using Retrofit and implemented Firebase Authentication.'
      }
    ],
    Projects: [
      {
        title: 'AI Dungeons & Dragons Assistant',
        location: 'Personal Project',
        subtitle: 'Python, Requests, API, Threading',
        date: '2024',
        description: 'An AI-powered assistant for Dungeons & Dragons that helps in generating campaigns, characters, and storylines. Built to enhance the tabletop gaming experience with automated features.'
      },
      {
        title: 'Leading Causes of Death U.S. Dashboard',
        location: 'Personal Project',
        subtitle: 'Python, Pandas, Plotly, React',
        date: 'March 2025 - April 2025',
        description: 'Preprocessed NCHS datasets and developed an interactive analytical dashboard entirely in Python to explore trends in major causes of death from 1999–2017.'
      },
      {
        title: 'Singapore Employment Rate Dashboard',
        location: 'Personal Project',
        subtitle: 'Excel, Data Analysis, Pivot Tables',
        date: '2025',
        description: 'An interactive Excel dashboard analyzing the graduated employment rate in Singapore. Provides visual insights into employment trends across different degree types and universities.'
      },
      {
        title: 'US Suicide Death Rates Predictive Analysis',
        location: 'Personal Project',
        subtitle: 'Python, Machine Learning, Data Science',
        date: '2025',
        description: 'A predictive analysis project modeling U.S. suicide death rates based on demographic factors like sex, race, Hispanic origin, and age. Uses machine learning to uncover significant predictors.'
      }
    ]
  };

  return (
    <section id="experience" style={{ padding: '80px 20px', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                background: activeTab === tab ? 'linear-gradient(135deg, #4f46e5, #7c3aed)' : 'transparent',
                color: activeTab === tab ? 'white' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                transition: 'all 0.3s ease',
                fontFamily: 'Outfit, sans-serif'
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab) e.target.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab) e.target.style.color = '#cbd5e1';
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ position: 'relative', minHeight: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              {data[activeTab] && data[activeTab].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#151e32',
                    borderRadius: '12px',
                    padding: '30px',
                    border: '1px solid #1e293b',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif', marginBottom: '4px' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item.location}</p>
                    </div>
                    
                    <div style={{
                      background: 'rgba(79, 70, 229, 0.1)',
                      color: '#a78bfa',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}>
                      {item.date}
                    </div>
                  </div>

                  <p style={{ color: '#f8fafc', fontSize: '1.05rem', fontWeight: '500', marginTop: '10px' }}>
                    {item.subtitle}
                  </p>
                  
                  {item.description && (
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '4px' }}>
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>



      </div>
    </section>
  );
}
