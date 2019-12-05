const flipCard = e => {
    e.target.parentNode.style.animation = 'flip 1s linear';
        setTimeout(() => {
            if(e.target.isFlipped) {
                Object.keys(localStorage).forEach(key => {
                    if(window.localStorage.getItem(key) === e.target.innerText){
                        e.target.innerText = key;
                    }
                });
                e.target.isFlipped = false;
                e.target.parentNode.getElementsByClassName("side_id")[0].innerText = "QUESTION";
            } else {
                e.target.innerText = window.localStorage.getItem(e.target.innerText);
                e.target.isFlipped = true;
                e.target.parentNode.getElementsByClassName("side_id")[0].innerText = "ANSWER";
            }
        }, 500);
        setTimeout(() => {
            e.target.parentNode.style.animation = '';
        }, 1000);
};

for(let card of document.getElementsByClassName("card_content")) {
    card.addEventListener("click", flipCard);
}