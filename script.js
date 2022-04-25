const buttons = document.querySelectorAll('.btn-rating');
const submit = document.querySelector('.btn');
const output = document.getElementById('rate');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

let rating = 1;

// iterate through each button and add event listener
buttons.forEach((button) => {
    // if clicked, record the value
    button.addEventListener("click", function() {
        rating = button.dataset.num;
    })
});

// show back and disable front, update rating
submit.addEventListener("click", () => {
    front.classList.remove('active');
    back.classList.add('active');
    output.innerText = rating;
});