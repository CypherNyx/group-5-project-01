// Index Homepage: Variables
// Possible make variables for the navigation bar to redirect?
    // Start Quiz button (for both show and movies - focus on shows for now)
var startShowBtn = document.querySelector(".showBinger");
var startMovieBtn = document.querySelector(".movieFan");

    // add event listener to direct to quiz page

// Quiz page Variables
    // Variables for API Keys - GoogleBook API and TMBD
var googleBooksKey = "AIzaSyCtpFU2A6HSKklQfEKS0tabr54FI8fyQjc";
var imdbKey = "";
    // Questions: array with objects in it that include questions and choices
    // Empty array to push book ISBN based on selected shows
var userResults = [];
    // Answers array with show IDs
var questions [
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
    {
        questionText = "";
        answerOptions =  "";
    }
]

    // For each show ID needs an array showing it's 5 book ISBN (25 variables) - Might be better to put the books into groups and create if statements for each answer?

var bookGroups = [
    {
        // The Witcher
        group: 1,
        showID: "tt5180504",
        bookIDs: ["9780316438988", "9781649374172", "9780316212298", "9780062564566", "9780316246279"]
    }
    {
        // LOTR: The Rings of Power
        group: 2,
        showID: "tt7631058",
        bookIDs: ["9780007264896", "9780008376062", "9780593237649", "9781423136149", "9780547851396"]
    }
    {
        // Narcos
        group: 3,
        showID: "tt2707408",
        bookIDs: ["9781537296302", "9780393336641", "9781912885039", "9780993021596", "9781548433536"]
    }
    {
        // Bridgerton
        group: 4,
        showID: "tt8740790",
        bookIDs: ["9780063078901", "9780593438152", "9781922733337", "9781984805683", "9781420155235"]
    }
    {
        // The Good Place
        group: 5,
        showID: "tt4955642",
        bookIDs: ["9780307476531", "9780593722909", "9781982167363", "9780393341768", "9781451626650"]
    }
    {
        // True Blood
        group: 6,
        showID: "tt0844441",
        bookIDs: ["9780441008537", "9781101619902", "9780575129481", "9780593335154", "9780061742095"]
    }
    {
        // The Witcher
        group: 1,
        showID: "",
        bookIDs: ["", "", "", "", ""]
    }
    {
        // The Witcher
        group: 1,
        showID: "",
        bookIDs: ["", "", "", "", ""]
    }
    {
        // The Witcher
        group: 1,
        showID: "",
        bookIDs: ["", "", "", "", ""]
    }
    {
        // The Witcher
        group: 1,
        showID: "",
        bookIDs: ["", "", "", "", ""]
    }
]

    // Select choices buttons with querySelector and function event to direct to next question
    // Function to display questions and choices
        // Next button click event (if else statement to make sure they've selected something)
    // Math.random to return 5 ISBN options to the results page
        // Call function for GoogleBooks API show the thumbnails



// Results
    // Array for recommendations to display books in box comes from empty array with pushed arrays into it (concat rather than push if both arrays, push if book IDs are only strings)
    // 
