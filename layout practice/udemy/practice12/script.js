const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

// offsetHeight 屬性以像素為單位返回元素的"可見"高度，包括填充、邊框和滾動條，但不包括邊距
function fixNav() {
    // console.log(window.scrollY , nav.offsetHeight) 先看看滾輪的Y軸及nav的可見高度，在加上150高度後即切換為active nav狀態
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
