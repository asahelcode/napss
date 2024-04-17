import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SWRConfig } from 'swr'
import fetcher from './utils/fetcher'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        onError: (error) => console.error(error),
        revalidateOnFocus: true,
        dedupingInterval: 2000
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
)
