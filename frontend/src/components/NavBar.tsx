import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NavBar = () => {

  return (
      <Stack direction="row" gap={3}>
        <Link to="/Characters">
         <Typography sx={{ color: '#161A26' }} >
            Characters
          </Typography>
        </Link>
        <Link to="/Locations">
         <Typography sx={{ color: '#161A26' }} >
            Locations
          </Typography>
        </Link>
        <Link to="/Episodes">
         <Typography sx={{ color: '#161A26' }} >
            Episodes
          </Typography>
        </Link>
      </Stack>
  )
}
