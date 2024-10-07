function apriCassetta() {
    var cassettaApertaStylesheet = document.getElementById('open-on-click');
    var cassettaChiusaStylesheet = document.getElementById('closed-box-css');

    cassettaApertaStylesheet.disabled = false;
    cassettaChiusaStylesheet.disabled = true;
    document.getElementById('love-letter-image').style.display = 'block';
}

// Nasconde l'immagine quando è attivo il CSS della cassetta chiusa
window.onload = function() {
    var cassettaChiusaStylesheet = document.getElementById('closed-box-css');
    var loveLetterImage = document.getElementById('love-letter-image');

    if (!cassettaChiusaStylesheet.disabled) {
        loveLetterImage.style.display = 'none';
    }
}

function chiudiCassetta() {
    var cassettaApertaStylesheet = document.getElementById('open-on-click');
    var cassettaChiusaStylesheet = document.getElementById('closed-box-css');

    cassettaApertaStylesheet.disabled = true;
    cassettaChiusaStylesheet.disabled = false;
    document.getElementById('love-letter-image').style.display = 'none';
}

let lastHeartTime = 0;
const heartInterval = 50; // Intervallo minimo tra la creazione di cuoricini in millisecondi

document.addEventListener('mousemove', function(event) {
    const currentTime = new Date().getTime();
    if (currentTime - lastHeartTime > heartInterval) {
        createHeart(event.pageX, event.pageY);
        lastHeartTime = currentTime;
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Genera dimensioni casuali per il cuoricino
    const size = Math.floor(Math.random() * 30) + 20; // Dimensioni comprese tra 20 e 50 pixel
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    // Genera posizioni casuali per il cuoricino
    const offsetX = Math.random() * 100 - 50; // Posizione orizzontale compresa tra -50 e 50 pixel rispetto al punto del mouse
    const offsetY = Math.random() * 100 - 50; // Posizione verticale compresa tra -50 e 50 pixel rispetto al punto del mouse
    heart.style.left = x + offsetX + 'px';
    heart.style.top = y + offsetY + 'px';

    // Genera una rotazione casuale per il cuoricino
    const rotation = Math.random() * 360; // Angolo di rotazione casuale compreso tra 0 e 360 gradi
    heart.style.transform = 'rotate(' + rotation + 'deg)';

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 2000); // Rimuove il cuoricino dopo 2 secondi
}

// Genera punti di luce casuali
const numSparkles = 100; // Numero di punti di luce
const sparklesContainer = document.querySelector('.sparkles');

for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`; // Posizione orizzontale casuale
    sparkle.style.top = `${Math.random() * 100}%`; // Posizione verticale casuale

    // Imposta un ritardo casuale per l'inizio dell'animazione
    const delay = Math.random() * 5; // Ritardo compreso tra 0 e 5 secondi
    sparkle.style.animationDelay = `${delay}s`;

    sparklesContainer.appendChild(sparkle);
}

function mostraRiquadro() {
    // Mostra il riquadro bianco quando si fa clic sull'immagine della loveletter
    document.getElementById("valentine-box").classList.remove("hidden");
}

function chiudiRiquadro() {
    // Mostra il riquadro bianco quando si fa clic sull'immagine della loveletter
    document.getElementById("valentine-box").classList.add("hidden");
}





