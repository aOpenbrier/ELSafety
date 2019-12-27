window.addEventListener("scroll", navOpacity())

function navOpacity() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("top-bar").classList.add('top-scrolled')
    } else {
        document.getElementById("top-bar").classList.remove('top-scrolled')
    }
}

function openMenu() {
    document.getElementById('nav-collapse').classList.toggle('open')
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#nav-trigger'){
        document.getElementById('nav-collapse').classList.remove('open')
    }
}
