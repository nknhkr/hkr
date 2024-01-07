function validateVisitor(){
    //clear error messages
    let errorC = document.getElementById('errorMessage');
    errorC.textContent = "";

    //få tag på värden ifyllda av formuläret
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;

    //få tag på p-element som ska visa felmeddelanden
    let error = document.getElementById('errorMessage');

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

function validateQuiz(){
    // rätt värden, multiple choice är i arrays
    const correctAnswers = {
        q1: 'banana',
        q2: ['apple', 'pear'],
        q3: 'strawberry',
        q4: 'yes',
        q5: ['grape', 'fig']
    }

    // få tag på användarens svar

    // jämför svar

}