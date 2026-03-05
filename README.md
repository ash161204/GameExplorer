# 🎮 GameExplorer

A modern, responsive game discovery web app built with **React**, **TypeScript**, and **Vite** — powered by the [RAWG Video Games Database API](https://rawg.io/apidocs). Browse thousands of games, filter by genre or platform, search by name, and toggle between dark and light mode.

🔗 **Live Demo:** [game-explorer-nu.vercel.app](https://game-explorer-nu.vercel.app/)

---

## ✨ Features

- 🔍 **Search** games by name in real time
- 🎯 **Filter** by genre and platform
- 📊 **Sort** by relevance, date added, name, release date, popularity, or average rating
- 🌙 **Dark / Light mode** toggle
- 🖼️ **Game cards** with cover art, Metacritic scores, and platform icons
- ⚡ **Fast** — built on Vite with HMR for blazing-fast development
- 📱 **Responsive** layout that works on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Chakra UI](https://chakra-ui.com/) | Component library & theming |
| [RAWG API](https://rawg.io/apidocs) | Game data source |
| [Axios](https://axios-http.com/) | HTTP client |

---

## 📁 Project Structure

```
GameExplorer/
├── src/
│   ├── components/       # Reusable UI components (GameCard, Navbar, etc.)
│   ├── hooks/            # Custom React hooks (useGames, useGenres, etc.)
│   ├── services/         # API client configuration (api-client.ts)
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A free RAWG API key — get one at [rawg.io/apidocs](https://rawg.io/apidocs)

### 1. Clone the repository

```bash
git clone https://github.com/ash161204/GameExplorer.git
cd GameExplorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
VITE_RAWG_API_KEY=your_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own copy:

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com/)
3. Add your `VITE_RAWG_API_KEY` as an environment variable in the Vercel dashboard
4. Deploy 🚀

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [RAWG.io](https://rawg.io/) for the free and comprehensive video game database API
- [Chakra UI](https://chakra-ui.com/) for the beautiful and accessible component system
- [Vite](https://vitejs.dev/) for the lightning-fast build tooling
