if (localStorage.getItem('authentication') !== 'true'){
    alert("Acesso não autorizado")
    window.location.href = 'index.html'; 
}

function quit() {
    localStorage.setItem('authentication', 'false');
    window.location.href = 'index.html'; 
};

function showLoader() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loading').style.display = 'none';
}