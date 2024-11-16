document.addEventListener("DOMContentLoaded", function () {
    const infosContainer = document.getElementById("infos-container");

    const infosData = [

        {
            title: "Super Evolution Crocodile",
            description: "",
            image: "images/events/croco6+.png",
            description: [
                "Farmer la nouvelle 6+ de crocodile",
                "pendant la période du kizuna",
            ],
            images: [
                { src: "images/events/crocoevolu.png", alt: "Image 1" },
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
