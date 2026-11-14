
// timer wich counts down from 10 minutes 
// (600 seconds) and displays the time remaining
// in minutes and seconds. When the timer reaches 
// 0, it automatically grades the quiz.

let timeleft = 600;
let timer;
let quizfinished = false;

       
function starttimer() {

    timer = setInterval(function() {

        timeleft--;

        let minutes = Math.floor(timeleft / 60);
        let seconds = timeleft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerHTML =
            "Time Remaining: " + minutes + ":" + seconds;

        if (timeleft <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time's up!";
            gradequiz();
        }

    }, 1000);
}

function gradequiz() {
    if (quizfinished) {
        return;
    }
    quizfinished = true;

    clearInterval(timer);

    let timespent = 600 - timeleft;

    let minutesused = Math.floor(timespent / 60);
    let secondsused = timespent % 60;

    if (secondsused < 10) {
    secondsused = "0" + secondsused;
}



    let score = 0;
    let totalQuestions = 10;

    // question 1
    let q1 = document.getElementById("q1").value.trim().toLowerCase();  
    let correct1 = (q1 === "hypertext transfer protocol"); 
    
    if (correct1 ) {
        score++;
    }

    // question 2
    let q2 = document.getElementById("q2").value.trim().toLowerCase();
    let correct2 = (q2 === "uniform resource locator");

    if (correct2) {
        score++;
    }

    // question 3
    let correct3 = (document.getElementById("q3a").checked);
    
    if (correct3) {
        score++;
    }

    // question 4
    let correct4 = (document.getElementById("q4c").checked);

    if (correct4) {
        score++;
    }

    // question 5
    let correct5 = (document.getElementById("q5a").checked);

    if (correct5) {
        score++;
    }

    // question 6
    let correct6 = 
        (document.getElementById("q6b").checked &&
        document.getElementById("q6c").checked &&
        !document.getElementById("q6a").checked);

    if (correct6) {
        score++;
    }

    // question 7
    let correct7 = (document.getElementById("q7b").checked);

    if (correct7) {
        score++;
    }
    // question 8
    let correct8 = (document.getElementById("q8a").checked);

    if (correct8) {
        score++;
    }
    // question 9
    let correct9 = (document.getElementById("q9b").checked);

    if (correct9) {
        score++;
    }
    // question 10
    let correct10 = (document.getElementById("q10b").checked);

    if (correct10)  {
        score++;
    }


    // pass or fail function
    let passfail = "";
    if (score >= 7) {
        passfail = "Horray! You passed !! :D";
    }
    else {
        passfail = "You failed. D: Try again!";
    }

// this section displays correct answers and results

    let result = document.getElementById("results");

    result.innerHTML = "<h2> You scored " + score + " out of " + totalQuestions + "</h2>";
    result.innerHTML += "<h3>" + passfail + "</h3>";
    result.innerHTML += "<p>Time Spent: " + minutesused + ":" + secondsused + "</p>";

    result.innerHTML += questionresult(1, correct1, "hypertext transfer protocol");
    result.innerHTML += questionresult(2, correct2, "uniform resource locator");
    result.innerHTML += questionresult(3, correct3, "Tim berners-lee");
    result.innerHTML += questionresult(4, correct4, "Faster and secure communication between client and server");
    result.innerHTML += questionresult(5, correct5, "A program that allows users to access and display websites");
    result.innerHTML += questionresult(6, correct6, "Mozilla firefox, and Safari");
    result.innerHTML += questionresult(7, correct7, "Information exchanged between a client and a server");
    result.innerHTML += questionresult(8, correct8, "A small piece of data stored by a web browser");
    result.innerHTML += questionresult(9, correct9, "200");
    result.innerHTML += questionresult(10, correct10, "A program that allows users to search for information on the internet");

}



function questionresult(number, correct, answer) {
    let message = "";
        let points = 0;
        let color = "";

        if (correct) {
            message = "Correct";
            points = 1;
            color = "correct";
        } else {
            message = "Incorrect";
            points = 0;
            color = "incorrect";
        }

        return "<p class='" + color + "'>" +
            "Question " + number + ": " + message +
            " | Score: " + points + "/1" +
            " | Correct Answer: " + answer +
            "</p>";

    }



// resart quiz area and also resets the timer
function restartquiz() {
    clearInterval(timer);

    document.getElementById("selfassessment").reset();

    document.getElementById("results").innerHTML = "";

    timeleft = 600;
    quizfinished = false;

    document.getElementById("timer").innerHTML =
        "Time Remaining: 10:00";

    starttimer();
}


//buttons
document.getElementById("submitquiz").onclick = gradequiz;
document.getElementById("restartquiz").onclick = restartquiz;

starttimer();