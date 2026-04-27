import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsAndConditions />} />
    </Routes>
  )
}
