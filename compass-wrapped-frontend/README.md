# Compass Wrapped Frontend

A frontend application for visualizing TransLink Compass Card usage data, similar to Spotify Wrapped.

## Features

- Upload your Compass Card usage CSV data
- View various analytics about your transit usage:
  - Total trips and time spent on transit
  - Most used routes and stations
  - Transfer patterns
  - Your commuter personality type
  - Achievements based on your transit usage
  - Missing tap-ins and tap-outs analysis
  - Environmental impact of using transit
- Generate shareable images to post on social media

## Tech Stack

- React with TypeScript
- Vite for fast development and building
- React Router for navigation
- Chart.js for data visualization
- TailwindCSS for styling
- HTML-to-Image for generating shareable images

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/compass-wrapped-frontend.git
cd compass-wrapped-frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Backend Integration

This frontend is designed to work with the Compass Wrapped Backend API. You can configure the API URL in `src/services/api.ts`.

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory, which you can serve using any static file server.

## Screenshots

[Coming Soon]

## License

[MIT](LICENSE)

## Acknowledgements

- TransLink for providing the Compass Card system
- Inspired by Spotify Wrapped
