import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Database, 
  Briefcase, 
  ArrowRight, 
  Download, 
  Calendar, 
  CheckCircle, 
  Globe, 
  Menu, 
  X,
  Linkedin,
  Building,
  UserPlus,
  ShieldCheck,
  Clock,
  MessageSquare,
  Zap,
  Code,
  Server,
  Cloud,
  Cpu,
  Layers,
  Calculator,
  FileText
} from 'lucide-react';

const VANTIS_COLORS = {
  green: '#45B930',
  blue: '#04AcD9',
  black: '#000000',
  darkGray: '#1a1a1a',
  lightGray: '#f5f5f5'
};

// --- Helper Components ---

const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: `bg-[#04AcD9] text-white hover:bg-[#0396bd] focus:ring-[#04AcD9] shadow-lg shadow-blue-500/30`,
    secondary: `bg-[#45B930] text-white hover:bg-[#3ca029] focus:ring-[#45B930] shadow-lg shadow-green-500/30`,
    outline: `bg-transparent border-2 border-[#04AcD9] text-[#04AcD9] hover:bg-[#04AcD9] hover:text-white`,
    dark: `bg-black text-white hover:bg-gray-800`,
    white: `bg-white text-[#04AcD9] hover:bg-gray-50`
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-gray-900'} tracking-tight`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-6 h-1.5 w-24 bg-[#45B930] ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
  </div>
);

// --- New Feature Components ---

const TechTicker = () => {
  const techs = [
    { name: "React", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Layers },
    { name: "AWS", icon: Cloud },
    { name: "TypeScript", icon: Code },
    { name: "Azure", icon: Cloud },
    { name: "PostgreSQL", icon: Database },
    { name: "Flutter", icon: Zap },
    { name: "Kubernetes", icon: Cpu },
    { name: "Go", icon: Zap },
  ];

  return (
    <div className="bg-gray-900 py-6 overflow-hidden border-y border-gray-800 relative z-20">
      <div className="flex items-center animate-scroll whitespace-nowrap">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center mx-8 text-gray-400 font-mono font-medium">
            <tech.icon className="w-5 h-5 mr-2 text-[#45B930]" />
            <span className="text-lg">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyNigeria = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Real-Time Alignment",
      subtitle: "GMT+1 Timezone",
      desc: "No midnight calls. Lagos shares working hours with London, Berlin, and Paris. We collaborate in real-time, not async."
    },
    {
      icon: MessageSquare,
      title: "Native English",
      subtitle: "Zero Language Barrier",
      desc: "English is the official language of business and education in Nigeria. Communication is seamless and nuanced."
    },
    {
      icon: Zap,
      title: "The Silicon Lagoon",
      subtitle: "Elite Ecosystem",
      desc: "Major US giants like Microsoft, Google, and Goldman Sachs have been hiring here for years. We recruit from this same battle-tested talent pool."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Nigeria?" 
          subtitle="The world's most undervalued tech ecosystem, perfectly aligned with the UK."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#45B930] transition-colors duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#45B930] mb-6 group-hover:bg-[#45B930] group-hover:text-white transition-colors">
                <b.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-[#04AcD9] font-semibold text-sm mb-4 uppercase tracking-wide">{b.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Updated CostCalculator to accept onOpenModal prop
const CostCalculator = ({ onOpenModal }) => {
  const [roleCount, setRoleCount] = useState(1);
  
  // UK Costs (Based on Deck)
  const ukBase = 85000;
  const ukNI = 11730; // 13.8%
  const ukPension = 4250; // ~5%
  const ukAgency = 12750; // ~15%
  const ukTotalPerHead = ukBase + ukNI + ukPension + ukAgency;

  // Vantis Costs (Based on Deck)
  const vantisTotalPerHead = 45000; // Flat all-inclusive

  const totalSavings = (ukTotalPerHead - vantisTotalPerHead) * roleCount;

  return (
    <div className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left: Interactive Inputs */}
          <div className="md:w-1/2 p-10 bg-white">
            <div className="flex items-center mb-6">
              <Calculator className="w-8 h-8 text-[#04AcD9] mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">The Efficiency Paradox</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Compare the Total Cost of Employment (TCE) for a Senior Developer in the UK vs. a Senior Vantis Squad Lead.
            </p>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Hires</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                value={roleCount} 
                onChange={(e) => setRoleCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#45B930]"
              />
              <div className="mt-2 text-center font-bold text-xl text-[#04AcD9]">{roleCount} {roleCount === 1 ? 'Engineer' : 'Engineers'}</div>
            </div>

            <div className="space-y-4">
               {/* UK Breakdown */}
               <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                 <div className="flex justify-between items-center mb-2">
                   <span className="font-bold text-gray-800">UK Senior Hire</span>
                   <span className="font-bold text-red-600">£{(ukTotalPerHead * roleCount).toLocaleString()}</span>
                 </div>
                 <div className="text-xs text-gray-500 space-y-1">
                   <div className="flex justify-between"><span>Base Salary</span><span>£{(ukBase * roleCount).toLocaleString()}</span></div>
                   <div className="flex justify-between"><span>Employer NI (13.8%)</span><span>£{(ukNI * roleCount).toLocaleString()}</span></div>
                   <div className="flex justify-between"><span>Pension (5%)</span><span>£{(ukPension * roleCount).toLocaleString()}</span></div>
                   <div className="flex justify-between"><span>Agency Fee (15%)</span><span>£{(ukAgency * roleCount).toLocaleString()}</span></div>
                 </div>
               </div>

               {/* Vantis Breakdown */}
               <div className="p-4 bg-green-50 rounded-lg border border-[#45B930]">
                 <div className="flex justify-between items-center mb-2">
                   <span className="font-bold text-gray-800">Vantis Lead</span>
                   <span className="font-bold text-[#45B930]">£{(vantisTotalPerHead * roleCount).toLocaleString()}</span>
                 </div>
                 <div className="text-xs text-gray-500">
                   <div className="flex justify-between font-medium"><span>All-Inclusive Rate</span><span>£{(vantisTotalPerHead * roleCount).toLocaleString()}</span></div>
                   <div className="flex justify-between mt-1 text-[#45B930]"><span>Recruitment Fee</span><span>£0</span></div>
                   <div className="flex justify-between text-[#45B930]"><span>Payroll/HR Costs</span><span>£0</span></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right: The Result */}
          <div className="md:w-1/2 bg-gray-900 p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#45B930] opacity-10 rounded-full blur-3xl -mr-10 -mt-10"></div>
             
             <h4 className="text-gray-400 text-sm uppercase tracking-widest font-semibold mb-4 relative z-10">Total Annual Savings</h4>
             <div className="text-6xl md:text-7xl font-extrabold text-white mb-6 relative z-10">
               £{totalSavings.toLocaleString()}
             </div>
             <p className="text-gray-300 max-w-sm relative z-10 text-lg">
               That's enough budget to hire <span className="text-[#45B930] font-bold">{Math.floor(totalSavings / vantisTotalPerHead)} more</span> Vantis engineers.
             </p>
             <div className="mt-8 relative z-10">
               <button 
                 onClick={() => onOpenModal('engineering')}
                 className="px-8 py-3 bg-[#45B930] text-white font-bold rounded-md hover:bg-[#3ba328] transition-colors shadow-lg shadow-green-900/50"
               >
                 View Full Cost Breakdown
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfrastructureSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Zero-Friction Hiring" 
          subtitle="You focus on the code. We handle the compliance, payroll, and HR headaches."
        />
        
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-[#04AcD9] mb-6 border-4 border-white shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. You Select</h3>
              <p className="text-gray-600">
                You interview our pre-vetted senior talent. You make the final hiring decision. They integrate directly into your team (Slack, Jira, GitHub).
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center text-[#45B930] mb-6 border-4 border-white shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. We Employ</h3>
              <p className="text-gray-600">
                We act as the Employer of Record (EOR). We handle local contracts, Nigerian labor law compliance, and liability. No "Deemed Employment" risk for you.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-gray-700 mb-6 border-4 border-white shadow-lg">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. One Invoice</h3>
              <p className="text-gray-600">
                We handle payroll, taxes, pensions, and even deliver MacBooks to staff in Lagos. You receive one simple monthly invoice. Zero HR admin.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['Payroll Handled', 'Taxes Remitted', 'MacBooks Provided', 'Benefits Included', 'No HR Admin'].map((item, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-[#45B930]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SquadVisual = () => (
  <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
    <div className="text-center mb-4">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">The Vantis Squad Model</span>
    </div>
    <div className="flex flex-col items-center">
      {/* Senior Lead */}
      <div className="bg-[#04AcD9] text-white px-4 py-2 rounded-lg shadow-md mb-4 w-40 text-center text-sm font-bold relative">
        Senior Lead
        <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-gray-300 -mb-4 transform -translate-x-1/2"></div>
      </div>
      
      {/* Connector */}
      <div className="w-32 h-0.5 bg-gray-300 mb-4"></div>
      
      {/* Middle Layer */}
      <div className="flex space-x-4 mb-4">
        <div className="relative">
             <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-gray-300 -mt-2 transform -translate-x-1/2"></div>
             <div className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg shadow-sm text-xs font-semibold w-24 text-center">Mid Dev</div>
        </div>
        <div className="relative">
             <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-gray-300 -mt-2 transform -translate-x-1/2"></div>
             <div className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg shadow-sm text-xs font-semibold w-24 text-center">Mid Dev</div>
        </div>
      </div>

       {/* QA */}
       <div className="relative">
          <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-gray-300 -mt-4 transform -translate-x-1/2"></div>
          <div className="bg-gray-800 text-white px-3 py-1.5 rounded-lg shadow-sm text-xs font-semibold w-20 text-center">QA / Test</div>
       </div>
    </div>
  </div>
);

const TrustBadge = () => (
  <div className="mt-8 bg-[#ecfdf5] border border-[#45B930] rounded-xl p-4 flex items-start">
    <ShieldCheck className="w-8 h-8 text-[#45B930] flex-shrink-0 mr-3" />
    <div>
      <h4 className="font-bold text-gray-900 text-sm">Ironclad Non-Compete Guarantee</h4>
      <p className="text-xs text-gray-600 mt-1">
        We are infrastructure, not an agency. We sign a legal guarantee that we will never solicit your clients. Your relationships remain 100% yours.
      </p>
    </div>
  </div>
);

// --- Existing Components (Updated) ---

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`text-3xl font-extrabold tracking-tight ${isScrolled ? 'text-black' : 'text-black'}`}>
            VANTIS<span className="text-[#45B930]">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('solutions')} className="text-gray-600 hover:text-[#04AcD9] font-medium">Solutions</button>
          <button onClick={() => scrollToSection('why-nigeria')} className="text-gray-600 hover:text-[#04AcD9] font-medium">Why Nigeria</button>
          <button onClick={() => scrollToSection('team')} className="text-gray-600 hover:text-[#04AcD9] font-medium">Leadership</button>
          <Button variant="primary" onClick={() => onOpenModal('booking')} icon={Calendar}>
            Book Consultation
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 p-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection('solutions')} className="text-left text-gray-800 font-medium py-2">Solutions</button>
           <button onClick={() => scrollToSection('why-nigeria')} className="text-left text-gray-800 font-medium py-2">Why Nigeria</button>
          <button onClick={() => scrollToSection('team')} className="text-left text-gray-800 font-medium py-2">Leadership</button>
          <Button variant="primary" onClick={() => { setIsMobileMenuOpen(false); onOpenModal('booking'); }} className="w-full">
            Book Consultation
          </Button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onNavigate }) => {
  return (
    <div className="relative bg-white pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[500px] h-[500px] rounded-full bg-[#04AcD9] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[500px] h-[500px] rounded-full bg-[#45B930] opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#45B930] mr-2 animate-pulse"></span>
            Soft Launch 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-black tracking-tight mb-8 leading-tight">
            The UK's Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04AcD9] to-[#45B930]">Elite African Talent</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between Nigeria's elite tech talent and the UK market. 
            Scaling engineering capacity for enterprises. Monetising unfillable roles for recruiters.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" onClick={() => onNavigate('solutions')} icon={ArrowRight}>
              Explore Solutions
            </Button>
            <Button variant="outline" onClick={() => onNavigate('team')}>
              Meet the Leadership
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ title, icon: Icon, description, features, buttonText, onDownload, color, extraContent }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-2">
    <div className={`absolute top-0 left-0 w-2 h-full ${color === 'blue' ? 'bg-[#04AcD9]' : 'bg-[#45B930]'}`}></div>
    
    <div className="mb-6">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color === 'blue' ? 'bg-[#e6f7fa] text-[#04AcD9]' : 'bg-[#ecf9ea] text-[#45B930]'}`}>
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>

    {extraContent && <div className="mb-6">{extraContent}</div>}

    <p className="text-gray-600 mb-8 text-lg">{description}</p>

    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start">
          <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${color === 'blue' ? 'text-[#04AcD9]' : 'text-[#45B930]'}`} />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>

    <Button 
      variant={color === 'blue' ? 'primary' : 'secondary'} 
      onClick={onDownload}
      className="w-full"
      icon={Download}
    >
      {buttonText}
    </Button>
  </div>
);

const Solutions = ({ onOpenModal }) => {
  return (
    <div id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Choose Your Path" 
          subtitle="Vantis offers distinct value propositions for Recruitment Agencies and Direct Employers."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Direct Clients / Engineering Scaling */}
          <SolutionCard 
            title="For Employers: Scale Engineering"
            icon={Building}
            color="blue"
            extraContent={<SquadVisual />}
            description="An infrastructure-first approach to deploying elite Nigerian tech talent into your firm."
            features={[
              "Deploy functional 'Squads' (Lead, Devs, QA).",
              "Employer of Record (EOR) - We handle all compliance.",
              "Save ~£68k per head vs UK Senior Hires.",
              "48h time-to-profile from our warm bench."
            ]}
            buttonText="Download Engineering Deck"
            onDownload={() => onOpenModal('engineering')}
          />

          {/* Recruiters / Partnership */}
          <div className="flex flex-col h-full">
            <SolutionCard 
              title="For Recruiters: Partnership"
              icon={UserPlus}
              color="green"
              description="Stop rejecting job orders. Monetise 'unfillable' roles by partnering with Vantis."
              features={[
                "You keep 100% of the introduction fee.",
                "We handle the employment & compliance.",
                "Perfect for clients with senior needs but junior budgets.",
                "We operate as a utility layer behind you."
              ]}
              buttonText="Download Partnership Deck"
              onDownload={() => onOpenModal('recruiter')}
            />
            {/* Trust Badge inserted specifically for Recruiters */}
            <TrustBadge />
          </div>
        </div>
      </div>
    </div>
  );
};

const DatabaseTeaser = ({ onOpenModal }) => {
  return (
    <div id="database" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block px-3 py-1 bg-[#45B930] text-black text-xs font-bold tracking-wider uppercase rounded mb-4">Coming Soon</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The African Talent Platform
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md">
            We are building the largest verified talent platform in Africa. 
            Access thousands of pre-vetted profiles with a single subscription.
          </p>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center text-gray-300">
              <Database className="w-5 h-5 mr-3 text-[#04AcD9]" />
              <span>Real-time availability status</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 mr-3 text-[#04AcD9]" />
              <span>Standardized technical assessments</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-5 h-5 mr-3 text-[#04AcD9]" />
              <span>Pan-African reach</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="h-3 w-3 rounded-full bg-green-500 mr-auto"></div>
              <span className="text-xs text-gray-500">Vantis ATP Preview</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4 animate-pulse">
                  <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
               <button 
                 onClick={() => onOpenModal('database')}
                 className="text-[#45B930] text-sm font-medium hover:text-white transition-colors"
               >
                 Get notified when we launch &rarr;
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, linkedIn, image }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-2 transition-transform duration-300 group">
    {/* Image Container with fixed dimensions for consistency */}
    <div className="w-32 h-32 mx-auto mb-6 relative">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full rounded-full object-cover shadow-md border-4 border-white"
        onError={(e) => {
            // Fallback to initials if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.classList.remove('hidden');
            e.target.nextSibling.classList.add('flex');
        }}
      />
      {/* Fallback Initials (Hidden by default, shown on error) */}
      <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-[#04AcD9] to-[#45B930] rounded-full items-center justify-center text-white text-3xl font-bold shadow-md border-4 border-white">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-[#04AcD9] font-medium mb-6 uppercase text-sm tracking-wide">{role}</p>
    
    <a 
      href={linkedIn} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-600 rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-200 text-sm font-medium"
    >
      <Linkedin className="w-4 h-4 mr-2" />
      Connect
    </a>
  </div>
);

const Team = () => {
  return (
    <div id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Leadership Team" 
          subtitle="The experts building the bridge between African talent and Global opportunity."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <TeamMember 
            name="Gordon Mitchell" 
            role="Chief Commercial Officer"
            linkedIn="https://www.linkedin.com/in/gordon-mitchell-527953b/"
            image="/Gordon_Mitchell_Vantis.jpg"
          />
          <TeamMember 
            name="William Wilson" 
            role="VP Sales"
            linkedIn="https://www.linkedin.com/in/will-wilson-b5469429/"
            image="/William_Wilson_Vantis.png"
          />
          <TeamMember 
            name="Femi Sowande" 
            role="Head of Partnerships"
            linkedIn="https://www.linkedin.com/in/femi-sowande/"
            image="/Femi_Sowande_Vantis.png"
          />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  // Use simple smooth scroll function for Footer links
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-extrabold tracking-tight text-white mb-6 block">
              VANTIS<span className="text-[#45B930]">.</span>
            </span>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Africa's first true recruitment infrastructure. 
              Scaling engineering capacity for the world.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-[#45B930] transition-colors text-left">
                  Squad Deployment
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('solutions')} className="hover:text-[#45B930] transition-colors text-left">
                  Recruiter Partnership
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('database')} className="hover:text-[#45B930] transition-colors text-left">
                  African Talent Platform (Coming Soon)
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center"><Globe className="w-4 h-4 mr-2" /> Remote First Operations</li>
              <li className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> Lagos | Abuja | London</li>
              <li><a href="mailto:hello@vantis.work" className="text-[#04AcD9] hover:text-white transition-colors">hello@vantis.work</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Vantis. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HubSpot Form Component ---
const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/146286128.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="hs-form-frame" 
      data-region="eu1" 
      data-form-id="e7650c20-8db3-44f2-a774-34214a7fdb4b" 
      data-portal-id="146286128"
    ></div>
  );
};

// --- Modal Component ---

const ResourceModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isBooking = type === 'booking';
  const isDatabase = type === 'database';
  
  // Set default target URL if type is engineering (triggered by button)
  const isEngineering = type === 'engineering';
  
  const title = isBooking ? "Book a Strategy Call" : isDatabase ? "Join the Waitlist" : "Access the PDF Resource";
  const subtitle = isBooking 
    ? "Select a topic so we can prepare for our conversation."
    : isDatabase 
      ? "Get notified when the African Talent Platform launches."
      : "Please select your profile to view the relevant documentation.";

  const handleSelection = (role) => {
    let targetUrl = "";
    
    if (isBooking) {
        targetUrl = "https://meetings-eu1.hubspot.com/william-wilson1";
    } else {
        // Route based on role
        if (role === 'recruiter') {
            targetUrl = "https://eu1.hubs.ly/H0r9HSD0";
        } else {
            // Employer / Engineering
            targetUrl = "https://eu1.hubs.ly/H0r9HT60";
        }
    }
    
    // Open in new tab and close modal
    window.open(targetUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
           {/* If it's the database modal, just show the HubSpot form */}
           {isDatabase ? (
             <HubSpotForm />
           ) : (
             <>
               <p className="text-gray-600 mb-6">{subtitle}</p>

               <div className="space-y-4">
                  {isBooking ? (
                      <Button variant="primary" className="w-full justify-center" onClick={() => handleSelection('general')}>
                        View Calendar Availability
                      </Button>
                  ) : (
                      <>
                        <button 
                            onClick={() => handleSelection('recruiter')}
                            className="w-full p-4 border border-gray-200 rounded-xl hover:border-[#45B930] hover:bg-green-50 transition-all text-left flex items-center group"
                        >
                            <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center mr-4 text-gray-500 group-hover:text-[#45B930] group-hover:border-[#45B930]">
                                <UserPlus size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Recruitment Agency</div>
                                <div className="text-sm text-gray-500">I want to monetise unfillable roles</div>
                            </div>
                            <ArrowRight className="ml-auto text-gray-300 group-hover:text-[#45B930]" size={20} />
                        </button>

                        <button 
                            onClick={() => handleSelection('employer')}
                            className="w-full p-4 border border-gray-200 rounded-xl hover:border-[#04AcD9] hover:bg-blue-50 transition-all text-left flex items-center group"
                        >
                            <div className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center mr-4 text-gray-500 group-hover:text-[#04AcD9] group-hover:border-[#04AcD9]">
                                <Building size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Direct Employer</div>
                                <div className="text-sm text-gray-500">I need to scale engineering capacity</div>
                            </div>
                            <ArrowRight className="ml-auto text-gray-300 group-hover:text-[#04AcD9]" size={20} />
                        </button>
                      </>
                  )}
               </div>
             </>
           )}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App = () => {
  const [modalType, setModalType] = useState(null); 

  const handleOpenModal = (type) => setModalType(type);
  const handleCloseModal = () => setModalType(null);

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#04AcD9] selection:text-white">
      <Navbar onOpenModal={handleOpenModal} />
      
      <main>
        <Hero onNavigate={handleNavigate} />
        <TechTicker />
        <div id="why-nigeria">
           <WhyNigeria />
        </div>
        {/* Passed onOpenModal prop here */}
        <CostCalculator onOpenModal={handleOpenModal} />
        <Solutions onOpenModal={handleOpenModal} />
        <InfrastructureSection />
        <DatabaseTeaser onOpenModal={handleOpenModal} />
        <Team />
      </main>

      <Footer />

      <ResourceModal 
        isOpen={!!modalType} 
        onClose={handleCloseModal} 
        type={modalType} 
      />
    </div>
  );
};

export default App;
