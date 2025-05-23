/*import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />); */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or wherever your global styles are

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
