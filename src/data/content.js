// portfolio/src/data/content.js

const content = {
  personal: {
    name:     'Michael Ferdinand Moser',
    title:    'Analytics Platform Engineer & Product Owner',
    location: 'Vienna, Austria',
    github:   'https://github.com/mfm92',
    linkedin: 'https://linkedin.com/in/michael-ferdinand-moser-039612125',
  },

  about: {
    paragraphs: [
      `My path into technology was shaped by an unusual starting point: linguistics. Studying formal language structure at Universität Salzburg — its syntax, logic, and grammar systems — made computer science feel like a natural extension rather than a pivot. The same questions that drive linguistics (how does meaning emerge from structure? how do systems handle ambiguity?) turned out to be the same questions that drive data engineering. From there, a BEng in Applied Computer Science and nearly a decade at MIC Customs Solutions brought me into the world of real-time data platforms, where I've grown from software developer to technical lead — building and owning a production analytics platform across its full stack: Kubernetes infrastructure, security architecture, data pipelines, frontend, and product direction.`,
      `Outside work, I compete as a powerlifter. What draws me to the sport is the same thing that draws me to platform engineering: the challenge of building a structured performance system and executing it precisely. That means a coaching relationship, disciplined periodisation, nutritional planning, and competition strategy — then stepping onto the platform in front of judges and an audience, year on year, and seeing whether the system holds. It's a different kind of delivery cadence from software, but the underlying discipline is the same.`,
    ],
  },

  experience: [
    {
      company: 'MIC Customs Solutions (MIC Datenverarbeitung GmbH)',
      companyNote: 'Leading customs management software company, 700+ global clients',
      companyUrl: 'https://www.mic-cust.com',
      location: 'Linz, Austria',
      roles: [
        {
          title:  'Product Owner & Team Lead — Analytics Platform',
          period: 'Jul 2024 – Present',
          bullets: [
            'De facto team lead across a team of 7; primary internal and external stakeholder contact for up to 40 enterprise customers',
            'Owned end-to-end a production analytics platform delivering customs trade intelligence and reporting to 40+ enterprise clients across 150+ countries — covering data ingestion, transformation, visualisation, and API exposure',
            'Evolved and operated the platform on Azure/Kubernetes: Helm chart maintenance, Argo Workflow orchestration, and CI/CD pipeline ownership',
            'Implemented mTLS and Keycloak-based authentication/authorization across platform services',
            'Designed and maintained platform observability: monitoring and alerting across the full analytics stack',
            'Full-stack contributions spanning data engineering (ClickHouse, Oracle, Delta Sharing) through to frontend (JavaScript, React)',
            'Embedded AI tooling across the team\'s workflow: GitHub Copilot, prompt engineering, LLM-assisted agent/skill definition, and AI-supported data catalog and market research',
            'Security, performance, UI/UX, documentation, and enablement ownership across the platform',
          ],
          stack: ['Python', 'ClickHouse', 'Oracle', 'Delta Sharing', 'Azure', 'Kubernetes', 'Helm', 'Argo Workflows', 'mTLS', 'Keycloak', 'JavaScript', 'React', 'CI/CD'],
        },
        {
          title:  'Analytics & Data Science Developer',
          period: 'Jan 2023 – Jun 2024',
          bullets: [
            'Data pipeline development, analytics engineering, and data science work across the MIC platform',
            'Designed and implemented data pipelines ingesting and transforming customs data into ClickHouse, serving both Apache Superset dashboards and REST API consumers',
          ],
          stack: ['Python', 'ClickHouse', 'Trino', 'Apache Iceberg', 'Superset', 'SQL', 'dbt'],
        },
        {
          title:  'Software Developer / Technical Consultant — CUST MX',
          period: 'Nov 2016 – Dec 2022',
          bullets: [
            'Full software development lifecycle: analysis, development, QA/testing, support, DB administration, IT project management',
            'Primary engineering contact for the Product Owner; translated business requirements into technical specifications for the full development team',
            'Led sprint planning meetings independently, coordinating across all developers — de facto engineering lead function',
            'Significant mentoring and coaching responsibilities in final 2 years: onboarding, guiding, and upskilling junior and mid-level developers',
            'Developed and maintained MIC-CUST® Mexico — a certified customs compliance platform enabling multinational manufacturers (including automotive OEMs) to automate IMMEX inventory control, pedimento creation, and direct electronic filing with Mexican customs authorities (SAAI/VUCEM)',
          ],
          stack: ['Java', 'SQL', 'PL/SQL'],
        },
        {
          title:  'Internship 2 — Project MIC-CUST MX IMMEX',
          period: 'Mar – Aug 2016',
          bullets: [
            'Supported IMMEX module development and testing for the Mexico customs compliance platform',
          ],
          stack: [],
        },
        {
          title:  'Internship 1 — Development Department',
          period: 'Aug – Sep 2015',
          bullets: [
            'Test preparation, test execution, and SQL validations',
          ],
          stack: [],
        },
      ],
    },
    {
      company: 'Universität Salzburg — FB Computerwissenschaften',
      companyNote: 'Department of Computer Science',
      companyUrl: 'https://www.plus.ac.at/',
      location: 'Salzburg, Austria',
      roles: [
        {
          title:  'Tutor — Formale Systeme',
          period: 'Oct 2016 – Feb 2017',
          bullets: [
            'Delivered tutorials for course "Formale Systeme" (511002), 2 SWS/week, to first-semester computer science students',
          ],
          stack: [],
        },
        {
          title:  'Research Assistant',
          period: 'Oct 2015 – Feb 2016',
          bullets: [
            'FWF Project "Distributed Voting in Large Networks" (P17727), supervised by Prof. Dr. Elsässer; 10h/week',
          ],
          stack: [],
        },
        {
          title:  'Research Assistant',
          period: 'Oct 2014 – May 2015',
          bullets: [
            'FWF Project EPAN "Untersuchung von epidemischen Prozessen und Algorithmen in großen Netzwerken" (P25214), supervised by Prof. Dr. Heinrich Schmidinger',
          ],
          stack: [],
        },
      ],
    },
    {
      company: 'Österreichische Akademie der Wissenschaften (ÖAW)',
      companyNote: 'Austrian Academy of Sciences',
      companyUrl: 'https://www.oeaw.ac.at/de/acdh/forschung/dh-forschung-infrastruktur/aktivitaeten/webentwicklung/dylen',
      location: 'Vienna, Austria',
      roles: [
        {
          title:  'Guest Researcher',
          period: 'Oct 2021 – Jan 2022',
          bullets: [
            'Contributed to the DYLEN project (Dynamics of Lexical and Semantic Change in English)',
            'Linguistic data analysis from newspaper and parliamentary speech corpora — uniquely combining a linguistics and computer science background',
          ],
          stack: [],
        },
      ],
    },
    {
      company: 'Casinos Austria AG',
      companyNote: 'Part-time, 19.5%',
      companyUrl: 'https://www.casinos.at',
      location: 'Vienna / Salzburg',
      roles: [
        {
          title:  'Junior Receptionist',
          period: 'Jun 2012 – Dec 2014',
          bullets: [
            'Guest reception and customer service in a high-profile hospitality environment',
          ],
          stack: [],
        },
      ],
    },
  ],

  education: [
    {
      degree:      'Abitur',
      institution: 'RGL Laufen, Bavaria',
      institutionUrl: 'https://www.rgl-bgl.de',
      period:      'Apr 2011',
      notes:       'Grade 2.1',
    },
    {
      degree:      'BSc Linguistics',
      institution: 'Universität Salzburg',
      institutionUrl: 'https://www.plus.ac.at/',
      period:      '2011 – 2014',
      notes:       '',
    },
    {
      degree:      'BEng Applied Computer Science',
      institution: 'Universität Salzburg',
      institutionUrl: 'https://www.plus.ac.at/',
      period:      '2014 – 2016',
      notes:       'Awarded 07.12.2016 · Leistungsstipendium €750, Dec 2017',
    },
    {
      degree:      'MSc Data Science (coursework)',
      institution: 'TU Wien',
      institutionUrl: 'https://www.tuwien.at',
      period:      '2020 – 2022',
      notes:       'All coursework completed · thesis pending',
    },
  ],

  skills: [
    {
      category: 'Data & Analytics Platform',
      items: [
        'ClickHouse', 'Trino', 'Apache Iceberg', 'Oracle', 'Delta Sharing',
        'Superset', 'SQL (advanced)', 'data pipeline architecture', 'data virtualization',
      ],
    },
    {
      category: 'Infrastructure & DevOps',
      items: [
        'Azure', 'Kubernetes', 'Helm', 'Argo Workflows', 'CI/CD', 'mTLS', 'Keycloak',
      ],
    },
    {
      category: 'Development',
      items: [
        'Python', 'Java', 'PL/SQL', 'JavaScript', 'React',
        'SDLC', 'QA/testing', 'DB administration',
      ],
    },
    {
      category: 'AI & Productivity',
      items: [
        'GitHub Copilot', 'prompt engineering', 'LLM-assisted workflows',
        'agent/skill definition', 'AI-supported data catalog development',
      ],
    },
    {
      category: 'Product & Leadership',
      items: [
        'product ownership', 'team lead', 'agile/scrum', 'sprint facilitation',
        'stakeholder management', 'mentoring & coaching', 'IT project management',
      ],
    },
    {
      category: 'Languages',
      items: ['German (native)', 'English (fluent)'],
    },
  ],

  certifications: [
    {
      title:  'Oracle Certified Associate — SQL (1Z0-071)',
      issuer: 'Oracle',
      date:   'Aug 2021',
    },
    {
      title:  'Frontend Web Developer Nanodegree',
      issuer: 'Udacity',
      date:   'Dec 2017',
    },
  ],

  awards: [
    {
      title:       'Leistungsstipendium (Merit Scholarship) €750',
      issuer:      'Naturwissenschaftliche Fakultät, Universität Salzburg',
      date:        'Dec 2017',
      description: 'Awarded for outstanding academic performance in BEng Applied Computer Science',
    },
  ],

  volunteering: [
    {
      role:        'Global Community Development Volunteer',
      org:         'AIESEC — Yonsei University, Seoul, South Korea',
      period:      'Jul – Aug 2013',
      description: 'Teaching and educating students as part of the AIESEC Global Community Development Program; sponsored by the KEB Foundation.',
    },
    {
      role:        'Guest Researcher',
      org:         'Österreichische Akademie der Wissenschaften (ÖAW), Vienna',
      orgUrl:      'https://www.oeaw.ac.at/dylen',
      period:      'Oct 2021 – Jan 2022',
      description: 'DYLEN project (Dynamics of Lexical and Semantic Change in English) — linguistic data analysis from newspaper and parliamentary speech corpora, uniquely combining a linguistics and computer science background.',
    },
  ],

  sports: {
    discipline: 'Powerlifting',
    federation: 'Supakraft',
    federationUrl: 'https://www.supakraft.at',
    location: 'Vienna, Austria',
    description: 'Competing as a powerlifter: structured performance system, disciplined periodisation, nutritional planning, and competition strategy. Testing the system year on year under competitive conditions.',
  },
}

export default content
