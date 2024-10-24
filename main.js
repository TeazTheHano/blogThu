// fnc bg
function gradientBg() {
    const bg = document.querySelector('body');
    const main = document.querySelector('#main');
    const bgArr = ['./asset/image/bg0.jpeg', './asset/image/bg1.jpeg', './asset/image/bg2.jpeg',];
    let i = 0;
    bg.style.backgroundImage = `url(${bgArr[0]})`;
    const updateBackground = () => {
        main.style.transition = 'background-image 1s ease-in-out';
        main.style.backgroundImage = `url(${bgArr[i]})`;
        i = (i + 1) % bgArr.length;
    };

    updateBackground();
    setInterval(updateBackground, 2500);
}
gradientBg();

function getNavHeight() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;
    let contentHolder = document.querySelector('#contentHolder');
    contentHolder.style.paddingTop = navHeight + 'px';
}

function set1PageHeight() {
    let nav = document.querySelector('nav');
    let navHeight = nav.offsetHeight;

    let items = document.querySelectorAll('.ONEPAGEHEIGHT');
    items.forEach(item => {
        item.style.minHeight = `calc(100dvh - ${navHeight}px)`;
    });

    let battleTextHolderDiv = document.querySelector('#battle>.section-content>div:first-child');
    battleTextHolderDiv.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem)`;
    let h3inBattle = document.querySelector('#battle>.section-content>div:first-child>h3');
    let pInBattle = document.querySelector('#battle>.section-content>div:first-child>p');
    let imgInBattle = document.querySelector('#battle>.section-content>div:first-child>img');

    imgInBattle.style.maxHeight = `calc(100dvh - ${navHeight}px - 4rem - ${h3inBattle.offsetHeight + pInBattle.offsetHeight}px)`;
}

function updateLayout() {
    getNavHeight();
    set1PageHeight();
}

window.addEventListener('resize', updateLayout);
updateLayout();

function addVideoNav() {
    let upBtn = document.querySelector(`#battleVideoUp`);
    let downBtn = document.querySelector(`#battleVideoDown`);
    let videoContainer = document.querySelector(`#battle .section-video-contain > div:not([id])`);
    let iframes = videoContainer.querySelectorAll('iframe');

    let i = 0;
    let max = iframes.length;
    let current = 0;
    let updateVideo = () => {
        iframes[current].style.transition = 'opacity 1s ease-in-out';
        iframes[current].style.opacity = 0;
        setTimeout(() => {
            iframes[current].style.display = 'none';
            current = (current + i + max) % max;
            iframes[current].style.display = 'block';
            iframes[current].style.opacity = 0;
            setTimeout(() => {
                iframes[current].style.opacity = 1;
            }, 100);
        }, 500);
    };

    upBtn.addEventListener('click', () => {
        i = -1;
        updateVideo();
    });

    downBtn.addEventListener('click', () => {
        i = 1;
        updateVideo();
    });
}
addVideoNav();

