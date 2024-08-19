document.addEventListener("DOMContentLoaded", function() {
    const rewardContainer = document.getElementById("reward-info");

    const rewardStart = "2024-08-19T00:00:00";
    const rewardEnd = "2024-08-19T21:00:00";

    function updateRewardInfo() {
        const now = new Date();
        const start = new Date(rewardStart);
        const end = new Date(rewardEnd);

        if (now >= start && now <= end) {
            const timeRemaining = end - now;
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            rewardContainer.innerHTML = `
                <p>Récompenses de la carte au trésors dans  : ${hours}h ${minutes}m ${seconds}s</p>
            `;
            rewardContainer.style.display = "block"; 
        } else {
            rewardContainer.style.display = "none"; 
        }
    }

    setInterval(updateRewardInfo, 1000);
    updateRewardInfo();
});