<div align="center">

# 🖥️ THE DESK — Portofolio VMAX

**Mochamad Vicryandre Nurdin's portfolio, as an interactive 3D desk you can explore.**

Click anything. Just don't try to use the Infinity Gauntlet. 🫰

[**andrebaik.dev**](https://andrebaik.dev) · [2D version](https://andrebaik.dev/2d)

![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vuedotjs&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=flat-square&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88ce02?style=flat-square&logo=greensock&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)
![Groq](https://img.shields.io/badge/AI_Powered-Groq_LPU-f55036?style=flat-square)
![Web Audio](https://img.shields.io/badge/Web_Audio-synthesized-ff90e8?style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=flat-square&logo=vercel&logoColor=white)

<img src="public/og-image.png" alt="The Desk: a neo-brutalist 3D room with a desk, monitor, About board, bookshelf, katana and the Infinity Gauntlet" width="100%" />

</div>

---

## What is this?

Instead of scrolling through standard sections, you look around an interactive 3D workspace. Every part of the portfolio is an interactive prop on or around the desk: zoom into it, and it does its thing. The whole room is one [Three.js](https://threejs.org) scene in a flat, neo-brutalist aesthetic: toon shading, bold black outlines, and hard drop shadows.

Prefer a classic page? The same content lives at [`/2d`](https://andrebaik.dev/2d).

## Interactive Desk Props

| Prop | What it does |
| --- | --- |
| 🪪 **ID badge** | Flips to reveal social links & developer ID. Drag its pin to re-pin it anywhere on the corkboard, or pull the lanyard and let it swing. |
| 📌 **About board** | Pinned notes about Andre's background, stats, stack, and CV download. Drag them around freely. |
| 🖥️ **Monitor** | A real working retro terminal and macOS-style desktop. Type `help`, `whoami`, `projects`, or `sudo hire andre`. |
| ⌨️ **Keyboard** | Every key on your keyboard presses the physical 3D key on the desk. Number keys `1`–`5` jump directly between camera views. |
| 🗂️ **Drawer** | Project files: flip through the tabs, pull one out and turn its pages to view full case files. |
| 🎫 **Boarding passes** | Work experience timeline (HIMATIF ITG, Desa Mekarjaya, Lab Asisten Dosen ITG). |
| 📱 **Phone** | Real-time chat with Andre's AI twin **7Dynn** powered by Groq LPU streaming. |
| ✉️ **Envelope** | Postcard to write and send messages directly to Andre's inbox. |
| ☕ **Mug** | Take a sip for a developer quote. Finish the cup and the room switches to night shift mode. |
| 💡 **Lamp** | Toggle day and night lighting modes. |
| 🔊 **Speakers** | Lo-Fi beat and synthesized ambient sound toggle. |
| 🪟 **Window** | Animated landscape outside: birds by day, stars and fireflies by night. |
| 🪴 **Plant** | Each click blooms a flower; three blooms call a butterfly. |
| 🖱️ **Mouse** | Grows ears and a tail, and scampers off for a lap. |
| 🪑 **Chair** | Spins with momentum. |
| 🖼️ **Painting** | Interactive gallery that flips through artwork. |
| 🕰️ **Clock** | Real-time clock synchronized with Garut (WIB) time. |
| 🎸 **Guitar** | Strums synthesized chords live. |
| 👒 **Straw hat** | Luffy has something to say. |
| ⚔️ **Katana** | Drawn from its scabbard with a slash sound and sakura petals falling. |
| 🏋️ **Dumbbells & calendar** | Count workout reps and stamp today on the gym streak. |
| 🧤 **Infinity Gauntlet** | Please don't snap. |

## Under the Hood

- **No bulky image or audio files for the 3D room:** Every printed texture (terminal, boarding passes, notes, window view) is drawn dynamically on a `<canvas>` at runtime, and sound effects are synthesized live using the Web Audio API.
- **Screen-Space Outlines:** Custom vertex shader pushes back-faces outward by pixel-perfect widths so toon outlines stay crisp at any zoom level.
- **Dynamic Camera Choreography:** GSAP coordinates smooth camera transitions between props with frustum culling.
- **AI Streaming with Groq:** Native browser and Edge function streaming powered by Groq LPU for sub-second responses.

## Tech Stack

| Area | Tools |
| --- | --- |
| **Front End** | Vue 3, Vue Router, Tailwind CSS, VueUse |
| **3D & Animation** | Three.js (r160), GSAP, HTML5 Canvas |
| **Sound** | Web Audio API (real-time synthesized) |
| **AI Assistant** | Groq LPU API, OpenRouter fallback, Server-Sent Events (SSE) |
| **Contact** | EmailJS |
| **Deployment** | Vercel |

## Getting Started

Requires Node.js 18+.

```bash
git clone https://github.com/andrebaik/PortofolioVMAX.git
cd PortofolioVMAX
npm install
npm run dev
```

The site runs at `http://localhost:8080`:
- **The 3D Desk:** `/`
- **Classic 2D View:** `/2d`

### AI Chatbot Setup

Set your Groq API key in `.env`:

```env
GROQ_API_KEY=gsk_...
VUE_APP_GROQ_API_KEY=gsk_...
```

The AI twin connects directly to Groq with zero additional backend setup needed.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production bundle build into `dist/` |
| `npm run lint` | ESLint checks |

## Project Structure

```text
PortofolioVMAX/
├── api/
│   └── chat.js                   # Vercel serverless Edge function for AI chat
├── public/
│   ├── cv.pdf                    # Mochamad Vicryandre Nurdin's CV
│   ├── images/                   # Static images (andre portrait, andrebiru)
│   ├── img/                      # Project screenshots
│   └── index.html                # Boot loader and SEO meta tags
├── src/
│   ├── components/
│   │   ├── features/desk/
│   │   │   ├── deskScene.js      # 3D room props, interactions, camera shots
│   │   │   ├── desktop.js        # Retro desktop OS & VS Code terminal
│   │   │   └── textures.js       # Dynamic 2D canvas textures
│   │   ├── sections/             # 2D page components (Hero, About, Projects, Contact)
│   │   └── features/             # ChatBot, FileDrawer, SoundToggle, ThemeSwitcher
│   ├── composables/              # useSfx, useTheme, usePostHog
│   ├── data/                     # about.js, experience.js, projects.js, skills.js, chatbotPrompt.js
│   ├── router/                   # Vue Router routes and titles
│   └── views/                    # DeskPage.vue and HomePage.vue
├── my-portfolio-api/             # Standalone Express API backend (optional)
└── vue.config.js
```

## License

Source code is available under the [MIT License](LICENSE).

Personal assets, portrait photography, CV documents, project screenshots, and personal branding text are reserved to Mochamad Vicryandre Nurdin.

## Contact

**Mochamad Vicryandre Nurdin** · Full Stack Developer & AI Systems Engineer · Garut, Indonesia 🇮🇩

- **Portfolio:** [andrebaik.dev](https://andrebaik.dev)
- **LinkedIn:** [linkedin.com/in/andrebaikk](https://linkedin.com/in/andrebaikk)
- **GitHub:** [github.com/andrebaik](https://github.com/andrebaik)
- **Instagram:** [@andrenrdn_](https://instagram.com/andrenrdn_)
- **Email:** dynn.dev@gmail.com
