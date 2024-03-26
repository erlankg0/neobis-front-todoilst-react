import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './normalize.css'
import AppContent from "./layout/App/AppContent.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppContent/>
    </React.StrictMode>,
)