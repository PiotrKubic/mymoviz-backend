var express = require("express");
var router = express.Router();

router.get("/movies", async (req, res) => {
  let TMDBResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`
  );
  let TMDBData = await TMDBResponse.json();
  return res.json({ movies: TMDBData.results });
});

module.exports = router;
