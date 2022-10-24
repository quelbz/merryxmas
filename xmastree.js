function sparkling() {
    let div = document.getElementById("main-div");
    let red = Math.floor(Math.random() * 255);
    let yellow = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = red + "," + yellow + "," + blue;
    let final_color = "RGB(" + color + ")";
    div.style.backgroundColor = final_color;
    document.getElementById("rgb").innerHTML = final_color;
}

function start () {
    start_color = setInterval(sparkling, 100);
}

function stop () {
    clearInterval(start_color);
}