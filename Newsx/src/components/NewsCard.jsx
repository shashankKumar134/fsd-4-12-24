import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const NewsCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {article.urlToImage && (
        <CardMedia
          component="img"
          height="140"
          image={article.urlToImage}
          alt={article.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <Button
        size="small"
        color="primary"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </Button>
    </Card>
  );
};

export default NewsCard;
