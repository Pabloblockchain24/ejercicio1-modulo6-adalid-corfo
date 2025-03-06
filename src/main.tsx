import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

// Registramos service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then( () => {
        console.log('SW registered');
      })
      .catch((error) => {
        console.log('SW registration failed: ', error);
      });
}


if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
