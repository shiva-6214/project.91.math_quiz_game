//Next class
var number1;
var number2;
var actual_answer;

function send() {
    number1 = document.getElementById("num_1").value;
    number2 = document.getElementById("num_2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    var question_number = "";
    var input_box = "";
    var check_button = "";
    var row = "";

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-success' onclick='check();'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";
}