# Trivia Trek - OIT Coding Challenge Submission

This is a trivia game that I built for the coding challenge. The web app fetches random questions from the Open Trivia Database API based on category and challenge level.

## Setup 

1.  **Clone or Download** this repository.
2.  Navigate to the project folder in your terminal.
3.  **Install Dependencies**:
    ```
    npm install
    ```
4.  **Start the Server**:
    ```
    npm start
    ```
5.  Open your browser and visit: `http://localhost:3000`

## Tools & Libraries Used

* **Node.js & Express**
* **EJS**
* **Open Trivia DB API**
* **CSS Grid/Flexbox**
* **JavaScript**

## Future Improvements 

In the future, I think that I would've focused on more options for the user. Possibly more categories or difficulty levels. I also think that it would be fun from a UX perspective to have added a timer to the questions and maybe even a leaderboard or highscore.

## Project Structure

* `index.js`: Main server entry point; handles API fetching.
* `views/`: Contains the EJS templates (Welcome screen, Game interface).
* `public/`: Static assets (CSS).