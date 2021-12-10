const darkCheckbox = document.getElementById("dark-mode-checkbox");

darkCheckbox.addEventListener('change',toggleDarkMode);

function toggleDarkMode(){
    var bg = document.getElementById("bg1");
    bg.classList.toggle('hidden'); 
    document.body.classList.toggle('dark'); 
}