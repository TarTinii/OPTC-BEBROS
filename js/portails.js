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
