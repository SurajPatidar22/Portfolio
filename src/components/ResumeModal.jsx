import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  if (isOpen && typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
  } else if (typeof window !== 'undefined') {
    document.body.style.overflow = 'unset';
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(11, 17, 33, 0.8)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              backgroundColor: '#1e293b',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#0f172a' }}>
              <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.25rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8b5cf6' }}>Resume</span>
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href="/resume.pdf?v=1"
                  download="Suraj_Patidar_Resume.pdf"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: '#4f46e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <button
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'transparent',
                    color: '#94a3b8',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#f8fafc'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body - PDF Viewer */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '70vh', backgroundColor: '#e2e8f0' }}>
              <iframe
                src="/resume.pdf?v=1"
                title="Suraj Patidar Resume"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '70vh',
                  border: 'none',
                }}
              >
                <p style={{ padding: '20px', textAlign: 'center' }}>
                  Your browser cannot display the PDF.{' '}
                  <a href="/resume.pdf?v=1" download="Suraj_Patidar_Resume.pdf" style={{ color: '#4f46e5' }}>
                    Click here to download it.
                  </a>
                </p>
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
