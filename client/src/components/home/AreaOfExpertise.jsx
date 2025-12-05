import { Typography, Box, Button } from "@mui/material";
import { LuSparkle, LuCodepen } from "react-icons/lu";
import React from "react";
import "../../assets/styles/AreaOfExpertise.css";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";
 

const AreaOfExpertise = () => {
  const styles = useSelector((state) => state.theme.styles); // Get styles from Redux
  const themeValues = useSelector((state) => state.theme);
   
  const services = [
    {icon: LuCodepen, title:'Development', description:'Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.', pic:""},
    {icon: LuCodepen, title:'UI/UX Design', description:'Designing user-centric, modern interfaces that shapes how the audience interacts with the product.',  pic:""},
    {icon: LuCodepen, title:'Branding', description:'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',  pic:""},
    {icon: LuCodepen, title:'Graphic Design', description:'Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.',  pic:""},
  ]

  const handleServiceCard = (e) => {
   console.log(e)
  }
  return (
    <>
      {/* SECTION HEADER */}
      <Box
        sx={{
          backgroundColor: styles?.mainTheme?.backgroundColor,
          padding: "90px",
          paddingTop: "150px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <LuSparkle color="greenyellow" />
          <Typography
            sx={{
              color: "greenyellow",
              fontSize: "16px",
              textTransform: "uppercase",
            }}
          >
            Speciality
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            color: styles?.mainTheme?.color,
            fontSize: "48px",
            marginTop: "10px",
          }}
        >
          Areas of Expertise
        </Typography>

        {/* <Typography sx={{ color: "#8c8c9d", marginTop: "5px" }}>
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </Typography> */}
      </Box>

      {/* Content Part */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          paddingBottom:"100px"
        }}
      >
        <Box sx={{ width: "625px", height: "355px", backgroundColor: "#000", display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column" }}>
            {
                services.map((item, index) => (
                   <Box onClick={() => handleServiceCard(item)}>
                     <ServiceCard key={index} icon={item.icon} title={item.title} description={item.description} />
                    
                    </Box>
                ))
            }
        </Box>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1764813824530-eb9e431ea89d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Example"
          sx={{ width: "625px", height: "355px", backgroundColor: "#000", borderRadius:"25px" }}

        />
      </Box>
    </>
  );
};

export default AreaOfExpertise;
