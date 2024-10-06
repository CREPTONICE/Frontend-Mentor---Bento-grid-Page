const dark = document.querySelector('.grid__wrapper');
const darker = document.querySelector('body');

dark.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('body')
        .classList.add('dark');
});

dark.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('body')
        .classList.remove('dark');
});

dark.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body')
        .classList.add('dark');

    setTimeout(() => document.querySelector('body')
     .classList.remove('dark'), 3000);
});