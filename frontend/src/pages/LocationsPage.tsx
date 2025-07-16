import { Box, Grid, Pagination, Stack, Typography } from "@mui/material"
import { getLocations } from 'rickmortyapi'
import { useEffect, useState } from "react"
import type { Location } from "rickmortyapi"

export const LocationsPage = () => {
  const[locations, setLocations] = useState<Location[]>()
  const [currentPage, setCurrentPage] = useState(0)

  const loadLocations = async () => {
    try 
    {
      const reponse = await getLocations({ page: currentPage })
      if (reponse.data.results)
      {
        setLocations(reponse.data.results)
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
    loadLocations()
  }, [currentPage])

  return (
    <Box>
      <Stack direction="column" gap={3}>
        <Typography variant="h3" sx={{ color: '#68A629' }} >Locations</Typography>
          <Grid container spacing={2} columns={4}>
            { locations && locations.map((location) => {
              return (<Grid size={2} key={location.id} >
                <Typography>{location.name}</Typography>
                      </Grid>)            
            })}
          </Grid>
        <Pagination defaultPage={1} count={42} onChange={selectPage} variant="outlined" shape="rounded" color="primary" />
      </Stack>
    </Box>
  )
}
