let lightModeBtn = document.getElementById('lightMode');
let darkModeBtn = document.getElementById('darkMode');

lightModeBtn.onclick = function() {
   
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');

   
    updateLightModeStyles(true);
}

darkModeBtn.onclick = function() {

    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');

 
    updateLightModeStyles(false);
}

function updateLightModeStyles(isLightMode) {
    const navbar = document.querySelector('.navbar');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    
    if (isLightMode) {
        navbar.classList.add('light-mode');
        navbar.classList.remove('dark-mode');
    } else {
        navbar.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
    }

    if (isLightMode) {
        dropdownMenu.classList.add('light-mode');
        dropdownMenu.classList.remove('dark-mode');
    } else {
        dropdownMenu.classList.add('dark-mode');
        dropdownMenu.classList.remove('light-mode');
    }



    const sections = document.getElementById('Hh');
    sections.forEach(section => {
        if (isLightMode) {
            section.classList.remove('dark-mode');      
            section.classList.add('light-mode');
        } else {
            section.classList.add('dark-mode');
            section.classList.remove('light-mode');
        }
    });
}
