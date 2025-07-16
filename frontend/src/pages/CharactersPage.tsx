import { Box, Button, Grid, Pagination, Stack, Switch, Typography } from "@mui/material"
import { CharacterCard } from "../components/CharacterCard"
import { getCharacters } from 'rickmortyapi'
import { useEffect, useMemo, useState } from "react"
import type { Character } from "rickmortyapi"

export const CharactersPage = () => {
  const[characters, setCharacters] = useState<Character[]>()
  const [currentPage, setCurrentPage] = useState(0)
  const [onlyShowHumans, setOnlyShowHumans] = useState(true)

  const loadCharacters = async () => {
    try 
    {
      const fetchedCharacters = await getCharacters({ page: currentPage, species: onlyShowHumans ? "Human" : "Alien" })
      if (fetchedCharacters.data.results)
      {
        setCharacters(fetchedCharacters.data.results)
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

  useEffect(() => {
    loadCharacters()
  }, [currentPage, onlyShowHumans])

  return (
    <Box>
      <Stack direction="column" gap={3}>
        <Typography variant="h3" sx={{ color: '#68A629' }} >Characters</Typography>
        <Button onClick={() => setOnlyShowHumans(!onlyShowHumans)}>{ onlyShowHumans ? <Typography>Only show aliens</Typography> : <Typography>Only show humans</Typography>}</Button>
          <Grid container spacing={2} columns={4}>
            { characters && characters.map((character) => {
              return (<Grid size={2} key={character.id} >
                        <CharacterCard characterToDisplay={character} />
                      </Grid>)            
            })}
          </Grid>
        <Pagination defaultPage={1} count={42} onChange={selectPage} variant="outlined" shape="rounded" color="primary" />
      </Stack>
    </Box>
  )
}
