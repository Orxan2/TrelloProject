window.addEventListener('load', function(params) {

    let cards = this.document.querySelectorAll('.card');
    let btnsAdd = this.document.querySelectorAll('a#addBox');
    let cardBodies = this.document.querySelectorAll('.card-body');
   

    document.querySelectorAll('.card-body').forEach(cardBody => {        
        cardBody.addEventListener('dragstart', drag);       
    });

    cards.forEach(card => {       
  
        card.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        card.addEventListener('drop', function(event) {          
            
            let footer =card.getElementsByClassName('card-footer')[0];
            console.log(event.target); 
            event.preventDefault();
            var data = document.querySelector('#get');
            card.insertBefore(data,footer);            
            document.getElementById('get').removeAttribute('id');
        });
    });

    // add Boxes
    btnsAdd.forEach((btnAdd, index) => {
        const card = cards[index];

        btnAdd.addEventListener('click', function(event) {
            let box = document.createElement('div');
            let text = btnAdd.nextElementSibling.value;
            box.classList.add('card-body');
            box.classList.add('rounded');
            box.classList.add('m-2');
            box.setAttribute('draggable', 'true');
            box.innerText = text;
            box.addEventListener('dragstart',drag);
            // cardBodies = document.querySelectorAll('.card-body');
            card.insertBefore(box,card.querySelector('.card-footer'));
            // card.appendChild(box);
            cardBodies = document.querySelectorAll('.card-body');
            // location.reload();
        });
    });
    function drag(event) {
        console.log(event.target);
        event.target.setAttribute("id", 'get');
        event.dataTransfer.effectAllowed = "move";
    }
});