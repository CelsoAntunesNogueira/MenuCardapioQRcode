
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark');
}

    function toggleDarkMode() {
        body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark'));
}
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
