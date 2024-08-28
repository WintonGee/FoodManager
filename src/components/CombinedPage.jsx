import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import ChatContent from "./ChatContent"; // Use ChatContent instead of ChatPage

export function CombinedPage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    const savedIngredients =
      JSON.parse(localStorage.getItem("ingredients")) || [];
    setIngredients(savedIngredients);
  }, []);

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  return (
    <Container sx={{ pt: 5 }}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 2,
              maxHeight: "calc(100vh - 160px)",
              overflow: "auto",
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Ingredients
            </Typography>
            <List>
              {ingredients.map((ingredient, index) => (
                <ListItem
                  key={index}
                  onClick={() => handleSelectIngredient(ingredient)}
                >
                  <Card
                    sx={{
                      mb: 2,
                      width: "100%",
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: "background.paper",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: 6,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "primary.main" }}>
                        {ingredient.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {ingredient.quantity}
                      </Typography>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper
            sx={{
              p: 2,
              maxHeight: "calc(100vh - 160px)",
              overflow: "auto",
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <ChatContent />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CombinedPage;
