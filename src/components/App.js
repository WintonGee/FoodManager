import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Tab, Tabs, Typography } from "@mui/material";
import HomePage from "./HomePage";
import RecipePage from "./RecipePage";
import ItemsPage from "./ItemsPage";
import ChatPage from "./ChatPage";
import CombinedPage from "./CombinedPage";
import { AppProvider } from "./RealmApp";
import { AppName } from "./AppName";
import atlasConfig from "../atlasConfig.json";
import "../App.css";

const { appId } = atlasConfig;

export default function ProvidedApp() {
  return (
    <AppProvider appId={appId}>
      <App />
    </AppProvider>
  );
}

function App() {
  return (
    <div className="App">
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <AppName />
          <Tabs>
            <Tab label="Home" to="/" component={Link} />
            <Tab label="Recipes" to="/recipes" component={Link} />
            <Tab label="Items" to="/items" component={Link} />
            <Tab label="Chat" to="/chat" component={Link} />
            <Tab label="Combined" to="/combined" component={Link} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/combined" element={<CombinedPage />} />
      </Routes>
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          p: 2,
          color: "text.secondary",
          mt: 4,
        }}
      >
        &copy; {new Date().getFullYear()} PantryCraft. All rights reserved.
      </Typography>
    </div>
  );
}
