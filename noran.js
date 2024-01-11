// function to validate visitor form
function validateVisitor(){
    //clear error messages
    let errorC = document.getElementById('displayErrorMessage');
    errorC.textContent = "";

    //get values from filled in form
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    //get paragraph element that displays error messages
    let error = document.getElementById('displayErrorMessage');

    //variables for validation
    let letters = /^[a-zA-z]+$/;
    let emailLetters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //------ FNAMN VALIDATION
    if(fname === ""){
        error.textContent = "Please fill in your first name.";
        return false;
    }
    
    if(!(letters.test(fname))){
        error.textContent = "Please enter only letters for first name.";
        return false;
    }

    //------ LNAMN VALIDATION
   if(lname === ""){
        error.textContent = "Please fill in your last name.";
        return false;
    }
   
    if(!(letters.test(lname))){
        error.textContent = "Please enter only letters for last name.";
        return false;
    }

    //------ EMAIL VALIDATION
    if(email === ""){
        error.textContent = "Please fill in your email.";
        return false;
    }

    if(!(emailLetters.test(email))){
        error.textContent = "Please enter a valid email.";
        return false;
    }

    //if no returns so far, everything is correctly validated - redirect to quiz
    window.location.href = 'noran.html';
    return false;
}

//event listener that waits until HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const checkButton = document.querySelector('[name="check quiz"]');
    const message = document.getElementById('displayMessage');
    const error = document.getElementById('displayErrorMessage');
    let score = 0;

    //constant for the correct answers, multiple-choice stored in arrays
    const correctAnswers = {
        q1: 'banana',
        q2: ['apple', 'pear'],
        q3: 'strawberry',
        q4: 'yes',
        q5: ['grape', 'fig']
    }

    //function to validate checkboxes (that they're filled in)
    function validateCheckboxes(answers, message){
        if(answers.length === 0){
            error.textContent = message;
            return false;
        }
        return true;
    }


    //function for checking if the answer is correct
    function compareAnswers(user, correct){
        return user === correct;
    }

    //function that returns score depending on if the selected checkbox is correct or not
    function validateCheckboxAnswers(user, correct){
        let score = 0;
        for(let i = 0; i < user.length; i++){
            if(correct.includes(user[i].value)){
                score++;
            }
        }
        return score;
    }

    //event listener to form submit button
    //calculates, validates and presents quiz results
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        score = 0;

        //constanTs for users answers
        const q1Answer = document.querySelector('input[name="q1"]:checked');
        const q2Answers = document.querySelectorAll('input[name="q2"]:checked');
        const q3Answer = document.getElementById('q3').value;
        const q4Answer = document.querySelector('input[name="q4"]:checked');
        const q5Answers = document.querySelectorAll('input[name="q5"]:checked');

        error.textContent = "";

        //validate required uestions
        if(q1Answer === null){
            error.textContent = "Please fill in an answer for question 1.";
            return ;
        }

        if(!validateCheckboxes(q2Answers, "Please select at least one option for question 2.")){
            return;
        } 

        if(q3Answer.length === 0){
            error.textContent = "Please fill in an answer for question 3.";
            return;
        }

        if(!validateCheckboxes(q5Answers, "Please select at least one option for question 5.")){
            return;
        } 

        //evaluate answers
        if(compareAnswers(q1Answer.value, correctAnswers.q1)){
            score++;
        }

        score += validateCheckboxAnswers(q2Answers, correctAnswers.q2);

        if(compareAnswers(q3Answer.value, correctAnswers.q3)){
            score++;
        }

        //skip scoring for q4 if it isnt selected since it's not required
        if (q4Answer !== null && compareAnswers(q4Answer.value, correctAnswers.q4)) {
            score++;
        }

        score += validateCheckboxAnswers(q5Answers, correctAnswers.q5);

        //present score
        message.textContent = `You scored ${score} out of 7 points`;
    });

    //event listener for showing correct answers
    checkButton.addEventListener('click', function (event) {
        event.preventDefault();
        message.textContent = `The correct answers were: ${correctAnswers.q1}, (${correctAnswers.q2}), ${correctAnswers.q3}, ${correctAnswers.q4}, (${correctAnswers.q5})`;
    });

});
