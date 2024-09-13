document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("game-board");

    const cells = table.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {

            const selectedColor = this.className;

            removeSameColorCells(selectedColor);
        });
    }

    function removeSameColorCells(color) {
        for (let i = 0; i < cells.length; i++) {

            if (cells[i].className === color) {

                cells[i].style.display = "none"; 
            }
        }
    }
});
