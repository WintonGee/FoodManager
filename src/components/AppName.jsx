import React from "react";
import { Typography, Box } from "@mui/material";

export const API_TYPE_NAME = "PantryCraft";

export function AppName() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          color: "secondary.main",
          fontWeight: "bold",
          letterSpacing: 1.5,
          textTransform: "uppercase",
        }}
      >
        {API_TYPE_NAME}
      </Typography>
    </Box>
  );
}

export default AppName;
