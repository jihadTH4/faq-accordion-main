const card = document.querySelector('.card');
const plusIcon = document.querySelectorAll('.plus');
const minusIcon = document.querySelectorAll('.minus');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');


card.addEventListener('click', (e) => {

    for (let i = 0; i < questions.length; i++) {
        
        // Show the answer if the question or the plus icon got clicked
        if (e.target === questions[i] || e.target === plusIcon[i]) {
            answers[i].classList.toggle('hide');
            plusIcon[i].classList.toggle('hide');
            minusIcon[i].classList.toggle('hide');
        }

        // Hide the answer if the minus icon got clicked
        else if (e.target === minusIcon[i]) {
            answers[i].classList.toggle('hide');
            plusIcon[i].classList.toggle('hide');
            minusIcon[i].classList.toggle('hide');
        }
    }

})

