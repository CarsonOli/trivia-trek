# Trivia Trek - OIT Coding Challenge Submission

A trivia game built for the Code Challenge "Trivia Trek". This application fetches random questions from the Open Trivia Database API and presents them in an interactive, clean interface.

## How to Run the Project

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

* **Node.js & Express**: For the backend server and routing.
* **EJS (Embedded JavaScript)**: For server-side rendering of the views.
* **Open Trivia DB API**: The external source for dynamic trivia questions.
* **CSS Grid/Flexbox**: For a responsive, card-based UI design.
* **Vanilla JavaScript**: For client-side game logic (scoring, immediate feedback) to keep the app lightweight.

## Future Improvements 

If I had more time, I would implement the following features:

1.  **Timer**: Add a countdown timer for each question to increase difficulty.
2.  **High Scores**: Use a database to persist high scores and display a leaderboard.
4.  **Animations**: Add smooth transitions between questions and feedback animations for correct/incorrect answers.

## Project Structure

* `index.js`: Main server entry point; handles API fetching.
* `views/`: Contains the EJS templates (Welcome screen, Game interface).
* `public/`: Static assets (CSS).