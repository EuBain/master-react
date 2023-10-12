import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'virtual:uno.css'
import {  BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter basename='/master-react'>
      <App />
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>,
)
