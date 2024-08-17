import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { HashRouter } from 'react-router-dom'
import { Store, StoreContext } from './store.context.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <StoreContext.Provider value={Store}>
        <App />
      </StoreContext.Provider>
    </HashRouter>
  </React.StrictMode>
);
