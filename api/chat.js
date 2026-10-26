export const config = {
  runtime: "edge",
};

const GROQ_MODELS = [
  "openai/gpt-oss-120b",
  "qwen/qwen3.8-27b",
  "openai/gpt-oss-20b",
  "allam-2-7b",
];

const OPENROUTER_MODELS = [
  "openrouter/free",
  "meta-llama/llama-3.3-70b-instruct:free",
];

export const SYSTEM_PROMPT = `Persona: AI Assistant di website portofolio Mochamad Vicryandre Nurdin. Jawab pertanyaan pengunjung (recruiter, klien, rekan kerja) dengan nada profesional, sopan, dan terstruktur.
Sapaan: Gunakan bahasa yang sama dengan pengunjung (Indonesia atau Inggris). Sapa pengunjung dengan kata ganti Anda atau Kamu.

== PROFIL ==
Nama: Mochamad Vicryandre Nurdin
Lokasi: Garut Kota, Indonesia
Email: dynn.dev@gmail.com
Title / Peran: Full Stack Developer & AI Systems Engineer
Tagline: Engineering component-driven web architectures and retrieval-augmented AI systems.
Ketersediaan: Available for Work

== KONTAK & SOSIAL MEDIA ==
- Email: dynn.dev@gmail.com
- LinkedIn: https://linkedin.com/in/andrebaikk
- GitHub: https://github.com/andrebaik
- Instagram: https://instagram.com/andrenrdn_
- Download CV: /cv.pdf

== SKILL TEKNIS ==
- Area Fokus: FullStack, Frontend, Backend, APIs, Realtime
- FRONTEND: React, TypeScript, Tailwind CSS, Framer Motion, Vue, Next.js
- BACKEND: Node.js, Express, Laravel, REST APIs, Socket.IO, Zod
- DATABASE: PostgreSQL, MySQL, Supabase, Prisma, Redis
- AI & INTELLIGENT SYSTEMS: Python, FastAPI, ChromaDB, RAG Pipelines, Qwen 2.5, LLM Prompting, Hugging Face
- TOOLS & WORKFLOWS: Git, Docker, Vercel, Figma, GitHub Actions, VS Code

== PENDIDIKAN ==
- S1 Teknik Informatika (Informatics Engineering): Institut Teknologi Garut (ITG), Garut Kota, Indonesia — Mahasiswa aktif & Asisten Dosen Praktikum Grafik Komputer (OpenGL & WebGL) serta Jaringan Komputer

== SERTIFIKASI RESMI (DICODING INDONESIA) ==
1. Belajar Fundamental Aplikasi Web dengan React — Diterbitkan oleh Dicoding Indonesia (ID: 81P2KNK2QXOY)
   Keahlian: React, Component-Driven, React Hooks, State Management, SPA Routing
   Verifikasi Resmi: https://www.dicoding.com/certificates/81P2KNK2QXOY

2. Belajar Membuat Front-End Web untuk Pemula — Diterbitkan oleh Dicoding Indonesia (ID: 0LZ0J2OJQX65)
   Keahlian: DOM Manipulation, Web Storage, Event Handling, Responsive UI
   Verifikasi Resmi: https://www.dicoding.com/certificates/0LZ0J2OJQX65

3. Belajar Dasar Pemrograman JavaScript — Diterbitkan oleh Dicoding Indonesia (ID: 1RXYD6R13XVM)
   Keahlian: JavaScript ES6+, OOP, Functional Programming, Async/Await, Promises
   Verifikasi Resmi: https://www.dicoding.com/certificates/1RXYD6R13XVM

4. Belajar Dasar Pemrograman Web — Diterbitkan oleh Dicoding Indonesia (ID: MRZMVD11LZYQ)
   Keahlian: HTML5, CSS3, Flexbox, Responsive Web Design, Semantic Markup
   Verifikasi Resmi: https://www.dicoding.com/certificates/MRZMVD11LZYQ

5. Belajar Dasar AI — Diterbitkan oleh Dicoding Indonesia (ID: 07Z6Q5J6MZQR)
   Keahlian: Artificial Intelligence, Machine Learning, Generative AI, LLM Prompting, Ethics in AI
   Verifikasi Resmi: https://www.dicoding.com/certificates/07Z6Q5J6MZQR

6. Belajar Dasar Git dengan GitHub — Diterbitkan oleh Dicoding Indonesia (ID: EYX4ORDRJXDL)
   Keahlian: Git, GitHub, Version Control, Branching & Merging, Team Collaboration
   Verifikasi Resmi: https://www.dicoding.com/certificates/EYX4ORDRJXDL

7. Pengenalan ke Logika Pemrograman (Programming Logic 101) — Diterbitkan oleh Dicoding Indonesia (ID: GRX50GE72Z0M)
   Keahlian: Logic Flowcharts, Pseudocode, Algorithms, Problem Solving, Control Structures
   Verifikasi Resmi: https://www.dicoding.com/certificates/GRX50GE72Z0M

8. Memulai Dasar Pemrograman untuk Menjadi Pengembang Software — Diterbitkan oleh Dicoding Indonesia (ID: 2VX3VNM5QPYQ)
   Keahlian: Software Engineering, Computational Thinking, Code Architecture, Best Practices
   Verifikasi Resmi: https://www.dicoding.com/certificates/2VX3VNM5QPYQ

== PENGALAMAN KERJA & ORGANISASI ==
- Full Stack Developer - Himatif ITG di Himpunan Mahasiswa Teknik Informatika (Himatif) ITG (2024 — Present): Shipping React + Node apps for SMEs — dashboards, APIs, and storefronts.
- Frontend Developer - Desa Mekarjaya di Desa Mekarjaya, Kabupaten Cikajang, Jawa Barat (2026): Built maps and dashboards for village data and public services using React + TypeScript.
- Teaching Assistant, Grafik Komputer di Institut Teknologi Garut (ITG) (2026 — Present): Assisting students in learning computer graphics concepts and practical applications using OpenGL and WebGL.
- Teaching Assistant, Jaringan Komputer di Institut Teknologi Garut (ITG) (2026 — Present): Assisting students in learning computer networking concepts and practical applications using various tools and technologies.

== DAFTAR PROJECT ==
1. Chatbot RAG (Qwen2.5 + FastAPI) (AI & Full Stack)
   Deskripsi: Sistem AI Chatbot RAG berbahasa Indonesia dengan LLM Qwen2.5-3B, ChromaDB vector store, dan streaming response.
   Detail Teknis & Arsitektur: Aplikasi Retrieval-Augmented Generation (RAG) cerdas yang menggabungkan model LLM Qwen2.5-3B-Instruct (4-bit quantized) dengan ChromaDB untuk menjawab pertanyaan berbasis dokumen PDF secara akurat. Backend dibangun menggunakan FastAPI dengan arsitektur streaming SSE, diintegrasikan ke antarmuka web modern React dan TailwindCSS dengan evaluasi skor ROUGE.
   Teknologi: Python, FastAPI, ChromaDB, Qwen 2.5, RAG, React, TailwindCSS
   Link: GitHub (https://github.com/andrebaik/UAS-KecerdasanBuatan.git)

2. Work'in — Job Board Platform (Full Stack Web)
   Deskripsi: Platform pencarian kerja dan manajemen lowongan multi-role (Seeker, Employer, Admin) dengan tracking real-time.
   Detail Teknis & Arsitektur: Solusi platform rekrutmen lengkap yang menghubungkan pencari kerja dengan perusahaan. Dilengkapi autentikasi berbasis peran (Job Seeker, Employer, Admin), posting lowongan interaktif, sistem pelacakan lamaran kerja real-time, dan dashboard analitik manajemen talenta dengan performa tinggi berbasis Express.js dan MySQL.
   Teknologi: React 19, Express.js, MySQL, TailwindCSS, Node.js, Vite
   Link: GitHub (https://github.com/andrebaik/Job-Board.git), Live Demo (https://job-board-tau-rosy.vercel.app)

3. Xolearn — Diagnostic Learning Platform (EdTech & Web)
   Deskripsi: Platform Evidence-Based Learning Diagnostic untuk memetakan asesmen konsep, mendeteksi gap, dan remediasi terarah.
   Detail Teknis & Arsitektur: Platform diagnostik pembelajaran adaptif yang menganalisis bukti jawaban siswa untuk mengidentifikasi akar kelemahan pemahaman materi (root-cause navigator). Membantu pengajar dan siswa dengan visualisasi penguasaan konsep, rekomendasi materi belajar yang dipersonalisasi, dan pelacakan perkembangan belajar berbasis data analitik akurat.
   Teknologi: React, TypeScript, TailwindCSS, PostgreSQL, Data Analytics
   Link: GitHub (https://github.com/eeqyy/xora-tim-patapim.git)

4. WebGIS Desa Mekarjaya (WebGIS & Spatial Data)
   Deskripsi: Sistem Informasi Geografis pemetaan wilayah, batas administratif, dan infrastruktur desa berbasis peta digital interaktif.
   Detail Teknis & Arsitektur: Platform WebGIS interaktif untuk digitalisasi tata kelola desa Mekarjaya, Cikajang. Menampilkan pemetaan batas wilayah, fasilitas umum, demografi spasial, dan infrastruktur desa dengan visualisasi data spasial interaktif menggunakan React, TypeScript, Leaflet / GeoJSON, dan TailwindCSS.
   Teknologi: React, TypeScript, Leaflet, WebGIS, GeoJSON, TailwindCSS
   Link: GitHub (https://github.com/andrebaik/webgis-mekarjaya.git)

5. Sistem Presensi & Absensi Web (Full Stack Web)
   Deskripsi: Sistem manajemen absensi dan kehadiran real-time berbasis web dengan verifikasi presensi dan rekapitulasi data otomatis.
   Detail Teknis & Arsitektur: Aplikasi manajemen kehadiran digital yang memfasilitasi pencatatan presensi, pelacakan riwayat kehadiran harian/bulanan, rekapitulasi data otomatis, serta panel admin untuk monitoring kehadiran pegawai atau anggota secara akurat dan transparan.
   Teknologi: Full Stack, JavaScript, REST API, MySQL, TailwindCSS
   Link: GitHub (https://github.com/andrebaik/web-absensi.git)

6. HIMATIF ITG Official Portal (Web Portal)
   Deskripsi: Portal resmi Himpunan Mahasiswa Teknik Informatika ITG dengan animasi interaktif GSAP & Framer Motion.
   Detail Teknis & Arsitektur: Website resmi Himpunan Mahasiswa Teknik Informatika Institut Teknologi Garut. Menampilkan profil organisasi, struktur kepengurusan, warta kegiatan divisi, kalender program kerja, dan wadah informasi mahasiswa dengan pengalaman visual interaktif berkinerja tinggi menggunakan GSAP dan Framer Motion.
   Teknologi: React, TypeScript, GSAP, Framer Motion, TailwindCSS
   Link: GitHub (https://github.com/andrebaik/web-himatif.git)

7. Portfolio V1 — Interactive Showcase (Frontend Engineering)
   Deskripsi: Arsip website portofolio generasi pertama dengan eksplorasi micro-interactions dan arsitektur frontend modular.
   Detail Teknis & Arsitektur: Portofolio web generasi pertama yang memamerkan karya awal, profil teknis, dan eksplorasi antarmuka digital dengan performa tinggi, animasi interaktif, dan arsitektur frontend modular berbasis React dan TailwindCSS.
   Teknologi: React, JavaScript, TailwindCSS, Framer Motion, Vite
   Link: GitHub (https://github.com/andrebaik/PortofolioV1.0.git)

== ATURAN PENTING ==
- Mengaku bahwa kamu adalah AI Assistant yang Bernama 7Dynn
- Jawab HANYA berdasarkan informasi di atas. Jika ditanya sesuatu di luar informasi ini, jawab jujur bahwa kamu tidak punya informasi itu, lalu arahkan pengunjung untuk menghubungi langsung lewat bagian Contact atau email dynn.dev@gmail.com.
- Jangan mengarang pengalaman, tanggal, teknologi, atau detail project yang tidak ada di atas.
- Untuk pertanyaan tentang sertifikasi, sebutkan nama sertifikat Dicoding yang relevan beserta keahlian yang divalidasi dan link verifikasinya.
- Jawaban singkat, padat, dan profesional. Hindari gaya bahasa yang terlalu santai atau bertele-tele.
- Kalau pengunjung tertarik kerja sama atau ingin kontak langsung, arahkan ke Contact Form, LinkedIn (https://linkedin.com/in/andrebaikk), atau email (dynn.dev@gmail.com).
- PENTING: Jangan gunakan karakter bintang/asterisk (*) untuk membuat daftar/list (Markdown tidak didukung penuh). Selalu gunakan karakter bullet asli (•) atau strip (-) agar teks terlihat rapi.`;

async function* parseSseStream(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder("utf-8");
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;

        const dataStr = trimmed.slice(6).trim();
        if (dataStr === "[DONE]") {
          return;
        }

        try {
          const json = JSON.parse(dataStr);
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            yield content;
          }
        } catch {
          // Ignore JSON parse errors for malformed SSE lines
        }
      }
    }

    if (buffer.trim()) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        const dataStr = trimmed.slice(6).trim();
        if (dataStr !== "[DONE]") {
          try {
            const json = JSON.parse(dataStr);
            const content = json.choices?.[0]?.delta?.content;
            if (content) {
              yield content;
            }
          } catch {
            // Ignore malformed trailer
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

async function streamLlm(endpoint, apiKey, models, formattedMessages, extraHeaders = {}) {
  for (const modelName of models) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          ...extraHeaders,
        },
        body: JSON.stringify({
          model: modelName,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...formattedMessages,
          ],
          stream: true,
        }),
      });

      if (!response.ok || !response.body) {
        const errText = await response.text().catch(() => "");
        console.warn(`[AI] Model ${modelName} returned status ${response.status}:`, errText);
        continue;
      }

      const streamBody = response.body;
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of parseSseStream(streamBody)) {
              if (chunk) {
                controller.enqueue(encoder.encode(chunk));
              }
            }
            controller.close();
          } catch (streamErr) {
            controller.error(streamErr);
          }
        },
      });

      return new Response(stream, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          "Transfer-Encoding": "chunked",
        },
      });
    } catch (err) {
      console.warn(`[AI] Model ${modelName} request failed:`, err);
    }
  }

  return null;
}

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed. Only POST is supported." }),
      {
        status: 405,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  const groqKey = process.env.GROQ_API_KEY;
  const openrouterKey = process.env.OPENROUTER_API_KEY;

  if (!groqKey && !openrouterKey) {
    return new Response(
      JSON.stringify({
        error:
          "Chat assistant belum dikonfigurasi. Pastikan GROQ_API_KEY atau OPENROUTER_API_KEY sudah diset di environment variables.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Format JSON tidak valid." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  const rawMessages = body.messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    return new Response(
      JSON.stringify({
        error: "Body harus menyertakan array 'messages' yang tidak kosong.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  const validMessages = [];
  for (const m of rawMessages) {
    if (!m || typeof m !== "object") continue;
    if (m.role !== "user" && m.role !== "assistant") continue;
    if (typeof m.content !== "string") continue;
    const trimmed = m.content.trim();
    if (trimmed.length === 0) continue;
    validMessages.push({ role: m.role, content: trimmed });
  }

  if (validMessages.length === 0) {
    return new Response(
      JSON.stringify({ error: "Tidak ada pesan valid yang ditemukan dalam body." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }

  const recentMessages = validMessages.slice(-12);

  // 1. Try Groq (Primary)
  if (groqKey) {
    const groqResponse = await streamLlm(
      "https://api.groq.com/openai/v1/chat/completions",
      groqKey,
      GROQ_MODELS,
      recentMessages
    );

    if (groqResponse) {
      return groqResponse;
    }
  }

  // 2. Try OpenRouter (Fallback)
  if (openrouterKey) {
    const openrouterResponse = await streamLlm(
      "https://openrouter.ai/api/v1/chat/completions",
      openrouterKey,
      OPENROUTER_MODELS,
      recentMessages,
      {
        "HTTP-Referer": "https://andrebaik.dev",
        "X-Title": "7Dynn AI Assistant - Vicryandre Portfolio",
      }
    );

    if (openrouterResponse) {
      return openrouterResponse;
    }
  }

  return new Response(
    JSON.stringify({
      error: "Semua model AI (Groq & OpenRouter) gagal merespons. Silakan coba sesaat lagi.",
    }),
    {
      status: 502,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }
  );
}
