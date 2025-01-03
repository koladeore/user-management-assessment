# User Directory Application

A modern React application that displays user profiles with beautiful animations and a responsive design.


## Features

- 📱 Responsive design that works on desktop and mobile
- ✨ Beautiful animations using Framer Motion
- 🎯 Clean and intuitive user interface
- 🧪 Comprehensive end-to-end testing
- 📍 Detailed user profiles with contact information
- 🔄 Smooth page transitions

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons
- Playwright (E2E Testing)
- Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository
```bash
git clone https://github.com/koladeore/user-management-assessment
cd user-management-application
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run Playwright E2E tests

## Testing

The application includes comprehensive end-to-end tests using Playwright. To run the tests:

1. Install Playwright browsers
```bash
npx playwright install
```

2. Run the tests
```bash
npx playwright test
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── UserCard.tsx
│   ├── UserDetails.tsx
│   └── animations/
├── pages/            # Route components
│   ├── HomePage.tsx
│   └── UserDetailsPage.tsx
├── types/            # TypeScript interfaces
├── data/             # Mock data
└── tests/            # E2E tests
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations