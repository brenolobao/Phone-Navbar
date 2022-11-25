function onOff() {
    if (document.querySelector('.navbar').value == "off") {
        document.querySelector('.navbar').style.height = "83%";
        document.querySelector('.navbar').value = "on";
        document.querySelector('.items').style.display = "flex";
        document.querySelector('.label').style.display = "flex";
        document.querySelector('.frame').style.filter = "grayscale(100%) blur(2px)";
        document.querySelector('.notifications').style.display = "flex";
    } else {
        document.querySelector('.navbar').style.height = "20px";
        document.querySelector('.navbar').value = "off";
        document.querySelector('.items').style.display = "none";
        document.querySelector('.frame').style.filter = "none";
        document.querySelector('.label').style.display = "none";
        document.querySelector('.notifications').style.display = "none";
    }
}
function closeApp() {
    document.querySelector('.app-frame').classList.add('closed');
}
function openApp() {
    document.querySelector('.app-frame').style.display = "flex";
    document.querySelector('.app-frame').classList.remove('closed');
}