function showPopup(title, description, popupTexts, characters, images) {
    const popup = document.querySelector(".popup");
    const popupContent = popup.querySelector(".popup-content");
    const popupTitle = popupContent.querySelector("h3");
    const popupDescription = popupContent.querySelector(".popup-description");
    const popupTextContainer = popupContent.querySelector("#popup-text-container");
    const charactersContainer = popupContent.querySelector("#characters-container");
    const imageContainer = popupContent.querySelector("#image-container");

    popupTitle.textContent = title;
    popupDescription.textContent = description;


    popupTextContainer.innerHTML = "";
    charactersContainer.innerHTML = "";
    imageContainer.innerHTML = "";


    if (popupTexts && popupTexts.length > 0) {
        popupTexts.forEach(popupText => {
            const popupTextElement = document.createElement("div");
            popupTextElement.className = "popup-text";
            popupTextElement.innerHTML = popupText;
            popupTextContainer.appendChild(popupTextElement);
        });
    }


    if (characters && characters.length > 0) {
        characters.forEach(character => {
            const characterCard = document.createElement("div");
            characterCard.className = "character-card";
            characterCard.innerHTML = `
                ${character.recommended ? '<div class="recommended-banner">Recommandé</div>' : ''}
                ${character.newbatch ? '<div class="newbatch-banner">Nouveau Batch</div>' : ''}
                <img src="${character.image}" alt="${character.name}">
                <p>${character.name}</p>
            `;
            charactersContainer.appendChild(characterCard);
        });
    }


    if (images && images.length > 0) {
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.alt || "Image popup";
            imgElement.classList.add("popup-image");
            imageContainer.appendChild(imgElement);
        });
    }

    popup.style.display = "flex"; 

    const closeButton = popupContent.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        popup.style.display = "none"; 
    });

    window.addEventListener("click", event => {
        if (event.target === popup) {
            popup.style.display = "none"; 
        }
    });
}
