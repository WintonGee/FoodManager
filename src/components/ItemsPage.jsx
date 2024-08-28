import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function ItemsPage() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: "",
  });
  const [editIngredient, setEditIngredient] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  useEffect(() => {
    const savedIngredients =
      JSON.parse(localStorage.getItem("ingredients")) || [];
    setIngredients(savedIngredients);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditIngredient({ ...editIngredient, [name]: value });
  };

  const handleAddIngredient = () => {
    if (newIngredient.name && newIngredient.quantity) {
      const updatedIngredients = [...ingredients, newIngredient];
      setIngredients(updatedIngredients);
      localStorage.setItem("ingredients", JSON.stringify(updatedIngredients));
      setNewIngredient({ name: "", quantity: "" });
    }
  };

  const handleEditIngredient = (ingredient) => {
    setEditIngredient(ingredient);
    setOpenEditDialog(true);
  };

  const handleSaveEditIngredient = () => {
    const updatedIngredients = ingredients.map((ingredient) =>
      ingredient.name === editIngredient.name ? editIngredient : ingredient
    );
    setIngredients(updatedIngredients);
    localStorage.setItem("ingredients", JSON.stringify(updatedIngredients));
    setOpenEditDialog(false);
  };

  const handleDeleteIngredient = (name) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.name !== name
    );
    setIngredients(updatedIngredients);
    localStorage.setItem("ingredients", JSON.stringify(updatedIngredients));
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
          PantryCraft Ingredients
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Discover the ingredients available in your pantry.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Ingredient Name"
              name="name"
              value={newIngredient.name}
              onChange={handleInputChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                "& .MuiInputBase-input": {
                  padding: "16.5px 14px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={newIngredient.quantity}
              onChange={handleInputChange}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 1,
                "& .MuiInputBase-input": {
                  padding: "16.5px 14px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAddIngredient}
              sx={{
                height: "100%",
                fontWeight: "bold",
                bgcolor: "primary.dark",
                "&:hover": { bgcolor: "primary.main" },
              }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {ingredients.map((ingredient, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "background.paper",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "primary.main" }}>
                    {ingredient.name}
                  </Typography>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => handleEditIngredient(ingredient)}
                      sx={{
                        color: "secondary.main",
                        "&:hover": { backgroundColor: "secondary.light" },
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteIngredient(ingredient.name)}
                      sx={{
                        color: "error.main",
                        "&:hover": { backgroundColor: "error.light" },
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  {ingredient.quantity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Ingredient</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Ingredient Name"
            name="name"
            value={editIngredient ? editIngredient.name : ""}
            onChange={handleEditInputChange}
            margin="dense"
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              "& .MuiInputBase-input": {
                padding: "16.5px 14px",
              },
            }}
          />
          <TextField
            fullWidth
            label="Quantity"
            name="quantity"
            value={editIngredient ? editIngredient.quantity : ""}
            onChange={handleEditInputChange}
            margin="dense"
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              "& .MuiInputBase-input": {
                padding: "16.5px 14px",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenEditDialog(false)}
            color="secondary"
            sx={{
              fontWeight: "bold",
              bgcolor: "secondary.dark",
              "&:hover": { bgcolor: "secondary.main" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveEditIngredient}
            color="primary"
            sx={{
              fontWeight: "bold",
              bgcolor: "primary.dark",
              "&:hover": { bgcolor: "primary.main" },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ItemsPage;
