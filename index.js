import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;

// Helpers to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// View and static setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// 1. Welcome Screen Route
app.get("/", (req, res) => {
  res.render("index");
});

// 2. Game Route - Fetches questions and renders the game view
app.get("/game", async (req, res) => {
  const { difficulty, category } = req.query;

  // Construct API URL based on user selection
  // Amount is hardcoded to 10 as per requirements (5-10 range)
  let apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
  
  if (difficulty && difficulty !== 'any') apiUrl += `&difficulty=${difficulty}`;
  if (category && category !== 'any') apiUrl += `&category=${category}`;

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`External API failed with status ${response.status}`);
    }

    const data = await response.json();

    // If API returns no results (token empty or bad query), handle error
    if (data.response_code !== 0) {
      throw new Error("No questions found for this category/difficulty combination.");
    }

    // Render the game view, passing the questions to the frontend
    res.render("game", { 
      questions: JSON.stringify(data.results) 
    });

  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).render("error", {
      message: "Unable to load questions.",
      details: "Please try a different category or difficulty level."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Trivia Trek running at http://localhost:${PORT}`);
});