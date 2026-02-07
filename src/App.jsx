import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FaReact, FaAws, FaPython, FaDocker, FaNodeJs, FaAngular,
  FaHospital, FaShoppingCart, FaTruck, FaMobile, FaCloud, FaRobot,
  FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe,
  FaCode, FaRocket, FaCog, FaChartLine, FaShieldAlt, FaUsers
} from 'react-icons/fa'
import { SiMongodb, SiKubernetes, SiTensorflow, SiMysql, SiPostgresql } from 'react-icons/si'
import './App.css'
import saagaLogo from './assets/saaga-logo.png'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const services = [
    {
      icon: <FaHospital />,
      title: "Healthcare Technology",
      items: [
        "EHR & Hospital Management Systems",
        "Telemedicine & Remote Monitoring",
        "Pharmacy & Lab Management",
        "Healthcare Analytics & AI Diagnostics",
        "NABH & HIPAA-Compliant Solutions"
      ]
    },
    {
      icon: <FaShoppingCart />,
      title: "Retail & E-Commerce",
      items: [
        "Omnichannel POS & Inventory",
        "Custom E-Commerce Platforms",
        "Customer Loyalty Systems",
        "Real-Time Analytics & Forecasting",
        "Mobile-Enabled Experiences"
      ]
    },
    {
      icon: <FaTruck />,
      title: "Supply Chain & Logistics",
      items: [
        "Warehouse Management Systems",
        "Fleet & Delivery Tracking",
        "IoT-Enabled Smart Logistics",
        "Predictive Inventory Planning",
        "ERP Integration"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Web & Mobile Apps",
      items: [
        "Cross-Platform Mobile Apps",
        "Progressive Web Apps (PWA)",
        "Enterprise Web Portals",
        "Real-Time Collaboration Tools",
        "API Development & Integration"
      ]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Transformation",
      items: [
        "Legacy System Modernization",
        "Cloud Migration Strategy",
        "Microservices & Containerization",
        "CI/CD Pipeline Implementation",
        "Cloud Cost Optimization"
      ]
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      items: [
        "Chatbots & Virtual Assistants",
        "Computer Vision & Image Processing",
        "Predictive Maintenance",
        "Natural Language Processing",
        "Custom AI Model Development"
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: <FaUsers />,
      title: "Deep Domain Expertise",
      description: "We don't just code — we understand your industry with real-world operational insights."
    },
    {
      icon: <FaCloud />,
      title: "Modern & Cloud-Native",
      description: "Solutions designed for scalability, resilience, and performance on leading cloud platforms."
    },
    {
      icon: <FaRobot />,
      title: "AI-Forward Approach",
      description: "Integrating AI and machine learning to make your systems smarter and more adaptive."
    },
    {
      icon: <FaChartLine />,
      title: "Cost-Effective & Transparent",
      description: "Flexible engagement models tailored to your budget and timeline with no hidden costs."
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance First",
      description: "Enterprise-grade security with HIPAA, GDPR, and industry-specific compliance."
    },
    {
      icon: <FaCheckCircle />,
      title: "End-to-End Ownership",
      description: "Partnership from ideation to deployment with continuous support and scaling."
    }
  ]

  const technologies = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" }
  ]

  const approach = [
    { step: "01", title: "Discover & Strategize", description: "Deep dive into your business goals, challenges, and user needs to define the roadmap.", icon: <FaCode /> },
    { step: "02", title: "Design & Prototype", description: "Create intuitive designs and functional prototypes for early validation.", icon: <FaCog /> },
    { step: "03", title: "Develop & Iterate", description: "Build in transparent sprints with regular demos and feedback loops.", icon: <FaRocket /> },
    { step: "04", title: "Deploy & Scale", description: "Seamless deployment with monitoring, security, and performance optimization.", icon: <FaCloud /> },
    { step: "05", title: "Support & Evolve", description: "Ongoing maintenance, updates, and scaling as your business grows.", icon: <FaChartLine /> }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="nav-content">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.05 }}
            >
              <img src={saagaLogo} alt="Saaga Infotech" />
            </motion.div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#technologies">Technologies</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="hero"
        style={{ opacity, scale }}
      >
        <div className="hero-background">
          <div className="floating-shapes">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="shape"
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital Innovation Partners
            <br />
            <span className="gradient-text">for the Modern Enterprise</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming complex challenges into elegant, future-ready solutions
            <br />
            with over a decade of innovation excellence
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat">
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>30</h3>
              <p>Talented Innovators</p>
            </div>
            <div className="stat">
              <h3>4</h3>
              <p>Countries Served</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Saaga Infotech</h2>
            <div className="about-grid">
              <div className="about-content">
                <p className="lead">
                  Founded in 2012 and headquartered in Chennai, Saaga Infotech is a forward-thinking
                  technology solutions provider with a legacy of innovation and excellence.
                </p>
                <p>
                  What began as a specialized software development company has evolved into a trusted
                  partner for businesses seeking modern, scalable, and intelligent digital solutions.
                  With over a decade of experience, we've built a reputation for delivering end-to-end
                  technology services across healthcare, retail, logistics, insurance, and emerging domains.
                </p>
                <p>
                  Our dynamic team of 30 talented innovators — including full-stack engineers, cloud architects,
                  AI specialists, and domain experts — brings together diverse expertise and creative problem-solving.
                  United by a passion for cutting-edge technology, our engineers thrive on transforming complex
                  challenges into elegant, future-ready solutions. We believe in the power of technology as
                  an enabler — not just to automate, but to innovate, elevate, and accelerate business growth.
                </p>
              </div>
              <div className="vision-mission">
                <motion.div
                  className="vm-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>Our Vision</h3>
                  <p>
                    To be a leading global technology partner, recognized for building intelligent,
                    cloud-native solutions that drive real-world impact and sustainable growth.
                  </p>
                </motion.div>
                <motion.div
                  className="vm-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3>Our Mission</h3>
                  <p>
                    To empower businesses of all sizes with custom-built, scalable, and secure software
                    solutions that leverage the latest in cloud, AI, and modern development practices —
                    delivered with agility, transparency, and exceptional support.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Saaga Infotech?
          </motion.h2>
          <motion.div
            className="why-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="why-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Service Offerings
          </motion.h2>
          <motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="technologies">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Technology Stack
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Leveraging the latest, most robust technologies to build your future
          </motion.p>
          <motion.div
            className="tech-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="tech-details">
            <div className="tech-category">
              <h4>Frontend</h4>
              <p>React.js, Angular, Vue.js, Next.js, Flutter, React Native</p>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <p>Node.js, Python (Django/FastAPI), Java (Spring Boot), .NET Core, Go</p>
            </div>
            <div className="tech-category">
              <h4>Cloud Platforms</h4>
              <p>AWS, Microsoft Azure, Google Cloud Platform</p>
            </div>
            <div className="tech-category">
              <h4>Databases</h4>
              <p>PostgreSQL, MySQL, MongoDB, Cassandra, Firebase, DynamoDB</p>
            </div>
            <div className="tech-category">
              <h4>AI/ML</h4>
              <p>TensorFlow, PyTorch, OpenAI APIs, LangChain, Computer Vision Libraries</p>
            </div>
            <div className="tech-category">
              <h4>DevOps & Tools</h4>
              <p>Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, Ansible, Prometheus, Grafana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="approach">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Approach to Delivery
          </motion.h2>
          <div className="approach-timeline">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                className="approach-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="approach-number">{item.step}</div>
                <div className="approach-content">
                  <div className="approach-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="global">
        <div className="container">
          <motion.div
            className="global-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaGlobe className="globe-icon" />
            <h2>Our Global Footprint</h2>
            <p>
              With successful projects and satisfied clients across <strong>India, Singapore, Laos, and Myanmar</strong>,
              we bring a global perspective with local execution excellence.
            </p>
            <p>
              Our solutions are built to work across borders, currencies, languages, and regulatory environments —
              ensuring you're ready for growth in any market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Whether you're a startup with a bold idea or an enterprise looking to modernize —
            we're here to help you navigate the digital landscape with confidence.
          </motion.p>
          <motion.div
            className="contact-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="contact-card" variants={itemVariants}>
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <a href="mailto:solutions@saagainfotech.com">solutions@saagainfotech.com</a>
            </motion.div>
            <motion.div className="contact-card" variants={itemVariants}>
              <FaPhone className="contact-icon" />
              <h3>Phone</h3>
              <a href="tel:+918754555385">+91 8754555385</a>
            </motion.div>
            <motion.div className="contact-card" variants={itemVariants}>
              <FaGlobe className="contact-icon" />
              <h3>Website</h3>
              <a href="https://www.saagainfotech.com" target="_blank" rel="noopener noreferrer">www.saagainfotech.com</a>
            </motion.div>
            <motion.div className="contact-card full-width" variants={itemVariants}>
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Address</h3>
              <p>
                Baskaran Enclave 2nd Floor, No. 56, Chandrasekaran Avenue,<br />
                2nd Street, Okkiyam Thoraipakkam, Chennai 600096,<br />
                Tamil Nadu, India
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Saaga Infotech</h3>
              <p>Digital Innovation Partners for the Modern Enterprise</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#technologies">Technologies</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>solutions@saagainfotech.com</p>
              <p>+91 8754555385</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Saaga Infotech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
