const faders=document.querySelectorAll('.skill')
const h=document.querySelectorAll('.h1')
const education=document.querySelectorAll('.place')



const options={
    threshold:1
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
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

// education.forEach(fade => {
//     appearOnScroll.observe(fade);
// });

