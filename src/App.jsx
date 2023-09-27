import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/HomePage'
import { AppFooter } from './cmps/AppFooter.jsx'

function App() {

  return (
    <Router>
      <main className='main-layout'>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AppFooter />
      </main>
    </Router>
  )
}

export default App
