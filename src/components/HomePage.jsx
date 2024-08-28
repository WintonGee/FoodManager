import React from "react";
import { Grid, Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Kitchen as KitchenIcon,
  Search as SearchIcon,
  LocalDining as LocalDiningIcon,
} from "@mui/icons-material";

export function HomePage() {
  return (
    <Container sx={{ pt: 5 }}>
      <Box
        sx={{
          p: 4,
          bgcolor: "background.default",
          borderRadius: 2,
          boxShadow: 3,
          mb: 4,
        }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Welcome to PantryCraft
              <HomeIcon fontSize="large" sx={{ ml: 1 }} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                textAlign: "center",
                mb: 2,
              }}
            >
              PantryCraft is a program designed to help you find recipes based
              on the ingredients you have in your pantry. Whether you're looking
              to use up leftovers or create something new, PantryCraft has you
              covered.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              component={Link}
              to="/items"
              sx={{
                px: 4,
                py: 2,
                fontSize: 16,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
          mb: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            textAlign: "center",
            mb: 3,
          }}
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <KitchenIcon
                sx={{ fontSize: 60, color: "secondary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
                Ingredient Management
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Easily keep track of the ingredients you have at home and never
                waste food again.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <SearchIcon
                sx={{ fontSize: 60, color: "secondary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
                Recipe Search
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Search for recipes based on the ingredients you have available,
                saving you time and effort.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <LocalDiningIcon
                sx={{ fontSize: 60, color: "secondary.main", mb: 2 }}
              />
              <Typography variant="h6" sx={{ color: "text.primary", mb: 1 }}>
                Custom Meal Plans
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Create custom meal plans that fit your dietary preferences and
                schedule.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          p: 4,
          bgcolor: "background.default",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            textAlign: "center",
            mb: 3,
          }}
        >
          Why Choose PantryCraft?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            textAlign: "center",
            mb: 2,
          }}
        >
          PantryCraft helps you make the most of what you have, reducing food
          waste and saving you money. With advanced recipe search and meal
          planning features, you can create delicious meals without the hassle.
          Join us and discover the joy of cooking with PantryCraft.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              component={Link}
              to="/items"
              sx={{
                px: 4,
                py: 2,
                fontSize: 16,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              Explore More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;
