function validateVisitor(){
    //clear error messages
    let errorC = document.getElementById('displayErrorMessage');
    errorC.textContent = "";

    //få tag på värden ifyllda av formuläret
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    //få tag på p-element som ska visa felmeddelanden
    let error = document.getElementById('displayErrorMessage');

    let letters = /^[a-zA-z]+$/;
    let emailLetters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    //------ FNAMN VALIDERING
    //kolla om inputvärde av fnamn endast innehåller siffror. om inte, ge felmeddelande och returnera falskt
    if(fname === ""){
        error.textContent = "fnamn obligatorisk";
        return false;
    }
    
    if(!(letters.test(fname))){
        error.textContent = "skriv ba bokstäver för fnamn";
        return false;
    }

    //------ LNAMN VALIDERING
    //kolla om inputvärde av lnamn endast innehåller siffror. om inte, ge felmeddelande och returnera falskt
   if(lname === ""){
        error.textContent = "lnamn obligatorisk";
        return false;
    }
   
    if(!(letters.test(lname))){
        error.textContent = "skriv ba bokstäver för lnamn";
        return false;
    }

    //------ EMAIL VALIDERING
    if(email === ""){
        error.textContent = "email obligatorisk";
        return false;
    }

    if(!(emailLetters.test(email))){
        error.textContent = "skriv ordentlig email";
        return false;
    }

    //om ingen returnering hänt hittills bör allt ha validerats rätt och då kan quizzen börja
    window.location.href = 'noran.html';
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const checkButton = document.querySelector('[name="check quiz"]');
    const message = document.getElementById('displayMessage');
    const error = document.getElementById('displayErrorMessage');
    let score = 0;

    // rätt värden, multiple choice är i arrays
    const correctAnswers = {
        q1: 'banana',
        q2: ['apple', 'pear'],
        q3: 'strawberry',
        q4: 'yes',
        q5: ['grape', 'fig']
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        score = 0;

        // få tag på användarens svar
        const q1Answer = document.querySelector('input[name="q1"]:checked');
        const q2Answers = document.querySelectorAll('input[name="q2"]:checked');
        const q3Answer = document.getElementById('q3').value;
        const q4Answer = document.querySelector('input[name="q4"]:checked');
        const q5Answers = document.querySelectorAll('input[name="q5"]:checked');

        //validera checkboxes
        if (q2Answers.length === 0) {
            error.textContent = "question 2 required";
            return;
        }

        if (q5Answers.length === 0) {
            error.textContent = "question 5 required";
            return;
        }

        // jämför svar
        //------------------------fråga 1
        if(q1Answer.value === correctAnswers.q1){
            score++;
        }

        //------------------------fråga 2
        for(let i = 0; i < q2Answers.length; i++){
            if(correctAnswers.q2.includes(q2Answers[i].value)){
                score ++;
            }
        }

        //------------------------fråga 3
        if(q3Answer === correctAnswers.q3){
            score++;
        }

        //------------------------fråga 4
        if(q4Answer.value === correctAnswers.q4){
            score++;
        }

        //------------------------fråga 5
        for(let i = 0; i < q5Answers.length; i++){
            if(correctAnswers.q5.includes(q5Answers[i].value)){
                score ++;
            }
        }
        
        message.textContent = `You scored ${score} out of 7 points`;
    });

    checkButton.addEventListener('click', function (event) {
        event.preventDefault();
        message.textContent = `The correct answers were: ${correctAnswers.q1}, (${correctAnswers.q2}), ${correctAnswers.q3}, ${correctAnswers.q4}, (${correctAnswers.q5})`;
    });

});

