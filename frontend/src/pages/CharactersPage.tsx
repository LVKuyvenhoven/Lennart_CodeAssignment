import { Box, Typography } from "@mui/material"
import { CharacterCard } from "../components/CharacterCard"
// import { getCharacters } from "../services.ts/api"
import { getCharacters } from 'rickmortyapi'
import { useEffect, useState } from "react"
import type { ApiResponse, Info, Character } from "rickmortyapi"

interface CharacterEntry {
  name: string,
  id: number,
  species: string
}

export const CharactersPage = () => {
  const[characters, setCharacters] = useState<ApiResponse<Info<Character[]>>>([])

      const loadCharacters = async () => {
    try {
      // const allCharacters = await getCharacters()
      const allCharacters = await getCharacters()
      if (allCharacters.data.results)
      {
      setCharacters(allCharacters)
      }
    }
    catch (error){
      console.log("error")
    }
    }

  useEffect(() => {
    loadCharacters()
  }, [])

    console.log("characters")
  console.log(characters)
    
  return (
    <Box>
              <Typography variant="h3">Characters</Typography>
        { characters?.data?.results?.length && characters.data.results.length > 0 && characters.data.results.map((character) => {
            return <CharacterCard characterName={character.name} key={character.id}/>
        })}
    </Box>
  )
}
