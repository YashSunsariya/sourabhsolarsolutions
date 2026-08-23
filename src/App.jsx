import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/pages/Home.jsx'
import ProjectsPage from './components/pages/ProjectsPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App