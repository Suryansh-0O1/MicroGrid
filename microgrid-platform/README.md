# Microgrid Energy Prediction Platform

A modern web application for predicting and analyzing energy consumption in microgrids using machine learning. The platform provides real-time predictions, detailed analytics, and energy-saving insights.

## Features

- **Energy Prediction**: Input sensor data and environmental conditions to predict energy consumption
- **Interactive Dashboard**: Monitor current consumption, daily averages, and peak hours
- **Advanced Analytics**: Visualize consumption patterns, feature importance, and anomalies
- **Energy Optimization**: Get personalized tips for reducing energy consumption
- **Data Export**: Download reports and analytics in PDF/CSV formats

## Tech Stack

- React 18 with JavaScript
- Material-UI (MUI) for components
- Recharts for data visualization
- React Router for navigation

## Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd microgrid-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
microgrid-platform/
├── src/
│   ├── components/     # Reusable UI components
│   │   └── Layout.jsx # Main layout component
│   ├── pages/         # Main application pages
│   │   ├── Dashboard.jsx
│   │   ├── PredictionForm.jsx
│   │   └── AnalyticsView.jsx
│   ├── utils/         # Helper functions and utilities
│   ├── assets/        # Static assets (images, icons)
│   └── styles/        # Global styles and themes
├── public/           # Static files
└── package.json      # Project dependencies and scripts
```

## Usage

1. Navigate to the Prediction page to input sensor data
2. View real-time predictions and confidence intervals
3. Explore detailed analytics in the Analytics view
4. Monitor daily consumption and trends in the Dashboard
5. Export reports and data as needed

## Features Overview

### Dashboard
- Quick stats showing current consumption, daily averages, and costs
- Energy-saving tips and recommendations
- Quick access to predictions and analytics

### Prediction Form
- Input fields for temperature sensors (T1-T9)
- Humidity sensor inputs (RH1-RH9)
- Outdoor conditions monitoring
- Time-based predictions

### Analytics View
- Interactive time series visualization
- Feature importance analysis
- Weekly consumption patterns
- Anomaly detection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.