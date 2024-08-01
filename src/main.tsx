import React from 'react';
import ReactDOM from 'react-dom/client';
import 'regenerator-runtime/runtime.js';
import './index.css';
import App from './App.tsx';
import TanStackQueryContext from './libs/contexts/TanStackQueryContext.tsx';
import ToastContext from './libs/contexts/ToastContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackQueryContext>
      <App />
      <ToastContext />
    </TanStackQueryContext>
  </React.StrictMode>,
);
