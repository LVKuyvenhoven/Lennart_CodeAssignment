import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NavBar = () => {

  return (
      <Stack direction="row" gap={3} justifyContent={"center"}>
        <Link to="/">
         <Typography variant="h5" sx={{ color: '#161A26', '&:hover': { color: '#68A629' } }} >
            Characters
          </Typography>
        </Link>
        <Link to="/Locations">
         <Typography variant="h5" sx={{ color: '#161A26', '&:hover': { color: '#68A629' } }} >
            Locations
          </Typography>
        </Link>
        <Link to="/Episodes">
         <Typography variant="h5" sx={{ color: '#161A26', '&:hover': { color: '#68A629' } }} >
            Episodes
          </Typography>
        </Link>
      </Stack>
  )
}
