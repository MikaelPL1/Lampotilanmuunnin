
const numerok = document.getElementById("numerok");
const celsiusm = document.getElementById("celsiusm");
const fahrenheitm = document.getElementById("fahrenheitm");
const muunnos = document.getElementById("muunnos");

function muunna() {
    let lampotila = Number(numerok.value);
    let desimaali = getDesimaalit();
    
    
    
    let tulos;

    if (celsiusm.checked && lampotila < -273.15) {
        muunnos.textContent = "Lämpötila ei voi olla alle -273,15 °C.";
        return;
    }

    if (fahrenheitm.checked && lampotila < -459.67) {
        muunnos.textContent = "Lämpötila ei voi olla alle -459,67 °F.";
        return;
    }

    if (celsiusm.checked) {
        tulos = lampotila * 9 / 5 + 32;
        muunnos.textContent = tulos.toFixed(desimaali) + " °Fahrenheit";
    }
    else if (fahrenheitm.checked) {
        tulos = (lampotila - 32) * 5 / 9;
        muunnos.textContent = tulos.toFixed(desimaali) + " °Celsius";
    }
    else {
        muunnos.textContent = "Valitse kaava.";
    }

    if (desimaali == null) {
        muunnos.textContent = "Valitse desimaali.";
        return;
    }
}

function getDesimaalit() {
    if (document.getElementById("desimaali1").checked) {
        return 1;
    } else if (document.getElementById("desimaali2").checked) {
        return 2;
    } else if (document.getElementById("desimaali3").checked) {
        return 3;
    } else {
        return null; 
    }
}


