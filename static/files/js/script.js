//marquee
const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
const marqueeContent = document.querySelector('.marquee-content');

root.style.setProperty('--marquee-elements', marqueeContent.children.length);

for (let i=0; i<marqueeElementDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true))
}

//copy url
function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("localhost:5000/")
    var tooltip = 
    document.getElementById("myTooltip");
    tooltip.innerHTML = "URL copied"
}

//countdown
dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);
    
    element.querySelector(".until__event").textContent = `Until ${ targetDate.format("DD MMMM YYYY")}`;

    setInterval(() => {
         const now = dayjs();
         const duration = dayjs.duration(targetDate.diff(now));

         if (duration.asMilliseconds() <= 0) return;

         element.querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
         element.querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
         element.querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
         element.querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 1000);
}
activateCountdown(document.getElementById("myCountdown"), "2023-12-25");