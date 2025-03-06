function openModal(element) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = element.src;
}

function closeModal(event) {
    if (event.target.className === 'modal' || event.target.className === 'close') {
        document.getElementById("myModal").style.display = "none";
    }
}
