/* =========================
   FRASES DA TVA
========================= */

const quotes = [

    "Toda escolha cria uma nova possibilidade.",

    "O tempo não é uma linha. É uma floresta.",

    "Talvez o propósito seja simplesmente continuar.",

    "Cada variante carrega uma história diferente.",

    "O destino pode ser apenas uma possibilidade.",

    "A TVA está observando.",

    "Uma pequena mudança pode criar uma nova realidade.",

    "Você acabou de criar uma nova ramificação."

];


/* =========================
   GERAR FRASE ALEATÓRIA
========================= */

function generateQuote() {

    const quote =
        quotes[
            Math.floor(
                Math.random() * quotes.length
            )
        ];


    const element =
        document.getElementById("quote");


    /* Desaparece */

    element.style.opacity = "0";


    /* Troca a frase */

    setTimeout(() => {

        element.textContent =
            `"${quote}"`;

        element.style.opacity =
            "1";

    }, 250);
}


/* =========================
   ANIMAÇÃO DAS SEÇÕES
========================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.animation =
                        "aparecer 1s ease forwards";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


/* Observa todas as seções */

document
    .querySelectorAll("section")
    .forEach(section => {

        observer.observe(section);

    });
