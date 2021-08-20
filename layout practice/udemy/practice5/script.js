const left = document.querySelector('.left')
const right = document.querySelector('.right')
// 抓取 container class DOM 是為了能夠使用 classList add/ remove hover class
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))