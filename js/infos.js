document.addEventListener("DOMContentLoaded", function() {
    const infosContainer = document.getElementById("infos-container");

    const infosData = [
        {
            title: "Nouvelle Mise à Jour 14.1",
            description: "Détails de la mise a jour 14.1",
            image: "https://media.discordapp.net/attachments/1265866186378313738/1265866361301766235/01.png?ex=66a8576b&is=66a705eb&hm=c60a9fed8b191114f84db51fed19159e9ef4c84940ecb902e757313fb9c2d42c&=&format=webp&quality=lossless&width=1440&height=527",
            popupTexts: [
                "Les souhaits de chopperman se renouvellent",
                "De nouvelles missions a l'affiche debarque",
                "l'écran de menu a été elargi afin de le rendre plus lisible",
                "Tu peut verifier temps restant et l'état de progression des missions a partir des banniéres",
                "La formations automatique d'équipe par classe et par type pour le pvp a été ajouter",
                "Nouvelle onglet évènement dans les coop quests",

            ],
            images: [
                { src: "https://media.discordapp.net/attachments/1265866186378313738/1265866361301766235/01.png?ex=66a8576b&is=66a705eb&hm=c60a9fed8b191114f84db51fed19159e9ef4c84940ecb902e757313fb9c2d42c&=&format=webp&quality=lossless&width=1440&height=527", alt: "Image 1" },
               { src: "https://media.discordapp.net/attachments/1265866186378313738/1265866516692467742/02.png?ex=66a85790&is=66a70610&hm=707ed221979341cd13431dad2caa063406f00cc87bbd6477486b8ce96599b41f&=&format=webp&quality=lossless&width=530&height=610", alt: "Image 2" },
               { src: "https://media.discordapp.net/attachments/1265866186378313738/1265866673953706066/03.png?ex=66a857b5&is=66a70635&hm=005a719042eae09f7ab3371757d8f9db9a3864f7add7579311c1c480b4c34928&=&format=webp&quality=lossless&width=1173&height=610", alt: "Image 3" },
               { src: "https://media.discordapp.net/attachments/1265866186378313738/1265866836818399340/04.png?ex=66a857dc&is=66a7065c&hm=0dc4f5336b66c2914bb603ba2d6480ca46d5993eeeb8f964b9a4f16148c68adc&=&format=webp&quality=lossless&width=725&height=377", alt: "Image 4" },            //],
            ]
       },



          {
            title: "Ajouts Bazar de Rayleigh",
            description: "Nouveau personnages disponible au bazar de Rayleigh",
            image: "https://media.discordapp.net/attachments/935315036107333733/1266599653441536111/unknown.png?ex=66a85f59&is=66a70dd9&hm=51a6846a6f00a42398d0b6906c9ded854b487fc18a0d3371b513e22f5d1a9dc0&=&format=webp&quality=lossless&width=600&height=170",
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
            image: "https://media.discordapp.net/attachments/935315036107333733/1266600525076496426/unknown.png?ex=66a86029&is=66a70ea9&hm=33a87bcbf8fdf6d238bb809b11553ccac348bf152ab038590fafc07cfda33f9b&=&format=webp&quality=lossless&width=612&height=192",
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