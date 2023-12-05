// 애니메이션 속도 조절
const aniSpeed = 50; // 밀리초 단위, 더 낮은 값은 더 빠른 애니메이션

// HTML에서 글 가져오기
const content = document.querySelector('.content');

// 글자 하나씩 나오는 애니메이션 함수
function textAni(element, speed) {
    const text = element.textContent;
    element.innerHTML = ''; // 페이지 로드 시 텍스트 초기화

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.innerHTML += text[i]; // text의 인덱스 값을 하나씩 가져옴
        }, i * speed); // 
    }
}

// 페이지 로드 시 애니메이션 시작
window.addEventListener('load', () => {
    textAni(content, aniSpeed);
    content.style.opacity = 1; // 글자가 부드럽게 나오게 함


    const fontSizeOptions = document.querySelectorAll('.size-option');

    fontSizeOptions.forEach((option) => {
        option.addEventListener('click', () => {
            const fontSize = option.getAttribute('data-size');
            document.body.style.fontSize = fontSize + 'px';
        });
    });
});



function show() {
  document.querySelector(".background").classList.add("show");
}

function close() {
  document.querySelector(".background").classList.remove("show");
}

document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);
    