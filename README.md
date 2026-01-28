# Fakestore Web App

A modern React-based e-commerce application that displays products from the Fakestore API with user authentication and product filtering capabilities.

## 🎯 Project Overview

This is a practice project showcasing a complete e-commerce application with secure login, protected routes, and product management features. Users can browse products, search by category, and view detailed product information.

## 📋 Features

- **User Authentication** - Login system with credential validation
- **Protected Routes** - Dashboard access restricted to logged-in users
- **Product Browsing** - Display products fetched from Fakestore API
- **Product Search** - Filter products by title
- **Product Details** - Modal view for detailed product information
- **Category Navigation** - Browse products by category
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend Framework & Libraries
- **React** (v18.2.0) - UI library
- **React Router DOM** (v6.18.0) - Client-side routing
- **Redux & React-Redux** (v4.2.1, v8.1.3) - State management
- **Redux Toolkit** (v1.9.7) - Redux utilities and best practices

### UI & Styling
- **Material-UI (MUI)** (v5.14.14) - Component library
- **MUI Icons Material** (v5.14.14) - Icon set
- **React Icons** (v5.5.0) - Additional icon library
- **Emotion** (v11.14.0+) - CSS-in-JS styling

### API & HTTP
- **Axios** (v1.13.2) - HTTP client for API requests

### Development Tools
- **Create React App** - Project bootstrapping
- **React Scripts** (v5.0.1) - Build and development scripts
- **Gh-Pages** (v6.3.0) - GitHub Pages deployment

### Testing & Quality
- **Jest & Testing Library** - Unit testing
- **ESLint** - Code linting

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🔑 Test Credentials

Use the following credentials to log in:

| Username | Password |
|----------|----------|
| `mor_2314` | `83r5^_` |

*Note: These are mock credentials for testing purposes.*

## 🌐 API Integration

- **API Source**: [Fakestore API](https://fakestoreapi.com)
- **Endpoints Used**:
  - `/products` - Fetch all products
  - `/products/categories` - Fetch product categories
  - `/products/category/:category` - Fetch products by category

## 📁 Project Structure

```
src/
├── Components/
│   ├── Navbar/           # Navigation bar with search
│   ├── ProductModal/     # Product details modal
│   └── UserCreds/        # User credentials component
├── Pages/
│   ├── Dashboard/        # Main product listing page
│   └── Login/            # Login page
├── ProtectedRoute/       # Route protection wrapper
├── API/                  # API integration
├── store.js              # Redux store configuration
├── App.js                # Main App component
└── index.js              # Entry point
```

## 🚀 Deployment

This app is deployed on **Vercel** and uses **GitHub Pages** for backup deployment via `gh-pages`.

### Deploying to Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys on push

### Deploying to GitHub Pages:
```bash
npm run deploy
```

## 📝 Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### `npm run build`
Builds the app for production to the `build` folder with optimizations.

### `npm run deploy`
Deploys the built app to GitHub Pages.

### `npm test`
Launches the test runner in interactive watch mode.

## 🔍 Learn More

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Redux Documentation](https://redux.js.org/)
- [Material-UI Documentation](https://mui.com/)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
