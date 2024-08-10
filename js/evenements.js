document.addEventListener("DOMContentLoaded", function() {
    const eventsContainer = document.getElementById("events-container");

    const eventsData = [



        {
            title: "Bonus de connexion",
            description: "Bonus de connexion Super Féroces",
            image: "images/events/bns1.png",
            popupTexts: [
                "Ce ne sont pas des tickets rouges seulement des tickets",
                "Qui ont 10% de chance (avant 5) d'être des tickets rouges",
            ],
            images: [
                { src: "images/events/bns1.png", alt: "Image 1" },
                { src: "images/events/bns1-1.png", alt: "Image 2" },
            ],
            startDate: "2024-08-10T10:00:00Z", 
            endDate: "2024-08-23T23:59:59Z",   
            characters: [
 

            ]
        },

        {
            title: "Grand Party Spécial",
            description: "Nouveau Grand Pary spécial",
            image: "images/events/gpsp.png",
            startDate: "2024-08-11T10:00:00", 
            endDate: "2024-08-15T23:59:59",   
            popupTexts: [
                "Dans celui ci vous ne pouvez pas perdre",
                "Les actualisation sont infini peut importe votre nombre de victoire",  
                "Et vous pouvez le retenté a l'infini", 
                "&nbsp",                           
                "Gagnez jusqu'a 50 gemmes arc en ciel",  
                "Ainsi que 3.000.000 de primes",  

            ],
            images: [
                { src: "images/events/gpsp.png", alt: "Image 1" },     
            ]
       },


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

//
        {
            title: "Quêtes Coop de l'été 2024",
            description: "Nouvelle Saison Coop",
            image: "images/events/coop.png",
            images: [
            { src: "images/events/coop.png", alt: "Image 2" }, ],
            popupTexts: [
            "Le Co-Op durera UNE semaine CHAQUE mois, avec des règles/personnages boostés différents qui culmineront en un Sugofest Co-Op après 3 mois.", 
            "&nbsp",
            "il y a un ensemble similaire de missions Chopperman disponibles pendant la période, comme lors de la précédente saison Co-Op (cette fois pour différents types/classes/styles de combat).",
            "&nbsp",
            "Un onglet Événement a été ajouté avec Pirate King Adventures Vs. Ace",
            "&nbsp",
            "Les missions pour les débutants de moins de 10M de primes sont maintenant de moins de 30M",
            "&nbsp",
            "L'unités Ulti est désormais utilisable",
            "&nbsp",
            "Missions Chopperman",
            "&nbsp",
            "INT Slashers ou Driven",
            "PSY Free Spirit ou Cerebral",
            "QCK Strikers ou Powerhouse",
            ],
            startDate: "2024-08-06T10:00:00", 
            endDate: "2024-08-13T23:59:59",   
            characters: [
 
            ]

       },

        {
            title: "Missions D'obtention de pierres d'orientation de Baggy",
            description: "Détails des missions de baggy",
            image: "images/events/baggyevents.png",
            startDate: "2024-08-07T10:00:00", 
            endDate: "2024-08-23T23:59:59",   
            popupTexts: [
                "5 Quêtes : Fragments de chaque couleurs x60",
                "10 Quêtes : Fragments de chaque couleurs x60",
                "&nbsp",
                "15 Quêtes : Cristal de chaque couleurs x30",
                "20 Quêtes : Cristal de chaque couleurs x30",
                "&nbsp",
                "25 Quêtes : Orbe de chaque couleurs x5",
                "30 Quêtes : Orbe de chaque couleurs x5",

            ],
            images: [
                { src: "images/events/baggyevents.png", alt: "Image 1" },     
            ]
       },







//

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
