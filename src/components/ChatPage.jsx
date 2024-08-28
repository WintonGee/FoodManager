
// ChatPage.js
import React from "react";
import { Box, Typography } from "@mui/material";
import ChatContent from "./ChatContent";

export function ChatPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        p: 3,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{ mb: 2, fontWeight: "bold", color: "text.primary" }}
        >
          PantryCraft Chat
        </Typography>
        <Typography variant="body1">
          Chat with PantryCraft to get recipe suggestions based on your
          available ingredients.
        </Typography>
      </Box>
      <ChatContent />
    </Box>
  );
}

export default ChatPage;
