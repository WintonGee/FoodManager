// ChatContent.js
import React, { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Button,
  Alert,
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";

const API_KEY = "sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const CONTENT_EXACT =
  "I have a set of ingredients available, and I'm looking for recipes that can be prepared using them. Not all ingredients have to be used, but do not include items unavailable";
const systemMessage = { role: "system", content: CONTENT_EXACT };

const initialMessages = [
  {
    message: "Hello, I'm PantryCraft! List some ingredients!",
    sentTime: "just now",
    sender: "PantryCraft",
  },
];

export function ChatContent() {
  const [messages, setMessages] = useState([]);
  const [conversationName, setConversationName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const savedConversations =
      JSON.parse(localStorage.getItem("conversations")) || [];
    if (savedConversations.length > 0) {
      const latestConversation =
        savedConversations[savedConversations.length - 1];
      setConversationName(latestConversation.name);
      setMessages(latestConversation.messages);
    } else {
      setMessages(initialMessages);
    }
  }, []);

  const handleSend = async () => {
    if (messageInput.trim() === "") return;
    const newMessage = {
      message: messageInput,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setMessageInput("");
    setIsTyping(true);
    setError(null);
    await processMessageToChatGPT(newMessages);
  };

  // Handles sending the message to OpenAI
  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "PantryCraft" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      const data = await response.json();
      setMessages([
        ...chatMessages,
        { message: data.choices[0].message.content, sender: "PantryCraft" },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message to ChatGPT:", error);
      setError("Error sending message. Please try again.");
      setIsTyping(false);
    }
  }

  const handleReset = () => {
    setMessages(initialMessages);
    setMessageInput("");
    setConversationName("");
  };

  const handleSave = () => {
    const savedConversations =
      JSON.parse(localStorage.getItem("conversations")) || [];
    const newConversation = {
      name: conversationName,
      messages,
    };
    savedConversations.push(newConversation);
    localStorage.setItem("conversations", JSON.stringify(savedConversations));
    alert("Conversation saved!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          value={conversationName}
          onChange={(e) => setConversationName(e.target.value)}
          placeholder="Conversation name"
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSave}
          sx={{
            height: "100%",
            fontWeight: "bold",
            bgcolor: "primary.dark",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleReset}
          sx={{
            height: "100%",
            fontWeight: "bold",
            bgcolor: "secondary.dark",
            "&:hover": {
              bgcolor: "secondary.main",
            },
          }}
        >
          Reset
        </Button>
      </Stack>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Paper
        sx={{
          flexGrow: 1,
          p: 2,
          mb: 2,
          overflow: "auto",
          bgcolor: "background.paper",
        }}
      >
        <List>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography
                      sx={{ fontWeight: "bold", color: "primary.main" }}
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
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        {isTyping && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Paper>

      <Stack direction="row" spacing={2}>
        <TextField
          variant="outlined"
          fullWidth
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="List Ingredients Here"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
              e.preventDefault();
            }
          }}
          sx={{ bgcolor: "background.paper", borderRadius: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          sx={{
            fontWeight: "bold",
            bgcolor: "primary.dark",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}

export default ChatContent;
