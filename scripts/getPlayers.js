function showPlayer(player) {

    const player_div  = document.createElement('article');
    const player_img  = document.createElement('img');
    const player_name = document.createElement('h1');
    const player_btn  = document.createElement('button');

    player_div.className = 'container-player';

    player_img.id = 'player-img';
    player_img.src = player.imagem;
    player_img.innerText = player.imagem;

    player_name.id = 'player-name';
    player_name.innerText = player.nome;

    player_btn.id = 'player-btn';
    player_btn.innerText = 'Saiba mais';
    player_btn.innerHTML = 'Saiba mais';
    player_btn.onclick = function() {
        console.log(`detalhes.html?id=${player.id}`);
        window.location = `detalhes.html?id=${player.id}`;
    };

    player_div.appendChild(player_img);
    player_div.appendChild(player_name);
    player_div.appendChild(player_btn);

    document.getElementById('players').appendChild(player_div); 
}

async function getAllData(url) {

    document.getElementById('players').innerHTML = '';
    showLoader();

    const response = await fetch(`https://botafogo-atletas.mange.li/${url}`);
    const data = await response.json();

    if (response) { hideLoader(); }
    
    for (player of data) {
        showPlayer(player);
    }
}