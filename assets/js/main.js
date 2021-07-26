window.addEventListener('load', function (params) {

    let cards = this.document.querySelectorAll('.card');
    let btnsAdd = this.document.querySelectorAll('a#addBox');
    let cardBodies = this.document.querySelectorAll('.card-body');
    let isContentEditable = false;

    cardBodies.forEach(cardBody => {
        cardBody.addEventListener('dragstart', drag);
        cardBody.addEventListener('dragenter', dragenter);
        cardBody.addEventListener('dragleave', dragleave);
        cardBody.addEventListener('dblclick', makeContentEditable);
    });
    document.querySelectorAll('.card-header').forEach(cardHeader => {
        cardHeader.addEventListener('dragenter', dragenter);
        cardHeader.addEventListener('dragleave', dragleave);
    });

    //drag and drop Operations
    cards.forEach(card => {

        card.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        card.addEventListener('drop', function (event) {
            event.preventDefault();
            var data = document.querySelector('#get');
            let el = document.getElementById('shadow');
            if (el) {
                card.insertBefore(data, el);
                card.removeChild(el);
            }
            document.getElementById('get').removeAttribute('id');
        });
    });

    function drag(event) {

        event.target.setAttribute("id", 'get');
        event.dataTransfer.effectAllowed = "move";

    }
    //Remove Element
    function makeContentEditable(event) {
        console.log(event.target);
        event.target.parentElement.removeChild(event.target);
        }
    //add Drag element's shadow
    function dragleave(event) {
        let card = event.target.parentElement;
        let el = document.getElementById('shadow');
        if (el != null) {
            card.removeChild(el);
        }
    }

    function dragenter(event) {
        event.preventDefault();
        let card = event.target.parentElement;
        let boxshadow = document.createElement('div');
        boxshadow.classList.add('drag-element-shadow');
        boxshadow.setAttribute('id', 'shadow');

        if (event.target.classList.contains('card-header') || event.target.classList.contains('card-body')) {
            card.insertBefore(boxshadow, event.target.nextElementSibling);
        }
    }

    // add Boxes
    btnsAdd.forEach((btnAdd, index) => {
        const card = cards[index];

        btnAdd.addEventListener('click', function (event) {
            let box = document.createElement('div');
            let text = btnAdd.nextElementSibling.value;
            box.classList.add('card-body');
            box.classList.add('rounded');
            box.classList.add('m-2');
            box.setAttribute('draggable', 'true');
            box.innerText = text;
            box.addEventListener('dragstart', drag);
            box.addEventListener('dblclick', makeContentEditable);
            card.insertBefore(box, card.querySelector('.card-footer'));
            event.target.nextElementSibling.value = '';

        });
    });

});