const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    // getAttribute
    const updateCounter = () => {
        // + 此處為將字串轉換成數字
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200
        // Math.ceil
        if (c < target) {
            // Math.ceil四捨五入(由於target / 200 有小數點)
            counter.innerText = `${Math.ceil(c + increment)}`
            // setTimeout
            // 設定1毫秒，1000毫秒 = 1秒
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})