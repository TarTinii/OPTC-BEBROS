document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events-container");

    const eventsData = [
        {
            title: "PKA VS ACE",
            description: "Nouveau Pka VS Ace",
            image: "images/events/pka.png",
            popupTexts: [
                "Le taux de drops de tortues arc en ciel a été changer (Mini Boss Et Boss Principal) au level 150",
                "Vous avez une chance supplémentaire de drops des tortues sur le boss principal au niveau 150",
            ],
            images: [
                { src: "images/artworks/aceart.png", alt: "Image 1" },
                { src: "images/boosts/pkaboostace.png", alt: "Image 2" },
            ],
            startDate: "2024-07-28T10:00:00Z", 
            endDate: "2024-08-25T23:59:59Z",   
            characters: [
                {
                    name: "Ace",
                    image: "images/head/headace.png"
                },

            ]
        },


         {
            title: "Grand Party",
            description: "Nouvelle Saison Grand Party",
            image: "images/events/gp1.png",
                        images: [
                { src: "images/events/gp1.png", alt: "Image 2" },
            ],
            popupTexts: [
                "Régles Grand Party du mois de Août ",
                "Buff :",
                "Qck : Vitesses Lvl 5 -> Atk  Lvl 10 -> B",
                "Classe Tenace : HP Lvl 10 ",
                "Classe Libre & Cogneur : Def Lvl 5 ->",
                "Augmente le nombre d'utilisation du burst + 1 pour les personnages de type QCK de classe TENACE",
                "Nerf",
                "Dex : Réduit la Def Lvl 10 ",
                "Sabreur : Réduit la Vitesses des coups spéciaux lvl 5"
            ],
            startDate: "2024-08-02T10:00:00", 
            endDate: "2024-08-07T23:59:59",   
            characters: [
 
            ]

        },



    ];

    function createEventCards(data) {
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

            eventsContainer.appendChild(card);
        });
    }

    createEventCards(eventsData);
});