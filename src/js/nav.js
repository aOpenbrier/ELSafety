window.addEventListener("scroll", throttle(navOpacity, 33))

function throttle(callback, limit) {
    var wait = false
    return function () {
        if (!wait) {
            callback.call()
            wait = true
            setTimeout(function () {
                wait = false
            }, limit)
        }
    }
}

function navOpacity() {
    console.log('scrolled')
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("top-bar").classList.add('top-scrolled')
    } else {
        document.getElementById("top-bar").classList.remove('top-scrolled')
    }
}

function openMenu() {
    document.getElementById('nav-collapse').classList.toggle('mobile-nav-open')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#nav-trigger')){
        document.getElementById('nav-collapse').classList.remove('mobile-nav-open')
    }
}
