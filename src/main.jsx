import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BillsContextProvider } from './reducer/billsReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BillsContextProvider>
      <App />
    </BillsContextProvider>
  </StrictMode>,
);
