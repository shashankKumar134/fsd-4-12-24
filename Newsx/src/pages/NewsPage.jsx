import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography, TextField, Box } from "@mui/material";
import NewsCard from "../components/NewsCard";

const apiKey = "ffae53f6c00f4710ac8b32098f7ee98f";


const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("latest");
  const [error, setError] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);


  const fetchNews = async (searchQuery = "latest") => {
    try {
      setLoading(true);
      setError(null);
      
      // Construct the URL for the API request
      const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
      
      // Fetch data using native fetch API
      const response = await fetch(url);

      // If the response is not OK (status 2xx), throw an error
      if (!response.ok) {
        throw new Error("Error fetching news.");
      }

      const data = await response.json(); // Convert response to JSON
      setArticles(data.articles); // Update state with the fetched articles
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("There was an error fetching the news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(() => {
        fetchNews(e.target.value);
      }, 500)
    );
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        News App
      </Typography>
      <TextField
        label="Search News"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
        sx={{ marginBottom: 4 }}
        aria-label="Search news articles"
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {error && <Typography color="error">{error}</Typography>}
          <Grid container spacing={2}>
            {articles.length === 0 && !loading && (
              <Typography>No news found.</Typography>
            )}
            {articles.map((article, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <NewsCard article={article} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default NewsPage;
