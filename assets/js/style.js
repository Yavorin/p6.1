function changeBackgroundColor() {
    var colorSelect = document.getElementById("color-select");
    var selectedColor = colorSelect.value;

    var body = document.body;
    body.style.backgroundColor = selectedColor;
}