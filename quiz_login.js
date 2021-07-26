//Next Class Code
var first_name;
var last_name;

function addUser() {
    first_name = document.getElementById("player1_text").value;
    last_name = document.getElementById("player2_text").value;

    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);

    window.location = "quiz_game_page.html";
}