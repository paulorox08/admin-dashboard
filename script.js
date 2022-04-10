const button = document.querySelector('.toggle');
const root = document.documentElement;

button.textContent = 'dark_mode';
root.className = 'light';

function setTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    const newIcon = button.textContent === 'dark_mode' ? 'light_mode' : 'dark_mode';
    button.textContent = newIcon;

}
button.addEventListener('click', setTheme)



const notify = document.querySelector('.notify');

notify.textContent = 'notifications_off';

function notifications() {
    const bellIcon = notify.textContent === 'notifications_active' ? 'notifications_off' : 'notifications_active';
    notify.textContent = bellIcon;
};
notify.addEventListener('click', notifications)