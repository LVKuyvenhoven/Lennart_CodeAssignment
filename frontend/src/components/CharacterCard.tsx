import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material"
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
    <Button onClick={openDialog} variant="contained">{characterToDisplay.name}</Button>
    <Dialog open={showDialog}>
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
                    alt="The house from the offer."
                    src={characterToDisplay.image}
                />
            </Stack>
         </DialogContent>
         <DialogActions>
            <Button variant="outlined" onClick={closeDialog}>Close</Button>
         </DialogActions>
    </Dialog>
    </>
  )
}
