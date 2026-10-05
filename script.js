// ======================================
// CREATE ANIMATED STARS
// ======================================

const starsContainer =
    document.getElementById("stars");

document.getElementById("year").textContent =
    new Date().getFullYear();

const profileFrame =
    document.querySelector(".profile-frame");

const profileImage =
    profileFrame.querySelector("img");

const showPhotoFallback = () => {
    profileFrame.classList.add("image-unavailable");
};

if (profileImage.complete && profileImage.naturalWidth === 0) {
    showPhotoFallback();
} else {
    profileImage.addEventListener("error", showPhotoFallback);
}

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const updateMusicButton = (isPlaying) => {
    musicButton.textContent =
        isPlaying ? "🔇 SOUND OFF" : "🔊 SOUND ON";

    musicButton.setAttribute(
        "aria-pressed",
        String(isPlaying)
    );
};

music.addEventListener("playing", () => {
    updateMusicButton(true);
});

music.addEventListener("pause", () => {
    updateMusicButton(false);
});

music.addEventListener("error", () => {
    updateMusicButton(false);
    musicButton.textContent = "❌ AUDIO ERROR";
    console.error("Unable to load background music:", music.error);
});

musicButton.addEventListener("click", async () => {
    if (!music.paused) {
        music.pause();
        return;
    }

    try {
        music.volume = 0.5;
        await music.play();
    } catch (error) {
        updateMusicButton(false);
        musicButton.textContent = "❌ AUDIO ERROR";
        console.error("Audio error:", error);
    }
});


for (let i = 0; i < 60; i++) {

    const star =
        document.createElement("span");


    star.className = "star";


    // Random position

    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    // Random animation delay

    star.style.animationDelay =
        Math.random() * 5 + "s";


    // Random brightness

    star.style.opacity =
        0.25 + Math.random() * 0.75;


    starsContainer.appendChild(star);

}