import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SWRConfig } from 'swr'
import init from './api/config.ts'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 0,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000 * 60
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
)
