import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  IconButton,
  Alert,
  Grid,
  Container,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatIcon from "@mui/icons-material/Chat";
import ListAltIcon from "@mui/icons-material/ListAlt";

const RecipePage = () => {
  const [savedConversations, setSavedConversations] = useState([]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedConversations =
      JSON.parse(localStorage.getItem("conversations")) || [];
    setSavedConversations(savedConversations);
  }, []);

  const handleConversationSelect = (index) => {
    setSelectedConversationIndex(index);
    setError(null);
  };

  const handleDeleteConversation = () => {
    try {
      const updatedConversations = savedConversations.filter(
        (_, index) => index !== selectedConversationIndex
      );
      setSavedConversations(updatedConversations);
      localStorage.setItem(
        "conversations",
        JSON.stringify(updatedConversations)
      );
      setSelectedConversationIndex(0);
      setError(null);
    } catch (error) {
      setError("Error deleting the conversation. Please try again.");
    }
  };

  return (
    <Container sx={{ pt: 5 }}>
      <Box
        sx={{
          p: 4,
          bgcolor: "background.default",
          borderRadius: 2,
          boxShadow: 3,
          mb: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            mb: 2,
            fontWeight: "bold",
          }}
        >
          Saved Conversations
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Browse through your saved conversations.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
              height: "calc(100vh - 200px)",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold", color: "text.primary" }}
            >
              Conversations List{" "}
              <ListAltIcon sx={{ verticalAlign: "middle" }} />
            </Typography>
            {savedConversations.length === 0 ? (
              <Typography variant="body1" color="text.secondary">
                No saved conversations found.
              </Typography>
            ) : (
              <List>
                {savedConversations.map((conversation, index) => (
                  <ListItem
                    button
                    key={index}
                    selected={selectedConversationIndex === index}
                    onClick={() => handleConversationSelect(index)}
                    sx={{
                      "&.Mui-selected": {
                        bgcolor: "primary.light",
                        "&:hover": {
                          bgcolor: "primary.main",
                        },
                      },
                      mb: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText primary={conversation.name} />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
              height: "calc(100vh - 200px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                {savedConversations.length > 0
                  ? savedConversations[selectedConversationIndex].name
                  : "Select a conversation"}{" "}
                <ChatIcon sx={{ verticalAlign: "middle" }} />
              </Typography>
              {savedConversations.length > 0 && (
                <IconButton
                  edge="end"
                  color="error"
                  onClick={handleDeleteConversation}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
              {savedConversations.length > 0 ? (
                <List>
                  {savedConversations[selectedConversationIndex].messages.map(
                    (message, index) => (
                      <React.Fragment key={index}>
                        <ListItem alignItems="flex-start">
                          <ListItemText
                            primary={
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                  color: "primary.main",
                                }}
                              >
                                {message.sender}
                              </Typography>
                            }
                            secondary={
                              <Typography sx={{ color: "text.primary" }}>
                                {message.message}
                              </Typography>
                            }
                          />
                        </ListItem>
                        {index <
                          savedConversations[selectedConversationIndex].messages
                            .length -
                            1 && <Divider variant="inset" component="li" />}
                      </React.Fragment>
                    )
                  )}
                </List>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No messages to display.
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipePage;
