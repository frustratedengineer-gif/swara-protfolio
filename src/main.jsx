import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'
import './styles/motifs.css'

// StrictMode's dev-only double-invoke of mount effects races with Framer Motion's
// animate-on-mount transitions (elements can get stuck at their `initial` state) —
// left out deliberately, not an oversight.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
