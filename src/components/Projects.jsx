import React from 'react';
import { FaGithub, FaLock } from 'react-icons/fa';

const Projects = ({ language = 'pt' }) => {
  const projectsEN = [
    {
      id: 1,
      name: 'Robot Battle – Arcade Controller',
      description:
        'Award-winning integrated robotics system featuring two robots that interact in real time through a custom-built arcade controller and a smartphone app over Bluetooth. Developed the embedded C++ software, electronic circuits, communication protocols, and control logic used to coordinate movement and the physical balloon-battle mechanic. The project received an Outstanding Work Certificate in the Computer Engineering program at PUC Minas.',
      technologies: ['C++', 'Arduino', 'Bluetooth', 'MIT App Inventor'],
      github: 'https://github.com/felipegiannetti/projeto-interacao-robos-destaque-primeiro-periodo',
      live: null,
      image: '/projects/robo.png',
      date: '2024',
    },
    {
      id: 2,
      name: 'TDR Consultoria',
      description:
        'Interdisciplinary front-end project developed for the Web Interface Development course at PUC Minas. A consultancy website with interactive forms allowing users to submit their requirements, enabling the team to deliver tailored results.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/felipegiannetti/TI-Front-end-PUC',
      live: 'https://plf-es-2025-1-ti1-0385100-tdr-consu.vercel.app/',
      image: 'https://opengraph.githubassets.com/1/felipegiannetti/TI-Front-end-PUC',
      date: '2025',
    },
    {
      id: 3,
      name: 'DTI Drone Delivery System',
      description:
        'Complete drone delivery management system built for an urban logistics startup. Features an intelligent planning algorithm combining knapsack and nearest-neighbour heuristics to optimise routes by priority (HIGH → MEDIUM → LOW). Full RESTful backend with Spring Boot 3 and a modern Next.js 15 dashboard.',
      technologies: ['Java 24', 'Spring Boot 3', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Maven'],
      github: 'https://github.com/felipegiannetti/drone-delivery-system',
      live: null,
      image: '/projects/drone.png',
      date: '2025',
    },
    {
      id: 4,
      name: 'n8n Random Number Connector',
      description:
        'Custom n8n node that wraps the Random.org API to generate truly random integers (not pseudo-random). Includes a Docker Compose environment with n8n and PostgreSQL pre-configured to load the node automatically. Built with TypeScript and published as a local npm package.',
      technologies: ['TypeScript', 'Node.js', 'n8n', 'Docker', 'PostgreSQL', 'Random.org API'],
      github: 'https://github.com/felipegiannetti/n8n-random-number',
      live: null,
      image: '/projects/n8n.png',
      date: '2025',
    },
    {
      id: 5,
      name: 'AI-Powered Financial & Strategic Consulting Platform',
      description:
        'End-to-end enterprise platform that automates financial and strategic consulting workflows. The solution supports corporate restructuring, business valuation, investment risk analysis, and cost-of-capital calculations, integrating more than 10 external APIs for data aggregation and automated reporting. AI-powered capabilities generate contextual recommendations and adapt analyses to each project, while a scalable full-stack architecture supports testing, cloud deployment, and continuous product evolution.',
      technologies: ['Java', 'Spring Boot', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'AI Integration', 'Docker', 'Cloud'],
      github: null,
      live: null,
      image: null,
      date: '2025–2026',
      internal: true,
      featured: true,
    },
    {
      id: 6,
      name: 'Global Cybersecurity Training Platform',
      description:
        'Global cloud-based training platform independently designed, architected, developed, tested, deployed, and launched for early-career cybersecurity professionals. Built from backend and frontend through cloud deployment, it combines gamified learning paths, interactive quizzes, practical challenges, and AI-assisted educational resources to create a consistent cybersecurity awareness experience across multiple regions.',
      technologies: ['Full Stack', 'Software Architecture', 'AI Integration', 'REST APIs', 'Cloud Deployment', 'Gamification'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
    {
      id: 7,
      name: 'Cybersecurity Automation & Integration Solutions',
      description:
        'Python automation tools, API integrations, and data-processing solutions built on top of enterprise cybersecurity platforms. These solutions automate repetitive workflows, enrich security data, consolidate multiple sources, and accelerate investigations, reporting, and operational decisions. The work also improved OT asset management, increasing metadata visibility by 15.5% and reducing inaccurate records by 23.4%.',
      technologies: ['Python', 'REST APIs', 'Data Processing', 'Cybersecurity', 'OT / ICS', 'Software Automation'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
    {
      id: 8,
      name: 'Cybersecurity Data Analytics & Reporting Solutions',
      description:
        'Automated data pipelines, executive reports, and KPI dashboards that consolidate information from multiple cybersecurity platforms into actionable insights. Built with Power BI and data-processing techniques, the solutions improve operational visibility, asset intelligence, performance monitoring, and data-driven decision-making for global cybersecurity operations.',
      technologies: ['Power BI', 'Python', 'Data Analytics', 'KPI Pipelines', 'Business Intelligence', 'Cybersecurity'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
  ];

  const projectsPT = [
    {
      id: 1,
      name: 'Briga de Robôs – Controle Arcade',
      description:
        'Sistema integrado de robótica premiado, composto por dois robôs que interagem em tempo real por meio de um controle arcade desenvolvido especialmente para o projeto e de um aplicativo conectado por Bluetooth. Foram desenvolvidos o software embarcado em C++, os circuitos eletrônicos, os protocolos de comunicação e a lógica de controle responsáveis pela movimentação e pela dinâmica física de batalha com balões. O projeto recebeu um Certificado de Trabalho de Destaque no programa de Engenharia da Computação da PUC Minas.',
      technologies: ['C++', 'Arduino', 'Bluetooth', 'MIT App Inventor'],
      github: 'https://github.com/felipegiannetti/projeto-interacao-robos-destaque-primeiro-periodo',
      live: null,
      image: '/projects/robo.png',
      date: '2024',
    },
    {
      id: 2,
      name: 'TDR Consultoria',
      description:
        'Projeto interdisciplinar de front-end desenvolvido na disciplina de Desenvolvimento de Interfaces Web da PUC Minas. Site de consultoria com formulários interativos que permitem ao usuário descrever suas necessidades, possibilitando à equipe entregar um resultado personalizado.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/felipegiannetti/TI-Front-end-PUC',
      live: 'https://plf-es-2025-1-ti1-0385100-tdr-consu.vercel.app/',
      image: 'https://opengraph.githubassets.com/1/felipegiannetti/TI-Front-end-PUC',
      date: '2025',
    },
    {
      id: 3,
      name: 'DTI Drone Delivery System',
      description:
        'Sistema completo de gerenciamento de entregas por drones para uma startup de logística urbana. Possui algoritmo inteligente de planejamento combinando heurísticas de knapsack e nearest-neighbour para otimizar rotas por prioridade (HIGH → MEDIUM → LOW). Backend RESTful com Spring Boot 3 e dashboard moderno em Next.js 15.',
      technologies: ['Java 24', 'Spring Boot 3', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Maven'],
      github: 'https://github.com/felipegiannetti/drone-delivery-system',
      live: null,
      image: '/projects/drone.png',
      date: '2025',
    },
    {
      id: 4,
      name: 'Conector Random para n8n',
      description:
        'Node customizado para n8n que encapsula a API do Random.org para gerar inteiros verdadeiramente aleatórios (não pseudo-aleatórios). Inclui ambiente Docker Compose com n8n e PostgreSQL já configurados para carregar o node automaticamente. Desenvolvido em TypeScript e publicado como pacote npm local.',
      technologies: ['TypeScript', 'Node.js', 'n8n', 'Docker', 'PostgreSQL', 'Random.org API'],
      github: 'https://github.com/felipegiannetti/n8n-random-number',
      live: null,
      image: '/projects/n8n.png',
      date: '2025',
    },
    {
      id: 5,
      name: 'Plataforma de Automação para Consultoria Financeira e Estratégica com IA',
      description:
        'Plataforma corporativa completa que automatiza fluxos de consultoria financeira e estratégica. A solução contempla reestruturação empresarial, valuation, análise de riscos de investimento e cálculos de custo de capital, integrando mais de 10 APIs externas para agregação de dados e geração automática de relatórios. Recursos baseados em IA produzem recomendações contextualizadas e adaptam as análises a cada projeto, enquanto uma arquitetura Full Stack escalável sustenta testes, implantação em nuvem e evolução contínua do produto.',
      technologies: ['Java', 'Spring Boot', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Integração de IA', 'Docker', 'Cloud'],
      github: null,
      live: null,
      image: null,
      date: '2025–2026',
      internal: true,
      featured: true,
    },
    {
      id: 6,
      name: 'Plataforma Global de Treinamento em Cibersegurança',
      description:
        'Plataforma global de treinamento em nuvem projetada, arquitetada, desenvolvida, testada, implantada e colocada em produção de forma independente para profissionais de cibersegurança em início de carreira. Construída do backend e frontend à implantação em nuvem, reúne trilhas gamificadas, questionários interativos, desafios práticos e recursos educacionais assistidos por IA para padronizar a conscientização em cibersegurança em diferentes regiões.',
      technologies: ['Full Stack', 'Arquitetura de Software', 'Integração de IA', 'REST APIs', 'Cloud Deployment', 'Gamificação'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
    {
      id: 7,
      name: 'Soluções de Automação e Integração para Cibersegurança',
      description:
        'Ferramentas de automação em Python, integrações de APIs e soluções de processamento de dados desenvolvidas sobre plataformas corporativas de cibersegurança. As soluções automatizam fluxos repetitivos, enriquecem dados de segurança, consolidam múltiplas fontes e aceleram investigações, relatórios e decisões operacionais. O trabalho também aprimorou a gestão de ativos de OT, aumentando a visibilidade dos metadados em 15,5% e reduzindo registros incorretos em 23,4%.',
      technologies: ['Python', 'REST APIs', 'Processamento de Dados', 'Cibersegurança', 'OT / ICS', 'Automação de Software'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
    {
      id: 8,
      name: 'Soluções de Análise de Dados e Relatórios para Cibersegurança',
      description:
        'Pipelines automatizados de dados, relatórios executivos e dashboards de KPIs que consolidam informações de múltiplas plataformas de cibersegurança em insights acionáveis. Desenvolvidas com Power BI e técnicas de processamento de dados, as soluções ampliam a visibilidade operacional, a inteligência sobre ativos, o acompanhamento de desempenho e a tomada de decisão orientada por dados em operações globais de cibersegurança.',
      technologies: ['Power BI', 'Python', 'Análise de Dados', 'Pipelines de KPIs', 'Business Intelligence', 'Cibersegurança'],
      github: null,
      live: null,
      image: null,
      date: '2026',
      internal: true,
      featured: true,
    },
  ];

  const projects = [...(language === 'en' ? projectsEN : projectsPT)].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
  );

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-primary-dark to-primary-blue py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-8 text-white">{language === 'en' ? 'Projects' : 'Projetos'}</h2>
        <div className="w-24 h-1 bg-accent-green mx-auto mb-4"></div>
        <p className="text-center text-gray-300 mb-12 text-lg">
          {language === 'en' ? 'Featured recent projects followed by my project timeline' : 'Projetos recentes em destaque, seguidos pela linha do tempo dos meus projetos'}
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: linha central */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent-green/50"></div>
          {/* Mobile: linha à esquerda */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-accent-green/50"></div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex items-start md:items-center md:flex-row hover:z-50 pl-12 md:pl-0${index > 0 ? ' mt-6 md:mt-8' : ''}`}
                style={{ zIndex: projects.length - index }}
              >
                {/* Mobile: dot à esquerda */}
                <div className="md:hidden absolute left-[14px] top-5 w-3 h-3 bg-accent-green rounded-full border-2 border-primary-dark shadow-[0_0_6px_rgba(0,229,255,0.6)] z-10"></div>

                {/* Card - alterna lados no desktop */}
                <div className={`w-full md:w-5/12 ${index % 2 !== 0 ? 'md:order-3' : ''}`}>
                  <div className="bg-primary-dark border border-gray-700 hover:border-accent-green rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_18px_rgba(0,229,255,0.15)]">
                    {/* Image */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-44 object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://via.placeholder.com/600x400/1e3a5f/00e5ff?text=${encodeURIComponent(project.name)}`;
                        }}
                      />
                    ) : (
                      <div className="h-44 bg-gradient-to-br from-primary-blue via-primary-dark to-primary-blue flex flex-col items-center justify-center gap-3 border-b border-accent-green/20 px-6 text-center">
                        <FaLock className="text-accent-green" size={32} />
                        <span className="text-accent-green text-xs font-extrabold uppercase tracking-widest">
                          {language === 'en' ? 'Internal corporate project' : 'Projeto corporativo interno'}
                        </span>
                      </div>
                    )}
                    {/* Content */}
                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          {project.featured && (
                            <span className="inline-flex mb-1 bg-accent-green/10 text-accent-green border border-accent-green/30 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest">
                              {language === 'en' ? 'Featured' : 'Destaque'}
                            </span>
                          )}
                          <h3 className="text-sm font-bold text-white leading-snug">{project.name}</h3>
                        </div>
                        <span className="flex-shrink-0 bg-accent-green text-primary-dark px-2 py-0.5 rounded-full text-xs font-bold">
                          {project.date}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-primary-blue text-accent-green px-2 py-0.5 rounded-full text-[10px] font-semibold border border-accent-green/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-accent-green text-primary-dark px-3 py-1 rounded-lg text-xs font-bold hover:bg-white transition-colors duration-300 self-start mt-1"
                        >
                          <FaGithub size={13} />
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 bg-primary-blue text-gray-300 border border-gray-600 px-3 py-1 rounded-lg text-xs font-bold self-start mt-1">
                          <FaLock size={11} />
                          {language === 'en' ? 'Internal project' : 'Projeto interno'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop: dot central */}
                <div className="hidden md:flex w-2/12 justify-center order-2 z-10">
                  <div className="w-4 h-4 bg-accent-green rounded-full border-4 border-primary-dark shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
                </div>

                {/* Desktop: espaçador */}
                <div className={`hidden md:block w-5/12 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-3'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
