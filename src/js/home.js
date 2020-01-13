function fixBodyHeight() {
    if (window.matchMedia('(pointer:coarse)').matches) {
        console.log('matches coarse')
        document.body.style.minHeight = window.innerHeight + 'px'
    }
}

window.addEventListener("resize", throttle(fixBodyHeight, 33))

fixBodyHeight()