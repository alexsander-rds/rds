function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    //loadHTML('head', 'head/head.html'); 
    //loadHTML('header', 'header/header.html');
    loadHTML('main', 'site/main/main-content.html');
    //loadHTML('footer', 'footer/footer.html');
    loadHTML('sidebar', 'site/sidebar/sidebar.html');
    //loadHTML('conteudo', 'main/conteudo/teste.html'); 
});
