// const wrapper = document.querySelector('.wrapper');
// const question = document.querySelector('.question');
// const yesBtn = document.querySelector('.yes-btn');
// const noBtn = document.querySelector('.no-btn');

// const wrapperRect = wrapper.getBoundingClientRect();
// const noBtnRect = noBtn.getBoundingClientRect();

// yesBtn.addEventListener('click', () => {
//     question.innerHTML = 'I Love You Too Jinal :)';
// });

// noBtn.addEventListener('mouseover', () => {
//     const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
//     const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

//     noBtn.style.left = i + 'px';
//     noBtn.style.top = j + 'px';
// });

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too Jinal :) -Marmik <3333';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
