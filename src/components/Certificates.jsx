import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

// Mock Certificate Image component to replace Unsplash random images
const MockCertificate = ({ provider, title }) => (
  <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    border: '4px solid #e2e8f0',
    position: 'relative'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#cbd5e1',
      marginBottom: '10px'
    }}></div>
    <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>CERTIFICATE OF COMPLETION</div>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>This is to certify that Suraj Patidar successfully completed</div>
    <div style={{ fontSize: '14px', color: '#334155', fontWeight: 'bold', textAlign: 'center', marginTop: '8px' }}>{title}</div>
    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px' }}>{provider}</div>
  </div>
);

// Custom Icons to match DV Portfolio exactly
const SquareStackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="8" height="8" rx="2" fill="#38bdf8" />
    <rect x="12" y="12" width="8" height="8" rx="2" fill="#a78bfa" />
    <rect x="4" y="12" width="8" height="8" rx="2" fill="#34d399" />
    <rect x="12" y="4" width="8" height="8" rx="2" fill="#fbbf24" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="15" rx="2" fill="#cbd5e1" />
    <path d="M3 10H21" stroke="#94a3b8" strokeWidth="2" />
    <rect x="7" y="3" width="2" height="6" rx="1" fill="#475569" />
    <rect x="15" y="3" width="2" height="6" rx="1" fill="#475569" />
    <rect x="7" y="14" width="4" height="3" rx="1" fill="#38bdf8" />
  </svg>
);

const MagicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" fill="#a78bfa" />
    <circle cx="12" cy="12" r="4" fill="#38bdf8" />
  </svg>
);

const CertificateDetails = ({ cert, onOpen }) => (
  <div style={{
    background: 'linear-gradient(160deg, #2e1065 0%, #1e1b4b 100%)',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box'
  }}>
    <h3 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '30px', lineHeight: '1.3', fontFamily: 'Outfit, sans-serif' }}>
      {cert.title}
    </h3>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
        <SquareStackIcon />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '4px' }}>Issued by:</span>
          <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>{cert.provider}</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
        <CalendarIcon />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '4px' }}>Date:</span>
          <span style={{ fontSize: '1.05rem', fontWeight: '600' }}>{cert.date}</span>
        </div>
      </div>

      {cert.skills && cert.skills.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
          <MagicIcon />
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <span style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '8px' }}>Skills:</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cert.skills.map(skill => (
                <span key={skill} style={{
                  background: '#3730a3',
                  color: '#c7d2fe',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

    <button
      onClick={() => onOpen && onOpen(cert)}
      style={{
        width: '100%',
        padding: '14px',
        background: 'white',
        color: '#312e81',
        border: 'none',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: 'bold',
        marginTop: '30px',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
    >
      View Certificate
    </button>
  </div>
);

export default function Certificates() {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [openCert, setOpenCert] = useState(null);

  const certificates = [
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      provider: 'Infosys Springboard',
      date: 'August 26, 2025',
      description: 'Awarded by Infosys for successfully completing the course on building Generative AI applications and solutions using no-code tools. Issued on December 12, 2025.',
      featured: false,
      image: '/cert-infosys.png',
      skills: ['Generative AI', 'No-Code Tools', 'AI Solutions']
    },
    {
      title: 'Cloud Computing',
      provider: 'NPTEL — IIT Kharagpur',
      date: 'Jul–Oct 2025',
      description: 'Successfully completed a 12-week NPTEL certified course on Cloud Computing (Funded by MoE, Govt. of India). Consolidated score: 55%. Coordinated by Prof. Haimanti Banerji, IIT Kharagpur.',
      featured: false,
      image: '/cert-nptel.png',
      skills: ['Cloud Computing', 'Virtualization', 'Deployment Models']
    },
    {
      title: 'Android Developer Pro: Hands-On Projects & Play Store Launch',
      provider: 'LPU — Centre for Professional Enhancement',
      date: '10 June – 15 July 2025',
      description: 'Certificate of Merit from LPU Centre for Professional Enhancement. Completed skill development course in Android development with Grade O (Outstanding). Reg. No. 12312831.',
      featured: false,
      image: '/cert-lpu.png',
      skills: ['Android', 'Kotlin', 'Play Store', 'UI/UX']
    }
  ];

  return (
    <section id="certificates" style={{ padding: '80px 20px', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
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
            fontSize: '3.8rem',
            fontWeight: 'bold',
            color: 'transparent',
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            marginBottom: '10px',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '-1px'
          }}>
            Certifications
          </h2>
          <div style={{ width: '100px', height: '4px', background: 'linear-gradient(to right, #60a5fa, #c084fc)', margin: '0 auto 20px', borderRadius: '4px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Professional credentials that validate my technical expertise and continuous learning journey.
          </p>
        </motion.div>

        {/* Certificate Cards Grid - STRICTLY 3 COLUMNS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {certificates.map((cert, idx) => {
            if (cert.featured) {
              return (
                <div key={cert.title + idx} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid rgba(79, 70, 229, 0.4)',
                      boxShadow: '0 10px 40px rgba(79, 70, 229, 0.2)',
                      color: 'white',
                      height: '100%'
                    }}
                  >
                    <CertificateDetails cert={cert} />
                  </motion.div>
                  <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', marginTop: '12px', visibility: 'hidden' }}>
                    Hover to view details
                  </div>
                </div>
              );
            }

            return (
              <div key={cert.title + idx} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredCert(cert.title)}
                  onHoverEnd={() => setHoveredCert(null)}
                  animate={{
                    borderColor: hoveredCert === cert.title
                      ? 'rgba(139, 92, 246, 0.7)'
                      : 'rgba(30, 41, 59, 1)',
                    boxShadow: hoveredCert === cert.title
                      ? '0 0 30px rgba(139, 92, 246, 0.35), 0 10px 40px rgba(0, 0, 0, 0.5)'
                      : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                  style={{
                    background: '#151e32',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #1e293b',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  {/* Default View */}
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Image Area */}
                    <div style={{ position: 'relative', width: '100%', height: '220px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
                      <motion.div
                        animate={{ scale: hoveredCert === cert.title ? 1.08 : 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ width: '100%', height: '100%' }}
                      >
                        <MockCertificate provider={cert.provider} title={cert.title} />
                      </motion.div>
                      {/* Provider Pill */}
                      <div style={{
                        position: 'absolute', top: '15px', left: '15px',
                        background: '#6366f1', color: 'white',
                        padding: '4px 12px', borderRadius: '20px',
                        fontSize: '0.8rem', fontWeight: 'bold',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}>
                        {cert.provider}
                      </div>
                      <div style={{
                        position: 'absolute', bottom: '10px', right: '15px',
                        color: '#475569', fontSize: '0.95rem', fontWeight: 'bold'
                      }}>
                        {cert.date}
                      </div>
                    </div>

                    {/* Content Body — name, provider, date only */}
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif', lineHeight: '1.4', marginBottom: '16px' }}>
                        {cert.title}
                      </h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                        <span style={{ background: 'rgba(99, 102, 241, 0.18)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                          {cert.provider}
                        </span>
                        <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: '500' }}>{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* ✨ Hover Overlay — Premium Animated */}
                  <AnimatePresence>
                    {hoveredCert === cert.title && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          zIndex: 10,
                          background: 'linear-gradient(160deg, rgba(30, 10, 80, 0.96) 0%, rgba(15, 23, 42, 0.97) 100%)',
                          backdropFilter: 'blur(12px)',
                          padding: '28px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '18px',
                        }}
                      >
                        {/* Decorative top accent line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          style={{
                            position: 'absolute', top: 0, left: 0, right: 0,
                            height: '3px',
                            background: 'linear-gradient(to right, #6366f1, #a855f7, #38bdf8)',
                            transformOrigin: 'left',
                            borderRadius: '0 0 4px 4px'
                          }}
                        />

                        {/* Title */}
                        <motion.h3
                          initial={{ y: -18, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.05 }}
                          style={{
                            fontSize: '1.3rem', fontWeight: 'bold',
                            fontFamily: 'Outfit, sans-serif',
                            color: '#f8fafc', lineHeight: '1.35',
                            margin: 0,
                          }}
                        >
                          {cert.title}
                        </motion.h3>

                        {/* Provider + Date row */}
                        <motion.div
                          initial={{ y: 14, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.12 }}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}
                        >
                          <span style={{
                            background: 'rgba(99, 102, 241, 0.2)',
                            color: '#a5b4fc', padding: '5px 14px',
                            borderRadius: '20px', fontSize: '0.82rem', fontWeight: '600',
                            border: '1px solid rgba(99, 102, 241, 0.4)'
                          }}>
                            {cert.provider}
                          </span>
                          <span style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: '500' }}>{cert.date}</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ y: 14, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.18 }}
                          style={{
                            color: '#94a3b8', fontSize: '0.88rem',
                            lineHeight: '1.65', margin: 0,
                          }}
                        >
                          {cert.description}
                        </motion.p>

                        {/* Skills */}
                        <motion.div
                          initial={{ y: 14, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.25 }}
                          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
                        >
                          {cert.skills.map(skill => (
                            <span key={skill} style={{
                              background: 'rgba(139, 92, 246, 0.18)',
                              color: '#c4b5fd',
                              padding: '4px 12px', borderRadius: '20px',
                              fontSize: '0.78rem', fontWeight: '500',
                              border: '1px solid rgba(139, 92, 246, 0.35)'
                            }}>
                              {skill}
                            </span>
                          ))}
                        </motion.div>

                        {/* View Certificate Button */}
                        <motion.button
                          initial={{ y: 14, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.35, delay: 0.32 }}
                          whileHover={{ scale: 1.03, boxShadow: '0 6px 24px rgba(99, 102, 241, 0.5)' }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setOpenCert(cert)}
                          style={{
                            marginTop: '4px',
                            padding: '12px 20px',
                            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                            color: 'white', border: 'none',
                            borderRadius: '10px', fontSize: '14px',
                            fontWeight: '700', cursor: 'pointer',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 16px rgba(79, 70, 229, 0.4)',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          View Certificate →
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>

                <div style={{ textAlign: 'center', color: '#475569', fontSize: '0.82rem', marginTop: '10px', letterSpacing: '0.5px' }}>
                  Hover to view details
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpenCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0, 0, 0, 0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              cursor: 'zoom-out'
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', maxWidth: '900px', width: '100%', cursor: 'default' }}
            >
              <button
                onClick={() => setOpenCert(null)}
                style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-16px',
                  background: '#4f46e5',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  zIndex: 10,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}
              >
                <X size={20} />
              </button>
              <img
                src={openCert.image}
                alt={openCert.title}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                  display: 'block'
                }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <p style={{
                textAlign: 'center',
                color: '#94a3b8',
                marginTop: '16px',
                fontSize: '0.95rem',
                fontFamily: 'Inter, sans-serif'
              }}>{openCert.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Grid Styles */}
      <style>{`
        @media (max-width: 900px) {
          #certificates > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
