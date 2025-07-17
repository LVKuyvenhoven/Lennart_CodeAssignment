import { Box, Button, Grid, Pagination, Stack, Typography } from "@mui/material"
import { CharacterCard } from "../components/CharacterCard"
import { getCharacters } from 'rickmortyapi'
import { useEffect, useState } from "react"
import type { Character } from "rickmortyapi"

export const CharactersPage = () => {
  const[characters, setCharacters] = useState<Character[]>()
   const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [showHumans, setShowHumans] = useState(true)

  const loadCharacters = async () => {
    try 
    {
      const response = await getCharacters({ page: currentPage, species: showHumans ? "Human" : "Alien" })
      if (response.data.results)
      {
        setPageCount(response?.data?.info?.pages ?? 0)
        setCharacters(response.data.results)
      }
    }
    catch (error)
    {
      //Todo: implement error handling here
    }
  }

  const selectPage = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    setCurrentPage(page)
  }

  const filterCharacters = (showHumans: boolean) => {
    setCurrentPage(1)
    setShowHumans(showHumans)
  }

  useEffect(() => {
    loadCharacters()
  }, [currentPage, showHumans])

  return (
    <Box>
      <Stack direction="column" gap={3}>
        <Typography variant="h3" sx={{ color: '#68A629' }} >Characters</Typography>
        <Button onClick={() => filterCharacters(!showHumans)} >{ showHumans ? <Typography>Show all aliens</Typography> : <Typography>Show all humans</Typography>}</Button>
          <Grid container spacing={2} columns={4}>
            { characters && characters.map((character) => {
              return (<Grid size={2} key={character.id} >
                        <CharacterCard characterToDisplay={character} />
                      </Grid>)            
            })}
          </Grid>
        <Pagination page={currentPage} count={pageCount}  onChange={selectPage} variant="outlined" shape="rounded" color="primary" />
      </Stack>
    </Box>
  )
}
