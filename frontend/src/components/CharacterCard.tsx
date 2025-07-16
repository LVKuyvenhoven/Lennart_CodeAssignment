import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
    characterName: string
}

export const CharacterCard = ({characterName}: Props) => {
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
         </DialogContent>
         <DialogActions>
            <Button variant="outlined" onClick={closeDialog}>Close</Button>
         </DialogActions>
    </Dialog>
    </>
  )
}
