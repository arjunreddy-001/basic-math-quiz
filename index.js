// neog camp - assignment for levelOne

const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var questionCount = 0;

levelOneQuestions = [
    {
        question: "12 + __ = 17",
        answer: "5",
        choice1: "4",
        choice2: "7",
        choice3: "5",
        choice4: "3"
    },
    {
        question: "Arrange numbers in ascending order 4, 19, 10, 1, 12",
        answer: "1, 4, 10, 12, 19",
        choice1: "10, 12, 19, 1, 4",
        choice2: "1, 4, 10, 12, 19",
        choice3: "1, 10, 12, 19, 4",
        choice4: "4, 19, 10, 1, 12"
    },
    {
        question: "How much is 97 - 82 ?",
        answer: "15",
        choice1: "12",
        choice2: "10",
        choice3: "13",
        choice4: "15"
    },
    {
        question: "Which of these are prime numbers?",
        answer: "5, 7, 11",
        choice1: "2, 3, 4",
        choice2: "5, 7, 11",
        choice3: "1, 2, 3",
        choice4: "0, 2, 3"
    },
    {
        question: "How much is 75 / 3 ?",
        answer: "25",
        choice1: "23",
        choice2: "25",
        choice3: "15",
        choice4: "35"
    },
    {
        question: "Arrange numbers in descending order 6, 8, 5, 1, 10",
        answer: "10, 8, 6, 5, 1",
        choice1: "10, 8, 6, 5, 4",
        choice2: "10, 8, 6, 5, 1",
        choice3: "10, 8, 5, 5, 1",
        choice4: "1, 5, 6, 8, 10"
    },
    {
        question: "Which of these are odd numbers?",
        answer: "1, 3, 5",
        choice1: "1, 3, 5",
        choice2: "6, 9, 11",
        choice3: "1, 2, 3",
        choice4: "2, 4, 6"
    },
    {
        question: "What is remainder of 10 / 3 ?",
        answer: "1",
        choice1: "13",
        choice2: "3",
        choice3: "0",
        choice4: "1"
    },
    {
        question: "Which of these are even numbers?",
        answer: "2, 4, 6",
        choice1: "0, 1, 3",
        choice2: "5, 7, 9",
        choice3: "2, 4, 6",
        choice4: "1, 3, 5"
    },
    {
        question: "What is 7 x 3 ?",
        answer: "21",
        choice1: "73",
        choice2: "23",
        choice3: "21",
        choice4: "10"
    }
]

levelTwoQuestions = [
    {
        question: "What is the value of PI?",
        answer: "3.142",
        choice1: "3.145",
        choice2: "3.149",
        choice3: "3.141",
        choice4: "3.142"
    },
    {
        question: "What is 4 to the power 2?",
        answer: "16",
        choice1: "12",
        choice2: "8",
        choice3: "16",
        choice4: "6"
    },
    {
        question: "What is square root of 64?",
        answer: "8",
        choice1: "32",
        choice2: "10",
        choice3: "4",
        choice4: "8"
    },
    {
        question: "50 times 5 equals to",
        answer: "250",
        choice1: "500",
        choice2: "250",
        choice3: "225",
        choice4: "2500"
    },
    {
        question: "What is 3 to the power 3?",
        answer: "27",
        choice1: "9",
        choice2: "27",
        choice3: "21",
        choice4: "6"
    },
    {
        question: "How many seconds are there in a hour?",
        answer: "3600",
        choice1: "600",
        choice2: "3600",
        choice3: "360",
        choice4: "1200"
    },
    {
        question: "If a car is moving at 100 km/hr speed, how much distance can it cover in 60 minutes?",
        answer: "100 kms",
        choice1: "50 kms",
        choice2: "160 kms",
        choice3: "60 kms",
        choice4: "100 kms"
    },
    {
        question: "How many grams constitute a kilogram?",
        answer: "1000",
        choice1: "1024",
        choice2: "100",
        choice3: "1000",
        choice4: "500"
    },
    {
        question: "What is 12 x 2 + 6 ?",
        answer: "30",
        choice1: "20",
        choice2: "36",
        choice3: "30",
        choice4: "18"
    },
    {
        question: "How much mililiters constitute 3/4 litre?",
        answer: "750 ml",
        choice1: "750 ml",
        choice2: "250 ml",
        choice3: "340 ml",
        choice4: "700 ml"
    },
    {
        question: "What is the next prime number after 11?",
        answer: "13",
        choice1: "12",
        choice2: "15",
        choice3: "17",
        choice4: "13"
    },
    {
        question: "How many sides do a hexagon have?",
        answer: "6",
        choice1: "7",
        choice2: "5",
        choice3: "6",
        choice4: "8"
    },
    {
        question: "A triangle has 2 sides equal to 5 cms and 1 side equal to 3 cms. What is this triangle called as?",
        answer: "Isosceles triangle",
        choice1: "Equilateral triangle",
        choice2: "Isosceles triangle",
        choice3: "Multi dimensional triangle",
        choice4: "2 sides equal triangle"
    },
    {
        question: "Area of rectangel is equal to",
        answer: "length x breadth",
        choice1: "length x breadth",
        choice2: "length x breadth x height",
        choice3: "length x length",
        choice4: "breadth x breadth"
    },
    {
        question: "Largest 4 digit number",
        answer: "9999",
        choice1: "1000",
        choice2: "1111",
        choice3: "1999",
        choice4: "9999"
    }
];

var highScores = [
    {
        name: "Arjun",
        score: 25
    },
    {
        name: "Niranjan",
        score: 24
    },
    {
        name: "Mythri",
        score: 20
    }
];

function greetUser() {
    var user = readlineSync.question("What is your name? ");
    console.log("Welcome " + user + " to play quiz on Basic Math\n");

    readlineSync.question("Press any key to start quiz... ");
    console.clear();
}

function play(questionObj) {
    questionCount++;

    console.log(questionCount + ". " + questionObj.question + "\n");
    console.log(" A. " + questionObj.choice1);
    console.log(" B. " + questionObj.choice2);
    console.log(" C. " + questionObj.choice3);
    console.log(" D. " + questionObj.choice4);

    var userAnswer = readlineSync.question("\nYour answer: ");

    userAnswer = userAnswer.toUpperCase().trim();
    selectedAnswer = "";

    switch (userAnswer) {
        case "A":
            selectedAnswer = questionObj.choice1;
            break;

        case "B":
            selectedAnswer = questionObj.choice2;
            break;

        case "C":
            selectedAnswer = questionObj.choice3;
            break;

        case "D":
            selectedAnswer = questionObj.choice4;
            break;
    }

    if (selectedAnswer === questionObj.answer) {
        console.log(chalk.bgGreen.black.bold(" Right "));
        score = score + 1;
    }
    else {
        console.log(chalk.bgRed.black.bold(" Wrong! "));
    }
    console.log("");
}

function showScore() {
    console.log("\n" + chalk.inverse.bold(" Total score: " + score + " / " + questionCount + " ") + "\n");
}

function quiz() {
    // level based quiz code here
    for (var i = 0; i < levelOneQuestions.length; i++) {
        play(levelOneQuestions[i]);
    }
    var levelOneScore = score;
    showScore();

    if (levelOneScore >= 5) {
        console.log(chalk.green.bold("Congrats! You can now participate in Level 2"));
        readlineSync.question("\nPress any key to start Level 2 quiz... ")
        console.clear();

        for (var i = 0; i < levelTwoQuestions.length; i++) {
            play(levelTwoQuestions[i]);
        }
        var levelTwoScore = score - levelOneScore;

        if (levelTwoScore >= 10) {
            console.log("Level 2 score: " + levelTwoScore);
            console.log(chalk.green.bold("Yay!! You won the quiz"));
        }
        else {
            console.log("Level 2 score: " + levelTwoScore);
            console.log(chalk.red.bold("You lost the quiz. "));
            console.log("Score atleast 10 points in Level 2 to win the quiz. TRY AGAIN");
        }

        showScore();
    }
    else {
        console.log(chalk.red.bold("Sorry, You cannot participate in Level 2 quiz."));
        console.log("Try Again. Score minimum 5 points in Level 1 to qualify for Level 2 quiz");
    }
}

function showResult() {
    console.log("===============\n  High Scores\n===============");
    for (var i = 0; i < highScores.length; i++) {
        console.log("Name: " + highScores[i].name);
        console.log("Score: " + highScores[i].score);
        console.log("---------------");
    }
}

greetUser();
quiz();
showResult();

console.log("\nPlease send your score screenshot :)");