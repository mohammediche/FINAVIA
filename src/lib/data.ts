
import { Leaf, Scale, GraduationCap, Target, Users, Zap, Clock, ShieldCheck,
    BarChart3, Settings, PieChart, Rocket, Database,  TrendingUp, Search,
    Calculator, Briefcase, Building,LayoutDashboard } from 'lucide-react';


export const PARTNERS = [
    { name: 'Sage', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/5ae5d4805971eee08b0a799442718c7f.png' },
    { name: 'Pennylane', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/69b204c08a820f594710ee1bbe6e01ad.png' },
    { name: 'Spendesk', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/d55b7eaa24d1489f1e171595fd9c26be.png' },
    { name: 'Agicap', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/c73c301d18e3913447042b755ed5c82b.png' },
    { name: 'Regate', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/58c9aa638e910165c9d9a0a31919a77d.png' },
    { name: 'Yooz', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/ac7ac7749038c0f772af6574de3e6035.png' },
    { name: 'Finthesis', url: 'https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/c5fbdaf3e80a278c8ec084ef95e45a31.png' }
];

export const METRICS = [
    {
        value: 500,
        suffix: '+',
        label: 'Projets Réalisés',
        color: 'text-[#e51990]',
        details: ['Secteurs variés', 'PME & ETI', 'International']
    },
    {
        value: 98,
        suffix: '%',
        label: 'Satisfaction Client',
        color: 'text-[#0b1a9c]',
        details: ['Fidélisation forte', 'Recommandation', 'Suivi long terme']
    },
    {
        value: 250,
        suffix: '%',
        label: 'ROI Moyen',
        color: 'text-[#e51990]',
        details: ['Productivité', 'Gain de temps', 'Rentabilité']
    }
];

export const SERVICE_CATEGORIES = [
    { id: 'all', label: 'Tout voir' },
    { id: 'strategy', label: 'Stratégie & Organisation' },
    { id: 'tech', label: 'Digital & Outils' },
    { id: 'performance', label: 'Pilotage & Croissance' }
];

export const SERVICES = [
    {
        id: 1,
        category: 'strategy',
        title: "Audit et Diagnostic Financier",
        icon: BarChart3,
        link: "/expertises/audit",
        description: "Une analyse approfondie de votre structure financière actuelle pour identifier les risques, les inefficacités et les opportunités de croissance immédiates.",
        benefits: ["Cartographie des risques", "Plan d'action priorisé", "Vision claire à 360°"]
    },
    {
        id: 2,
        category: 'strategy',
        title: "Structuration de la Fonction Finance",
        icon: Settings,
        link: "/expertises/structuration-finance",
        description: "Organisation des équipes, définition des processus et mise en place des bonnes pratiques pour une direction financière robuste et agile.",
        benefits: ["Processus fiabilisés", "Clôtures accélérées", "Equipes autonomes"]
    },
    {
        id: 3,
        category: 'tech',
        title: "Digitalisation et Automatisation",
        icon: Zap,
        link: "/expertises/digitalisation",
        description: "Transformation de votre écosystème financier par l'intégration d'outils modernes et l'automatisation des tâches à faible valeur ajoutée.",
        benefits: ["Gain de productivité", "Zéro papier", "Données temps réel"]
    },
    {
        id: 4,
        category: 'performance',
        title: "Pilotage Financier et Performance",
        icon: PieChart,
        link: "/expertises/pilotage-financier",
        description: "Mise en place de tableaux de bord dynamiques et de KPIs pertinents pour piloter votre activité avec précision et anticiper l'avenir.",
        benefits: ["Dashboards automatisés", "Culture du cash", "Prévisions fiables"]
    },
    {
        id: 5,
        category: 'performance',
        title: "Expertises Financières Avancées",
        icon: Rocket,
        link: "/expertises/expertises-avancees",
        description: "Accompagnement sur-mesure pour les opérations complexes : levées de fonds, fusions-acquisitions ou conformité réglementaire spécifique.",
        benefits: ["Sérénité juridique", "Dossiers bancaires solides", "Support transactionnel"]
    }
];

export const CASE_STUDIES = [
    {
        title: "Optimisation de la trésorerie",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=400",
        points: [
            "Audit complet des flux",
            "Mise en place de Agicap",
            "Réduction du BFR de 20%"
        ]
    },
    {
        title: "Refonte du Reporting",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
        points: [
            "KPIs automatisés",
            "Tableaux de bord temps réel",
            "Gain de 5 jours sur la clôture"
        ]
    },
    {
        title: "Digitalisation Factures",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600&h=400",
        points: [
            "Intégration Yooz",
            "Workflow de validation",
            "100% zéro papier atteint"
        ]
    },
    {
        title: "Automatisation Paie",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600&h=400",
        points: [
            "Migration vers PayFit",
            "Connexion comptable native",
            "Fiabilité des bulletins assurée"
        ]
    },
    {
        title: "Structuration Financière",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
        points: [
            "Mise en place de procédures",
            "Sécurisation des paiements",
            "Audit interne renforcé"
        ]
    }
];

export const TESTIMONIALS = [
    {
        text: "L'accompagnement de FINAVIA a été décisif dans notre levée de fonds. Leur structuration de nos données financières a rassuré tous nos investisseurs.",
        author: "Thomas B.",
        role: "CEO, Tech Start-up",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        text: "Grâce à l'automatisation mise en place, nous avons gagné 4 jours sur nos clôtures mensuelles. Une efficacité redoutable.",
        author: "Sarah M.",
        role: "DAF, Groupe Retail",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        text: "Une vision stratégique qui nous manquait cruellement. Les tableaux de bord mis en place nous permettent enfin de piloter nos marges par produit.",
        author: "Julien R.",
        role: "DG, Industrie",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        text: "L'implémentation de Pennylane s'est faite sans douleur grâce à l'expertise de l'équipe. Nos processus sont désormais fluides et sécurisés.",
        author: "Élise D.",
        role: "RAF, Agence Marketing",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        text: "Une clarté retrouvée dans nos flux de trésorerie. Nous pouvons enfin anticiper nos besoins de financement avec sérénité.",
        author: "Marc L.",
        role: "CFO, E-commerce",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        text: "La gestion de la paie est enfin fiabilisée. Les outils connectés nous font gagner un temps précieux chaque mois.",
        author: "Sophie V.",
        role: "DRH, Services B2B",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

export const FAQ_DATA: Record<string, { q: string; a: string }[]> = {
    'Général': [
        { q: "Quels types d'entreprises accompagnez-vous ?", a: "Nous accompagnons des TPE, PME et ETI de tous secteurs, avec une expertise particulière pour les entreprises en forte croissance (Startups, Scale-ups)." },
        { q: "Combien de temps dure une mission type ?", a: "La durée varie selon le périmètre : de quelques semaines pour un audit flash à plusieurs mois pour une restructuration complète ou un accompagnement DAF partagé." },
        { q: "Intervenez-vous partout en France ?", a: "Oui, nous intervenons sur tout le territoire national, aussi bien en présentiel qu'en distanciel grâce à nos outils collaboratifs." }
    ],
    'Direction Financière': [
        { q: "Proposez-vous des DAF à temps partagé ?", a: "Absolument. C'est une solution idéale pour bénéficier d'une expertise de haut niveau sans supporter le coût d'un DAF à temps plein." },
        { q: "Pouvez-vous nous aider à préparer une levée de fonds ?", a: "Oui, nous structurons votre Business Plan, votre Deck financier et vous préparons aux Due Diligences pour rassurer les investisseurs." }
    ],
    'Automatisation': [
        { q: "Quels outils utilisez-vous ?", a: "Nous sommes agnostiques mais recommandons souvent la stack moderne : Pennylane, Agicap, Spendesk, Lucca, etc. connectés via API ou Zapier/Make." },
        { q: "L'automatisation va-t-elle remplacer mon comptable ?", a: "Non, elle va le libérer des tâches saisie pour qu'il se concentre sur l'analyse, le contrôle et le conseil à haute valeur ajoutée." }
    ],
    'Digitalisation': [
        { q: "Comment se passe la migration vers un nouvel outil ?", a: "Nous gérons le projet de A à Z : reprise de l'historique, paramétrage, formation des équipes et support post-démarrage." },
        { q: "Mes données sont-elles sécurisées ?", a: "Nous ne travaillons qu'avec des éditeurs de logiciels certifiés (ISO 27001, RGPD) et mettons en place les meilleures pratiques de sécurité." }
    ]
};

export const FAQ_DOMAINS = Object.keys(FAQ_DATA);

export const NAVIGATION_LINKS = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Notre méthode", href: "/methode" },
    { name: "Nos expertises", href: "/expertises" },
    { name: "Enjeux clients", href: "/enjeux-clients" },
    { name: "Partenaires", href: "/partenaires" },
];

export const EXPERTISE_LINKS = [
    { name: "Audit", href: "/expertises/audit" },
    { name: "Structuration de la Fonction Finance", href: "/expertises/structuration-finance" },
    { name: "Digitalisation et Automatisation", href: "/expertises/digitalisation" },
    { name: "Pilotage Financier et Performance", href: "/expertises/pilotage-financier" },
    { name: "Expertises Financières Avancées", href: "/expertises/expertises-avancees" },
];

export const LEGAL_LINKS = [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "FAQ", href: "#contact-footer" },
    { name: "Contact", href: "/contact" },
];

export const ABOUT_PAGE_DATA = {
    founders: [
        {
            name: "Virginie Audrain",
            role: "Co-fondatrice & Associée",
            desc: "Plus de 20 ans d'expérience en Direction Financière et transformation digitale. Experte en structuration de processus et management de transition. Passionnée par l'innovation financière et l'accompagnement des dirigeants.",
            image: "https://images.unsplash.com/photo-1716703741458-417a8d58f20e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            linkedin: "#"
        },
        {
            name: "Nadia Souissi",
            role: "Co-fondatrice & Associée",
            desc: "Expert-comptable de formation avec 20 ans d'expertise en audit et conseil. Spécialiste de la mise en conformité et de l'optimisation des flux financiers. Elle apporte une rigueur technique alliée à une vision stratégique long-terme.",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            linkedin: "#"
        }
    ],
    values: [
        {
            title: "Excellence",
            text: "Nous visons la perfection dans chaque mission, en apportant une expertise technique irréprochable et des solutions concrètes.",
            icon: "🏆"
        },
        {
            title: "Innovation",
            text: "Nous repoussons les limites de la finance traditionnelle en intégrant les meilleures technologies d'automatisation.",
            icon: "💡"
        },
        {
            title: "Proximité",
            text: "Nous travaillons main dans la main avec vos équipes pour garantir une adoption fluide et durable des nouveaux processus.",
            icon: "🤝"
        },
        {
            title: "Intégrité",
            text: "La confiance est notre capital le plus précieux. Nous agissons avec transparence, éthique et confidentialité absolue.",
            icon: "🛡️"
        }
    ],
    commitments: [
        {
            title: "Écologie",
            text: "Promotion du \"Zéro Papier\" via la digitalisation totale des processus administratifs et financiers chez tous nos clients.",
            icon: Leaf,
            bgClass: "bg-green-100",
            iconClass: "text-[#2d5a27]"
        },
        {
            title: "Égalité",
            text: "Entreprise fondée et dirigée par des femmes, nous militons activement pour la parité dans les métiers du chiffre.",
            icon: Scale,
            bgClass: "bg-pink-100",
            iconClass: "text-[#e51990]"
        },
        {
            title: "Transmission",
            text: "Nous consacrons 5% de notre temps au mentorat d'étudiants et de jeunes entrepreneurs issus de milieux modestes.",
            icon: GraduationCap,
            bgClass: "bg-blue-100",
            iconClass: "text-[#07036e]"
        }
    ]
};

export const METHODOLOGY_PAGE_DATA = {
    steps: [
        {
            id: 1,
            title: "Diagnostic",
            subtitle: "État des lieux & Audit",
            description: "Nous réalisons une analyse 360° de votre existant : processus comptables, outils, compétences équipes et fiabilité des données. L'objectif est d'identifier les goulets d'étranglement et les zones de risques immédiats.",
            benefits: ["Cartographie des flux", "Matrice des risques", "Benchmark sectoriel"],
            imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Proposition et Cadrage",
            subtitle: "Feuille de route stratégique",
            description: "Nous co-construisons le plan d'action. Pas de catalogue standard, mais une réponse précise à vos enjeux : choix des outils (ERP, reporting), définition du calendrier et allocation des ressources nécessaires.",
            benefits: ["Planning détaillé", "Budget validé", "KPIs de succès définis"],
            imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            title: "Déploiement Opérationnel",
            subtitle: "Mise en œuvre technique",
            description: "Phase active de transformation : nettoyage des données, paramétrage des nouveaux outils, rédaction des procédures et mise en place des automatismes. Nous travaillons en immersion avec vos équipes.",
            benefits: ["Migration des données", "Configuration outils", "Documentation process"],
            imgSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            title: "Formation et Accompagnement",
            subtitle: "Conduite du changement",
            description: "Le meilleur outil ne sert à rien s'il n'est pas utilisé. Nous formons vos collaborateurs pour garantir une adoption rapide et durable des nouvelles méthodes de travail.",
            benefits: ["Ateliers pratiques", "Support utilisateurs", "Coaching managers"],
            imgSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 5,
            title: "Suivi & Performance",
            subtitle: "Amélioration continue",
            description: "La mission ne s'arrête pas au déploiement. Nous assurons un suivi mensuel pour analyser les premiers résultats, ajuster les paramétrages et ancrer les bonnes pratiques dans la durée.",
            benefits: ["Comités de pilotage", "Audit post-démarrage", "Plan de progrès"],
            imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ],
    advantages: [
        { icon: Target, title: "Vision claire", desc: "Des tableaux de bord lisibles pour décider vite." },
        { icon: Users, title: "Accompagnement sur mesure", desc: "Une approche adaptée à votre culture d'entreprise." },
        { icon: ShieldCheck, title: "Désamorçage des résistances", desc: "Pédagogie et communication pour fédérer les équipes." },
        { icon: Clock, title: "Gain de temps", desc: "Automatisation des tâches chronophages." },
        { icon: Zap, title: "Productivité", desc: "Des processus fluides et sans erreurs." }
    ],
    poles: [
        { title: "Audit", icon: BarChart3, path: "/expertises/audit" },
        { title: "Structuration", icon: Settings, path: "/expertises/structuration-finance" },
        { title: "Digitalisation", icon: Zap, path: "/expertises/digitalisation" },
        { title: "Pilotage", icon: PieChart, path: "/expertises/pilotage-financier" },
        { title: "Expertises Avancées", icon: Rocket, path: "/expertises/expertises-avancees" }
    ]
};


export const EXPERTISE_DETAIL_DATA: Record<string, any> = {
    'audit': {
        title: "Audit",
        icon: BarChart3,
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
        ctaImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto-format&fit=crop",
        description: "Analyse complète de la situation financière et organisationnelle de l'entreprise afin d'identifier les forces, les faiblesses et les axes prioritaires d'amélioration.",
        objectives: [
            "Évaluation globale des processus financiers",
            "Analyse des risques et des contrôles internes",
            "Recommandations prioritaires et plan d'action"
        ],
        deliverables: [
            "Rapport d'audit détaillé",
            "Cartographie des risques",
            "Plan d'action opérationnel",
            "Restitution à la direction"
        ],
        benefits: [
            "Visibilité accrue sur la santé financière",
            "Sécurisation des actifs de l'entreprise",
            "Identification des leviers de performance",
            "Aide à la prise de décision stratégique"
        ]
    },
    'structuration-finance': {
        title: "Structuration de la Fonction Finance",
        icon: Settings,
        heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
        ctaImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto-format&fit=crop",
        description: "Structuration, organisation et montée en maturité de la fonction finance pour garantir fiabilité, rapidité et efficacité des opérations.",
        objectives: [
            "Internalisation de la fonction finance",
            "Process et organisation",
            "Clôture mensuelle ou trimestrielle"
        ],
        deliverables: [
            "Organigramme cible et fiches de poste",
            "Manuel de procédures administratives",
            "Calendrier de clôture optimisé",
            "Matrice des responsabilités"
        ],
        benefits: [
            "Fiabilité de l'information financière",
            "Gain de temps pour les équipes",
            "Autonomie et professionnalisation",
            "Sécurisation des délais de reporting"
        ]
    },
    'digitalisation': {
        title: "Digitalisation et Automatisation",
        icon: Zap,
        heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ctaImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto-format&fit=crop",
        description: "Optimisation technologique des outils financiers, automatisation des tâches et mise en conformité avec les futures obligations de dématérialisation.",
        objectives: [
            "Migration ERP et optimisation des outils",
            "Dématérialisation et Facture Électronique 2026",
            "Automatisation et Intelligence Artificielle"
        ],
        deliverables: [
            "Cartographie des outils (IT Landscape)",
            "Cahier des charges et sélection ERP",
            "Mise en place d'outils (OCR, RPA)",
            "Formation des équipes aux nouveaux outils"
        ],
        benefits: [
            "Gains de productivité administrative",
            "Conformité réglementaire assurée",
            "Réduction des erreurs manuelles",
            "Modernisation des processus"
        ]
    },
    'pilotage-financier': {
        title: "Pilotage Financier et Performance",
        icon: PieChart,
        heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ctaImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto-format&fit=crop",
        description: "Mise en place d'outils et de méthodes de pilotage permettant une vision claire, prédictive et orientée décision.",
        objectives: [
            "Suivi du cash et prévisions",
            "P&L et Budget",
            "KPI et Performance"
        ],
        deliverables: [
            "Tableaux de bord de gestion dynamiques",
            "Budget prévisionnel et atterrissage",
            "Plan de trésorerie glissant",
            "Reporting mensuel automatisé"
        ],
        benefits: [
            "Pilotage proactif de l'activité",
            "Anticipation des écarts et risques",
            "Meilleure communication financière",
            "Culture du résultat partagée"
        ]
    },
    'expertises-avancees': {
        title: "Expertises Financières Avancées",
        icon: Rocket,
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        ctaImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Accompagnement spécialisé sur les enjeux financiers complexes, stratégiques ou à forte valeur ajoutée.",
        objectives: [
            "Fiscalité et conformité",
            "Harmonisation et reporting groupe",
            "Croissance et levée"
        ],
        deliverables: [
            "Dossier de financement bancaire/investisseur",
            "Reporting consolidé multi-entités",
            "Revue fiscale et réglementaire",
            "Documentation des prix de transfert"
        ],
        benefits: [
            "Sécurisation des opérations complexes",
            "Vision groupe unifiée et fiable",
            "Succès des opérations de haut de bilan",
            "Conformité internationale"
        ]
    }
};

export const ALL_EXPERTISES_NAV = [
    { icon: BarChart3, title: 'Audit', path: '/expertises/audit' },
    { icon: Settings, title: 'Structuration Finance', path: '/expertises/structuration-finance' },
    { icon: Zap, title: 'Digitalisation', path: '/expertises/digitalisation' },
    { icon: PieChart, title: 'Pilotage Financier', path: '/expertises/pilotage-financier' },
    { icon: Rocket, title: 'Expertises Avancées', path: '/expertises/expertises-avancees' }
];

export const CHALLENGES_DATA = [
    { title: "Fiabiliser les chiffres", icon: Database, desc: "Garantir une donnée financière exacte pour des décisions sûres." },
    { title: "Réduire le stress des clôtures", icon: Clock, desc: "Passer d'une course contre la montre à un processus maîtrisé." },
    { title: "Digitaliser les processus", icon: TrendingUp, desc: "Automatiser les tâches à faible valeur ajoutée." },
    { title: "Gagner en visibilité Tréso & BFR", icon: Search, desc: "Anticiper les besoins de cash avant qu'il ne soit trop tard." },
    { title: "Réussir une levée ou transmission", icon: Rocket, desc: "Présenter une mariée sous son meilleur jour aux investisseurs." }
];

export const PROBLEMS_DATA = [
    { title: "Deadlines non tenues", desc: "Des retards récurrents dans les reportings mensuels et les déclarations." },
    { title: "Données peu fiables", desc: "Des erreurs de saisie et des incohérences qui minent la confiance." },
    { title: "Absence de processus", desc: "Une organisation tribale où le savoir repose sur une seule person." },
    { title: "Pilotage cash instable", desc: "Une navigation à vue sans prévisionnel de trésorerie robuste." },
    { title: "Tâches chronophages", desc: "80% du temps passé à produire la donnée, 20% à l'analyser." },
    { title: "Urgence réforme 2026", desc: "La nécessité impérative de se préparer à la facturation électronique." }
];

export const BENEFITS_DATA = [
    { title: "Conformité Financière", desc: "Données sécurisées, risques fiscaux limités, auditabilité parfaite.", icon: ShieldCheck },
    { title: "Efficacité Opérationnelle", desc: "Processus fluides, moins d'erreurs manuelles, gain de temps.", icon: TrendingUp },
    { title: "Sérénité des Équipes", desc: "Fin du stress des clôtures, charge mentale allégée, rétention des talents.", icon: Users },
    { title: "ROI & Rentabilité", desc: "Fonction finance plus rentable, pilotage précis des marges.", icon: Calculator }
];

export const FAQ_SECTORS = [
    { id: 'daf', label: 'Direction Financière / DAF', icon: Briefcase },
    { id: 'rh', label: 'RH & Paie', icon: Users },
    { id: 'ceo', label: 'Direction Générale / Scale-ups', icon: Building },
    { id: 'compta', label: 'Comptabilité & Consolidation', icon: Calculator },
    { id: 'startup', label: 'Startups (Levée / Pré-levée)', icon: Rocket }
];

export const FAQ_CONTENT: Record<string, { q: string, a: string }[]> = {
    'Direction Financière / DAF': [
        { q: "Comment réduire nos délais de clôture (Fast Close) ?", a: "En automatisant la récupération des factures et en mettant en place des processus de révision continue (Cut-off permanent) plutôt que tout faire en fin de mois." },
        { q: "Quels KPIs suivre absolument pour une activité SaaS ?", a: "MRR, Churn Rate, CAC, LTV et le Burn Rate sont les incontournables pour piloter la croissance et la rentabilité." },
        { q: "Comment structurer notre contrôle de gestion ?", a: "Commencez par définir une comptabilité analytique claire alignée avec votre business model, puis automatisez le reporting budgétaire." },
        { q: "Quel est le rôle du DAF dans la transformation digitale ?", a: "Le DAF doit être le sponsor du projet, choisir les outils (ERP, SIRH) et accompagner le changement auprès des équipes opérationnelles." },
        { q: "Comment optimiser notre BFR ?", a: "En agissant sur les 3 leviers : relance client automatisée, négociation fournisseurs et optimisation des stocks via une meilleure prévision des ventes." }
    ],
    'RH & Paie': [
        { q: "Comment fiabiliser la remontée des variables de paie ?", a: "Via l'intégration d'outils comme Lucca ou Payfit qui connectent les congés/absences directement à la paie sans ressaisie Excel." },
        { q: "Comment piloter la masse salariale en temps réel ?", a: "En connectant votre SIRH à votre outil de BI ou de reporting financier pour suivre les écarts effectifs vs budget mois par mois." },
        { q: "La gestion des notes de frais est un enfer, que faire ?", a: "Adoptez une solution dématérialisée (Expensify, Spendesk, Jenji) avec scan intelligent et validation mobile pour supprimer le papier." },
        { q: "Comment gérer l'onboarding administratif des salariés ?", a: "Digitalisez le dossier personnel et automatisez la génération des contrats et DPAE via votre SIRH." },
        { q: "Quel impact de la réforme des retraites sur nos provisions ?", a: "Il est nécessaire de recalculer vos engagements IDR (Indemnités de Départ en Retraite) avec les nouvelles hypothèses actuarielles." }
    ],
    'Direction Générale / Scale-ups': [
        { q: "Quand faut-il recruter un DAF ?", a: "Généralement autour de 2-3M€ de CA ou 30 collaborateurs, ou dès que la complexité (levée, international) dépasse les compétences de l'expert-comptable." },
        { q: "Comment suivre ma trésorerie au jour le jour ?", a: "Des outils comme Agicap se connectent à vos banques pour une vision consolidée et prévisionnelle en temps réel." },
        { q: "Comment aligner finance et stratégie ?", a: "En traduisant vos objectifs stratégiques en budget chiffré et en suivant les écarts mensuels pour rectifier le tir rapidement." },
        { q: "Combien coûte une mission de structuration ?", a: "Cela dépend du périmètre, mais le ROI est souvent inférieur à 6 mois grâce aux gains de productivité et aux économies réalisées." },
        { q: "Mon expert-comptable ne suffit-il pas ?", a: "L'expert-comptable produit les comptes légaux (le passé). Le DAF ou le consultant financier pilote la performance future et structure l'interne." }
    ],
    'Comptabilité & Consolidation': [
        { q: "Comment préparer la facturation électronique 2026 ?", a: "En choisissant dès maintenant une PDP (Plateforme de Dématérialisation Partenaire) et en nettoyant votre base tiers (SIRET, TVA)." },
        { q: "Comment automatiser le rapprochement bancaire ?", a: "Les outils modernes (Pennylane, Qonto) matchent automatiquement 80% des flux grâce à l'IA et aux règles pré-établies." },
        { q: "Comment gérer la consolidation de plusieurs entités ?", a: "Si vous avez une holding, mettez en place un outil de reporting consolidé (type Lucanet ou via Excel avancé/PowerBI) pour avoir une vue groupe." },
        { q: "Quels sont les risques d'une comptabilité mal tenue ?", a: "Redressements fiscaux, refus de prêt bancaire, valorisation entreprise dégradée et impossibilité de piloter l'activité." },
        { q: "Comment faciliter la collaboration avec les opérationnels ?", a: "Donnez-leur des outils simples d'achat et de note de frais qui déversent directement en compta sans qu'ils aient besoin de connaître le plan comptable." }
    ],
    'Startups (Levée / Pré-levée)': [
        { q: "Que regardent les investisseurs en priorité ?", a: "La croissance (Top line), la rétention (Cohorts), la structure de coûts et la fiabilité de vos prévisions passées." },
        { q: "Comment construire un Business Plan crédible ?", a: "Il doit être ambitieux mais réaliste, basé sur des hypothèses opérationnelles vérifiables (bottom-up) et non juste des pourcentages." },
        { q: "Qu'est-ce qu'une Data Room financière ?", a: "C'est l'espace sécurisé où vous déposez tous vos documents (statuts, liasses, contrats, BP, cap table) pour l'audit des investisseurs (Due Diligence)." },
        { q: "Comment valoriser le CIR / CII ?", a: "En documentant précisément les temps passés par la R&D et en sécurisant l'éligibilité des projets pour récupérer du cash l'année suivante." },
        { q: "Faut-il auditer nos comptes avant la levée ?", a: "Ce n'est pas obligatoire pour le Seed, mais fortement recommandé pour la Série A pour rassurer les fonds sur la sincérité des chiffres." }
    ]
};


export const CONTACT_INFO = {
    phone: "+33 1 23 45 67 89",
    email: "contact@finavia.fr",
    address: "12 Avenue de la Grande Armée, Paris",
};

export const CONTACT_SERVICES = [
    "Audit",
    "Structuration de la Fonction Finance",
    "Digitalisation et Automatisation",
    "Pilotage Financier et Performance",
    "Expertises Financières Avancées",
    "Autre"
];

export const PARTNER_LOGOS = {
    pennylane: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/69b204c08a820f594710ee1bbe6e01ad.png",
    spendesk: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/d55b7eaa24d1489f1e171595fd9c26be.png",
    agicap: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/c73c301d18e3913447042b755ed5c82b.png",
    regate: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/58c9aa638e910165c9d9a0a31919a77d.png",
    notion: "https://images.unsplash.com/photo-1658383178431-42985646a636",
    google: "https://images.unsplash.com/photo-1649180549324-3e03951391aa",
    powerbi: "https://images.unsplash.com/photo-1675022991860-ad46e3e9c150",
    hubspot: "https://images.unsplash.com/photo-1668440621025-d1f36e9eb7b4",
    zapier: "https://images.unsplash.com/photo-1664098295863-62a394edad97",
    make: "https://images.unsplash.com/photo-1658204212985-e0126040f88f"
};

export const TRANSFORMATION_OBJECTIVES = [
    {
        icon: Rocket,
        title: "Créer une direction financière performante",
        desc: "Déployez les fondamentaux d'une finance moderne et agile.",
        logos: [PARTNER_LOGOS.spendesk, PARTNER_LOGOS.regate, PARTNER_LOGOS.pennylane, PARTNER_LOGOS.agicap, PARTNER_LOGOS.notion]
    },
    {
        icon: LayoutDashboard,
        title: "Structurer la direction financière",
        desc: "Organisez vos flux d'information et centralisez la donnée.",
        logos: [PARTNER_LOGOS.pennylane, PARTNER_LOGOS.regate, PARTNER_LOGOS.google, PARTNER_LOGOS.powerbi]
    },
    {
        icon: Zap,
        title: "Digitaliser les workflows et automatiser",
        desc: "Éliminez les tâches manuelles répétitives à faible valeur ajoutée.",
        logos: [PARTNER_LOGOS.spendesk, PARTNER_LOGOS.regate, PARTNER_LOGOS.agicap, PARTNER_LOGOS.hubspot, PARTNER_LOGOS.zapier, PARTNER_LOGOS.make]
    },
    {
        icon: Database,
        title: "Fiabiliser la comptabilité analytique et le pilotage",
        desc: "Gagnez en visibilité avec des reportings fiables et temps réel.",
        logos: [PARTNER_LOGOS.powerbi, PARTNER_LOGOS.agicap, PARTNER_LOGOS.pennylane]
    }
];

export const INTEGRATION_STEPS = [
    { step: "01", title: "Diagnostic rapide" },
    { step: "02", title: "Architecture outillée" },
    { step: "03", title: "Intégration & Paramétrage" },
    { step: "04", title: "Mise en production" },
    { step: "05", title: "Montée en compétences" },
    { step: "06", title: "Optimisation continue" }
];

export const INTEGRATION_BLOCKS = [
    {
        id: "01",
        tag: "Intégration",
        title: "Intégration des outils comptables et financiers",
        image: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/pexels-kindelmedia-7688365-ZszkK.jpg",
        color: "bg-[#07036e]/10",
        actions: "Setup complet (Spendesk, Regate, Agicap), connexion bancaire sécurisée, préparation facturation électronique 2026.",
        benefits: "Gain de temps administratif, workflows de validation sécurisés, conformité totale."
    },
    {
        id: "02",
        tag: "Reporting",
        title: "Structuration des process et reporting digitalisé",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "bg-[#e51990]/10",
        actions: "Optimisation du processus de clôture, création de reporting Power BI, alignement Comptabilité/Gestion.",
        benefits: "Données fiables en temps réel, pilotage clair de la performance, prise de décision rapide."
    },
    {
        id: "03",
        tag: "Analytique",
        title: "Mise en place de la comptabilité analytique",
        image: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/pexels-rdne-7948036-jbeFY.jpg",
        color: "bg-[#07036e]/10",
        actions: "Structuration des axes analytiques, reporting par coûts/activités, rétroplanning comptable.",
        benefits: "Meilleure visibilité sur la rentabilité par pôle, allocation des ressources optimisée."
    },
    {
        id: "04",
        tag: "Accompagnement",
        title: "Accompagnement à la transformation digitale",
        image: "https://images.unsplash.com/photo-1680781336852-af0416157119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "bg-[#e51990]/10",
        actions: "Sélection des outils adaptés, mise en conformité, formation des équipes pour l'adoption.",
        benefits: "ROI rapide, autonomie des équipes, modernisation de l'image employeur."
    }
];

export const TECH_PARTNERS_LIST = [
    {
        category: "Outils Comptables",
        icon: Database,
        partners: [
            { name: "Pennylane", logo: PARTNER_LOGOS.pennylane },
            { name: "Regate", logo: PARTNER_LOGOS.regate }
        ]
    },
    {
        category: "Outils Dépenses",
        icon: ShieldCheck,
        partners: [
            { name: "Spendesk", logo: PARTNER_LOGOS.spendesk }
        ]
    },
    {
        category: "Outils Cashflow",
        icon: BarChart3,
        partners: [
            { name: "Agicap", logo: PARTNER_LOGOS.agicap }
        ]
    },
    {
        category: "Outils BI",
        icon: LayoutDashboard,
        partners: [
            { name: "Power BI", logo: PARTNER_LOGOS.powerbi }
        ]
    }
];