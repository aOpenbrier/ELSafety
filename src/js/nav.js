// Allow callback to run at most 1 time per 100ms
    window.addEventListener("scroll", throttle(navOpacity, 100));
// without throttle
//     window.addEventListener("scroll", navOpacity());

function throttle(callback, limit) {
    var wait = false                   // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call()            // Execute users function
            wait = true                // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false           // And allow future invocations
            }, limit)
        }
    }
}

function navOpacity() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            document.getElementById("top-bar").classList.add('top-scrolled')
        } else {
            document.getElementById("top-bar").classList.remove('top-scrolled');
        }
}