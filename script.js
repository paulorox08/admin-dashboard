const button = document.querySelector('.toggle');

button.textContent = 'dark_mode';

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    const newIcon = button.textContent === 'dark_mode' ? 'light_mode' : 'dark_mode';
    button.textContent = newIcon;

}
button.addEventListener('click', setTheme)
