import { Box, Container, Grid, Link, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

export const NovidadesBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://v1.nocodeapi.com/uniodontomanaus/medium/FnRPFLiredyqumIE")
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  return (
    <Container>

      <Box sx={{ my: 5 }}>
        <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px', color: '#222222' }}>
          <span style={{ fontWeight: 'bold', fontSize: '28px', color: '#222222' }}>Novidades</span> de nossas redes sociais e blog
        </Typography>
      </Box>

      <Grid container spacing={{ md: 5 }}>

        {posts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box>
              {/* Exibir o título do post */}
              <Typography variant="h2">{post.title}</Typography>

              {/* Exibir o conteúdo do post */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Exibir imagens do conteúdo do post */}
            
            </Box>
          </Grid>
        ))}

      </Grid>
    </Container>
  );
}
