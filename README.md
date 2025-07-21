# Spark ROI Tracker

Check it out here: https://spark-roi-tracker.vercel.app/

**Spark ROI Tracker** is a responsive web dashboard built using modern frontend tooling. It helps track return-on-investment (ROI) events over time, designed for creators, freelancers, and teams who want to visualize campaign or investment performance in a clean, fast interface.

---

## 🚀 Features

- Add and display ROI events with timestamps and categories
- View summaries and potential trend insights
- Modular architecture with reusable UI components
- Fast Vite-powered dev environment
- Clean theming with Tailwind CSS and shadcn/ui
- Developer-friendly structure with TypeScript and alias paths

---

## 🛠 Tech Stack

| Tool          | Purpose                     |
|---------------|-----------------------------|
| Vite          | Frontend build tool         |
| React + TS    | UI & logic framework        |
| shadcn/ui     | Component styling system    |
| Tailwind CSS  | Utility-first CSS framework |
| ESLint        | Code linting                |
| Bun / npm     | Dependency management       |

---

## 📁 Folder Structure
.
├── public/               # Static assets
├── src/                  # Application source code
│   ├── components/       # UI components
│   ├── lib/              # Utilities & helpers
│   ├── hooks/            # Custom React hooks
│   └── index.css         # Tailwind & base styles
├── components.json       # UI alias config
├── tailwind.config.ts    # Tailwind config
├── vite.config.ts        # Vite config with aliases
└── tsconfig.*.json       # TypeScript config files


⚙️ Setup Instructions
# Clone the repo
git clone https://github.com/sreenjoyroy/spark-roi-tracker.git
cd spark-roi-tracker

# Install dependencies
bun install     # or: npm install

# Run development server
bun dev         # or: npm run dev
Visit http://localhost:5173 in your browser.

🌐 Deployment
You can deploy this project to platforms like Vercel, Netlify, or Cloudflare Pages. Just build and host the static files:
bun run build   # or: npm run build

Deploy the dist/ folder.

✍️ Author
Sreenjoy Roy
GitHub | LinkedIn | Portfolio
