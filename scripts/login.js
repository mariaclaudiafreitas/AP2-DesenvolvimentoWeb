localStorage.setItem('authentication', 'false');

function checkPassword(){

    // Generated using https://www.md5hashgenerator.com
    var password = '5029cc9dd0295ded2f500084635c18c1';
    var currentPassword = hex_md5(document.getElementById('password').value)

    if (currentPassword !== password) {
        alert('Senha incorreta!'); 
    } 
    else {
        localStorage.setItem('authentication', 'true');
        document.location.href = "menu.html";
    }

    console.log(localStorage.getItem('authentication'))
}

function keyPressed (event) {
    if (event.key === 'Enter') { checkPassword(); }
}