import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {

  return (
    <>
    <Box>
    <Link to="/Characters">Characters</Link>
    </Box>
        <Box>
    <Link to="/Locations">Locations</Link>
    </Box>
            <Box>
    <Link to="/Episodes">Episodes</Link>
    </Box>
    </>
  )
}
