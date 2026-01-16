
import { Leaf, Scale, GraduationCap, Target, Users, Zap, Clock, ShieldCheck,
    BarChart3, Settings, PieChart, Rocket,  TrendingUp, Search,
    Calculator, Briefcase, Building,LayoutDashboard,Database,
    Cpu } from 'lucide-react';
import partnerImg1 from '@/../public/images/homePage/partner1.jpg'
import partnerImg2 from '@/../public/images/homePage/partner2.png'
import homeOptimisation from '../../public/images/homePage/homeOptimisation.png'
import homeDigitalisation from '../../public/images/homePage/homeDigitalisation.png'
import structurationFinanciere from '../../public/images/homePage/structurationFinanciere.png'
import diagnosticImg from '@/../public/images/methodePage/Diagnostic.png'
import propositionImg from '@/../public/images/methodePage/propositionCadrage.jpg'
import formationImg from '../../public/images/methodePage/formationAccompagnement.jpg'
import auditHeroImg from '@/../public/images/expertisePage/auditHero.png'
import structurationHeroImg from '@/../public/images/expertisePage/structurationHero.png'
import digitalisationHeroImg from '@/../public/images/expertisePage/digitalisationHero.png'
import pilotageHeroImg from '../../public/images/expertisePage/pilotageHero.jpg'
import expertisesHeroImg from '@/../public/images/expertisePage/expertisesHero.png'
import integrationImg from '@/../public/images/partenairesPage/integration.webp'
import reportingImg from '@/../public/images/partenairesPage/reporting.png'
import analytiqueImg from '@/../public/images/partenairesPage/analytique.webp'
import accompagnementImg from '../../public/images/partenairesPage/accompagnement.png'
import geoffroyImg from '@/../public/images/testimonials/Geoffroy.png'
import ramiImg from '@/../public/images/testimonials/Rami.jpg'
import imanImg from '@/../public/images/testimonials/Imane.png'
import claireImg from '@/../public/images/testimonials/Claire.jpg'
import michaelImg from '@/../public/images/testimonials/Michael.jpg'
import thierryImg from '@/../public/images/testimonials/Thierry.png'
import RefonteReportingImg from '@/../public/images/homePage/RefonteReporting.png'
import AutomatisationImg from '@/../public/images/homePage/Automatisation.png'
import virginieImg from '@/../public/images/aboutPage/VirginieAudrain.png'
import nadiaImg from '@/../public/images/aboutPage/Nadia.png'
import deploiementImg from '../../public/images/methodePage/Deploiement.png'
import suiviImg from '@/../public/images/methodePage/Suivi.png'
import auditCtaImage from '@/../public/images/expertisePage/auditctaImage.jpeg'
import structurationCtaImage from '../../public/images/expertisePage/structurationCta.jpeg'
import digitalisationCtaImg from '../../public/images/expertisePage/digitalisationCta.jpeg'
import pilotageCtaImg from '@/../public/images/expertisePage/pilotageCta.jpeg'
import expertisesCtaImg from '@/../public/images/expertisePage/expertisesCta.png'


export const PARTNERS = [
    { name: 'My report ', url:partnerImg1 },
    { name: 'Fygr', url: partnerImg2 },

];

export const METRICS = [
    {
        value: 100,
        suffix: '+',
        label: 'PROJETS RÉALISÉS',
        color: 'text-[#e51990]',
        details: ['Secteurs variés', 'PME & ETI', 'International']
    },
    {
        value: 98,
        suffix: '%',
        label: 'SATISFACTION CLIENTS ',
        color: 'text-[#0b1a9c]',
        details: ['Fidélisation forte', 'Recommandation', 'Suivi long terme']
    },
    {
        value: 55,
        suffix: '+',
        label: 'OUTILS FINANCE DÉPLOYÉS',
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
        title: "Audit & Diagnostic des processus financier",
        icon: BarChart3,
        link: "/expertises/audit",
        description: "Une analyse approfondie de votre organisation actuelle pour évaluer la maturité de votre direction finance, identifier les risques, les leviers d’efficacité et prioriser les actions.",
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
        description: "Transformation de votre écosystème financier par la mise en place de facturation électronique et l'intégration d'outils modernes d’automatisation des tâches à faible valeur ajoutée.",
        benefits: ["Gain de productivité", "conformité règlementaire ", "Données temps réel"]
    },
    {
        id: 4,
        category: 'performance',
        title: "Pilotage financier et Performance",
        icon: PieChart,
        link: "/expertises/pilotage-financier",
        description: "Mise en place de tableaux de bord dynamiques et de KPIs pertinents pour piloter votre activité avec précision et anticiper l'avenir.",
        benefits: ["Dashboards automatisés", "Culture du cash", "Prévisions fiables"]
    },
    {
        id: 5,
        category: 'performance',
        title: "Expertises Financières et opérations stratégiques",
        icon: Rocket,
        link: "/expertises/expertises-avancees",
        description: "Accompagnement sur mesure dans la préparation et la sécurisation de vos opérations structurantes : levées de fonds, croissance externe, refinancement ou exigences réglementaires spécifiques.\n" +
            "Nous intervenons en amont pour fiabiliser vos données, structurer et renforcer votre crédibilité auprès de vos partenaires.",
        benefits: ["Fiabilité et conformité ", "Crédibilité renforcée ", "Pilotage financier sécurisé "]
    }
];

export const CASE_STUDIES = [
    {
        title: "Optimisation de la trésorerie",
        image: homeOptimisation,
        points: [
            "Audit complet des flux",
            "Mise en place de Agicap",
            "Réduction du BFR de 20%"
        ]
    },
    {
        title: "Refonte du Reporting",
        image: RefonteReportingImg,
        points: [
            "Implémentation de Finthesis ",
            "Tableaux de bord KPIs automatisés",
            "Gain de 5 jours sur la clôture"
        ]
    },
    {
        title: "Digitalisation Factures",
        image: homeDigitalisation,
        points: [
            "Intégration Yooz et Spendesk",
            "Workflow de validation Factures et note de frais",
            "Facturation électronique conforme"
        ]
    },
    {
        title: "Automatisation Paie",
        image: AutomatisationImg,
        points: [
            "Migration vers Silae",
            "Connexion comptable native",
            "Fiabilité des bulletins assurée"
        ]
    },
    {
        title: "Structuration Financière",
        image: structurationFinanciere,
        points: [
            "Mise en place de procédures",
            "Sécurisation des paiements",
            "Audit interne renforcé"
        ]
    }
];

export const TESTIMONIALS = [
    {
        text: "L’accompagnement de Finavia a été décisif pour sécuriser et structurer l’intégration des entreprises rachetées, dans un contexte de multi-acquisitions sur des périmètres et modèles économiques distincts.",
        author: "Geoffroy D.",
        role: "CFO, ETI – Groupe Cybersécurité",
        image: geoffroyImg
    },
    {
        text: "Grâce à l'automatisation mise en place, nous avons gagné 4 jours sur nos clôtures mensuelles. Une efficacité redoutable.",
        author: "Rami M.",
        role: "RAF, Grand Groupe – Industrie jeu-vidéo",
        image: ramiImg
    },
    {
        text: "La gestion de la paie est enfin fiabilisée. Les outils connectés nous font gagner un temps précieux chaque mois.",
        author: "Imane Y.",
        role: "DRH, PME – Industrie et bâtiment",
        image: imanImg
    },
    {
        text: "L'implémentation de Pennylane s'est faite sans douleur grâce à l'expertise de l'équipe. Nos processus sont désormais fluides et sécurisés.",
        author: "Claire G.",
        role: "DAF, PME – Solutions numériques innovantes",
        image: claireImg
    },
    {
        text: "Une vision stratégique qui nous manquait cruellement. Les tableaux de bord mis en place nous permettent enfin de piloter nos marges.",
        author: "Michael L.",
        role: "CEO, Franchise automobile",
        image: michaelImg
    },
    {
        text: "Une clarté retrouvée dans nos flux de trésorerie. Nous pouvons enfin anticiper nos besoins de financement avec sérénité.",
        author: "Thierry D.",
        role: "DAF, ETI – Sport et bien-être",
        image: thierryImg
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
            desc: "Plus de 15 ans d'expérience en Direction comptable et transformation digitale des fonctions finance. Experte en structuration de processus comptable, déploiement d'outils finance et management d'équipes dans des environnements en forte croissance. Passionnée par l'optimisation opérationnelle des Direction finance dans la modernisation.",
            image: virginieImg,
            linkedin: "#"
        },
        {
            name: "Nadia Souissi",
            role: "Co-fondatrice & Associée",
            desc: "Plus de 15 ans d'expérience en comptabilité générale et transformation digitale des services financiers. Experte en structuration de processus, dématérialisation et optimisation des systèmes comptables. Passionnée par l'automatisation intelligente et l'accompagnement des équipes vers plus d'efficacité opérationnelle.",
            image: nadiaImg,
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
            title: "Accessibilité & Handicap",
            text: "Nous veillons à rendre nos solutions et recommandations accessibles à tous, en favorisant l'inclusion des personnes en situation de handicap dans les organisations que nous accompagnons.",
            icon: Leaf,
            bgClass: "bg-green-100",
            iconClass: "text-[#2d5a27]"
        },
        {
            title: "Égalité & Diversité",
            text: "Nous promouvons un environnement inclusif et garantissons l'égalité des chances, en intégrant systématiquement les principes de diversité dans nos interventions et dans les processus RH de nos clients.",
            icon: Scale,
            bgClass: "bg-pink-100",
            iconClass: "text-[#e51990]"
        },
        {
            title: "Responsabilité Environnementale",
            text: "Nous réduisons l'impact carbone par la dématérialisation des processus financiers et accompagnons nos clients vers des pratiques durables intégrant des critères ESG et des indicateurs de performance responsable.",
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
            imgSrc: diagnosticImg
        },
        {
            id: 2,
            title: "Proposition et Cadrage",
            subtitle: "Feuille de route stratégique",
            description: "Nous co-construisons le plan d'action. Pas de catalogue standard, mais une réponse précise à vos enjeux : choix des outils (ERP, reporting), définition du calendrier et allocation des ressources nécessaires.",
            benefits: ["Planning détaillé", "Budget validé", "KPIs de succès définis"],
            imgSrc: propositionImg
        },
        {
            id: 3,
            title: "Déploiement Opérationnel",
            subtitle: "Mise en œuvre technique",
            description: "Phase active de transformation : nettoyage des données, paramétrage des nouveaux outils, rédaction des procédures et mise en place des automatismes. Nous travaillons en immersion avec vos équipes.",
            benefits: ["Migration des données", "Configuration outils", "Documentation process"],
            imgSrc: deploiementImg
        },
        {
            id: 4,
            title: "Formation et Accompagnement",
            subtitle: "Conduite du changement",
            description: "Le meilleur outil ne sert à rien s'il n'est pas utilisé. Nous formons vos collaborateurs pour garantir une adoption rapide et durable des nouvelles méthodes de travail.",
            benefits: ["Ateliers pratiques", "Support utilisateurs", "Coaching managers"],
            imgSrc: formationImg
        },
        {
            id: 5,
            title: "Suivi & Performance",
            subtitle: "Amélioration continue",
            description: "La mission ne s'arrête pas au déploiement. Nous assurons un suivi mensuel pour analyser les premiers résultats, ajuster les paramétrages et ancrer les bonnes pratiques dans la durée.",
            benefits: ["Comités de pilotage", "Audit post-démarrage", "Plan de progrès"],
            imgSrc: suiviImg
        }
    ],
    advantages: [
        { icon: Target, title: "Processus clairs", desc: "Un plan d'action structuré, adapté à vos enjeux et priorités." },
        { icon: Users, title: "Solutions clés en main", desc: "Des méthodes et outils éprouvés, immédiatement opérationnels." },
        { icon: ShieldCheck, title: "Exécution opérationnelle", desc: "Nous prenons en charge la réalisation concrète : process, documentation, pilotage." },
        { icon: Clock, title: "Co-construction", desc: "Nous travaillons main dans la main avec vos équipes métiers et projets." },
        { icon: Zap, title: "Déploiement terrain", desc: "Nous garantissons l'adoption par un accompagnement au changement ciblé." }
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
        heroImage: auditHeroImg,
        ctaImage: auditCtaImage,
        description: "Analyse complète de la situation financière et organisationnelle de l'entreprise afin d'identifier les forces, les faiblesses et les axes prioritaires d'amélioration.",
        objectives: [
            "Évaluation globale des processus financiers",
            "Analyse des risques et des contrôles internes",
            "Recommandations prioritaires et plan d'action",
            "État des lieux détaillés des points de friction"
        ],
        deliverables: [
            "Rapport d'audit détaillé",
            "Cartographie des flux, outils et risques ",
            "Plan d'action opérationnel",
            "Analyse de la maturité"
        ],
        benefits: [
            "FEUILLE DE ROUTE CLAIRE",
            "SECURISATION DES ACTIFS DE L’ENTREPRISE",
            "AIDE A LA PRISE DE DECISION STRATÉGIQUE",
            "IDENTIFICATION DES LEVIERS DE PERFORMANCE"
        ]
    },
    'structuration-finance': {
        title: "Structuration de la Fonction Finance",
        icon: Settings,
        heroImage: structurationHeroImg,
        ctaImage: structurationCtaImage,
        description: "Structuration, organisation et montée en maturité de la direction finance pour garantir fiabilité, rapidité et efficacité des opérations.",
        objectives: [
            "Cartographie et optimisation des processus",
            "Documentation et création de référentiels opérationnels",
            "Renforcement des dispositifs de contrôle interne",
            "Accompagnement au changement et transfert de compétences"
        ],
        deliverables: [
            "Déploiement d’un calendrier de clôture (mensuel ou trimestriel) ",
            "Rapprochement entre la compta et les reportings de gestion",
            "Mise en place de process métier",
            "(Re)définition des rôles "
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
        heroImage: digitalisationHeroImg,
        ctaImage: digitalisationCtaImg,
        description: "Optimisation technologique des outils financiers, automatisation des tâches et mise en conformité avec les futures obligations de dématérialisation.",
        objectives: [
            "Sélection et implémentation d’outils finance",
            "Automatisation et digitalisation adaptés aux besoins métiers",
            "Réduire les tâches manuelles à faible valeur ajoutée",
            "Améliorer la fiabilité et la qualité des données "
        ],
        deliverables: [
            "Préparation à la facturation électronique 2026 ",
            "Intégration de l’IA dans les tâches répétitives ",
            "Sélection, paramétrage et déploiement d’outils finance adaptés ",
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
        heroImage: pilotageHeroImg,
        ctaImage: pilotageCtaImg,
        description: "Mise en place d'outils et de méthodes de pilotage permettant une vision claire, prédictive et orientée décision.",
        objectives: [
            "Définition des instances de pilotage et des comités adaptés aux besoins de la direction",
            "Mise en place d'indicateurs de suivi KPI, KRI et autres",
            "Construction ou fiabilisation du reporting (clôture, trésorerie, intercos, contrôles)",
            "Mise en place des processus de collecte et organisation de la remontée d'information"
        ],
        deliverables: [
            "Alignement des KPI avec les priorités de la direction",
            "Suivi de la rentabilité (marge brute, EBITDA) ",
            "Analyse du BFR et plans d’action sur la trésorerie ",
            "Tableaux de bord sur mesure (Power BI) "
        ],
        benefits: [
            "Tableaux de bord de gestion dynamiques",
            "Budget prévisionnel et atterrissage",
            "Plan de trésorerie glissant",
            "Reporting mensuel automatisé"
        ]
    },
    'expertises-avancees': {
        title: "Expertises Financières Avancées",
        icon: Rocket,
        heroImage: expertisesHeroImg,
        ctaImage: expertisesCtaImg,
        description: "Accompagnement spécialisé sur les enjeux financiers complexes, stratégiques ou à forte valeur ajoutée.",
        objectives: [
            "Opérations de restructuration financière",
            "Fiabilisation des données à transmettre à un fonds / une banque",
            "Mise à niveau de la fonction finance post-levée ",
            "Accélération de la transformation post-reprise ou post-fusion "
        ],
        deliverables: [
            "Préparation des présentations stratégiques et financières",
            "Dossier de financement bancaire/investisseur",
            "Reporting consolidé multi-entités",
            "Revue fiscale et réglementaire"
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
    // Existing (Verified)
    pennylane: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/69b204c08a820f594710ee1bbe6e01ad.png",
    spendesk: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/d55b7eaa24d1489f1e171595fd9c26be.png",
    agicap: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/c73c301d18e3913447042b755ed5c82b.png",
    regate: "https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/58c9aa638e910165c9d9a0a31919a77d.png",


    fygr: "https://cdn.prod.website-files.com/61b07ae5cfb75630fbc03d22/6379f6e396fd6b5dd3837b82_Logo_Fygr.svg",
    sage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAgCAMAAABw3UvaAAAAaVBMVEX///8A1TEA1jcA1CkA1CMA0xr2/vi58MLz/fYA0QBo4n6k7LD7//2r7bY521l55ItB3F6Z6qaN55sx2lOI55jY995I3WTJ9NHl+ukm2Uyz771R3mt044bS9tjF880a2ERa4HLt/PCA5ZHZ7UzHAAACJUlEQVQ4jZVV25arMAgNgVg1Veu1Wm+p//+Rh1y068zMWjPhpUHYSDYbK4QQN7PLsnmLSEtKAjZUOhLYMmqpSpKqiMK9CGb/K/EeA5wlpu7QAd1igFK2/tATNnHA3R/uKouiZ5D09KfxGYMTmkn5erf0P5aS5OfgBJLa1yfwnIGwPUeTHhJRLmNwVxssw5VmBRKpCsrJFSAiUOkKbwrZBQjqqBRYl3afvA0MDbEcJXa6Y1E82OuVpEFro7w6OlZJrusSwRK6cZtjByhVzX0q6ardJ0n8vARy5Z4cTWwZ7K3bIGqxZZljs+Jqb2GAVtfFqGDgTMj9BWqbWgEGLnYOcqq/eQ5Y8FRloKGVKAo8CR8JFjFZUd6PfFls2qWclaAT/mrWDKhEI21hJAqM18ots9zhwN50FT3Efr0xB3q/EJqr6iEegIm4L4atS61yfKvcV2HTtw9wZFL74KnNclJ/5l2QbO16jKyDVKxKwnoBxcwPaztQnTFLb5J+gbZd9U45mDeG3DjEwsG5MrkFjiIFDmK1hpdo7uDRHBPncl9J6z4doDoXXJR1spGb44EmxmqDpteJZOXYz4y/+mtQPLCz7JqjwoPZ8/z2FRE3PAcGq0nh1J3S/cW2mTfo8XveT1CWXMy2pqUJpwKhiwBqOt+TWuX83ZwmnL0vuf/JeI+CHrXdjghjdRornM3tY4SNJAHzpY3+fxDj5P+RKBLHdlvKydTpt+f/ANKxGsLyet1sAAAAAElFTkSuQmCC",
    finthesis: "https://www.finthesis.io/favicon.ico",
    myreport: "https://www.myreport.fr/favicon.ico",
    yooz: "https://www.getyooz.com/wp-content/uploads/logo-yooz-workmark-1.svg",
    copilot: "data:image/png;base64,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",
    openai: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
};

export const TRANSFORMATION_OBJECTIVES = [
    {
        icon: Rocket,
        title: "Créer une direction financière performante",
        desc: "Déployez les fondamentaux d'une finance moderne et agile avec les meilleurs outils du marché.",
        logos: [
            PARTNER_LOGOS.pennylane,
            PARTNER_LOGOS.sage,
            PARTNER_LOGOS.agicap,
            PARTNER_LOGOS.spendesk,
            PARTNER_LOGOS.copilot
        ]
    },
    {
        icon: LayoutDashboard,
        title: "Structurer la direction financière",
        desc: "Organisez vos flux d'information et centralisez la donnée pour une vision 360°.",
        logos: [
            PARTNER_LOGOS.pennylane,
            PARTNER_LOGOS.regate,
            PARTNER_LOGOS.fygr,
            PARTNER_LOGOS.myreport,
            PARTNER_LOGOS.finthesis
        ]
    },
    {
        icon: Zap,
        title: "Digitaliser les workflows et automatiser",
        desc: "Éliminez les tâches manuelles répétitives grâce à l'IA et l'automatisation des flux.",
        logos: [
            PARTNER_LOGOS.yooz,
            PARTNER_LOGOS.spendesk,
            PARTNER_LOGOS.copilot,
            PARTNER_LOGOS.openai,
            PARTNER_LOGOS.regate
        ]
    },
    {
        icon: Database,
        title: "Fiabiliser le pilotage et le reporting",
        desc: "Gagnez en visibilité avec des reportings fiables, précis et disponibles en temps réel.",
        logos: [
            PARTNER_LOGOS.finthesis,
            PARTNER_LOGOS.myreport,
            PARTNER_LOGOS.agicap,
            PARTNER_LOGOS.fygr,
            PARTNER_LOGOS.sage
        ]
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
        tag: "SÉLECTION DE LA SOLUTION",
        title: "Identifier l'outil adapté à vos besoins spécifiques ",
        image: integrationImg,
        color: "bg-[#07036e]/10",
        actions: "Analyser les besoins métiers, établir un cahier des charges, comparer les solutions du marché et négocier les conditions contractuelles.",
        benefits: "Garantir un investissement aligné avec les priorités de l'entreprise et minimiser les risques d'inadéquation fonctionnelle."
    },
    {
        id: "02",
        tag: "PARAMÉTRAGE",
        title: "Configurer l'outil selon les processus et les référentiels financiers",
        image: reportingImg,
        color: "bg-[#e51990]/10",
        actions: "Définir les plans comptables, créer les workflows de validation,  établir les connexions avec les systèmes existants.",
        benefits: "Assurer la cohérence des données financières et l’adaptation de l'outil aux spécificités métiers de l'organisation."
    },
    {
        id: "03",
        tag: "DÉPLOIEMENT",
        title: "Accompagner la transition et la mise en production de la nouvelle solution",
        image: analytiqueImg,
        color: "bg-[#07036e]/10",
        actions: "Migrer les données historiques, mettre en place le support utilisateurs et valider le bon fonctionnement opérationnel.",
        benefits: "Garantir la continuité opérationnelle et sécuriser l'intégrité des données."
    },
    {
        id: "04",
        tag: "FORMATION",
        title: "Développer les compétences des utilisateurs ",
        image: accompagnementImg,
        color: "bg-[#e51990]/10",
        actions: "Animer des parcours de formation adaptés aux profils et évaluer la montée en compétence.",
        benefits: "Maximiser l'adoption de l'outil grâce à des supports de référence et réduire la dépendance aux supports externes."
    }
];

export const TECH_PARTNERS_LIST = [
    {
        category: "Outils de Trésorerie",
        icon: BarChart3,
        partners: [
            { name: "AGICAP", logo: PARTNER_LOGOS.agicap },
            { name: "FYGR", logo: PARTNER_LOGOS.fygr }
        ]
    },
    {
        category: "Outils de Comptabilité",
        icon: Database,
        partners: [
            { name: "Pennylane", logo: PARTNER_LOGOS.pennylane },
            { name: "SAGE", logo: PARTNER_LOGOS.sage }
        ]
    },
    {
        category: "Outils de Reporting & BI",
        icon: LayoutDashboard,
        partners: [
            { name: "Finthesis", logo: PARTNER_LOGOS.finthesis },
            { name: "My Report", logo: PARTNER_LOGOS.myreport }
        ]
    },
    {
        category: "Dépenses & Pré-comptabilité",
        icon: ShieldCheck,
        partners: [
            { name: "Yooz", logo: PARTNER_LOGOS.yooz },
            { name: "Spendesk", logo: PARTNER_LOGOS.spendesk },
            { name: "Regate", logo: PARTNER_LOGOS.regate }
        ]
    },
    {
        category: "Automation & IA",
        icon: Cpu,
        partners: [
            { name: "Microsoft Copilot", logo: PARTNER_LOGOS.copilot },
            { name: "Open AI", logo: PARTNER_LOGOS.openai }
        ]
    }
];