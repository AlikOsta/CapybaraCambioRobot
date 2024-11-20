import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@providers/translations/i18n'
import App from '@app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)