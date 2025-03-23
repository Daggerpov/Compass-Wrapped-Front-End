# Compass Wrapped - TransLink Year in Review

A web application that analyzes Compass Card data to provide a personalized year in review, inspired by Spotify Wrapped.

## Overview

Compass Wrapped allows TransLink users to upload their Compass Card CSV data to generate a personalized transit year in review, highlighting statistics such as:

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

## Backend Configuration

By default, the application connects to a backend API at `http://localhost:8000`. If your backend is running on a different URL, update the `API_URL` in `src/services/api.ts`.

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

## Data Privacy

This application processes Compass Card data locally in your browser. No data is sent to any servers except the backend API for analysis.

## License

[MIT License](LICENSE)
 
