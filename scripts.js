function openModal(element) {
    window.open(element.src, '_blank');
}

function closeModal(event) {
    if (event.target.className === 'modal' || event.target.className === 'close') {
        document.getElementById("myModal").style.display = "none";
    }
}
