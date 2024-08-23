document.addEventListener("DOMContentLoaded", function () {
    const infosContainer = document.getElementById("infos-container");

    const infosData = [
        {
            title: "Informations Campagnes Super TM",
            description: "Infos des administrateur",
            image: "images/events/sns1-1-bip.png",
            popupTexts: [
                "La date de distributions des récompenses de la campagnes super tm a été reporter au 28 aout",
                "1 Gemmes arc en ciel a été distribué en dédomagement "
            ],
            images: [
                { src: "images/events/sns1-1-bip.png", alt: "Image 1" },
            ]
        },

        /*{
            title: "Nouvelles informations sur le Super Sugo-Fest",
            description: "Nouvelles informations sur le SuperSugo-Fest",
            image: "images/events/sugoannounce.png",
            popupTexts: [
                "à l'occasion du du \"ONE PIECE DAY\", des informations sur les nouveaux personnages et les dates des futurs événements seront révélés durant un live YouTube le samedi 10 août (PST).",
                "&nbsp",
                "Lien vers live YouTube : https://www.youtube.com/live/H3wliasJMxI"

            ],
            images: [
                { src: "images/events/sets.png", alt: "Image 1" },
            ]
        },*/

       /* {
            title: "Set de soutien aux débutants",
            description: "Set de soutien aux débutants",
            image: "images/events/sets.png",
            popupTexts: [
                "Pack 160 Gemmes :",
                "Gemmes arc-en-ciel x160",
                "Poster de recrutement rare spécial composé uniquement de personnages exclusif au Sugo-Fest spécialement seléctionnés x1",
                "&nbsp",
                "Pack 50 Gemmes :",
                "Gemmes arc-en-ciel x50",
                "Manuel Universel x3",
                "&nbsp",
                "Pack 15 Gemmes :",
                "Gemmes arc-en-ciel x15",
            ],
            images: [
                { src: "images/events/sets.png", alt: "Image 1" },
            ]
        },*/

      /*  {
            title: "Nouvelle mise à Jour 14.1",
            description: "Les détails de la mise a jour 14.1",
            image: "images/events/14-1.png",
            popupTexts: [
                "Les souhaits de Chopperman \"Débutant\", \"Intermédiaire\" et \"Maître\" sont renouvelés, ainsi que les souhaits relatifs aux \"Garp Challenge\".",
                "&nbsp",
                "Apparition des souhaits de Chopperman \"Challenge\".",
                "&nbsp",
                "l'écran de menu a été elargi afin de le rendre plus lisible.",
                "&nbsp",
                "Il est maintenant possible de verifier le temps restant et l'état de progression des missions à partir des bannières.",
                "&nbsp",
                "La formation automatique d'équipe par classe et par type pour le pvp a été ajoutée.",
                "&nbsp",
                "Nouvel onglet évènement dans les missions de Co-op.",

            ],
            images: [
                { src: "images/events/14-1.png", alt: "Image 1" },
                { src: "images/events/autorumble.png", alt: "Image 2" },
                { src: "images/events/puzzle.png", alt: "Image 3" },
                { src: "images/events/eventui.png", alt: "Image 4" },
            ]
        },*/

      /*  {
            title: "Ajout au Bazar de Rayleigh",
            description: "Nouveaux personnages disponibles au Bazar de Rayleigh",
            image: "images/events/rayleigh.png",
            popupTexts: [
                "Les personnages disponibles au bazar de rayleigh coûtent 3000 points par unité",
            ],
            images: [
            ],
            characters: [
                {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/000/3050.png",
                    recommended: true
                },
                {
                    name: "Smoothie",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/600/2628.png",
                    recommended: true
                },
                {
                    name: "Robin",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/0/500/0514.png"
                },
                {
                    name: "Nami",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/0/600/0662.png"
                },
                {
                    name: "Vivi",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/0/600/0686.png"
                },

            ]
        },*/

        {
            title: "Bazar des Medailles",
            description: "Nouveau bazar des médailles",
            image: "images/events/medail.png",
            popupTexts: [
                "",
            ],
            images: [
                { src: "images/events/bazar1.png", alt: "Image 1" },
                { src: "images/events/bazar2.png", alt: "Image 1" },
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