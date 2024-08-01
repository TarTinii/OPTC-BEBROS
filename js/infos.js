document.addEventListener("DOMContentLoaded", function() {
    const infosContainer = document.getElementById("infos-container");

    const infosData = [
        {
            title: "Nouvelle Mise à Jour 14.1",
            description: "Détails de la mise a jour 14.1",
            image: "images/events/14-1.png",
            popupTexts: [
                "Les souhaits de chopperman se renouvellent",
                "De nouvelles missions a l'affiche debarque",
                "l'écran de menu a été elargi afin de le rendre plus lisible",
                "Tu peut verifier temps restant et l'état de progression des missions a partir des banniéres",
                "La formations automatique d'équipe par classe et par type pour le pvp a été ajouter",
                "Nouvelle onglet évènement dans les coop quests",

            ],
            images: [
                { src: "images/events/14-1.png", alt: "Image 1" },
               { src: "images/events/autorumble.png", alt: "Image 2" },
               { src: "images/events/puzzle.png", alt: "Image 3" },
               { src: "images/events/eventui.png", alt: "Image 4" },           
            ]
       },



          {
            title: "Ajouts Bazar de Rayleigh",
            description: "Nouveau personnages disponible au bazar de Rayleigh",
            image: "images/events/rayleigh.png",
            popupTexts: [
                "Les personnages disponible au bazar de rayleigh coutent 3000 points par unités",

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
        },

         {
            title: "Bazar des Medailles",
            description: "Nouveau bazar des médailles",
            image: "images/events/medail.png",
            popupTexts: [
                "Princesses -> Ulti = 600 Medailles",
                "Vivi -> Boa Psy -> Sangoro -> Judge & Sanji -> Franky -> Rob Lucci -> Luffy -> Boa Qck = 400 Médailles",
                "Tashigi -> Makino -> Hina -> Carrot -> Sugar -> kalifa -> Vivi int -> Shiraoshi -> Vivi Int V2 -> Perona = 100 Médailles",
            ],
            images: [

            ],
            characters: [

              {
                    name: "Vivi (600)",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/900/3944.png"
                },
               {
                    name: "Ulti (600)",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/600/3674.png"
                },
               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/400/3405.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/000/3037.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/800/2803.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/400/2446.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/1/900/1934.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/1/700/1762.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/1/100/1120.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/0/400/0415.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/400/3412.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/400/3413.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/3/400/3414.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/600/2626.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/600/2624.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/2/600/2621.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/1/700/1730.png"
                },
                               {
                    name: "Flampe",
                    image: "https://optc-db.github.io/api/images/thumbnail/jap/1/600/1673.png"
                },
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