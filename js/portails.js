document.addEventListener("DOMContentLoaded", function () {
    const portailsContainer = document.getElementById("portails-container");

    const portailsData = [


        {
            title: "Nouveau Portail Sugo-Fest spécial 10.5e Anniversaire",
            description: "Détails du nouveau portail Sugo-Fest Anniversaire",
            image: "images/events/portailAnniv.png",
            popupTexts: [

            ],
            startDate: "2024-11-12T02:00:00",
            endDate: "2024-12-08T02:59:59",
            images: [
                //PARTIE1
                { src: "images/portail/allpart-1.png", alt: "Image 1" },

            ],
            characters: [
                {
                    name: "Kaido&King",
                    image: "images/head/Kaido&King.png",
                    newbatch: true
                },
                {
                    name: "BigMom&Katakuri",
                    image: "images/head/BigMom&Katakuri.png",
                    newbatch: true
                },
                {
                    name: "BarbeNoir&Shilliew",
                    image: "images/head/BarbeNoir&Shilliew.png",
                    newbatch: true
                },
                {
                    name: "Shanks&BenBeckman",
                    image: "images/head/Shanks&BenBeckman.png",
                    newbatch: true
                },
            ]
        },

    ];

    function createPortailCards(data) {
        data.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p><strong>Date de début :</strong> ${new Date(item.startDate).toLocaleDateString()}</p>
                    <p><strong>Date de fin :</strong> ${new Date(item.endDate).toLocaleDateString()}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                showPopup(item.title, item.description, item.popupTexts, item.characters, item.images, item.additionalText);
            });

            portailsContainer.appendChild(card);
        });
    }

    createPortailCards(portailsData);
});
