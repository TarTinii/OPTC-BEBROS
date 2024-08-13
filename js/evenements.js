document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("events-container");


    const eventsData = [

        {
            title: "Super Map au trésors",
            description: "Super Map au trésors vs ACE",
            image: "images/events/tmace.png",
            popupTexts: [
                "Gagnez de nombreuses récompenses",
                "Et évoluée ace dans ça version 6+",
            ],
            images: [
                { src: "images/events/tmace.png", alt: "Image 1" },
                { src: "images/events/tm1-1.png", alt: "Image 2" },
                { src: "images/events/tm1-2.png", alt: "Image 2" },
                { src: "images/events/tm1-3.png", alt: "Image 2" },
                { src: "images/events/tm1-4.png", alt: "Image 2" },
                { src: "images/events/tm1-5.png", alt: "Image 2" },
                { src: "images/events/tm1-6.png", alt: "Image 2" },
                { src: "images/events/tm1-7.png", alt: "Image 2" },
                { src: "images/events/tm1-8.png", alt: "Image 2" },
                { src: "images/events/tm1-9.png", alt: "Image 2" },
            ],
            startDate: "2024-08-14T11:00:00Z",
            endDate: "2024-08-18T15:59:59Z",
            characters: [
                {
                    name: "LuffyVsKaido",
                    image: "images/head/headluffyvskaido.png",
                    boost: true
                },
                {
                    name: "Yamato",
                    image: "images/head/headyamato.png",
                    boost: true
                },
                {
                    name: "KinemonCrew",
                    image: "images/head/headkinemoncrew.png",
                    boost: true
                },
            ]
        },


        {
            title: "Bonus de connexion",
            description: "Bonus de connexion Super Féroces",
            image: "images/events/bns1.png",
            popupTexts: [
                "Recevez 1 ticket jaune par jour (10% de chance d'avoir un Sugo-Rare)",
                "pendant 9 jours, puis 1 ticket rouge au bout du dixième jour.",
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
            title: "\"Grand Party\" Spéciale",
            description: "Nouvelle saison \"Grand Party\" spéciale",
            image: "images/events/gpsp.png",
            startDate: "2024-08-11T10:00:00",
            endDate: "2024-08-15T23:59:59",
            popupTexts: [
                "Durant cette \"Grand Party\", vous pourrez actualiser les",
                "combats à l'infini et réessayer autant de fois que nécessaire,",
                "peut importe votre nombre de victoire.",
                "&nbsp",
                "Gagnez jusqu'à 50 gemmes arc-en-ciel, et 3.000.000 de primes.",

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
                "Obtenez le nouveau Ace en récompenses de victoire,",
                "en augmentant le level de votre boss principal.",
                "&nbsp",
                "Le taux de drop des tortues arc-en-ciel est également augmenté",
                "lorsque vous atteignez le level 150 sur le boss principal.",
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
 /*       {
            title: "Quêtes CooOp de l'été 2024",
            description: "Nouvelle Saison Co-op",
            image: "images/events/coop.png",
            images: [
                { src: "images/events/coop.png", alt: "Image 2" },],
            popupTexts: [
                "La saison Co-op de l'été s'étend de juin à août, période durant laquelle vous pourrez pendant 1 semaine par mois vous essayer aux combats en Co-op.",
                "Chaque mois, les règles et les personnages boostés seront différents.",
                "&nbsp",
                "A la fin de la saison, un portail sugo-fest spécial fera son apparition, sur lequel vous pourrez faire des invocations grâce à des gemmes gagnées durants vos combats Co-op.",
                "&nbsp",
                "Des missions chopperman sont également disponibles chaque mois, vous permettant de récupérer de nombreuses récompenses telles que des gemmes et gemmes arc-en-ciel.",
                "&nbsp",
                "Désormais, les missions pourront être effectuées avec des joueurs à la prime inférieure à 30M (10M précédemment).",
                "&nbsp",
                "Le personnage Ulti est désormais utilisable en combat.",
                "&nbsp",
                "Classes/types imposés pour les missions Chopperman de cette saison :",
                "INT Sabreur ou Ambitieux",
                "PSY Libre ou Intellectuel",
                "QCK Ravageur ou Tenace",
            ],
            startDate: "2024-08-06T10:00:00",
            endDate: "2024-08-13T23:59:59",
            characters: [

            ]

        },*/

        {
            title: "Missions d'obtention de pierres d'orientation de Baggy",
            description: "Détails des missions de baggy",
            image: "images/events/baggyevents.png",
            startDate: "2024-08-07T10:00:00",
            endDate: "2024-08-23T23:59:59",
            popupTexts: [
                "5 Quêtes : Fragments de chaque couleur x60",
                "10 Quêtes : Fragments de chaque couleur x60",
                "&nbsp",
                "15 Quêtes : Cristal de chaque couleur x30",
                "20 Quêtes : Cristal de chaque couleur x30",
                "&nbsp",
                "25 Quêtes : Orbe de chaque couleur x5",
                "30 Quêtes : Orbe de chaque couleur x5",

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