const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// 此次練習與practice6的JS用法類似，利用toggle來達到切換 有active與無active的css設定
// css此次設定多了Y軸rotate的用法增加變換風格