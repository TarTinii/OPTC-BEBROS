document.addEventListener("DOMContentLoaded", function () {
    const eventsContainer = document.getElementById("events-container");


    const eventsData = [

{
    "title": "Nouveau \"BLITZ\" Garp VS Kuzan",
    "description": "Nouveau \"BLITZ\" Garp VS Kuzan",
    "image": "images/events/blitz1.png",
    "startDate": "2024-08-31T10:00:00",
    "endDate": "2024-09-02T23:59:59",
    "popupTexts": [
        "Il y a 4 classements différents :",
        "&nbsp",
        "Classement Personnel",
        "Classement d'Alliance In-App",
        "Classement Personnel Mondial",
        "Classement d'Alliance Mondial",
        "&nbsp",
        "Pendant cette période, vous ne pourrez pas créer, dissoudre, quitter, ni renvoyer des membres d'une alliance. Vous pouvez cependant en rejoindre une.",
        "&nbsp",
        "Les récompenses seront distribuées après le 6 septembre. Veuillez notez que chaque classement permettra d'obtenir des récompenses différentes.",
    ],
    "images": [
        { "src": "images/events/blitz1.png", "alt": "Image 1" },
        { "src": "images/boosts/blitz1boost.png", "alt": "Image 1" },
    ]
},



   {
            title: "Nouvelle Saison \"Grand Party\"",
            description: "Nouvelle saison \"Grand Party\"",
            image: "images/events/gp1.png",
            startDate: "2024-08-31T10:00:00",
            endDate: "2024-09-05T23:59:59",
            popupTexts: [
                "Gagnez jusqu'à 50 gemmes arc-en-ciel, et 3.000.000 de primes.",
            ],
            images: [
                { src: "images/events/gp1.png", alt: "Image 1" },
            ]
        },

{
            title: "PKA VS BEPO",
            description: "Nouveau Pka VS Bepo",
            image: "images/events/pkabepo.png",
            popupTexts: [
                "Obtenez le nouveau Ace en récompenses de victoire,",
                "en augmentant le level de votre boss principal.",
                "&nbsp",
                "Le taux de drop des tortues arc-en-ciel est également augmenté",
                "lorsque vous atteignez le level 150 sur le boss principal.",
            ],
            images: [
                { src: "images/artworks/bepoart.png", alt: "Image 1" },
                { src: "images/boosts/pkaboostbepo.png", alt: "Image 2" },
            ],
            startDate: "2024-08-26T10:00:00Z",
            endDate: "2024-09-28T23:59:59Z",
            characters: [
                {
                    name: "Bepo",
                    image: "images/head/bepo.png"
                },

            ]
        },

    {
            title: "Quêtes CooOp de l'automme 2024",
            description: "Nouvelle Saison Co-op",
            image: "images/events/coop2.png",
            images: [
                { src: "images/events/coop2.png", alt: "Image 2" },
                { src: "images/events/coopboost.png", alt: "Image 2" },
                ],
            popupTexts: [
                "La saison Co-op de l'été s'étend de septembrre à octobre, période durant laquelle vous pourrez pendant 1 semaine par mois vous essayer aux combats en Co-op.",
                "Chaque mois, les règles et les personnages boostés seront différents.",
                "&nbsp",
                "A la fin de la saison, un portail sugo-fest spécial fera son apparition, sur lequel vous pourrez faire des invocations grâce à des gemmes gagnées durants vos combats Co-op.",
                "&nbsp",
                "Des missions chopperman sont également disponibles chaque mois, vous permettant de récupérer de nombreuses récompenses telles que des gemmes et gemmes arc-en-ciel.",
                "&nbsp",
                "Désormais, les missions pourront être effectuées avec des joueurs à la prime inférieure à 30M (10M précédemment).",
                "&nbsp",
                "",
            ],
            startDate: "2024-09-04T10:00:00",
            endDate: "2024-09-11T23:59:59",
            characters: [

            ]

        },




        {
            title: "Bonus de connexion",
            description: "Bonus de connexion Super Féroces partie 2",
            image: "images/events/bns2.png",
            popupTexts: [
                "Recevez 1 ticket jaune par jour (10% de chance d'avoir un Sugo-Rare)",
                "pendant 9 jours, puis 1 ticket rouge au bout du dixième jour.",
            ],
            images: [
                { src: "images/events/bns2.png", alt: "Image 1" },
                { src: "images/events/bns2-2.png", alt: "Image 2" },
            ],
            startDate: "2024-08-24T10:00:00Z",
            endDate: "2024-09-14T23:59:59Z",
        },

        {
            title: "Célébration de la collaboration avec le V JUMP",
            description: "Bonus de connexion de de la collaboration avec le V JUMP",
            image: "images/events/vjumpcollab1.png",
            popupTexts: [
                "Lors de ce bonus de connexion les personnages de Baggy, Mihawk, Crocodile sont mis a l'honneur",
                "&nbsp",
            ],
            images: [
                { src: "images/events/vjumpcollab.png", alt: "Image 1" },
                { src: "images/portail/vjump1-1.png", alt: "Image 2" },
                { src: "images/portail/vjump1-2.png", alt: "Image 3" },
                { src: "images/portail/vjump1-3.png", alt: "Image 4" },
            ],
            startDate: "2024-08-21T10:00:00Z",
            endDate: "2024-09-21T10:00:00Z",
        },
//
        {
            title: "Alliance pirate du combat de l'amitié ! Vs Sakazuki",
            description: "Alliance pirate du combat de l'amitié ! Vs Sakazuki",
            image: "images/events/kizunaevolvesakazuki.png",
            popupTexts: [
                "Lors de ce combat de l'amitié, Sakazuki pourra super-évoluer dans sa rareté 6+, ainsi que hiyori et Otoko dans leur rareté 5+.",
                "&nbsp",
                "Les crânes de cristal de Sakazuki seront obtenables dans les listes 2 à 6, et ceux de Hiyori et Otoko le seront dans les listes 6 et 7 (ainsi que dans les missions d'alliances).",
                "&nbsp",
                "Une limite pour les niveaux 7★ et 3★ a maintenant été mise en place :",
                "3★ : Lvl 100 Maximum",
                "7★ : Lvl 150 Maximum",
                "&nbsp",
            ],
            images: [
                { src: "images/events/kizunaevolvesakazuki.png", alt: "Image 1" },
                { src: "images/artworks/kizunaevolvesakazuki2.png", alt: "Image 1" },
                { src: "images/artworks/hiyotoko.png", alt: "Image 1" },
            ],
            startDate: "2024-08-20T10:00:00Z",
            endDate: "2024-08-25T23:59:59Z",
            characters: [
                {
                    name: "Whitebeard",
                    image: "images/head/whitebeard.png",
                    boost: true
                },
                {
                    name: "Sakazuki",
                    image: "images/head/sakazuki.png",
                    boost: true
                },
                {
                    name: "Hiyori",
                    image: "images/head/hiyori.png",
                    boost: true
                },
            ],
        },
//
     /*   {
            title: "Campagne Super Carte aux trésors",
            description: "Campagne Super Carte aux trésors",
            image: "images/events/tmsns1.png",
            popupTexts: [
                "Objectif : 300 posts avec le # spécifié et un screen vos teams actuelles pour la Carte aux trésors.",
                "&nbsp",
                "Récompenses : 12 Essais au recrutement Sugo-Rare (4 toutes les 100 publications)",
                "&nbsp",
                "Conditions de participation : Terminez 1 run de la Carte aux trésors ! ",
            ],
            images: [
                { src: "images/events/tmsns1.png", alt: "Image 1" },
            ],
            startDate: "2024-08-14T10:00:00Z",
            endDate: "2024-08-18T23:59:59Z",
        },
//
       /*  {
            title: "Tirage au sort de la Carte aux trésors",
            description: "Tirage au sort de la Carte aux trésors",
            image: "images/events/lototm1.png",
            popupTexts: [
                "Voir récompenses ci-dessous",
                "",
            ],
            images: [
                { src: "images/events/lototm2.png", alt: "Image 1" },
                { src: "images/events/lototm4.png", alt: "Image 3" },
            ],
            startDate: "2024-08-14T10:00:00Z",
            endDate: "2024-08-18T23:59:59Z",
        },*/
//
  /*      {
            title: "Super Carte aux trésors",
            description: "Super Carte aux trésors vs ACE",
            image: "images/events/tmace.png",
            popupTexts: [
                "Gagnez de nombreuses récompenses",
                "Et évoluez Ace dans sa version 6+",
                "&nbsp",
                "↓ Retrouvez la liste des personnages boostés ci-dessous ↓",
            ],
            images: [
                { src: "images/events/tm1-1.png", alt: "Image 3" },
                { src: "images/events/tm1-2.png", alt: "Image 4" },
                { src: "images/events/tm1-3.png", alt: "Image 5" },
                { src: "images/events/tm1-4.png", alt: "Image 6" },
                { src: "images/events/tm1-6.png", alt: "Image 8" },
                { src: "images/events/tm1-7.png", alt: "Image 9" },
                { src: "images/events/tm1-8.png", alt: "Image 10" },
                { src: "images/events/tm1-9.png", alt: "Image 11" },
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
       }, */
//
       /* {
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
        },*/
//
   /*     {
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
*/
//
        /*{
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
        },*/
 //       
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
//
       /* {
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
        },*/
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