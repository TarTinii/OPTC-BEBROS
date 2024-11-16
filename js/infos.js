document.addEventListener("DOMContentLoaded", function () {
    const infosContainer = document.getElementById("infos-container");

    const infosData = [

        {
            title: "Nouvelle super évolution : Crocodile",
            description: "",
            image: "images/events/croco6+.png",
            description: [
                "Super évoluez Crocodile, la légende limitée aux portails TM !",
            ],
            images: [
                { src: "images/events/portail3.png", alt: "Image 1" },
            ],
            popupTexts: [
                "Vous pourrez obtenir deux exemplaires de ce personnage au PVP,",
                "et ses crânes de super évolution lors du super kizuna.",
            ],
            startDate: "2024-11-19T04:00:00Z",
            endDate: "2024-11-24T05:00:59Z",
        },

        {
            title: "Bazar des Médailles",
            description: "Nouveau bazar des médailles",
            image: "images/events/medail.png",
            popupTexts: [
                "",
            ],
            images: [
                { src: "images/events/bazar1-1.png", alt: "Image 1" },
            ],
            characters: [
            ]
        },

    ];

    function createInfoCards(data) {
        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                showPopup(item.title, item.description, item.popupTexts, item.characters, item.images);
            });

            infosContainer.appendChild(card);
        });
    }

    createInfoCards(infosData);
});
