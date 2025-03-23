# Compass Wrapped - TransLink Monthly Transit Insights

A web application that analyzes Compass Card data to provide a personalized monthly transit summary, inspired by Spotify Wrapped.

## Overview

Compass Wrapped allows TransLink users to upload their Compass Card CSV data to generate a personalized transit summary, highlighting statistics such as:

- Total trips taken
- Most visited stops
- Time spent on transit
- Common transfer points
- Transit personality type
- Achievements based on travel patterns

## Requirements

- Node.js (v16+)
- npm or yarn
- Modern web browser

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/Compass-Wrapped-Front-End.git
   cd Compass-Wrapped-Front-End
   ```

2. Navigate to the frontend directory:
   ```
   cd compass-wrapped-frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or with yarn:
   ```
   yarn install
   ```

## Environment Configuration

The application uses environment variables for API configuration:

- Development: Create a `.env.development` file with:
  ```
  VITE_API_URL=http://localhost:8000
  ```

- Production: Create a `.env.production` file with:
  ```
  VITE_API_URL=https://compass-wrapped-back-end.vercel.app
  ```

## Running the Application

1. Make sure you're in the `compass-wrapped-frontend` directory:
   ```
   cd compass-wrapped-frontend
   ```
   (Skip this step if you're already in the directory)

2. Start the development server:
   ```
   npm run dev
   ```
   or with yarn:
   ```
   yarn dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Building for Production

To create a production build:

```
cd compass-wrapped-frontend
npm run build
```

The built files will be in the `dist` folder and can be served using any static file server.

## Project Structure

- `src/pages` - Main page components
- `src/components` - Reusable UI components
- `src/components/slides` - Individual slides for the summary view
- `src/context` - React context for global state
- `src/services` - API services
- `src/assets` - Images and static files

## API Integration

The application connects to:
- Development: `http://localhost:8000`
- Production: `https://compass-wrapped-back-end.vercel.app`

You can override these by setting the `VITE_API_URL` environment variable.

## Data Privacy

This application processes Compass Card data locally in your browser. The data is only sent to the backend API for analysis and is not stored.

## License

[CC BY-NC-ND 4.0](LICENSE.md)

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

## Screenshots

[Coming Soon]

## Acknowledgements

- TransLink for providing the Compass Card system
- Inspired by Spotify Wrapped
