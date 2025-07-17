import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import type { Location } from "rickmortyapi"

interface Props {
    locationToDisplay: Location
}

export const LocationCard = ({locationToDisplay}: Props) => {
    const [showDialog, setShowDialog] = useState(false)
    
    const openDialog = () =>{
        setShowDialog(true)
    }

    const closeDialog = () =>{
        setShowDialog(false)
    }

  return (
    <>
    <Tooltip title="Test">
    <Button onClick={openDialog}>{locationToDisplay.name}</Button>
    </Tooltip>
    <Dialog open={showDialog} >
         <DialogTitle>{locationToDisplay.name}</DialogTitle>
         <DialogContent>
            <Stack gap={3}>
                <Stack direction="row" gap={3}>
                    <Typography>{locationToDisplay.type}</Typography>
                    <Typography>{locationToDisplay.dimension}</Typography>
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
