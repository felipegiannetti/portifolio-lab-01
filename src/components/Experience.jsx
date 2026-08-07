import React from 'react';
import { FaBriefcase, FaCode, FaUsers, FaTrophy, FaJava, FaDatabase, FaChartBar } from 'react-icons/fa';
import {
  SiJavascript, SiPython, SiReact,
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiSpringboot, SiGithub,
  SiTypescript, SiPostgresql, SiMysql, SiDocker,
} from 'react-icons/si';

const Experience = ({ language = 'pt' }) => {
  const experiencesEN = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Anglo American',
      role: 'Global Cybersecurity Operations',
      period: 'Dec 2025 – Present',
      type: 'SOC',
      description:
        'Member of Anglo American\'s Global Cybersecurity team, working within the Security Operations Center (SOC) with a focus on Operational Technology (OT) environments.',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaCode />,
      company: 'FG Consultoria',
      role: 'Full Stack Software Engineer I',
      period: 'Sep 2025 – Present',
      type: 'Contract',
      description:
        'Leads the end-to-end development of an AI-powered financial and strategic consulting platform, owning software architecture, backend and frontend implementation, testing, cloud deployment, and continuous evolution. Built intelligent workflows for restructuring, valuation, investment risk, and cost-of-capital analysis; integrated more than 10 external APIs for data aggregation and automated reporting; and leads the architecture, development, deployment, and maintenance of the company website. Works directly with clients and stakeholders to turn business requirements into scalable software and automation solutions.',
      color: 'bg-green-500',
    },
    {
      id: 3,
      icon: <FaUsers />,
      company: 'PUC Minas',
      role: 'Teaching Assistant – Web Interface Development',
      period: 'Aug 2025 – Dec 2025',
      type: 'Temporary',
      description:
        'Mentored more than 20 students in Java, Spring Boot, HTML, CSS, JavaScript, responsive web development, and software engineering fundamentals through practical projects and laboratory sessions. Reviewed code, supported debugging, advised on application structure and interface implementation, and provided individual feedback to improve code quality, usability, and problem-solving skills.',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      icon: <FaTrophy />,
      company: 'Clube Chalezinho',
      role: 'Team Manager',
      period: 'Oct 2023 – Jun 2026',
      type: 'Hybrid',
      description:
        'Led a 15-member team recognised as the top-performing team for nine consecutive months through effective task distribution, performance management, and process optimisation. Developed operational dashboards and reports to improve workload visibility and decision-making, managed daily operations, and fostered a collaborative, results-driven culture. Also planned and executed events, led client communication and negotiations, supported sales initiatives, and coordinated cross-functional delivery.',
      color: 'bg-yellow-500',
    },
  ];

  const experiencesPT = [
    {
      id: 1,
      icon: <FaBriefcase />,
      company: 'Anglo American',
      role: 'Global Cybersecurity Operations',
      period: 'Dez 2025 – Presente',
      type: 'SOC',
      description:
        'Integrante do time global de Cybersecurity da Anglo American, atuando no Centro de Operações de Segurança (SOC) com foco em ambientes de Tecnologia Operacional (OT).',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      icon: <FaCode />,
      company: 'FG Consultoria',
      role: 'Engenheiro de Software Full Stack Júnior',
      period: 'Set 2025 – Presente',
      type: 'Contrato',
      description:
        'Lidera o desenvolvimento completo de uma plataforma de consultoria financeira e estratégica baseada em IA, sendo responsável pela arquitetura, backend, frontend, testes, implantação em nuvem e evolução contínua. Desenvolveu fluxos inteligentes para reestruturação, valuation, análise de riscos e custo de capital; integrou mais de 10 APIs externas para agregação de dados e geração automática de relatórios; e lidera a arquitetura, o desenvolvimento, a implantação e a manutenção do site corporativo. Atua diretamente com clientes e stakeholders para transformar requisitos de negócio em soluções escaláveis de software e automação.',
      color: 'bg-green-500',
    },
    {
      id: 3,
      icon: <FaUsers />,
      company: 'PUC Minas',
      role: 'Monitor – Desenvolvimento de Interfaces Web',
      period: 'Ago 2025 – Dez 2025',
      type: 'Temporário',
      description:
        'Orientou mais de 20 estudantes em Java, Spring Boot, HTML, CSS, JavaScript, desenvolvimento web responsivo e fundamentos de Engenharia de Software por meio de projetos práticos e atividades em laboratório. Realizou revisões de código, apoiou depuração, orientou sobre arquitetura de aplicações e implementação de interfaces e ofereceu feedback individualizado para melhorar a qualidade do código, a usabilidade e a resolução de problemas.',
      color: 'bg-purple-500',
    },
    {
      id: 4,
      icon: <FaTrophy />,
      company: 'Clube Chalezinho',
      role: 'Gerente de Equipe',
      period: 'Out 2023 – Jun 2026',
      type: 'Híbrido',
      description:
        'Liderou uma equipe de 15 colaboradores reconhecida como a de melhor desempenho por nove meses consecutivos, com distribuição eficiente de tarefas, gestão de desempenho e otimização de processos. Desenvolveu dashboards e relatórios operacionais para ampliar a visibilidade da carga de trabalho e apoiar decisões, gerenciou as operações diárias e promoveu uma cultura colaborativa e orientada a resultados. Também planejou e executou eventos, conduziu a comunicação e as negociações com clientes, apoiou iniciativas comerciais e coordenou entregas entre diferentes áreas.',
      color: 'bg-yellow-500',
    },
  ];

  const experiences = language === 'en' ? experiencesEN : experiencesPT;

  return (
    <section id="experience" className="min-h-screen bg-primary-dark py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-white">{language === 'en' ? 'Experience' : 'Experiências'}</h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-16 text-lg">
          {language === 'en' ? 'My professional journey and project participation' : 'Minha trajetória profissional e participações em projetos'}
        </p>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-primary-blue rounded-lg p-6 shadow-xl border-2 border-transparent hover:border-accent-green transition-all duration-300 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start mb-4">
                <div className={`${exp.color} p-4 rounded-lg text-white text-3xl mr-4`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="bg-accent-green text-primary-dark px-3 py-1 rounded-full text-sm font-bold">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-accent-green font-semibold text-lg mt-1">{exp.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-4 text-white">
            {language === 'en' ? 'Main Skills' : 'Principais Habilidades'}
          </h3>
          <div className="w-16 h-1 bg-accent-green mx-auto mb-12"></div>

          {/* Programming Languages */}
          <h4 className="text-lg font-bold text-accent-green uppercase tracking-widest text-center mb-6">
            {language === 'en' ? 'Programming Languages & Frameworks' : 'Linguagens & Frameworks'}
          </h4>
          {(() => {
            const levels = {
              pt: { avancado: 'Avançado', intermediario: 'Intermediário', iniciante: 'Iniciante' },
              en: { avancado: 'Advanced', intermediario: 'Intermediate', iniciante: 'Beginner' },
            };
            const l = levels[language];
            const langs = [
              { icon: <FaJava size={40} />, color: '#F89820', name: 'Java', level: l.avancado, pct: 100 },
              { icon: <SiSpringboot size={40} />, color: '#6DB33F', name: 'Spring Boot', level: l.avancado, pct: 100 },
              { icon: <SiPython size={40} />, color: '#3776AB', name: 'Python', level: l.avancado, pct: 100 },
              { icon: <SiJavascript size={40} />, color: '#F7DF1E', name: 'JavaScript', level: l.avancado, pct: 100 },
              { icon: <SiTypescript size={40} />, color: '#3178C6', name: 'TypeScript', level: l.avancado, pct: 100 },
              { icon: <SiReact size={40} />, color: '#61DAFB', name: 'React', level: l.avancado, pct: 100 },
              { icon: <SiHtml5 size={40} />, color: '#E34F26', name: 'HTML5', level: l.avancado, pct: 100 },
              { icon: <SiCss3 size={40} />, color: '#1572B6', name: 'CSS3', level: l.avancado, pct: 100 },
              { icon: <SiBootstrap size={40} />, color: '#7952B3', name: 'Bootstrap', level: l.avancado, pct: 100 },
              { icon: <SiTailwindcss size={40} />, color: '#06B6D4', name: 'Tailwind CSS', level: l.avancado, pct: 100 },
              { icon: <SiGithub size={40} />, color: '#FFFFFF', name: 'Git / GitHub', level: l.avancado, pct: 100 },
              { icon: <FaDatabase size={40} />, color: '#00E5FF', name: 'SQL', level: l.intermediario, pct: 70 },
              { icon: <SiPostgresql size={40} />, color: '#4169E1', name: 'PostgreSQL', level: l.intermediario, pct: 70 },
              { icon: <SiMysql size={40} />, color: '#4479A1', name: 'MySQL', level: l.intermediario, pct: 70 },
              { icon: <SiDocker size={40} />, color: '#2496ED', name: 'Docker', level: l.intermediario, pct: 70 },
              { icon: <FaChartBar size={40} />, color: '#F2C811', name: 'Power BI', level: l.intermediario, pct: 70 },
              { icon: <span className="font-black text-4xl leading-none" style={{ color: '#A8B9CC' }}>C</span>, color: '#A8B9CC', name: 'C', level: l.intermediario, pct: 60 },
            ];
            return (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-14">
                {langs.map((lang, i) => (
                  <div
                    key={i}
                    className="bg-primary-blue border border-gray-700 hover:border-accent-green transition-all duration-300 rounded-xl p-4 flex flex-col items-center gap-2"
                  >
                    <span style={{ color: lang.color }}>{lang.icon}</span>
                    <span className="text-white font-bold text-sm text-center">{lang.name}</span>
                    <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${lang.pct}%`, background: 'linear-gradient(to right, #00e5ff, #0b6fff)' }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Other Skills */}
          <h4 className="text-lg font-bold text-accent-green uppercase tracking-widest text-center mb-6">
            {language === 'en' ? 'Other Skills' : 'Outras Habilidades'}
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Software Architecture',
              'Backend Development',
              'Full-Stack Development',
              'REST APIs & API Integration',
              'AI Integration',
              'Prompt Engineering',
              'Cloud Deployment',
              'Data Processing & Analysis',
              'Business Intelligence',
              'Cybersecurity',
              'SOC / OT Security',
              'SIEM',
              'Threat Detection & Response',
              'Vulnerability Assessment',
              'Active Directory',
              'Claroty',
              'CrowdStrike',
              'Qualys',
              'Microsoft Sentinel',
              'Google SecOps',
              'Networking',
              'Cryptography',
              'UI/UX',
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary-blue to-primary-dark text-white px-6 py-3 rounded-full text-lg font-semibold border-2 border-accent-green hover:bg-accent-green hover:text-primary-dark transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
