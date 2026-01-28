# kumdo-test

Demo repository showcasing Angular applications with Kendo UI components for debugging and testing purposes.

## 🚀 Live Demo

Visit the deployed apps at: [https://tiagomsmagalhaes.github.io/kumdo-test/](https://tiagomsmagalhaes.github.io/kumdo-test/)

## 📦 Applications

This repository contains two Angular applications:

### App 1: Angular 16 + Kendo UI 12
- **Location:** `angular16-kendo12/`
- **Features:**
  - Kendo Dialog component with form
  - Kendo Window component with form
  - Kendo Dropdown controls
  - Module-based architecture

### App 2: Angular 20 + Kendo UI 20
- **Location:** `angular20-kendo20/`
- **Features:**
  - Kendo Dialog component with form
  - Kendo Window component with form
  - Kendo Dropdown controls
  - Standalone components architecture
  - Signals API

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm

### Running Angular 16 App
```bash
cd angular16-kendo12
npm install
npm start
```

### Running Angular 20 App
```bash
cd angular20-kendo20
npm install
npm start
```

### Building for Production
```bash
# Build Angular 16 app
cd angular16-kendo12
npm run build

# Build Angular 20 app
cd angular20-kendo20
npm run build
```

## 🚢 Deployment

The apps are automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The GitHub Actions workflow:
1. Builds both Angular applications
2. Prepares the `docs/` directory with built files
3. Deploys to GitHub Pages

## 📄 License

This is a testing/debugging repository. No license required as stated in requirements.