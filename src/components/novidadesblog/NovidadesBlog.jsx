import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

export const NovidadesBlog = () => {
  useEffect(() => {
    // Embed Substack feed script
    const substackScript = document.createElement("script");
    substackScript.src = "https://substackapi.com/embeds/feed.js";
    substackScript.async = true;
    document.head.appendChild(substackScript);

    // Define Substack feed widget parameters
    window.SubstackFeedWidget = {
      substackUrl: "uniodontomanaus.substack.com",
      posts: 3,
      filter: "top",
      layout: "center",
      colors: {
        primary: "#A60069",
        secondary: "#323232",
        background: "#F1F1F1",
      },
    };
  }, []);

  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <Typography
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "28px",
            color: "#222222",
          }}
        >
          <span
            style={{ fontWeight: "bold", fontSize: "28px", color: "#222222" }}
          >
            Novidades
          </span>{" "}
          de nossas redes sociais e blog
        </Typography>
      </Box>

      {/* Substack feed embed container */}
      <div id="substack-feed-embed"></div>
    </Container>
  );
};
