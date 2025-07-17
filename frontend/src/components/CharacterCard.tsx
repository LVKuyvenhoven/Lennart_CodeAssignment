import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material"
import { useState } from "react"
import type { Character } from "rickmortyapi"

interface Props {
    characterToDisplay: Character
}

export const CharacterCard = ({characterToDisplay}: Props) => {
    const [showDialog, setShowDialog] = useState(false)
    
    const openDialog = () =>{
        setShowDialog(true)
    }

    const closeDialog = () =>{
        setShowDialog(false)
    }

  return (
    <>
    <Box
       onClick={openDialog}
       component="img"
        sx={{
          width: "80%",
          height: "80%",
          '&:hover': {
            color:  '#68A629',
          bgcolor: '#68A629',
          opacity: 0.5,
          transition: ".5s ease"
          },
        }}
       src={characterToDisplay.image}
    />
    <Dialog open={showDialog} >
         <DialogTitle>{characterToDisplay.name}</DialogTitle>
         <DialogContent>
            <Stack gap={3}>
                <Box
                  component="img"
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    }}
                    src={characterToDisplay.image}
                />
                <Stack direction="row" gap={3}>
                    <Typography>{characterToDisplay.gender}</Typography>
                    <Typography>{characterToDisplay.species}</Typography>
                </Stack>
            </Stack>
         </DialogContent>
         <DialogActions>
            <Button variant="outlined" onClick={closeDialog}>Close</Button>
         </DialogActions>
    </Dialog>
    </>
  )
}
