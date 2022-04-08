const button = document.querySelector('.toggle');


function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;


    if (button.textContent = 'dark_mode'){
        button.textContent = 'light_mode'
    }
    else if (button.textContent = 'light_mode') {
        button.textContent = 'dark_mode'
    };

    console.log(button.textContent)

}
button.addEventListener('click', setTheme)
