document.addEventListener('DOMContentLoaded', function() {
    const ruleta = document.querySelector("#ruleta");

    if (ruleta) {
        ruleta.addEventListener('click', girar); 
    }

    function girar() {
        let rand = Math.random() * 7200; 
        calcular(rand);
    }

    function calcular(rand) {
        ruleta.style.transform = "rotate(" + rand + "deg)";
    }
});
