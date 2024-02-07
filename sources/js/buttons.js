const container = document.getElementById("container");
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");
const envelope = document.querySelector(".envelope");

yesbtn.addEventListener("click", () => {

    // Verificar si el navegador soporta la API de SpeechSynthesis
    if ('speechSynthesis' in window) {
        // Crear un nuevo objeto de SpeechSynthesisUtterance
        const mensaje = new SpeechSynthesisUtterance();

        // Establecer el texto que deseas que se diga
        mensaje.text = 'Gracias por hacertar la invitacion.';

        // Sintetizar el texto en voz
        speechSynthesis.speak(mensaje);
    } else {
        // Si el navegador no soporta la API, mostrar un mensaje de error
        console.log('Lo siento, tu navegador no soporta la síntesis de voz.');
    }


    Swal.fire({
        title: "¡TE AMO!",
        html: `<img src="sources/imgs/nuestraPic.jpg" alt="mibebe">`,
        width: 600,
        color: "#716add",
        background: "#fff url('sources/imgs/trees.png')",
        showConfirmButton: false,
        timer: 3000
    });
});

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

nobtn.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;

    const btnHeight = nobtn.getBoundingClientRect().height;
    const btnWidth = nobtn.getBoundingClientRect().width;

    const newTop = getRandomNumber(0, containerHeight - btnHeight);
    const newLeft = getRandomNumber(0, containerWidth - btnWidth);

    nobtn.style.top = newTop + "px";
    nobtn.style.left = newLeft + "px";
});
