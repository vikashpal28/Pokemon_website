# Pokemon Website

A modern web application to browse and view information about Pokémon. Built with React and Vite.

## Features
- Browse a list of Pokémon
- View detailed information for each Pokémon
- Responsive design
- Fast and lightweight

## Tech Stack
- React
- Vite
- JavaScript (ES6+)
- CSS

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- pnpm (or npm/yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/vikashpal28/Pokemon_website.git
   cd Pokemon_website/pokemon_web_project
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the App
Start the development server:
```bash
pnpm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production
```bash
pnpm run build
```

## Project Structure
```
pokemon_web_project/
├── public/           # Static assets
├── src/              # Source code
│   ├── App.jsx       # Main App component
│   ├── Pokemon.jsx   # Pokémon list component
│   ├── PokemonCard.jsx # Individual Pokémon card
│   └── ...
├── index.html        # HTML entry point
├── package.json      # Project metadata and scripts
└── vite.config.js    # Vite configuration
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
