const deleteCard = e => {
    window.localStorage.removeItem(e.target.name);
    location.reload();
};

const addCard = e => {
    if(document.getElementById("question").value.length > 0 && document.getElementById("answer").value.length > 0){
        window.localStorage.setItem(document.getElementById("question").value, document.getElementById("answer").value);
        location.reload();
    }
};

for(let btn of document.getElementsByClassName("submit_btn")){
    btn.addEventListener("click", addCard);
}

Object.keys(localStorage).forEach(key => {
    document.getElementById("cardRemoval").innerHTML += `<div class="card">
        <p class="side_id">QUESTION</p>
        <p class="card_content">${key}</p>
        <button class="remove_btn" name="${key}">Remove Card</button>
    </div>`;
});

for (let card of document.getElementsByClassName("remove_btn")) {
    card.addEventListener("click", deleteCard);
}
