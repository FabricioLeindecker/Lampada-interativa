const turnOnOff = document.getElementById("turnOnOff");
const lamp = document.getElementById("lamp");

function lampadaEstaQuebrada() {
    return lamp.src.indexOf ("quebrada") > -1;
}

function lampOn() {
    if (!lampadaEstaQuebrada()) {
        lamp.src = './img/ligada.jpg';
    }    
}

function lampOff() {
    if (!lampadaEstaQuebrada()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff() {
    if (turnOnOff.textContent == "Ligar") {
        lampOn();
        turnOnOff.textContent = "Desligar";
    }else {
        lampOff();
        turnOnOff.textContent = "Ligar";
    }
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("dblclick", lampBroken);