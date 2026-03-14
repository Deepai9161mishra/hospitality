import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './style.css';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
);

