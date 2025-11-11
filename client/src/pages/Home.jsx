import React from "react";
import "../assets/styles/home.css";
import { Box, Button, ListItem, Typography } from "@mui/material";
import { LuArrowUpRight, LuHand  } from "react-icons/lu";

const Home = () => {
  return (
    <Box
      className="main"
      sx={{
        backgroundColor: "#0a0b0c",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box className="inner-wrapper">
        <Typography variant="h1" sx={{ fontSize: "16px", color: "#fff", display:"flex", justifyContent:"start", alignItems:"center", gap:1 }}>
          <LuHand className="hand-wave" size={20} style={{color:"#ffd015ff"}} /> Hey! It's me Harsh,
        </Typography>
        <Typography
          className="headline"
          variant="h1"
          sx={{
            fontSize: "72px",
            color: "#fff",
            width: "70%",
            lineHeight: "75px",
            marginTop: "2%",
            marginBottom: "4%",
          }}
        >
          Crafting{" "}
          <span style={{ color: "greenyellow" }}>
            purpose driven experiences
          </span>{" "}
          that inspire & engage.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          {/* LINK PAGE */}
          <Box sx={{ color: "#fff", display: "flex" }}>
            <ListItem sx={{ textTransform: "uppercase", fontSize: "14px", cursor:"pointer" }}>
              LinkedIn <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem sx={{ textTransform: "uppercase", fontSize: "14px", cursor:"pointer" }}>
              GitHub <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem sx={{ textTransform: "uppercase", fontSize: "14px", cursor:"pointer" }}>
              Benance <LuArrowUpRight size={20} />
            </ListItem>
            <ListItem sx={{ textTransform: "uppercase", fontSize: "14px", cursor:"pointer" }}>
              Leetcode <LuArrowUpRight size={20} />
            </ListItem>
          </Box>

          {/* SHORT SLOGAN */}
          <Box
            sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontSize: "16px", color: "#ffffff84" }}
            >
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className="knowme-button"
            >
              Know Me Better
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
