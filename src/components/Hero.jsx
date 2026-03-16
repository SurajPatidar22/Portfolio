import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, FileText } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px', paddingTop: '100px' }}>
      <motion.div
        style={{ flex: '1', minWidth: '320px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants}>
          <span className="mono" style={{ color: '#60a5fa', fontSize: '18px', letterSpacing: '1px', fontWeight: 'bold' }}>Hello, my name is</span>
        </motion.div>

        <motion.h1
          variants={textVariants}
          style={{ fontSize: 'clamp(40px, 8vw, 84px)', color: '#f8fafc', marginTop: '20px', lineHeight: '1.1', fontWeight: '900', fontFamily: 'Outfit, sans-serif' }}
        >
          Suraj Patidar.
        </motion.h1>

        <motion.h2
          variants={textVariants}
          style={{ fontSize: 'clamp(30px, 6vw, 70px)', color: '#94a3b8', marginTop: '10px', lineHeight: '1.1', fontWeight: 'bold', fontFamily: 'Outfit, sans-serif' }}
        >
          I turn data into insights.
        </motion.h2>

        <motion.p
          variants={textVariants}
          style={{ maxWidth: '540px', marginTop: '30px', fontSize: '18px', color: '#cbd5e1', lineHeight: '1.7' }}
        >
          I am a passionate Data Science enthusiast focused on analyzing data and discovering meaningful patterns.
          Currently pursuing my B.Tech from Lovely Professional University, I enjoy working with data analysis, machine learning, and modern tools to build data-driven solutions and impactful insights.</motion.p>

        <motion.div
          variants={textVariants}
          style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(79, 70, 229, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work!
            <ArrowRight size={20} />
          </motion.a>

          <motion.button
            onClick={onOpenResume}
            style={{
              padding: '16px 32px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            View Resume
          </motion.button>

          <div style={{ display: 'flex', gap: '20px', marginLeft: '10px' }}>
            <motion.a whileHover={{ y: -5, color: '#60a5fa' }} href="https://github.com/SurajPatidar22" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>
              <Github size={28} />
            </motion.a>
            <motion.a whileHover={{ y: -5, color: '#60a5fa' }} href="https://linkedin.com/in/suraj-patidar-355a44284/" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }}>
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
      >
        {/* Floating Animation for Avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          style={{ position: 'relative', width: '320px', height: '320px' }}
        >
          {/* Rotating Glowing Ring Behind Avatar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #60a5fa, #c084fc, #38bdf8)',
              zIndex: 0,
              opacity: 0.6,
              filter: 'blur(8px)'
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #4f46e5, #ec4899)',
              zIndex: 1,
            }}
          />

          <img
            src="/professional_avatar.jpeg"
            alt="Suraj Patidar"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '6px solid #0b1121',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300x300/1e1b4b/60a5fa?text=SP'; }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
