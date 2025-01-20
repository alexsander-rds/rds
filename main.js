function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header', 'main/header.html');
    loadHTML('content', 'main/main-content.html');
    loadHTML('footer', 'main/footer.html');
});
