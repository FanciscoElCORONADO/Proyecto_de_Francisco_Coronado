function Mensaje1(){
alert(`⚠️ ¡Cuidado Rocco!

El túnel de la izquierda está completamente a oscuras. Nox el murciélago chilló para advertirte de un derrumbe. ¡Es mejor dar la vuelta y probar el túnel con cristales brillantes!`);
}

function Mensaje2(){
alert(`🔥 ¡Excelente elección!

El túnel de la derecha brilla con hermosos cristales naranjas. Nox vuela al frente guiando el camino seguro hacia la cámara donde te espera el Guardián de Lava.`);
}

document.addEventListener("DOMContentLoaded", () => {

    const slides = [...document.querySelectorAll("section")];
    const countSpan = document.getElementById("num-pagina");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    function getCurrentIndex() {
        let y = window.scrollY + window.innerHeight * 0.45;
        let index = 0;
        slides.forEach((slide, n) => {
            if (slide.offsetTop <= y) index = n;
        });
        return index;
    }

    function updatePagination() {
        if (countSpan) {
            countSpan.textContent = `${getCurrentIndex() + 1} / ${slides.length}`;
        }
    }

    function goToSlide(d) {
        let targetIndex = Math.max(0, Math.min(slides.length - 1, getCurrentIndex() + d));
        slides[targetIndex].scrollIntoView({ behavior: "smooth" });
    }

    if (btnPrev) {
        btnPrev.onclick = (e) => {
            e.preventDefault();
            goToSlide(-1);
        };
    }

    if (btnNext) {
        btnNext.onclick = (e) => {
            e.preventDefault();
            goToSlide(1);
        };
    }

    window.addEventListener("scroll", updatePagination, { passive: true });
    window.addEventListener("resize", updatePagination);

    window.addEventListener("keydown", (e) => {
        if (["ArrowRight", "PageDown"].includes(e.key)) {
            e.preventDefault();
            goToSlide(1);
        }
        if (["ArrowLeft", "PageUp"].includes(e.key)) {
            e.preventDefault();
            goToSlide(-1);
        }
    });

    updatePagination();
});
