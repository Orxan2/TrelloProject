

window.addEventListener('load', function(params) {

    let cards = this.document.querySelectorAll('.card');
let btnsAdd = this.document.querySelectorAll('a#addBox');
let cardBodies = this.document.querySelectorAll('.card-body');

cardBodies.forEach(cardBody => {
    cardBody.addEventListener('dragstart', function(event) {
        cardBody.setAttribute("id", 'get');
        event.dataTransfer.effectAllowed = "move";
    });
});

cards.forEach(card => {
    card.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    card.addEventListener('drop', function(e) {
        e.preventDefault();
        var data = document.querySelector('#get')
        card.append(data);
        // card.appendChild(data);
        document.getElementById('get').removeAttribute('id');
        console.log(data);
        
    });



});


// add Boxes
btnsAdd.forEach((btnAdd,index) => {
    const card = cards[index];

    btnAdd.addEventListener('click', function(event) {
    let box = document.createElement('div');
    let text = btnAdd.nextElementSibling.value;

    box.classList.add('card-body');
    box.classList.add('rounded');
    box.classList.add('m-2');
    box.setAttribute('draggable','true');
    box.innerText = text;
    // console.log(typeof cardBodies);
   
    cardBodies = document.querySelectorAll('.card-body');
        console.log(cardBodies);
        card.appendChild(box);
    });
});
});


