import { motion } from 'framer-motion';

const CircularSkill = ({ percentage, name, idx }) => {
  const size = 120;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = radius * 2 * Math.PI;
  const dash = (percentage * circumference) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      viewport={{ once: true }}
      className="glass glow-on-hover"
      style={{
        width: '160px',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        padding: '20px',
        background: 'rgba(10, 25, 47, 0.4)',
        border: '1px solid rgba(100, 255, 218, 0.1)',
        borderRadius: '16px'
      }}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="var(--accent-cyan)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - dash }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            strokeLinecap="round"
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          fontFamily: 'Outfit, sans-serif'
        }}>
          {percentage}%
        </div>
      </div>
      <span className="mono" style={{
        fontSize: '14px',
        color: 'var(--accent-cyan)',
        fontWeight: '500',
        letterSpacing: '0.5px'
      }}>
        {name}
      </span>
    </motion.div>
  );
};

export default function Skills() {
  const languageSkills = [
    { name: 'C++', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Kotlin', level: 88 },
    { name: 'XML', level: 90 }
  ];

  const toolSkills = [
    { name: 'SalesForce', level: 90 },
    { name: 'GitHub', level: 92 },
    { name: 'VS Code', level: 95 },
    { name: 'Android Studio', level: 88 },
  ];

  const softSkills = ['Team Player', 'Management', 'Adaptability', 'Quick Learner'];

  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-line" style={{ fontSize: '2.5rem', marginBottom: '60px' }}>
          Technical Arsenal
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        <div>
          <h3 className="mono" style={{ color: 'rgba(100, 255, 218, 0.6)', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Languages
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '30px',
            justifyItems: 'center'
          }}>
            {languageSkills.map((skill, idx) => (
              <CircularSkill key={skill.name} name={skill.name} percentage={skill.level} idx={idx} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mono" style={{ color: 'rgba(100, 255, 218, 0.6)', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Tools & Frameworks
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '30px',
            justifyItems: 'center'
          }}>
            {toolSkills.map((skill, idx) => (
              <CircularSkill key={skill.name} name={skill.name} percentage={skill.level} idx={idx + 5} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mono" style={{ color: 'rgba(100, 255, 218, 0.6)', fontSize: '1.2rem', marginBottom: '30px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Soft Skills
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {softSkills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass"
                style={{
                  padding: '12px 24px',
                  fontSize: '15px',
                  color: 'var(--text-primary)',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: '30px',
                  background: 'rgba(100, 255, 218, 0.05)'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
