# Merino Warmth - E-Shop UI Project

A complete, modern e-commerce web application for premium Merino wool warm-layer products, built with React and Vite.

## 📋 Project Structure

```
merino-eshop/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── ProductCard.jsx  # Individual product card
│   │   ├── ProductList.jsx  # Product grid
│   │   ├── Cart.jsx         # Shopping cart page
│   │   ├── Footer.jsx       # Footer
│   │   ├── *.css            # Component styles
│   │   └── *.test.jsx       # Unit tests
│   ├── store/
│   │   ├── store.js         # Zustand store (state management)
│   │   └── store.test.js    # Store tests
│   ├── test/
│   │   └── setup.js         # Test configuration
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── tests/
│   └── e2e/
│       └── shop.spec.js     # Playwright E2E tests
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── vitest.config.js         # Vitest configuration
└── playwright.config.js     # Playwright configuration
```

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# All tests
npm run test && npm run e2e
```

### Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## ✨ Features

- **Modern Design**: Clean, polished UI with gradient backgrounds
- **Responsive Layout**: Mobile-friendly design
- **Product Catalog**: Browse 6 premium Merino products
- **Shopping Cart**: Add/remove items, adjust quantities
- **Favorites**: Mark products as favorites
- **State Management**: Zustand for predictable state
- **Routing**: React Router for multi-page navigation
- **Full Test Coverage**: Unit tests + E2E tests

## 🧪 Testing

### Unit Tests (Vitest)
- Header component tests
- ProductCard component tests
- ProductList component tests
- Cart component tests
- Store logic tests

### E2E Tests (Playwright)
- Home page navigation
- Product shopping workflow
- Cart operations
- Multi-page navigation
- Responsive design

## 📦 Technologies

- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Zustand** - State management
- **Vitest** - Unit testing
- **@testing-library/react** - React testing utilities
- **Playwright** - E2E testing

## 🎨 Design Highlights

- Modern gradient backgrounds
- Smooth hover animations
- Responsive grid layouts
- Clean typography
- Accessible components with ARIA labels
- Emoji-based product images for quick visual appeal

## 📱 Pages

1. **Home** (`/`) - Featured products and hero section
2. **Shop** (`/products`) - Full product catalog
3. **Cart** (`/cart`) - Shopping cart with summary

## 🛍️ Products

The shop features 6 premium Merino wool products:
- Merino Thermal Base Layer
- Merino Mid-Layer Fleece
- Merino Wool Socks
- Merino Outer Shell
- Merino Beanie
- Merino Long Sleeve Shirt
