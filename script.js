document.addEventListener("DOMContentLoaded", function () {

    // 💖 HEARTS (BACK TO ORIGINAL PINK)
    const container = document.querySelector(".hearts");

    for (let i = 0; i < 60; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖"; // 🔥 back to pink

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 5) + "s";

        container.appendChild(heart);
    }

    // 💥 BLAST (NO CHANGE)
    function blastEffect() {
        const card = document.getElementById("card");
        const rect = card.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const symbols = ["✨","🎉","🎊","💖"];

        for (let i = 0; i < 80; i++) {
            let s = document.createElement("span");
            s.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];

            s.style.position = "fixed";
            s.style.left = x + "px";
            s.style.top = y + "px";
            s.style.fontSize = "22px";

            let dx = (Math.random() - 0.5) * 1500;
            let dy = (Math.random() - 0.5) * 1500;

            s.animate([
                { transform: "translate(0,0)", opacity: 1 },
                { transform: `translate(${dx}px,${dy}px)`, opacity: 0 }
            ], {
                duration: 3000,
                easing: "ease-out"
            });

            document.body.appendChild(s);

            setTimeout(() => s.remove(), 3000);
        }
    }

    setTimeout(blastEffect, 300);

    //🌊 WAVE (NO CHANGE)
    function waveEffect() {
        let wave = document.getElementById("wave");

        wave.style.transition = "1.2s ease-out";
        wave.style.transform = "translate(-50%, -50%) scale(200)";
        wave.style.opacity = "0";

        setTimeout(() => {
            wave.style.transition = "none";
            wave.style.transform = "translate(-50%, -50%) scale(0)";
            wave.style.opacity = "0.5";
        }, 1200);
    }

    // 📝 TEXT
   function showText() {
    document.getElementById("names").innerText = "Raju ❤️ Padma";

    document.getElementById("message").innerHTML =
`Wishing you both a lifetime filled with love, joy, and happiness 🫶<br>
May your journey together be full of beautiful moments and endless smiles ✨☺️<br><br>

Through every smile, every challenge, and every dream,<br>
may you always stand by each other with love and strength 👫🏻<br><br>

May your love grow stronger with each passing day<br>
and your life be filled with unforgettable memories 💕<br><br>

Mee new journey mudu puvvulu aaru kayaluga vardillali ani korukuntu 🤗😍<br><br>

With lots of love💙<br>
<span style="color:white; font-weight:bold; font-size:20px;">
Your Forever Friend 💖
</span>`;
}


    // 🎞️ SLIDESHOW (FADE + LIGHT ZOOM + SOFT ROTATION)
var images = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg",
    "images/photo11.jpeg",
    "images/photo12.jpeg",

];

let i = 0;
let slideInterval;

function slideshow() {
    let img = document.getElementById("slide");

    img.src = images[0];
    applyCinematicEffect(img);
    img.style.opacity = 1;

    slideInterval = setInterval(() => {

        // fade out
        img.style.opacity = 0;

        setTimeout(() => {
            i = (i + 1) % images.length;

            img.src = images[i];

            applyCinematicEffect(img);

            // fade in
            img.style.opacity = 1;

        }, 800);

    }, 3500);
}


// 🎬 CINEMATIC EFFECT (ZOOM + ROTATION)
function applyCinematicEffect(img) {

    let effects = [
        "scale(1.08) translateY(10px)",
        "scale(1.08) translateY(-10px)",
        "scale(1.08) translateX(10px)",
        "scale(1.08) translateX(-10px)"
    ];

    let random = effects[Math.floor(Math.random() * effects.length)];

    img.style.transition = "opacity 1s ease, transform 4s ease";
    img.style.transform = "scale(1)";

    setTimeout(() => {
        img.style.transform = random;
    }, 100);
}

    // 🔄 SMALL ROTATION EFFECT (NEW - SMOOTH)
    function applyRotation(img) {
        let rotations = ["rotate(2deg)", "rotate(-2deg)", "rotate(1deg)", "rotate(-1deg)"];
        let random = rotations[Math.floor(Math.random() * rotations.length)];

        img.style.transition = "opacity 1s ease, transform 3s ease";
        img.style.transform = "scale(1) " + random;
    }

    // 🏁 FINAL (NO CHANGE)
    function showFinal() {
        clearInterval(slideInterval);

        document.getElementById("mainContent").style.display = "none";
        document.getElementById("finalScreen").style.display = "flex";

        document.getElementById("finalImg").src = "images/final.jpeg";
    }

    // 🎵 MUSIC (NO CHANGE)
    function handleMusic() {
        let music = document.getElementById("bgMusic");

        music.play().catch(() => {});

        music.addEventListener("timeupdate", () => {
            if (music.duration - music.currentTime <= 5) {
                showFinal();
            }
        });
    }

    // 🔘 BUTTON CLICK (NO CHANGE)
    document.getElementById("openBtn").onclick = function () {

        this.style.transform = "scale(0.85)";
        setTimeout(() => this.style.transform = "scale(1)", 150);
        blastEffect();
        waveEffect();

        setTimeout(() => {

            document.getElementById("startScreen").style.display = "none";
            document.getElementById("mainContent").classList.remove("hidden");

            showText();
            slideshow();
            handleMusic();

        }, 1200);
    };

});




