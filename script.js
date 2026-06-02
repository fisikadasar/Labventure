const deadline =
new Date("June 16, 2026 23:59:59").getTime();

const timer = setInterval(() => {

const now = new Date().getTime();

const distance = deadline - now;

const days = Math.floor(
distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

},1000);

document.querySelectorAll(".faq-btn")
.forEach(button => {

button.addEventListener("click", () => {

const content =
button.nextElementSibling;

content.style.display =
content.style.display === "block"
? "none"
: "block";

});

});