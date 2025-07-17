import './App.css'
import { CharactersPage } from './pages/CharactersPage'
import { Routes, Route } from 'react-router-dom'
import { LocationsPage } from './pages/LocationsPage'
import { EpisodesPage } from './pages/EpisodesPage'
import { NavBar } from './components/NavBar'
import { Stack } from '@mui/material'

function App() {

  return (
    <>
    <Stack direction="column" gap={3}>
    <NavBar/>
      <Routes >
        <Route path="/" element={<CharactersPage/>} />
        <Route path="/locations" element={<LocationsPage/>} />
        <Route path="/episodes" element={<EpisodesPage/>} />
    </Routes>
          </Stack>
    </>
  )
}

export default App
