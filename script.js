let questions = [
    {
        "question": "Wie heißt die Waffe der Jedi-Ritter?",
        "answer_1": "Blaster",
        "answer_2": "Zwille",
        "answer_3": "Pistole",
        "answer_4": "Lichtschwert",
        "right_answer": 4
    },
    {
        "question": "Wer ist der Vater von Luke Skywalker?",
        "answer_1": "Sheev Palpatine",
        "answer_2": "Darth Vader",
        "answer_3": "Darth Maul",
        "answer_4": "Anakin Skywalker",
        "right_answer": 2
    },
    {
        "question": "Wie heißt das Raumschiff von Han Solo?",
        "answer_1": "Razor Crest",
        "answer_2": "Supremacy",
        "answer_3": "Millennium Falke",
        "answer_4": "Executor",
        "right_answer": 3
    },
    {
        "question": "Mit welchen Worten verabschieden sich Jedi-Ritter?",
        "answer_1": "Bis bald!",
        "answer_2": "Und Tschüss!",
        "answer_3": "Bye Bye",
        "answer_4": "Möge die Macht mit dir sein",
        "right_answer": 4
    },
    {
        "question": "Was für ein Wesen ist Chewbacca?",
        "answer_1": "Wookie",
        "answer_2": "Tusken-Räuber",
        "answer_3": "Twi'lek",
        "answer_4": "Mensch",
        "right_answer": 1
    },
    {
        "question": "Leia ist die Schwester von?",
        "answer_1": "Han Solo",
        "answer_2": "Luke Skywalker",
        "answer_3": "Obi-Wan Kenobi",
        "answer_4": "Yoda",
        "right_answer": 2
    },
    {
        "question": "Welcher Sith kämpft mit einem Doppel-Laserschwert?",
        "answer_1": "Darth Vader",
        "answer_2": "Darth Sidious",
        "answer_3": "Darth Maul",
        "answer_4": "Darth Caedus",
        "right_answer": 3
    },
    {
        "question": "Wie heißt der Freund von C-3PO ?",
        "answer_1": "BB-8",
        "answer_2": "R2-D2",
        "answer_3": "L3-37",
        "answer_4": "IG-11",
        "right_answer": 2
    },
    {
        "question": "Welche Farbe hat Lukes Lichtschwert?",
        "answer_1": "Blau",
        "answer_2": "Lila",
        "answer_3": "Rot",
        "answer_4": "Grün",
        "right_answer": 4
    },
    {
        "question": "Wie heißt der Lehrer von Luke Skywalker?",
        "answer_1": "Obi-Wan Kenobi",
        "answer_2": "Yoda",
        "answer_3": "Qui-Gon Jinn",
        "answer_4": "Boba Fett",
        "right_answer": 2
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('showArrayLength').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    if(currentQuestion >= questions.length){
    document.getElementById('endScreen').style = '';
    document.getElementById('question_body').style = 'display: none';
    document.getElementById('showArrayLength1').innerHTML = questions.length;
    document.getElementById('endImage').src="images/fireworks.jpg";
    }else{
    let question = questions[currentQuestion];
    document.getElementById('current_question'). innerHTML = currentQuestion+1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
    }

function answer(selection){ // gibt answer_x je nach Antwort aus. 
let rightAnswer = questions[currentQuestion]['right_answer']; // Zeigt die Zahl der richtigen Antwort.  "1-4"
let selectedQuestionNumber = selection.slice(-1); // kürzt z.B. answer_1 bis zur letzten Stelle. Dadurch bleibt nur die Zahl übrig, die mit der Zahl der richtigen Antwort verglichen werden kann. 
let idOfRightAnswer = `answer_${rightAnswer}` // Erstellt eine ID mit der richtigen Endnummer. "answer_1" "answer_2" ...

if(selectedQuestionNumber == rightAnswer){
    document.getElementById(selection).parentNode.classList.add('bg-success');
}else{
    document.getElementById(selection).parentNode.classList.add('bg-danger'); // zeigt, das die Antwort falsch ist. 
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // zeigt die richtige Antwort
}
    document.getElementById('next_question').disabled = false; // Macht den Button "Nächste Frage" anklickbar
}

function nextQuestion(){
    currentQuestion++; // erhöht den Wert um 1
    document.getElementById('next_question').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
