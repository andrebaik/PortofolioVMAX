// Projects data with detailed case study information
export const projects = [
  {
    id: "chatbot-rag-ai",
    title: "Chatbot RAG (Qwen2.5 + FastAPI)",
    type: "AI & Full Stack",
    featured: true,
    image: "/img/chatbot.webp",
    thumbnail: "/img/chatbot.webp",
    description:
      "Sistem AI Chatbot RAG berbahasa Indonesia dengan LLM Qwen2.5-3B, ChromaDB vector store, dan streaming response.",

    overview:
      "Aplikasi Retrieval-Augmented Generation (RAG) cerdas yang menggabungkan model LLM Qwen2.5-3B-Instruct (4-bit quantized) dengan ChromaDB untuk menjawab pertanyaan berbasis dokumen PDF secara akurat. Backend dibangun menggunakan FastAPI dengan arsitektur streaming SSE, diintegrasikan ke antarmuka web modern React dan TailwindCSS dengan evaluasi skor ROUGE.",

    problem: {
      title: "The Challenge",
      description:
        "Traditional static documents and simple keyword search fail to provide direct, context-aware answers to user queries in Bahasa Indonesia.",
      points: [
        "Static PDFs and guidelines are tedious and slow for users to read through",
        "Generic LLMs suffer from hallucination and lack private domain context",
        "High latency on large model inferences without streaming responses",
        "Need objective evaluation to benchmark answer relevance against ground truth",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "An end-to-end RAG architecture with local vector indexing, quantized inference, and server-sent events for low-latency streaming.",
      points: [
        "Extracted and chunked PDF domain documents into ChromaDB vector embeddings",
        "Implemented similarity retrieval with prompt augmentation for 0% hallucination",
        "FastAPI backend with SSE streaming for immediate token-by-token responses",
        "Automated evaluation benchmark comparing outputs using ROUGE metrics",
      ],
    },

    features: [
      "Qwen 2.5 3B quantized LLM local execution",
      "ChromaDB persistent vector similarity search",
      "Server-Sent Events (SSE) token streaming",
      "PDF document ingestion and recursive chunking",
      "ROUGE evaluation metric benchmarking",
      "Responsive React & TailwindCSS interface",
      "Indonesian domain language optimization",
      "Low-latency FastAPI asynchronous backend",
    ],

    technologies: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Qwen 2.5",
      "RAG",
      "React",
      "TailwindCSS",
    ],

    role: "AI & Full Stack Engineer",
    duration: "Academic / Research",
    year: "2024",

    screenshots: [
      {
        url: "/img/chatbot.webp",
        caption: "Chatbot RAG streaming interface",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "4-bit", label: "Quantized LLM" },
        { value: "<250ms", label: "TTFT latency" },
        { value: "ROUGE", label: "Scoring benchmark" },
      ],
    },

    learnings: [
      "Optimizing vector retrieval thresholds and chunk overlap strategies",
      "Streaming async generators via FastAPI SSE to React clients",
      "Benchmarking LLM semantic accuracy using ROUGE-1/2/L metrics",
      "Quantization techniques for running 3B models efficiently",
    ],

    demoLink: "",
    codeLink: "https://github.com/andrebaik/UAS-KecerdasanBuatan.git",

    caseFile: {
      client: "Informatics Lab Research",
      highlight: "Retrieval-Augmented Generation & Vector Search",
      quote: "accurate context-grounded answers with zero hallucination",
      caption: "chatbot-rag — architecture",
      issues: [
        { title: "Generic LLM hallucination", text: "Standard models make up facts when answering niche document questions." },
        { title: "Slow token delivery", text: "Batch HTTP responses feel sluggish to users waiting for full answers." },
        { title: "No verification metric", text: "Hard to quantify quality without automated text similarity benchmarks." },
      ],
      flows: [
        { label: "RAG Pipeline", nodes: ["Query", "ChromaDB", "Qwen 2.5", "FastAPI SSE", "React UI"], ping: 2, pingText: "retrieved!" },
      ],
      notes: ["Local vector embeddings", "Benchmarked with ROUGE metrics"],
    },
    metaDescription:
      "Sistem AI Chatbot RAG berbahasa Indonesia dengan LLM Qwen2.5-3B, ChromaDB vector store, dan streaming response.",
  },
  {
    id: "workin-job-board",
    title: "Work'in — Job Board Platform",
    type: "Full Stack Web",
    featured: true,
    image: "/img/job-board.webp",
    thumbnail: "/img/job-board.webp",
    description:
      "Platform pencarian kerja dan manajemen lowongan multi-role (Seeker, Employer, Admin) dengan tracking real-time.",

    overview:
      "Solusi platform rekrutmen lengkap yang menghubungkan pencari kerja dengan perusahaan. Dilengkapi autentikasi berbasis peran (Job Seeker, Employer, Admin), posting lowongan interaktif, sistem pelacakan lamaran kerja real-time, dan dashboard analitik manajemen talenta dengan performa tinggi berbasis Express.js dan MySQL.",

    problem: {
      title: "The Challenge",
      description:
        "Job seekers struggle with opaque application statuses while employers need structured workflows to manage high candidate volumes.",
      points: [
        "Opaque recruitment processes leave candidates without status updates",
        "Employers lack clean dashboards to filter candidates and manage job postings",
        "Manual candidate status updates are time-consuming and error-prone",
        "Fragmented permission models create security risks across roles",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "A comprehensive multi-role job board with role-based access control, application status tracking, and employer analytics.",
      points: [
        "Real-time application pipeline tracking with clear status progression",
        "Intuitive employer portal for posting jobs, managing applicants, and metrics",
        "Strict role-based authentication separating Job Seeker, Employer, and Admin",
        "Optimized MySQL schema and Express.js REST API for rapid queries",
      ],
    },

    features: [
      "Multi-role RBAC authentication system",
      "Interactive job search with multi-filter queries",
      "Applicant tracking workflow and status timeline",
      "Employer talent dashboard and analytics",
      "Resume upload and candidate profile management",
      "Responsive modern UI with React 19 and Tailwind",
      "RESTful API architecture with Express.js",
      "MySQL relational database schema design",
    ],

    technologies: [
      "React 19",
      "Express.js",
      "MySQL",
      "TailwindCSS",
      "Node.js",
      "Vite",
    ],

    role: "Full Stack Developer",
    duration: "Production Project",
    year: "2024",

    screenshots: [
      {
        url: "/img/job-board.webp",
        caption: "Work'in job portal dashboard",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "3", label: "User Roles (RBAC)" },
        { value: "Real-time", label: "Application Tracking" },
        { value: "100%", label: "Responsive UI" },
      ],
    },

    learnings: [
      "Architecting scalable relational schemas for jobs, applicants, and resumes",
      "Implementing robust JWT-based role authentication in Node.js/Express",
      "Building reactive forms and search filters in React 19",
    ],

    demoLink: "https://job-board-tau-rosy.vercel.app",
    codeLink: "https://github.com/andrebaik/Job-Board.git",

    caseFile: {
      client: "Talent Acquisition Solution",
      highlight: "end-to-end multi-role recruitment platform",
      quote: "seamless talent connection with real-time status visibility",
      caption: "workin — talent portal",
      issues: [
        { title: "No applicant tracking", text: "Job seekers never knew if their applications were reviewed or rejected." },
        { title: "Messy employer workflows", text: "Hiring managers had to sift through unformatted resumes manually." },
        { title: "Role permission collisions", text: "Needed bulletproof RBAC guarding sensitive hiring actions." },
      ],
      flows: [
        { label: "Hiring Flow", nodes: ["Seeker", "Application", "Express API", "MySQL", "Employer Review"], ping: 1, pingText: "applied!" },
      ],
      notes: ["Role-based access control", "Live deployed on Vercel"],
    },
    metaDescription:
      "Platform pencarian kerja dan manajemen lowongan multi-role dengan tracking real-time berbasis Express.js dan MySQL.",
  },
  {
    id: "xolearn-diagnostic-platform",
    title: "Xolearn — Diagnostic Platform",
    type: "EdTech & Web",
    featured: true,
    image: "/img/xoralearn.webp",
    thumbnail: "/img/xoralearn.webp",
    description:
      "Platform Evidence-Based Learning Diagnostic untuk memetakan asesmen konsep, mendeteksi gap, dan remediasi terarah.",

    overview:
      "Platform diagnostik pembelajaran adaptif yang menganalisis bukti jawaban siswa untuk mengidentifikasi akar kelemahan pemahaman materi (root-cause navigator). Membantu pengajar dan siswa dengan visualisasi penguasaan konsep, rekomendasi materi belajar yang dipersonalisasi, dan pelacakan perkembangan belajar berbasis data analitik akurat.",

    problem: {
      title: "The Challenge",
      description:
        "Traditional grading tells students what score they got, but never why they failed or which foundational concepts they misunderstood.",
      points: [
        "Standard test scores mask foundational conceptual misunderstandings",
        "Educators lack data-driven diagnostics to prescribe targeted remediation",
        "Students waste time re-studying topics they already understand",
        "Manual tracking of concept dependency trees is impractical at scale",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "An evidence-based diagnostic platform mapping answers to conceptual graphs to reveal root-cause learning gaps.",
      points: [
        "Root-cause diagnostic engine mapping student errors to knowledge prerequisites",
        "Dynamic visual reports displaying topic mastery heatmaps",
        "Targeted automated remediation pathways focusing on specific weak areas",
        "Relational concept modeling in PostgreSQL for deep analytical queries",
      ],
    },

    features: [
      "Adaptive diagnostic assessment engine",
      "Conceptual knowledge graph navigator",
      "Student mastery dashboards with heatmaps",
      "Teacher analytics and class-level insights",
      "Targeted learning material recommendations",
      "Strictly typed frontend with React & TypeScript",
      "PostgreSQL analytics backend",
      "Clean educational UX with Tailwind CSS",
    ],

    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Data Analytics",
    ],

    role: "Frontend & Systems Engineer",
    duration: "Team Project",
    year: "2024",

    screenshots: [
      {
        url: "/img/xoralearn.webp",
        caption: "Xolearn diagnostic assessment",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "Root-Cause", label: "Diagnostic Engine" },
        { value: "Targeted", label: "Learning Remediation" },
        { value: "TypeScript", label: "Strict Typing" },
      ],
    },

    learnings: [
      "Modeling knowledge prerequisite graphs and learning diagnostic algorithms",
      "Structuring complex multi-step assessment forms in TypeScript",
      "Data visualization of student comprehension metrics",
    ],

    demoLink: "",
    codeLink: "https://github.com/eeqyy/xora-tim-patapim.git",

    caseFile: {
      client: "Adaptive EdTech Initiative",
      highlight: "evidence-based learning diagnostic & root-cause navigator",
      quote: "diagnosing the exact concept gap before prescribing remediation",
      caption: "xolearn — concept map",
      issues: [
        { title: "Scores hide the truth", text: "A 60% score doesn't show whether the gap is algebra or basic arithmetic." },
        { title: "One-size-fits-all study", text: "Students repeat entire chapters instead of pinpointing their stumbling block." },
        { title: "Overwhelmed teachers", text: "Instructors cannot manually trace 30+ students' cognitive gaps." },
      ],
      flows: [
        { label: "Diagnostic Flow", nodes: ["Student Answer", "Evidence Analyzer", "Knowledge Graph", "Remediation Guide"], ping: 2, pingText: "gap detected!" },
      ],
      notes: ["Graph-based diagnostic", "TypeScript strict typing"],
    },
    metaDescription:
      "Platform Evidence-Based Learning Diagnostic untuk memetakan asesmen konsep, mendeteksi gap, dan remediasi terarah.",
  },
  {
    id: "webgis-desa-mekarjaya",
    title: "WebGIS Desa Mekarjaya",
    type: "WebGIS & Spatial Data",
    featured: true,
    image: "/img/webgis.webp",
    thumbnail: "/img/webgis.webp",
    description:
      "Sistem Informasi Geografis pemetaan wilayah, batas administratif, dan infrastruktur desa berbasis peta digital interaktif.",

    overview:
      "Platform WebGIS interaktif untuk digitalisasi tata kelola desa Mekarjaya, Cikajang. Menampilkan pemetaan batas wilayah, fasilitas umum, demografi spasial, dan infrastruktur desa dengan visualisasi data spasial interaktif menggunakan React, TypeScript, Leaflet / GeoJSON, dan TailwindCSS.",

    problem: {
      title: "The Challenge",
      description:
        "Village governance relied on static paper maps and physical ledgers, making spatial planning and public asset tracking slow and inaccurate.",
      points: [
        "Physical paper maps made land boundary resolution difficult and contentious",
        "Public infrastructure locations were not documented in a central digital system",
        "Village apparatus had no interactive tool for spatial planning and analysis",
        "Non-technical administrative staff needed an intuitive, zero-training interface",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "A high-performance interactive WebGIS platform rendering vectorized GeoJSON layers and thematic administrative maps.",
      points: [
        "Digitized village boundary lines and cadastral zones into standardized GeoJSON",
        "Interactive Leaflet mapping with customized marker clustering and polygon overlays",
        "Searchable spatial catalog of public facilities (schools, health posts, offices)",
        "Accessible and clean UI optimized for local governance apparatus",
      ],
    },

    features: [
      "Interactive digital map with multi-layer toggles",
      "GeoJSON administrative boundary visualization",
      "Public facility and landmark spatial catalog",
      "Village demographic and land-use information layers",
      "Fast tile rendering and marker clustering with Leaflet",
      "Fully responsive layout with Tailwind CSS",
      "Bilingual support and intuitive navigation",
      "Offline tile caching support for rural connectivity",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Leaflet",
      "WebGIS",
      "GeoJSON",
      "TailwindCSS",
    ],

    role: "Frontend Developer",
    duration: "Jan 2026 - Mar 2026",
    year: "2026",

    screenshots: [
      {
        url: "/img/webgis.webp",
        caption: "WebGIS Desa Mekarjaya interactive map",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "100%", label: "Digitized Boundaries" },
        { value: "Spatial", label: "Public Facility DB" },
        { value: "0 Latency", label: "Client Tile Maps" },
      ],
    },

    learnings: [
      "Optimizing rendering performance for large GeoJSON spatial polygon sets",
      "Integrating Leaflet.js with React component lifecycle and state management",
      "Designing user interfaces for government and rural community accessibility",
    ],

    demoLink: "",
    codeLink: "https://github.com/andrebaik/webgis-mekarjaya.git",

    caseFile: {
      client: "Pemerintah Desa Mekarjaya",
      highlight: "interactive village spatial information & governance",
      quote: "bringing spatial precision and transparency to rural governance",
      caption: "webgis — spatial portal",
      issues: [
        { title: "Paper maps degrading", text: "Physical maps were fading, torn, and lacked coordinate accuracy." },
        { title: "Unknown asset locations", text: "Village officials lacked an updated digital registry of public facilities." },
        { title: "Complex GIS tools", text: "Desktop GIS software like QGIS was too difficult for village staff to use." },
      ],
      flows: [
        { label: "Spatial Flow", nodes: ["GeoJSON Data", "Leaflet Engine", "Layer Controller", "Interactive Map"], ping: 1, pingText: "rendered!" },
      ],
      notes: ["GeoJSON polygon layers", "Leaflet + React architecture"],
    },
    metaDescription:
      "Sistem Informasi Geografis pemetaan wilayah, batas administratif, dan infrastruktur desa berbasis peta digital interaktif.",
  },
  {
    id: "web-absensi-digital",
    title: "Sistem Presensi & Absensi Web",
    type: "Full Stack Web",
    featured: false,
    image: "/img/web-absen.webp",
    thumbnail: "/img/web-absen.webp",
    description:
      "Sistem manajemen absensi dan kehadiran real-time berbasis web dengan verifikasi presensi dan rekapitulasi data otomatis.",

    overview:
      "Aplikasi manajemen kehadiran digital yang memfasilitasi pencatatan presensi, pelacakan riwayat kehadiran harian/bulanan, rekapitulasi data otomatis, serta panel admin untuk monitoring kehadiran pegawai atau anggota secara akurat dan transparan.",

    problem: {
      title: "The Challenge",
      description:
        "Manual paper sign-in sheets led to attendance fraud, lost records, and hours spent compiling monthly attendance reports.",
      points: [
        "Paper attendance logs suffered from buddy-punching and fraudulent entries",
        "Manual monthly reporting took hours of error-prone spreadsheet calculations",
        "Members had no transparent way to check their personal attendance history",
        "No centralized dashboard for managers to oversee real-time attendance",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "A digital attendance system with automated timestamp logging, monthly reporting summaries, and an administrative control panel.",
      points: [
        "Single-click verified check-in/check-out with exact server timestamps",
        "Automated summary calculations for attendance, tardiness, and leaves",
        "Admin dashboard with real-time attendance rosters and exportable logs",
        "Relational MySQL database tracking detailed attendance history",
      ],
    },

    features: [
      "Digital check-in / check-out with validation",
      "Real-time attendance status dashboard",
      "Monthly attendance reporting and statistics",
      "Admin management for members and schedules",
      "Leave and excuse request workflow",
      "RESTful API endpoints for presensi actions",
      "Secure authentication and session verification",
      "Clean responsive UI with Tailwind CSS",
    ],

    technologies: [
      "Full Stack",
      "JavaScript",
      "REST API",
      "MySQL",
      "TailwindCSS",
    ],

    role: "Full Stack Developer",
    duration: "Web Project",
    year: "2024",

    screenshots: [
      {
        url: "/img/web-absen.webp",
        caption: "Presensi web dashboard",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "0", label: "Paper sign-in sheets" },
        { value: "Instant", label: "Monthly reporting" },
        { value: "100%", label: "Data accuracy" },
      ],
    },

    learnings: [
      "Designing robust relational attendance and schedule schemas in MySQL",
      "Handling server-side timestamp verification to prevent client clock manipulation",
      "Building clean operational admin panels for daily usage",
    ],

    demoLink: "",
    codeLink: "https://github.com/andrebaik/web-absensi.git",

    caseFile: {
      client: "Internal Organization Ops",
      highlight: "automated digital attendance tracking & reporting",
      quote: "zero paper logs and immediate monthly attendance reconciliations",
      caption: "absensi — attendance portal",
      issues: [
        { title: "Attendance fraud", text: "Paper logs allowed members to sign in on behalf of absent colleagues." },
        { title: "Tedious calculations", text: "Administrators spent full workdays compiling monthly attendance stats." },
        { title: "No live transparency", text: "Supervisors had no visibility into who was currently on duty." },
      ],
      flows: [
        { label: "Attendance Flow", nodes: ["User Check-in", "REST API", "Server Timestamp", "MySQL Log", "Admin Roster"], ping: 2, pingText: "verified!" },
      ],
      notes: ["Automated reconciliation", "MySQL backend"],
    },
    metaDescription:
      "Sistem manajemen absensi dan kehadiran real-time berbasis web dengan verifikasi presensi dan rekapitulasi data otomatis.",
  },
  {
    id: "himatif-itg-portal",
    title: "HIMATIF ITG Official Portal",
    type: "Web Portal",
    featured: true,
    image: "/img/himatif.webp",
    thumbnail: "/img/himatif.webp",
    description:
      "Portal resmi Himpunan Mahasiswa Teknik Informatika ITG dengan animasi interaktif GSAP & Framer Motion.",

    overview:
      "Website resmi Himpunan Mahasiswa Teknik Informatika Institut Teknologi Garut. Menampilkan profil organisasi, struktur kepengurusan, warta kegiatan divisi, kalender program kerja, dan wadah informasi mahasiswa dengan pengalaman visual interaktif berkinerja tinggi menggunakan GSAP dan Framer Motion.",

    problem: {
      title: "The Challenge",
      description:
        "HIMATIF ITG needed a modern digital home to unite students, broadcast organizational events, and represent informatics engineering prestige.",
      points: [
        "Previous web presence was static, outdated, and unrepresentative of CS students",
        "Event announcements were scattered across chat groups and easily missed",
        "No formal organizational archive for cabinet structures and divisions",
        "Needed standout animations without compromising page load speeds",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "A high-performance portal engineered with React, TypeScript, GSAP, and Framer Motion delivering sleek fluid interactions.",
      points: [
        "Modern interactive UI showcasing cabinet vision, divisions, and officers",
        "Dynamic activity feed and work-program calendar for student community",
        "Silky-smooth scroll-triggered transitions and micro-interactions via GSAP",
        "Optimized production bundle with fast initial paint and responsive layouts",
      ],
    },

    features: [
      "Interactive organizational cabinet showcase",
      "Division profiles and member directories",
      "Activity newsroom and work program calendar",
      "GSAP ScrollTrigger fluid animations",
      "Framer Motion interactive cards and hover effects",
      "Strict TypeScript typing across components",
      "Tailwind CSS custom design system",
      "Accessible mobile-first navigation",
    ],

    technologies: [
      "React",
      "TypeScript",
      "GSAP",
      "Framer Motion",
      "TailwindCSS",
    ],

    role: "Full Stack Developer",
    duration: "Jan 2024 - Present",
    year: "2024",

    screenshots: [
      {
        url: "/img/himatif.webp",
        caption: "HIMATIF ITG official portal",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "60 FPS", label: "Fluid animations" },
        { value: "Active", label: "Student portal" },
        { value: "TypeScript", label: "Strict types" },
      ],
    },

    learnings: [
      "Mastering complex GSAP timeline orchestration and scroll synchronization",
      "Combining Framer Motion layout animations with CSS transforms",
      "Structuring clean community portal content architectures",
    ],

    demoLink: "",
    codeLink: "https://github.com/andrebaik/web-himatif.git",

    caseFile: {
      client: "HIMATIF Institut Teknologi Garut",
      highlight: "official informatics student association web portal",
      quote: "modern digital presence reflecting engineering excellence",
      caption: "himatif — student portal",
      issues: [
        { title: "Outdated brand image", text: "The old site did not reflect modern informatics engineering standards." },
        { title: "Scattered announcements", text: "Important workshop and seminar updates got lost in messaging apps." },
        { title: "Clunky animations", text: "Previous iterations lagged on mobile devices during scroll." },
      ],
      flows: [
        { label: "Community Flow", nodes: ["Student Visitor", "Event Showcase", "GSAP Viewport", "Division Details"], ping: 2, pingText: "engaged!" },
      ],
      notes: ["GSAP scroll triggers", "Framer Motion interactions"],
    },
    metaDescription:
      "Portal resmi Himpunan Mahasiswa Teknik Informatika ITG dengan animasi interaktif GSAP & Framer Motion.",
  },
  {
    id: "portfolio-v1-archive",
    title: "Portfolio V1 — Interactive Showcase",
    type: "Frontend Engineering",
    featured: false,
    image: "/img/portfolio.webp",
    thumbnail: "/img/portfolio.webp",
    description:
      "Arsip website portofolio generasi pertama dengan eksplorasi micro-interactions dan arsitektur frontend modular.",

    overview:
      "Portofolio web generasi pertama yang memamerkan karya awal, profil teknis, dan eksplorasi antarmuka digital dengan performa tinggi, animasi interaktif, dan arsitektur frontend modular berbasis React dan TailwindCSS.",

    problem: {
      title: "The Challenge",
      description:
        "Building an initial standalone personal portfolio to showcase early engineering projects with creative flair and solid performance.",
      points: [
        "Creating an authentic developer brand from scratch without generic templates",
        "Balancing visual expressiveness with strict Lighthouse performance scores",
        "Organizing early project codebases into cohesive showcase presentations",
      ],
    },

    solution: {
      title: "The Solution",
      description:
        "A custom-crafted React portfolio featuring playful micro-interactions, dark mode, and modular component architecture.",
      points: [
        "Modular component architecture powered by Vite and React",
        "Micro-animations and layout transitions with Framer Motion",
        "Tailwind CSS custom styling tokens and responsive typography",
        "Integrated project archive and contact reach-out channels",
      ],
    },

    features: [
      "Curated technical project showcases",
      "Interactive animation states with Framer Motion",
      "Responsive design across mobile and desktop",
      "Vite-powered ultra-fast bundle delivery",
      "Personal developer bio and technical skills list",
      "Direct contact and social media connection links",
    ],

    technologies: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "Vite",
    ],

    role: "Frontend Developer",
    duration: "Personal Project",
    year: "2024",

    screenshots: [
      {
        url: "/img/portfolio.webp",
        caption: "Portfolio V1 homepage view",
      },
    ],

    results: {
      title: "Impact & Results",
      metrics: [
        { value: "V1", label: "Genesis edition" },
        { value: "100", label: "Lighthouse score" },
        { value: "React+Vite", label: "Core stack" },
      ],
    },

    learnings: [
      "Refining responsive typography and micro-interactions in Tailwind CSS",
      "Component modularity and maintainable asset packaging in Vite",
    ],

    demoLink: "",
    codeLink: "https://github.com/andrebaik/PortofolioV1.0.git",

    caseFile: {
      client: "Personal Showcase Archive",
      highlight: "first-generation interactive web showcase",
      quote: "the foundation where interactive frontend craft began",
      caption: "portfoliov1 — archive",
      issues: [
        { title: "Generic templates", text: "Standard boilerplate sites lacked creative identity and technical personality." },
        { title: "Asset bloat", text: "Unoptimized animation libraries frequently caused layout jank." },
      ],
      flows: [
        { label: "Showcase Flow", nodes: ["Visitor", "Hero Canvas", "Project Cards", "Contact Action"], ping: 2, pingText: "explored!" },
      ],
      notes: ["Archived V1 showcase", "Framer Motion animations"],
    },
    metaDescription:
      "Arsip website portofolio generasi pertama dengan eksplorasi micro-interactions dan arsitektur frontend modular.",
  },
];
