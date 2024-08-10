document.addEventListener("DOMContentLoaded", function() {
    const portailsContainer = document.getElementById("portails-container");

    const portailsData = [
        {
            title: "Nouveau Portail",
            description: "Détails du nouveau portail PKA",
            image: "images/events/portail1.png",
            popupTexts: [

            ],
            startDate: "2024-07-28T10:00:00", 
            endDate: "2024-08-30T23:59:59",   
            images: [
               { src: "images/portail/part1-1.png", alt: "Image 1" },
               { src: "images/portail/part1-2.png", alt: "Image 2" },
               { src: "images/portail/part2-1.png", alt: "Image 3" },
               { src: "images/portail/part2-2.png", alt: "Image 4" },           
               { src: "images/portail/part3-1.png", alt: "Image 5" }, 
               { src: "images/portail/part3-2.png", alt: "Image 6" },  
               { src: "images/portail/allpart.png", alt: "Image 7" },        
               ],
            characters: [
                {
                    name: "Jinbe",
                    image: "images/head/headjinbe.png",
                    newbatch: true
                },
                                {
                    name: "Aladdin",
                    image: "images/head/headalla.png",
                    newbatch: true
                },
                                {
                    name: "Fisher Tiger",
                    image: "images/head/headfish.png",
                    newbatch: true
                },
            ]
        },


        {
            title: "Nouveau Portail PVP",
            description: "Détails du nouveau portail PVP",
            image: "images/events/portail2.png",
            popupTexts: [

            ],
            startDate: "2024-07-02T10:00:00", 
            endDate: "2024-08-31T23:59:59",   
            images: [
               { src: "images/portail/pvp1-1.png", alt: "Image 1" },
               { src: "images/portail/pvp1-2.png", alt: "Image 2" },
               { src: "images/portail/pvp1-3.png", alt: "Image 3" },           
               ],
            characters: [
                {
                    name: "Octy",
                    image: "images/head/headocty.png",
                    newbatch: true
                },
            ]
        },


        {
            title: "Nouveau Portail Super Sugo Fest",
            description: "Détails du nouveau portail Super Sugo Fest",
            image: "images/events/portail3.png",
            popupTexts: [

            ],
            startDate: "2024-08-11T02:00:00", 
            endDate: "2024-10-20T02:59:59",   
            images: [
            //PARTIE1
               { src: "images/portail/sp1-1.png", alt: "Image 1" },
               { src: "images/portail/sp1-2.png", alt: "Image 2" },
               { src: "images/portail/sp1-3.png", alt: "Image 3" },     
               { src: "images/portail/sp1-4.png", alt: "Image 4" },     
               //PARTIE2
               { src: "images/portail/sp2-1.png", alt: "Image 6" },     
               { src: "images/portail/sp2-3.png", alt: "Image 7" },          
               { src: "images/portail/sp2-4.png", alt: "Image 9" },      
               { src: "images/portail/sp2-5.png", alt: "Image 10" },     
                //PARTIE3
               { src: "images/portail/sp3-1.png", alt: "Image 11" }, 
               { src: "images/portail/sp3-2.png", alt: "Image 12" }, 
               { src: "images/portail/sp3-3.png", alt: "Image 13" }, 
               { src: "images/portail/sp3-4.png", alt: "Image 14" }, 
               //PARTIE4
               { src: "images/portail/sp4-1.png", alt: "Image 15" },
               { src: "images/portail/sp4-2.png", alt: "Image 16" }, 
               { src: "images/portail/sp4-3.png", alt: "Image 17" }, 
               //ALLPARTS
               { src: "images/portail/ap1-1.png", alt: "Image 15" },
               { src: "images/portail/ap1-2.png", alt: "Image 15" },
               ],
            characters: [
                {
                    name: "LuffyVsKaido",
                    image: "images/head/headLuffyVsKaido.png",
                    newbatch: true
                },
                {
                    name: "Yamato",
                    image: "images/head/headyamato.png",
                    newbatch: true
                },
                {
                    name: "KinemonCrew",
                    image: "images/head/headkinemoncrew.png",
                    newbatch: true
                },
                {
                    name: "ZoroTaro",
                    image: "images/head/headzorotaro.png",
                    newbatch: true
                },                
                {
                    name: "Sangoro",
                    image: "images/head/headsangoro.png",
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
