const firstBtn = document.querySelector(".hover-btn1");
const secondBtn = document.querySelector(".hover-btn2");

const overlay = document.querySelector(".overlay");

gsap.set(overlay, {
    "--x": "50%",
    "--y": "50%",
});

window.addEventListener("mousemove", (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);

    gsap.to(overlay, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
    });
});

[firstBtn, secondBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        overlay.classList.toggle("is-open");
    });
});
