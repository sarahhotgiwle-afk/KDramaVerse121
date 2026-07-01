// ===============================
// DARK MODE
// ===============================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkBtn.textContent = "☀️";
    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkBtn.textContent = "🌙";
        }

    });

}

// ===============================
// SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");
const dramaCards = document.querySelectorAll(".card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = searchInput.value.toLowerCase();

        dramaCards.forEach(card => {

            const title = card.querySelector(".drama-title").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ===============================
// WATCHLIST
// ===============================

const watchButtons = document.querySelectorAll(".watch-btn");

watchButtons.forEach(button => {

    button.addEventListener("click", () => {

        const dramaName =
            button.parentElement.querySelector(".drama-title").textContent;

        let watchlist =
            JSON.parse(localStorage.getItem("watchlist")) || [];

        if (!watchlist.includes(dramaName)) {

            watchlist.push(dramaName);

            localStorage.setItem(
                "watchlist",
                JSON.stringify(watchlist)
            );

            alert(dramaName + " added to Watchlist ❤️");
            updateWatchCount();

        } else {

            alert("Already in Watchlist!");

        }

    });

});

// ===============================
// SCROLL ANIMATION
// ===============================

function revealCards() {

    dramaCards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {

            card.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealCards);
revealCards();

// ===============================
// POPUP
// ===============================

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.querySelector(".close-btn");

if (popup && popupTitle && popupDescription && closeBtn) {

    dramaCards.forEach(card => {

        card.addEventListener("click", (e) => {

            if (
                e.target.classList.contains("watch-btn") ||
                e.target.classList.contains("trailer-btn")
            ) {
                return;
            }

            const title =
                card.querySelector(".drama-title").textContent;

            popupTitle.textContent = title;

            switch (title) {

                case "Lovely Runner":
                    popupDescription.textContent =
                        "A romantic fantasy drama about time travel and love.";
                    break;

                case "Queen of Tears":
                    popupDescription.textContent =
                        "A heartwarming love story between a married couple.";
                    break;

                case "The Glory":
                    popupDescription.textContent =
                        "A revenge thriller starring Song Hye-kyo.";
                    break;

                default:
                    popupDescription.textContent =
                        "More information coming soon.";

            }

            popup.style.display = "flex";

        });

    });

    closeBtn.addEventListener("click", () => {

        popup.style.display = "none";

    });

}

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🎉 Thank you! Your message has been received.");

        contactForm.reset();

    });

}

// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.display = "none";

        }, 1500);

    }

});
const stars = document.querySelectorAll(".rating span");

stars.forEach(star => {

    star.addEventListener("click", () => {

        alert("⭐ Thanks for rating this drama!");

    });

});
function updateWatchCount() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    document.getElementById("watchCount").textContent = watchlist.length;
}

updateWatchCount();
