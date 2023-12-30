document.getElementById('felizMesBtn').addEventListener('click', function() {
    var body = document.body;

    // Cambia la clase del body para aplicar los estilos después de hacer clic
    body.classList.add('clicked-bg');
    
    var felizMesBtn = document.getElementById('felizMesBtn');
    felizMesBtn.style.display = 'none';

    var seccionOculta = document.getElementById('seccionOculta');
    seccionOculta.style.display = 'block';
});

document.getElementById('recuerdosBtn').addEventListener('click', function() {
    toggleSection('recuerdos');
});

document.getElementById('teAmoBtn').addEventListener('click', function() {
    toggleSection('teAmo');
});

document.getElementById('graciasBtn').addEventListener('click', function() {
    toggleSection('gracias');
});

document.getElementById('promesaBtn').addEventListener('click', function() {
    toggleSection('promesa');
});

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.style.display = (section.style.display === 'none') ? 'block' : 'none';
}
