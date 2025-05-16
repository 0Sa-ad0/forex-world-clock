const timezones = {
    sydney: "Australia/Sydney",
    london: "Europe/London",
    tokyo: "Asia/Tokyo",
    newyork: "America/New_York"
};

function updateTimes() {
    for (const id in timezones) {
        const local = new Date().toLocaleTimeString("en-US", {
            timeZone: timezones[id],
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const utc6 = new Date().toLocaleTimeString("en-US", {
            timeZone: "Asia/Dhaka", // UTC+6
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        const date = new Date().toLocaleDateString("en-GB", {
            timeZone: timezones[id],
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        const section = document.getElementById(id);
        section.querySelector(".local-time").textContent = local;
        section.querySelector(".utc6-time").textContent = utc6;
        section.querySelector(".date").textContent = date;
    }
}

updateTimes();
setInterval(updateTimes, 1000);
