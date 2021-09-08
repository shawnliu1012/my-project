const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0
// 也可以使用dbclick來監聽，這裡使用較複雜方式:
// 依據課程內實驗，單擊時間為一秒六多，因此只要將時間點擊設為800毫秒內，即為雙擊。
loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    // https://developer.mozilla.org/zh-TW/docs/Web/API/Document/createElement
    // https://ithelp.ithome.com.tw/articles/10191867
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
// https://www.gushiciku.cn/pl/pD8z/zh-tw
    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
// https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
    loveMe.appendChild(heart)
// 設置記錄點擊次數
    times.innerHTML = ++timesClicked
// 上面設置按愛心並沒有消失都是變成隱形的(從檢查內容中可以知道fa-heart code還保留著)，但我們希望它消失，因此設定下面程式
    setTimeout(() => heart.remove(), 1000)
}