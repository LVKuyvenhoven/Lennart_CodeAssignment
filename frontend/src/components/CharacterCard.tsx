import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
    characterName: string
    characterUrl: string
}

export const CharacterCard = ({characterName, characterUrl}: Props) => {
    const [showDialog, setShowDialog] = useState(false)
    
    const openDialog = () =>{
        setShowDialog(true)
    }

        const closeDialog = () =>{
        setShowDialog(false)
    }

  return (
    <>
    <Button onClick={openDialog} variant="contained">{characterName}</Button>
    <Dialog open={showDialog}>
         <Typography >Some info</Typography>
         <DialogTitle>{characterName}</DialogTitle>
         <DialogContent>
            <Stack gap={3}>
                Some content
            </Stack>
                {/* <img
        src={characterUrl}
        loading="lazy"
      /> */}
      <Box
  component="img"
  sx={{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={characterUrl}
/>
         </DialogContent>
         <DialogActions>
            <Button variant="outlined" onClick={closeDialog}>Close</Button>
         </DialogActions>
    </Dialog>
    </>
  )
}
