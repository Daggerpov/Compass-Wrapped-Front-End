import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import { DataProvider } from './context/DataContext'
import HomePage from './pages/HomePage'
import SummaryPage from './pages/SummaryPage'
import SharePage from './pages/SharePage'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/share" element={<SharePage />} />
        </Routes>
      </Router>
      <Analytics />
      <Toaster />
    </DataProvider>
  )
}

export default App
