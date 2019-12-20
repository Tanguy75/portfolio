/* scroll bottom on click in link */

// const element = document.querySelector('#element')
// const top = element.getBoundingClientRect().top + window.pageYOffset

// window.scrollTo({
//   top, // scroll so that the element is at the top of the view
//   behavior: 'smooth' // smooth scroll
// })

('a[href^="#"]').click(function () {
    ('html, body').animate({
        scrollTop: ('[skills="' + .attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});
