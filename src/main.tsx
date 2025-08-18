import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Scroll to top on route change
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById("root")!).render(<App />);
