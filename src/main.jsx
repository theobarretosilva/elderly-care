import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/UserContext.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from './lib/tanstack-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <QueryClientProvider client={queryClientInstance}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ContextProvider>
)
