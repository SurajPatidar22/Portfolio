import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Using Web3Forms public API to handle the email forward without a backend 
    // You'll need to sign up at web3forms.com and replace this key later if you want it private, 
    // but this works immediately for routing to your email address!
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setResult(''), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" style={{ padding: '80px 20px', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
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
            marginBottom: '15px',
            fontFamily: 'Outfit, sans-serif',
            letterSpacing: '-1px'
          }}>
            Contact Me
          </h2>
          <div style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #60a5fa, #c084fc)', margin: '0 auto 20px', borderRadius: '4px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
          </p>
        </motion.div>

        {/* Contact Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          
          {/* Left Panel: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: '#151e32',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #1e293b',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={onSubmit}>
              
              {/* Web3Forms required configurations */}
              <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />
              <input type="hidden" name="from_name" value="Portfolio Notifications" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 'bold' }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  placeholder="Your name"
                  style={{
                    background: '#0f172a',
                    border: '1px solid #334155',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#334155'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 'bold' }}>Email</label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  style={{
                    background: '#0f172a',
                    border: '1px solid #334155',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#334155'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 'bold' }}>Message</label>
                <textarea 
                  name="message"
                  id="message"
                  required
                  rows="5"
                  placeholder="Your message..."
                  style={{
                    background: '#0f172a',
                    border: '1px solid #334155',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                  onBlur={(e) => e.target.style.borderColor = '#334155'}
                ></textarea>
              </div>

              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  marginTop: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
              >
                Send Message
              </button>
              
              {/* Form submission result message */}
              <span style={{ color: result.includes("Success") ? '#4ade80' : '#f8fafc', textAlign: 'center', fontSize: '0.9rem', marginTop: '5px' }}>
                {result}
              </span>
            </form>
          </motion.div>

          {/* Right Panel: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: '#151e32',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #1e293b',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', fontWeight: 'bold', marginBottom: '30px', fontFamily: 'Outfit, sans-serif' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
              
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={20} color="#a78bfa" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Email</span>
                  <a href="mailto:surajpati2208@gmail.com" style={{ fontSize: '1rem', color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>
                    surajpati2208@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#f472b6" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Phone</span>
                  <span style={{ fontSize: '1rem', color: '#f8fafc', fontWeight: '500' }}>
                    +91-8109866515
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Linkedin size={20} color="#38bdf8" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/suraj-patidar-355a44284/" target="_blank" rel="noreferrer" style={{ fontSize: '1rem', color: '#f8fafc', textDecoration: 'none', fontWeight: '500', wordBreak: 'break-all' }}>
                    linkedin.com/in/suraj-patidar-355a44284
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Github size={20} color="#818cf8" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>GitHub</span>
                  <a href="https://github.com/SurajPatidar22" target="_blank" rel="noreferrer" style={{ fontSize: '1rem', color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>
                    github.com/SurajPatidar22
                  </a>
                </div>
              </div>

            </div>

            {/* Follow Me */}
            <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
              <span style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: '600', display: 'block', marginBottom: '15px' }}>Follow Me</span>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', textDecoration: 'none', fontWeight: 'bold', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.background = '#475569'; e.target.style.color = 'white' }} onMouseOut={(e) => { e.target.style.background = '#334155'; e.target.style.color = '#cbd5e1' }}>
                  T
                </a>
                <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', textDecoration: 'none', fontWeight: 'bold', transition: 'all 0.2s' }} onMouseOver={(e) => { e.target.style.background = '#475569'; e.target.style.color = 'white' }} onMouseOut={(e) => { e.target.style.background = '#334155'; e.target.style.color = '#cbd5e1' }}>
                  I
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
