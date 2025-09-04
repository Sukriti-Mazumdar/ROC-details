import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClientDetailView from './ClientDetailView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientDetailView />
  </StrictMode>,
)
