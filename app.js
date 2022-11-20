const option = document.querySelectorAll('#button')
const nextOption = document.querySelector("#next")

// to add the event listener to all buttons otherwise it wont work
option.forEach(function (btn) {
    btn.addEventListener("click", checkAnswer)
})

nextOption.addEventListener("click", next)

caseValue = 0;
let userChosenButton = $(this).attr("class");
userArray = []

function checkAnswer() {
    let userChosenButton = $(this).attr("class");
    addValidationToButton(userChosenButton);
    console.log("Ai apasat pe butonul " + userChosenButton);
    userArray.push(userChosenButton);
    console.log(userArray);
}
function addValidationToButton(userChosenButton) {
    $("." + userChosenButton).addClass("correct")
    setTimeout(function () {
        $("." + userChosenButton).removeClass("correct");
    }, 1000);
}
function firstQuestion(userChosenButton) {
    if (userChosenButton == 2) {
        console.log("Ai apasat bine la prima intrebare")
        console.log("Case value is " + caseValue)       // I am going to push this answer to an array to display at the end as the result
    } else {
        console.log("Ai apasat gresit la prima intrebare")
    }
}

function secondQuestion(userChosenButton) {
    if (userChosenButton == 1) {
        console.log("Ai apasat bine la a doua intrebare")
        console.log("Case value is " + caseValue)
    } else {
        console.log("Ai apasat gresit la a doua intrebare")
    }
}

function thirdQuestion(userChosenButton) {
    if (userChosenButton == 4) {
        console.log("Ai apasat bine la a treia intrebare")
        console.log("Case value is " + caseValue)
    } else {
        console.log("Ai apasat gresit la a treia intrebare")
    }
}

function fourthQuestion(userChosenButton) {
    if (userChosenButton == 3) {
        console.log("Ai apasat bine la a treia intrebare")
        console.log("Case value is " + caseValue)
    } else {
        console.log("Ai apasat gresit la a treia intrebare")
    }
}


function next() {
    $(".1, .2, .3, .4").removeClass("correct")
    console.log("Lets Go")
    switch (caseValue < 4) {
        case caseValue === 0:

        case caseValue === 1:
            $(".first").addClass('Hide');
            $(".second").removeClass('Hide');
            $(".1").text("France");
            $(".2").text(random2);
            $(".3").text(random3);
            $(".4").text(random4);
            if ($("#button").clicked == true) {

            } else {
                userArray.push(0)
                console.log(userArray + "Eu am dat primu")
            }
            caseValue += 2
            console.log("Case value is " + caseValue)
            break;
        case caseValue === 2:
            $(".second").addClass('Hide');
            $(".third").removeClass('Hide');
            $(".1").text(random1);
            $(".2").text(random2);
            $(".3").text(random3);
            $(".4").text("Belgium");
            if ($("#button").clicked == true) {

            } else {
                userArray.push(0)
                console.log(userArray + "eu am dat trigger")
            }
            caseValue++
            console.log("Case value is " + caseValue)
            break;
        case caseValue === 3:
            $(".third").addClass('Hide');
            $(".fourth").removeClass('Hide');
            $(".1").text(random1);
            $(".2").text(random2);
            $(".3").text("Italy");
            $(".4").text(random4);
            caseValue++
            console.log("Case value is " + caseValue)
            break;
        default:
            break;
    }
}






const countries = ["Romania", "Germany", "Spain", "Hungary", "Sweden", "Norway", "Poland", " Finland", "Denmark", "Belgium", "Netherlands", "Switzerland", "Portugal", " Italy", "Serbia"]

let random1 = countries[Math.floor(Math.random() * countries.length)];
let random2 = countries[Math.floor(Math.random() * countries.length)];
let random3 = countries[Math.floor(Math.random() * countries.length)];
let random4 = countries[Math.floor(Math.random() * countries.length)];











// function handleClick() {
//     if (this.innerHTML === 'Bucharest') {
//         console.log('Correct Answer!')
//         nextQuestion();
//         secondQuestion();
//     } else {
//         $("body").addClass('wrongChoice');
//         setTimeout(function () {
//             $("body").removeClass('wrongChoice');
//             $('.first').removeClass('Hide')
//             $('.question').text('The following question is:')
//         }, 3000)
//         $('.question').text('Oh no ! I`m sorry but that is incorrect')
//         $('.first').addClass('Hide')

//         console.log('Wrong Answer !')
//     }
// }

// function secondQuestion() {
//     console.log("We are on the second question")
//     $(".first").addClass('Hide');
//     $(".second").removeClass('Hide');
//     $(".1").text("France");
//     $(".2").text(random2);
//     $(".3").text(random3);
//     $(".4").text(random4);
//     if ($(".1").innerHTML === "France") {
//         console.log("Correct Answer!")
//         $('.question').text("You are correct")
//     }
// }


// function nextQuestion() {
//     // I want to implement here the resetetation of the timer
// }
