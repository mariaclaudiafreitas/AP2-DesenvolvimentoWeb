if (localStorage.getItem('authentication') !== 'true'){
    alert("Acesso não autorizado")
    window.location.href = 'index.html'; 
}

function showDescription(player) {

    const playerDescription = document.getElementById('more-description');
    const playerName   = document.getElementById('more-name');
    const playerFName  = document.getElementById('more-fullName');
    const playerYears  = document.getElementById('more-years');
    const playerHeight = document.getElementById('more-height');
    const playerImg    = document.getElementById('more-img');
    const playerBtn    = document.getElementById('more-btn');

    playerDescription.innerText = player.descricao;
    playerName.innerText  = player.nome;
    playerFName.innerText = `Nome Completo: ${player.nome_completo}`;
    playerYears.innerText = `Nascimento: ${player.nascimento}`;
    playerHeight.innerText = `Altura: ${player.altura}`;
    playerImg.src = player.imagem;
}

async function getDescription() {

    const parameters = new URLSearchParams(window.location.search);

    const response = await fetch(`https://botafogo-atletas.mange.li/${parameters.get('id')}`);
    const data = await response.json();
    
    showDescription(data); 
}

function quit() {
    localStorage.setItem('authentication', 'false');
    window.location.href = 'index.html'; 
};

function goBack() {
    window.location.href = 'menu.html'; 
 }

 getDescription();