export interface DirectivaMember {
  name: string;
  role: string;
  image: string;
}

export interface AreaItem {
  id: string;
  name: string;
  slogan: string;
  description: string;
  director: string;
  directorImage: string;
  badgeColor: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface PricingOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconImage: string;
}

export const INNOVA_INFO = {
  name: "Cedipro Innova UCSP",
  shortName: "Innova UCSP",
  kicker: "COMUNIDAD DE GESTIÓN & INNOVACIÓN TECNOLÓGICA",
  heroTitle: "TU VISIÓN DIGITAL PUEDE IR MÁS ALLÁ",
  heroDescription: "Promovemos una cultura sólida de gestión de proyectos y desarrollo tecnológico en la UCSP, combinando metodologías ágiles, cooperación interdisciplinaria y excelencia en diseño visual.",
  mission: "Promover una cultura sólida de gestión de proyectos en la UCSP, basada en buenas prácticas, colaboración efectiva y desarrollo profesional continuo. Impulsamos actividades académicas y espacios de aprendizaje que fortalecen la autonomía, la responsabilidad y la excelencia en la formación de nuestra comunidad.",
  vision: "Ser una comunidad referente en gestión de proyectos, reconocida por formar profesionales capaces de diseñar soluciones innovadoras, integradoras y sostenibles, mediante la cooperación interdisciplinaria, el pensamiento crítico y el compromiso con la comunidad de la UCSP.",
  location: "Arequipa, Perú | Universidad Católica San Pablo (UCSP)",
  contactEmail: "contacto@innovaucsp.dev"
};

export const DIRECTIVA: DirectivaMember[] = [
  {
    name: "Abigail Yajahira Romero Ramirez",
    role: "Presidenta",
    image: "/Imagenes/presidenta.jpg"
  },
  {
    name: "Maxwell Fabricio Yauri Mamani",
    role: "Vicepresidente",
    image: "/Imagenes/director_ti.png"
  },
  {
    name: "Frandux Brayan Cardenas Pacheco",
    role: "Director de TI",
    image: "/Imagenes/Franduxcitolindo.jpg"
  },
  {
    name: "Jorge Molina Quispe",
    role: "Director de Talento Humano",
    image: "/Imagenes/Director_th2.jpg"
  },
  {
    name: "Víctor Manuel Moreno Delgado",
    role: "Director de P.M.O",
    image: "/Imagenes/director_pmo.png"
  },
  {
    name: "Diego R. Justo Presbitero",
    role: "Director de Logística",
    image: "/Imagenes/director_log.png"
  },
  {
    name: "Jimena Yunet David Cardenas",
    role: "Directora de Marketing",
    image: "/Imagenes/directora_mkt2.png"
  },
  {
    name: "Andrea del Rosario Alarcon Sarmiento",
    role: "Directora de R.I",
    image: "/Imagenes/Directora_RI4.jpg"
  }
];

export const AREAS: AreaItem[] = [
  {
    id: "pmo",
    name: "Área de P.M.O.",
    slogan: "“Lidera y logra con éxito tus ideas”",
    description: "Se encarga de la planificación, ejecución y monitoreo de los proyectos de Innova UCSP, aplicando metodologías de gestión para asegurar su éxito y alineación con los objetivos estratégicos.",
    director: "Víctor Manuel Moreno Delgado",
    directorImage: "/Imagenes/director_pmo.png",
    badgeColor: "#d4af37"
  },
  {
    id: "ti",
    name: "Área de Tecnologías de la Información",
    slogan: "“Soñamos, innovamos y logramos”",
    description: "Encargada de desarrollar, gestionar y optimizar herramientas digitales para mejorar la eficiencia de la organización. Brinda soporte tecnológico y promueve la innovación en los proyectos de Innova UCSP.",
    director: "Frandux Brayan Cardenas Pacheco",
    directorImage: "/Imagenes/Franduxcitolindo.jpg",
    badgeColor: "#e2e8f0"
  },
  {
    id: "mkt",
    name: "Área de Marketing",
    slogan: "“Promocionando ideas con el corazón”",
    description: "Lidera la identidad visual y la estrategia de comunicación de Innova UCSP. Gestiona redes sociales, contenido digital y difusión de eventos para fortalecer la presencia y conexión con la comunidad.",
    director: "Jimena Yunet David Cardenas",
    directorImage: "/Imagenes/directora_mkt2.png",
    badgeColor: "#8a1c14"
  },
  {
    id: "ri",
    name: "Área de Relaciones Interinstitucionales",
    slogan: "“Formando alianzas para seguir creciendo”",
    description: "Establece y mantiene alianzas estratégicas con empresas, instituciones y organizaciones externas e internas. Gestiona oportunidades de colaboración para potenciar el impacto de Innova UCSP.",
    director: "Andrea del Rosario Alarcon Sarmiento",
    directorImage: "/Imagenes/Directora_RI4.jpg",
    badgeColor: "#d4af37"
  },
  {
    id: "th",
    name: "Área de Talento Humano",
    slogan: "“Personas que inspiran, talento que transforma”",
    description: "Fomenta el crecimiento y bienestar de los miembros de Innova UCSP. Desarrolla estrategias de reclutamiento, capacitación e integración para fortalecer el equipo y su compromiso con la organización.",
    director: "Jorge Molina Quispe",
    directorImage: "/Imagenes/Director_th2.jpg",
    badgeColor: "#e2e8f0"
  },
  {
    id: "log",
    name: "Área de Logística",
    slogan: "“Gestión que impulsa la transformación”",
    description: "Nuestra área garantiza la correcta gestión y ejecución de eventos y actividades, asegurando que los recursos, espacios y materiales estén disponibles para el desarrollo óptimo de cada iniciativa.",
    director: "Diego R. Justo Presbitero",
    directorImage: "/Imagenes/director_log.png",
    badgeColor: "#8a1c14"
  }
];

export const PROJECTS_AND_MILESTONES: ProjectMilestone[] = [
  {
    id: "demon-hub",
    title: "Organización del Demon InnovationHub",
    category: "Gestión & Innovación",
    image: "/Imagenes/img11.jpg",
    description: "Espacio interinstitucional de prototipado y diseño de soluciones interdisciplinarias en la UCSP.",
    featured: true
  },
  {
    id: "congreso-pmi",
    title: "Congreso Internacional PMI 2024",
    category: "Liderazgo PMO",
    image: "/Imagenes/img8.png",
    description: "Representación institucional e intercambio de mejores prácticas de project management a nivel global.",
    featured: true
  },
  {
    id: "rio-chili",
    title: "Ayuda y Limpieza del Río Chili",
    category: "Impacto Sostenible",
    image: "/Imagenes/img5.jpg",
    description: "Iniciativa de responsabilidad social y voluntariado articulada por nuestro equipo de Logística y Talento Humano.",
    featured: true
  },
  {
    id: "pmi-sur",
    title: "Encuentro Regional PMI SUR",
    category: "Alianzas R.I.",
    image: "/Imagenes/img15.jpg",
    description: "Consolidación de redes estratégicas con líderes de proyectos de la región sur del Perú.",
    featured: true
  },
  {
    id: "aniversario",
    title: "Aniversario Cedipro-Innova",
    category: "Comunidad & Cultura",
    image: "/Imagenes/img10.jpg",
    description: "Celebración de nuestra trayectoria formando gestores y líderes tecnológicos en la universidad.",
    featured: false
  },
  {
    id: "eco-canje",
    title: "Participación en Eco Canje UCSP",
    category: "Sostenibilidad",
    image: "/Imagenes/img20.jpg",
    description: "Promoción activa de iniciativas ecológicas y concientización ambiental en el campus.",
    featured: false
  },
  {
    id: "ponencias",
    title: "Ciclo de Ponencias & Masterclasses",
    category: "Educación Continua",
    image: "/Imagenes/img9.jpg",
    description: "Talleres especializados impartidos por directores y ponentes invitados en ágiles y tecnología.",
    featured: false
  },
  {
    id: "albergue-perritos",
    title: "Visita y Apoyo a Albergue Canino",
    category: "Responsabilidad Social",
    image: "/Imagenes/visitaperritos.jpg",
    description: "Acción social comunitaria para apoyar el bienestar animal con la colaboración de nuestros miembros.",
    featured: false
  },
  {
    id: "semana-industrial",
    title: "Semana de Ingeniería Industrial",
    category: "Articulación Académica",
    image: "/Imagenes/img21.jpg",
    description: "Presencia e impulso de innovación y gestión de proyectos en el departamento de Ingeniería Industrial.",
    featured: false
  },
  {
    id: "reuniones-alianzas",
    title: "Reuniones de Alianzas Estratégicas",
    category: "Relaciones R.I.",
    image: "/Imagenes/Fondoorganizaciones.jpg",
    description: "Mesa de diálogo permanente con organizaciones universitarias y corporativas externas.",
    featured: false
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Ideación & PMO",
    subtitle: "Alineación Estratégica",
    description: "Definición clara del alcance, objetivos y viabilidad del proyecto bajo estándares internacionales de Project Management y OKRs."
  },
  {
    number: "02",
    title: "Diseño & Comunicación",
    subtitle: "Identidad Visual (Marketing)",
    description: "Creación de una presencia visual memorable, diseño de interfaz (UI/UX) y estrategias de difusión dirigidas por el Área de Marketing."
  },
  {
    number: "03",
    title: "Desarrollo High-End",
    subtitle: "Arquitectura TI",
    description: "Construcción tecnológica robusta con Astro, TypeScript y Tailwind CSS, garantizando velocidad extrema, animaciones fluidas y escalabilidad."
  },
  {
    number: "04",
    title: "Talento & Logística",
    subtitle: "Coordinación Operativa",
    description: "Aseguramiento de recursos, materiales y capital humano cohesionado para que cada fase del proyecto se ejecute con precisión."
  },
  {
    number: "05",
    title: "Lanzamiento & Alianzas",
    subtitle: "Impacto R.I.",
    description: "Entrega final del proyecto e impulso mediante redes interinstitucionales, maximizando la visibilidad y sostenibilidad a largo plazo."
  }
];

export const PRICING_BASE = 1290;

export const PRICING_OPTIONS: PricingOption[] = [
  {
    id: "plataforma-ti",
    name: "Desarrollo Web App & Arquitectura TI",
    description: "Plataforma interactiva a medida desarrollada en Astro 5 y TypeScript con rendimiento ultra rápido.",
    price: 850
  },
  {
    id: "animaciones-3d",
    name: "Animaciones 3D (Three.js) & GSAP",
    description: "Escenas 3D abstractas y microinteracciones de scroll nivel Awwwards personalizadas con tu identidad.",
    price: 640
  },
  {
    id: "consultoria-pmo",
    name: "Consultoría de Gestión PMO & OKRs",
    description: "Estructuración completa del cronograma, métricas ágiles y tableros de seguimiento estratégico.",
    price: 520
  },
  {
    id: "estrategia-mkt",
    name: "Branding Editorial & Estrategia de Marketing",
    description: "Identidad visual de alto nivel, piezas gráficas e impulso comunicacional integral.",
    price: 480
  },
  {
    id: "alianzas-ri",
    name: "Articulación y Alianzas Interinstitucionales",
    description: "Conexión estratégica con organizaciones externas y coordinación logística para eventos.",
    price: 390
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Qué es exactamente Cedipro Innova UCSP y cómo puedo unirme?",
    answer: "Somos una comunidad estudiantil e institucional en la Universidad Católica San Pablo (UCSP) especializada en la gestión ágil de proyectos (PMO), el desarrollo de tecnologías digitales y la innovación interdisciplinaria. Realizamos convocatorias periódicas impulsadas por nuestra Área de Talento Humano abiertas a estudiantes apasionados por liderar y transformar ideas en realidad."
  },
  {
    question: "¿Cómo trabajan de forma articulada sus 6 áreas institucionales?",
    answer: "Nuestro modelo se basa en la cooperación continua: PMO define el rumbo y cronograma; TI desarrolla la infraestructura digital; Marketing crea la identidad visual y comunicación; Logística asegura los recursos operativos; Talento Humano fortalece a nuestro equipo; y Relaciones Interinstitucionales (R.I.) expande nuestro impacto mediante alianzas estratégicas."
  },
  {
    question: "¿Qué tecnologías y metodologías aplican en sus proyectos y plataformas?",
    answer: "En el plano técnico, desarrollamos sistemas web de alta gama utilizando Astro 5, TypeScript, Tailwind CSS v4, Three.js para entornos 3D y GSAP para animaciones avanzadas. En el plano de gestión, aplicamos marcos ágiles como Scrum, tableros Kanban y gestión por OKRs (Objetivos y Resultados Clave)."
  },
  {
    question: "¿Ofrecen asesoría, talleres o consultoría a otras organizaciones?",
    answer: "¡Sí! A través de nuestras áreas directivas y de R.I., brindamos masterclasses, talleres de Project Management, consultoría en innovación digital y colaboraciones conjuntas para impulsar el ecosistema universitario y corporativo."
  },
  {
    question: "¿Por qué el diseño de este sitio sigue una estética editorial y 3D (Estilo Obermann)?",
    answer: "Creemos firmemente en el lema 'Tu visión digital puede ir más allá'. Al adoptar una arquitectura visual nivel Awwwards —con fondos oscuros satinados, destellos en carmesí/dorado/plateado y geometrías 3D— demostramos nuestro estándar de excelencia, diferenciándonos de plantillas genéricas y transmitiendo un impacto verdaderamente memorable."
  }
];

export const REDES_SOCIALES: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/Sediproucsp/?locale=es_LA",
    iconImage: "/Imagenes/Logo_fb.png"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/innovaucsp/?hl=es",
    iconImage: "/Imagenes/Logo_ig.png"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/cedipro-innova-ucsp/?originalSubdomain=pe",
    iconImage: "/Imagenes/Logo_Linkedin.png"
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@cediproinnovaucsp?_t=ZS-8ztwvNOpcLH&_r=1",
    iconImage: "/Imagenes/logo_tick.jpg"
  }
];
