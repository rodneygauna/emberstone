/*
* Zesty UX
* Copyright 2023, Rodney Gauna
* www.zestyux.com
* Free to use under the GNU GPL v3.0 license
* http://www.gnu.org/licenses/gpl.html
*/

/* Table of Contents
---------------------------
- Side Menu Functionality
- Dark Mode Functionality
- Banner Functionality
*/

/* Side Menu Functionality
--------------------------- */
/* const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
}); */

/* Dark Mode Functionality
--------------------------- */
const darkMode = document.querySelector('.dark-mode');
const userHasDarkMode = localStorage.getItem('dark-mode') === 'enabled';

if (userHasDarkMode) {
    document.body.classList.add('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.remove('active');
    darkMode.querySelector('span:nth-child(2)').classList.add('active');
}

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    // Remember user preference in local storage
    if (document.body.classList.contains('dark-mode-variables')) {
        localStorage.setItem('dark-mode', 'enabled');
    }
    else {
        localStorage.setItem('dark-mode', 'disabled');
    }
})

/* Banner Functionality
--------------------------- */
var fadeOutInterval;

function showBanner() {
    var banner = document.getElementsByClassName("banner")[0];
    banner.style.display = "flex";
    resetHideTimer();
}

function hideBanner() {
    var banner = document.getElementsByClassName("banner")[0];
    banner.style.opacity = 1;
    fadeOutInterval = setInterval(function() {
        if (banner.style.opacity > 0) {
            banner.style.opacity -= 0.1;
        } else {
            clearInterval(fadeOutInterval);
            banner.style.display = "none";
        }
    }, 60);
}

function resetHideTimer() {
    clearInterval(fadeOutInterval);
    fadeOutInterval = setTimeout(hideBanner, 5000);
}

var bannerSuccess = document.getElementsByClassName("banner success")[0];
if (bannerSuccess) {
    resetHideTimer();
}
