import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  ExternalLink,
  Code2,
  Brain,
  Database,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-accent selection:text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar({ scrolled }) {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Barath<span className="text-accent">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

      <div className="animate-trans-up opacity-0" style={{ animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">Barath S.V</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Aspiring <span className="text-white font-medium">Machine Learning Engineer</span> building intelligent, real-time AI systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
          >
            View Projects
          </a>
          <a
            href="/Barath_CV.pdf"
            className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 animate-bounce text-gray-500 hover:text-white transition-colors">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-gray-300 leading-relaxed font-light space-y-6">
          <p>
            I am a <strong className="text-white font-medium">Computer Science (AI)</strong> undergraduate at Sathyabama University with a strong passion for solving complex problems through data.
          </p>
          <p>
            My journey bridges the gap between software engineering and artificial intelligence. I specialize in building <span className="text-accent">real-time vision systems</span> and scalable machine learning models that deliver actionable insights.
          </p>
          <p>
            When I'm not training models, you can find me optimizing algorithms, exploring new AI research, or mentoring students in coding fundamentals.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
          <div className="relative bg-card border border-white/10 p-8 rounded-2xl overflow-hidden glass">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Enthusiast</h3>
                  <p className="text-sm text-gray-400">Deep Learning & Computer Vision</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Full Stack Dev</h3>
                  <p className="text-sm text-gray-400">React, Python, Java</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Data Analyst</h3>
                  <p className="text-sm text-gray-400">Pandas, NumPy, SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal size={20} />,
      skills: ["Python", "Java", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Machine Learning",
      icon: <Brain size={20} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "YOLO"]
    },
    {
      title: "Web Development",
      icon: <Layers size={20} />,
      skills: ["React", "Node.js", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu size={20} />,
      skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code"]
    },
  ];

  return (
    <Section id="skills" title="Technical Arsenal" className="bg-gray-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-card/50 border border-white/5 p-6 rounded-xl hover:bg-card transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4 text-accent">
              {cat.icon}
              <h3 className="font-semibold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/5">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Auto-Aiming Turret System",
      desc: "Real-time object detection and tracking system using computer vision. Capable of locking onto targets with high precision using servo motors.",
      tags: ["Python", "OpenCV", "Arduino", "YOLO"],
      link: "#"
    },
    {
      title: "AI Bank Fraud Detection",
      desc: "Machine learning model trained on transaction data to detect anomalous patterns and potential fraud in real-time.",
      tags: ["Scikit-learn", "Pandas", "Random Forest", "API"],
      link: "#"
    }
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                <ExternalLink size={20} className="text-gray-500 group-hover:text-white" />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="glass p-8 rounded-2xl border border-white/10 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">B.E. Computer Science Engineering (AI)</h3>
            <p className="text-accent mt-1">Sathyabama University</p>
          </div>
          <span className="px-4 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10">
            2023 – 2027
          </span>
        </div>
        <div className="mt-6 pt-6 border-t border-white/5">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              National Gold Medalist in Gymnastics
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              Consistent academic top performer (CGPA: 9.3/10)
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Get In Touch" className="text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-400 mb-8 text-lg">
          Currently looking for internships and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a
          href="mailto:svbarath2005@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg shadow-accent/25"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Barathbbbc" className="hover:text-white transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/barath-s-v-34aa9628b" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:svbarath2005@gmail.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
      </div>
      <p>Designed & Built by Barath S.V</p>
    </footer>
  );
}

function Section({ title, children, id, className = "" }) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <div className="h-px bg-white/20 flex-grow max-w-xs"></div>
        </div>
        {children}
      </div>
    </section>
  );
}
