const scrollRevealOption=
{
    distance:"50px",
    origin:"bottom",
    duration:1000,
}
ScrollReveal().reveal(".header__container h2",scrollRevealOption);

ScrollReveal().reveal(".header__container p",{
    ...scrollRevealOption,
    delay:600,
});
ScrollReveal().reveal(".header__container .btn",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header__container .form__group",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".section__container .price__container",scrollRevealOption);
ScrollReveal().reveal(".section__container h2",{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".section__container p",{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal(".section__container .price__grid",{
    ...scrollRevealOption,
    delay:1000,
})

