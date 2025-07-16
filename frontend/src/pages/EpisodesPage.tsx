import { Box, Typography } from "@mui/material";
import { CharacterCard } from "../components/CharacterCard";

export const EpisodesPage = () => {
    const loadedLocations = [
        { name: "Episode 1", id: 0 },
                        { name: "Episode 2", id: 1 }
    ]
    
  return (
    <Box>
        <Typography variant="h3">Episodes</Typography>
        { loadedLocations.map((location) => {
            return <CharacterCard characterName={location.name} key={location.id}/>
        })}
    </Box>
  )
}
