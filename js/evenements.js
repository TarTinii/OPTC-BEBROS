document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events-container");

    const eventsData = [
        {
            title: "PKA VS ACE",
            description: "Nouveau Pka VS Ace",
            image: "https://media.discordapp.net/attachments/935315036107333733/1266596169765879838/ENapp_banner_event_1112_8AyGlwrUQe.png?ex=66a85c1b&is=66a70a9b&hm=bc8aeb6e54438e4501b6bff105e12bde2ad3fef81d865147dc9513015309310c&=&format=webp&quality=lossless&width=620&height=300",
            popupTexts: [
                "Le taux de drops de tortues arc en ciel a été changer (Mini Boss Et Boss Principal) au level 150",
                "Vous avez une chance supplémentaire de drops des tortues sur le boss principal au niveau 150",
            ],
            images: [
                { src: "https://media.discordapp.net/attachments/935315036107333733/1266596169765879838/ENapp_banner_event_1112_8AyGlwrUQe.png?ex=66a85c1b&is=66a70a9b&hm=bc8aeb6e54438e4501b6bff105e12bde2ad3fef81d865147dc9513015309310c&=&format=webp&quality=lossless&width=620&height=300", alt: "Image 1" },
                { src: "https://media.discordapp.net/attachments/935315036107333733/1266599155384582195/Untitled.png?ex=66a85ee2&is=66a70d62&hm=9c3dadb52c5f01b38c45a84728f62ccc83e1e95fb5f4aa6fdc6675c5f2036eac&=&format=webp&quality=lossless&width=421&height=608", alt: "Image 2" },
            ],
            startDate: "2024-07-28T10:00:00Z", 
            endDate: "2024-08-25T23:59:59Z",   
            characters: [
                {
                    name: "Ace",
                    image: "https://media.discordapp.net/attachments/762948804034035713/1268312741274189945/Screenshot_20240731_230151.jpg?ex=66abf7c9&is=66aaa649&hm=8a913cf03b8fc8f50aec7fdb80f363155f383077a0bb429cb46640c9f3e60e65&=&format=webp&width=186&height=190"
                },

            ]
        },


         {
            title: "Grand Party",
            description: "Nouvelle Saison Grand Party",
            image: "https://media.discordapp.net/attachments/935315036107333733/1266254267254046781/ENapp_banner_event_0898_WAZGj1x5zw.png?ex=66a86f2f&is=66a71daf&hm=fcbd3ac50cf32025922f9a4ea19f1ee2a8a47c71b921e04c4dc620eb5863106a&=&format=webp&quality=lossless&width=600&height=328",
                        images: [
                { src: "https://media.discordapp.net/attachments/935315036107333733/1266254267254046781/ENapp_banner_event_0898_WAZGj1x5zw.png?ex=66a86f2f&is=66a71daf&hm=fcbd3ac50cf32025922f9a4ea19f1ee2a8a47c71b921e04c4dc620eb5863106a&=&format=webp&quality=lossless&width=600&height=328", alt: "Image 2" },
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