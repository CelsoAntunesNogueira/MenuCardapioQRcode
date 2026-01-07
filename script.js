const body = document.body;

// manter modo salvo
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark');
}

function toggleDarkMode() {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark'));
}

function irPara(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
