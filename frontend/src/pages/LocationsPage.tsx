import { Box, Typography } from "@mui/material";
import { CharacterCard } from "../components/CharacterCard";

export const LocationsPage = () => {
    const loadedLocations = [
        { name: "Rick's lab", id: 0 },
                        { name: "Morty's room", id: 1 }
    ]
    
  return (
    <Box>
                <Typography variant="h3">Locations</Typography>
        { loadedLocations.map((location) => {
            return <CharacterCard characterName={location.name} key={location.id}/>
        })}
    </Box>
  )
}
