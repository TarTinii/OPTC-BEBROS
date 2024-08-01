document.addEventListener("DOMContentLoaded", function() {
    const maintenanceContainer = document.getElementById("maintenance-info");

    const maintenanceStart = "2024-08-02T00:00:00";
    const maintenanceEnd = "2024-08-02T08:08:00";

    function updateMaintenanceInfo() {
        const now = new Date();
        const start = new Date(maintenanceStart);
        const end = new Date(maintenanceEnd);

        if (now >= start && now <= end) {
            const timeRemaining = end - now;
            const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            maintenanceContainer.innerHTML = `
                <p>Maintenance en cours</p>
                <p>Temps restant avant la fin : ${hours}h ${minutes}m ${seconds}s</p>
            `;
            maintenanceContainer.style.display = "block"; 
        } else {
            maintenanceContainer.style.display = "none"; 
        }
    }
    setInterval(updateMaintenanceInfo, 1000);
    updateMaintenanceInfo();
});
 