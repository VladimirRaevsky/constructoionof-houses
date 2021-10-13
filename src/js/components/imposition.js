
const apposition = document.querySelector('.apposition')
const appositionBtn = apposition.querySelector('.apposition-btn')
const headerBtn = document.querySelector('.header-btn')


headerBtn.onclick = () => {
    apposition.classList.add('apposition-active');
    headerBtn.style.transition = 'opacity 1s linear';
    headerBtn.style.opacity = '0';
}

appositionBtn.onclick = () => {
    apposition.classList.remove('apposition-active');
    headerBtn.style.opacity = '1';
}