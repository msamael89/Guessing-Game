// function q1(message) {

//     //calling the function, which grabs the id from html named q1, to act as the querySelector which grabs it, returns it into q1
//     var q1 = document.querySelector("#q1")
//         //here the correct answer is red
//     var answer = "red";
//     //if the answer is correct it will alert with the message
//     if (answer === q1.value) //.value= property 
//     { //function alert (parameter)
//         alert("You are correct!")
//     } else { //if not then it will alert with this message
//         alert("WRONG!");
//     }
// }


//     }
// }
//calling all functions to answer questions
function answerqs(answer, targetId) {

    var q = document.querySelector(targetId)


    if (answer === q.value) {
        alert("You are correct!")
    } else {
        alert("WRONG!");
    }
}