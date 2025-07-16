import { Box, Grid, Pagination, Stack, Typography } from "@mui/material"
import { getEpisodes } from 'rickmortyapi'
import { useEffect, useState } from "react"
import type { Episode } from "rickmortyapi"

export const EpisodesPage = () => {
  const[episodes, setEpisodes] = useState<Episode[]>()
  const [currentPage, setCurrentPage] = useState(0)

  const loadEpisodes = async () => {
    try 
    {
      const reponse = await getEpisodes({ page: currentPage })
      if (reponse.data.results)
      {
        setEpisodes(reponse.data.results)
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
    loadEpisodes()
  }, [currentPage])

  return (
    <Box>
      <Stack direction="column" gap={3}>
        <Typography variant="h3" sx={{ color: '#68A629' }} >Episodes</Typography>
          <Grid container spacing={2} columns={4}>
            { episodes && episodes.map((episode) => {
              return (<Grid size={2} key={episode.id} >
                <Typography>{episode.name}</Typography>
                      </Grid>)            
            })}
          </Grid>
        <Pagination defaultPage={1} count={42} onChange={selectPage} variant="outlined" shape="rounded" color="primary" />
      </Stack>
    </Box>
  )
}
