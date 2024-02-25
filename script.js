const faders = document.querySelectorAll('.skill');
const h = document.querySelectorAll('.h1');
const education = document.querySelectorAll('.place');
const imgBox = document.querySelectorAll('.imgBox');

const options = {
    threshold: 1
}

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

h.forEach(fade => {
    appearOnScroll.observe(fade);
});

education.forEach(fade => {
    appearOnScroll.observe(fade);
});






let circularProgress = document.querySelectorAll(".circular-progress");
let progressValue = document.querySelectorAll(".progress-value");


let progressEndValues = [90, 80, 80, 74, 60, 60, 50];
let speeds = [30, 40, 44, 70, 80, 70, 40]; // Different speeds for each progress

for (let i = 0; i < circularProgress.length; i++) {
    let progressStartValue = 0;
    let progressEndValue = progressEndValues[i]; // Progress end value for current progress bar

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue[i].textContent = `${progressStartValue}%`;
        circularProgress[i].style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress);
        }
    }, speeds[i]);
}





