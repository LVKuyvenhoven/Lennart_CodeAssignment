import './App.css'
import { CharactersPage } from './pages/CharactersPage'
import { Routes, Route } from 'react-router-dom'
import { LocationsPage } from './pages/LocationsPage'
import { EpisodesPage } from './pages/EpisodesPage'
import { NavBar } from './components/NavBar'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <>
    <NavBar/>
    <Routes >
                  <Route path="/" element={<HomePage/>} />
            <Route path="/characters" element={<CharactersPage/>} />
      <Route path="/characters" element={<CharactersPage/>} />
            <Route path="/locations" element={<LocationsPage/>} />
                  <Route path="/episodes" element={<EpisodesPage/>} />
    </Routes>
    </>
  )
}

export default App
