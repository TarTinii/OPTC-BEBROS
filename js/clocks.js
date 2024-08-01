document.addEventListener("DOMContentLoaded", function() {
    function updateClocks() {
        const now = new Date();
        
        const pstClock = document.getElementById("pst-clock");
        const pstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
        const pstHours = String(pstTime.getHours()).padStart(2, '0');
        const pstMinutes = String(pstTime.getMinutes()).padStart(2, '0');
        pstClock.textContent = `PST: ${pstHours}:${pstMinutes}`;

        const europeClock = document.getElementById("europe-clock");
        const europeTime = new Date(now.toLocaleString("en-br", { timeZone: "Europe/Berlin" }));
        const europeHours = String(europeTime.getHours()).padStart(2, '0');
        const europeMinutes = String(europeTime.getMinutes()).padStart(2, '0');
        europeClock.textContent = `Europe: ${europeHours}:${europeMinutes}`;
    }
    setInterval(updateClocks, 1000);
    updateClocks();
});
