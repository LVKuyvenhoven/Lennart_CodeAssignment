import { Box, Grid, Pagination, Stack, Typography } from "@mui/material"
import { CharacterCard } from "../components/CharacterCard"
// import { getCharacters } from "../services.ts/api"
import { getCharacters } from 'rickmortyapi'
import { useEffect, useState } from "react"
import type { ApiResponse, Info, Character } from "rickmortyapi"

export const CharactersPage = () => {
  const[characters, setCharacters] = useState<ApiResponse<Info<Character[]>>>()

    const [currentPage, setCurrentPage] = useState(0)

      const loadCharacters = async () => {
    try {
      // const allCharacters = await getCharacters()
      const allCharacters = await getCharacters({ page: currentPage })
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
  }, [currentPage])

    
  const selectPage = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    setCurrentPage(page)
  }

  return (
    <Box>
                    <Stack direction="column" gap={3}>
              <Typography variant="h3">Characters</Typography>

<Grid container spacing={2} columns={8}>
        { characters?.data?.results?.length && characters.data.results.length > 0 && characters.data.results.map((character) => {
            return     (<Grid size={4}>
              <CharacterCard characterName={character.name} characterUrl={character.image} key={character.id}/>
                  </Grid>)            
        })}

  </Grid>
        <Pagination defaultPage={1} count={20} onChange={selectPage} variant="outlined" shape="rounded" color="secondary" />
                      </Stack>
    </Box>
  )
}
