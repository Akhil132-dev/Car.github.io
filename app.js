document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
});

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change');
        })
    })
});
document.querySelectorAll('.navbar-link').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change');
        })
    })
});

const vidoes = document.querySelectorAll('.vidoe');

vidoes.forEach((vidoe) => {
    vidoe.addEventListener('mouseover', () => {
        vidoe.play();
    })
    vidoe.addEventListener('mouseout', () => {
        vidoe.pause();
    })
});