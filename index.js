// 1. CARGAR NOMBRE PERSONALIZADO DESDE EL LINK (?n=Nombre)
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let nombre = urlParams.get('n');
    const spanNombre = document.getElementById('nombre-invitado');

    if (nombre && spanNombre) {
        // Convierte "Hola_Amigo" en "Hola Amigo"
        spanNombre.innerText = nombre.replace(/_/g, ' ');
    }
});

// 2. EVENTO AL ABRIR EL SOBRE
const wrapper = document.getElementById('wrapper');
const musica = document.getElementById('musica-invitacion');

wrapper.addEventListener('click', function() {
    if (!this.classList.contains('open')) {
        this.classList.add('open');
        
        // Lanzar la ráfaga mágica de mariposas grandes 3D
        createMagicalBurst();

        // REPRODUCIR MP3 DESDE EL SEGUNDO 20
        if (musica) {
            musica.currentTime = 20; // <--- SALTA AL SEGUNDO 20 (CUANDO ELLA CANTA)
            musica.play().catch(error => {
                console.log("El navegador bloqueó el audio: ", error);
            });
        }
    }
});

// 3. FUNCIÓN DE MARIPOSAS 3D GRANDES Y ALETEANDO
function createMagicalBurst() {
    const butterflyCount = 12; // Cantidad de mariposas
    const container = document.body;

    for (let i = 0; i < butterflyCount; i++) {
        const bContainer = document.createElement('div');
        bContainer.className = 'butterfly-3d';
        
        const wingLeft = document.createElement('div');
        wingLeft.className = 'wing wing-left';
        
        const wingRight = document.createElement('div');
        wingRight.className = 'wing wing-right';
        
        bContainer.appendChild(wingLeft);
        bContainer.appendChild(wingRight);

        // Direcciones aleatorias para que vuelen por toda la pantalla
        const xDir = (Math.random() - 0.5) * window.innerWidth * 1.5;
        const yDir = -(Math.random() * window.innerHeight * 0.9 + 200);
        const rotationZ = (Math.random() - 0.5) * 540;

        bContainer.style.setProperty('--x', `${xDir}px`);
        bContainer.style.setProperty('--y', `${yDir}px`);
        bContainer.style.setProperty('--r', `${rotationZ}deg`);

        // Animación de vuelo (desplazamiento)
        bContainer.style.animation = `flyPath ${2 + Math.random()}s forwards ease-out`;

        // Animación de aleteo rápido y realista
        const flutterSpeed = 0.1 + Math.random() * 0.1;
        wingLeft.style.animation = `flutterLeft ${flutterSpeed}s infinite ease-in-out`;
        wingRight.style.animation = `flutterRight ${flutterSpeed}s infinite ease-in-out`;

        container.appendChild(bContainer);

        // Eliminar del código después de 3 segundos para no gastar memoria
        setTimeout(() => bContainer.remove(), 3000);
    }
}