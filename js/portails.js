document.addEventListener("DOMContentLoaded", function() {
    const portailsContainer = document.getElementById("portails-container");

    const portailsData = [
        {
            title: "Nouveau Portail",
            description: "Détails du nouveau portail PKA",
            image: "https://media.discordapp.net/attachments/935315036107333733/1266594226800431165/ENapp_banner_sugofes_629_6vGSmlwWIW.png?ex=66a85a4b&is=66a708cb&hm=3d29fcc75f25e66ba2035c7004ce6db0e4dc0ed6d039ce3e7c2dc47557133f71&=&format=webp&quality=lossless&width=645&height=591",
            popupTexts: [

            ],
            startDate: "2024-07-28T10:00:00", 
            endDate: "2024-08-30T23:59:59",   
            images: [
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595712431296574/image.png?ex=66a9046e&is=66a7b2ee&hm=182cf621739840812dc5037391bebb610ce36e42861d701fb6442fe28fd9384e&=&format=webp&quality=lossless&width=501&height=610", alt: "Image 1" },
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595712892665946/image.png?ex=66a9046e&is=66a7b2ee&hm=747cb9d59889855c5f882b5f225735c4f91d12ac6b6e510cdb26cb13a2f8bcd6&=&format=webp&quality=lossless&width=498&height=610", alt: "Image 2" },
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595790420181082/image.png?ex=66a90480&is=66a7b300&hm=72cd6e6c7d66eb7670882ec0813c3adb798ad3ef1bbd556f6688f418336064b0&=&format=webp&quality=lossless&width=655&height=610", alt: "Image 3" },
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595790822965299/image.png?ex=66a90480&is=66a7b300&hm=2eeb18ed5c808b9bd99d42e0d4e96d7697e84c333baa24ed659e98d7edeb31a5&=&format=webp&quality=lossless&width=928&height=542", alt: "Image 4" },           
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595943046713354/image.png?ex=66a904a5&is=66a7b325&hm=2a9c4c26c8f3f62e91d4bc28b24c4459f7bbf5a6ac3a28f0e837153daeca7a92&=&format=webp&quality=lossless&width=676&height=610", alt: "Image 5" }, 
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595943323664525/image.png?ex=66a904a5&is=66a7b325&hm=cd75ff13a20f29df174744dcbed09c312a8c6751266a69c0349acb3365c45b5e&=&format=webp&quality=lossless&width=917&height=523", alt: "Image 6" },  
               { src: "https://media.discordapp.net/attachments/935315036107333733/1266595972998238249/image.png?ex=66a904ac&is=66a7b32c&hm=01ef05d03a8aca5d7c09ee2444d9430497826f40d3023bd0063b4a033455d6eb&=&format=webp&quality=lossless&width=615&height=437", alt: "Image 7" },        
               ],
            characters: [
                {
                    name: "Jinbe",
                    image: "https://media.discordapp.net/attachments/762948804034035713/1268312495039451246/Screenshot_20240731_230053.jpg?ex=66abf78e&is=66aaa60e&hm=ddf83e793c5a4762e527ed8f686a66310579ad4f066f557a43094864ea1a070d&=&format=webp&width=188&height=186",
                    newbatch: true
                },
                                {
                    name: "Aladdin",
                    image: "https://media.discordapp.net/attachments/762948804034035713/1268313635424440340/Screenshot_20240731_230515.jpg?ex=66abf89e&is=66aaa71e&hm=6a31910f916c830bbff49248af4b4385fc724b4cf5b4a38fd1a1e1da1e3cf78a&=&format=webp&width=188&height=185",
                    newbatch: true
                },
                                {
                    name: "Fisher Tiger",
                    image: "https://media.discordapp.net/attachments/762948804034035713/1268313786570510407/Screenshot_20240731_230603.jpg?ex=66abf8c2&is=66aaa742&hm=87aa2c0ab0b62c565093048db2857228e6c774ae557231885d946f61aab219c6&=&format=webp&width=188&height=187",
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
