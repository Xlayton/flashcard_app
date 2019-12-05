Object.keys(localStorage).forEach(key => {
    document.getElementById("cardView").innerHTML += `<div class="card">
        <p class="side_id">QUESTION</p>
        <p class="card_content">${key}</p>
    </div>`;
});