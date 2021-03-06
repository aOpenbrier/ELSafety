let isHomePage = false
window.addEventListener("scroll", navOpacity)

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

for (let i = 0; i < document.getElementsByClassName('sub-menu').length; i++) {
    document.getElementsByClassName('sub-menu')[i].onclick = openSubMenu
    document.getElementsByClassName('sub-menu')[i].onmouseleave = closeSubMenu
}

function openSubMenu(event) {
    let target;
    if (event.target.tagName === 'LI') {
        target = event.target
    }
    else {
        // if clicked on child
        target = event.target.parentNode
    }
    // close other submenus 
    for (let i = 0; i < document.getElementsByClassName('sub-menu').length; i++) {
        if (document.getElementsByClassName('sub-menu')[i] === target){
            target.classList.toggle('sub-expanded')
        }
        else {
            document.getElementsByClassName('sub-menu')[i].classList.remove('sub-expanded')
        }
    }

}

function closeSubMenu(event){
    console.log('closesubmenu')
    for (let i = 0; i < document.getElementsByClassName('sub-menu').length; i++) {
        document.getElementsByClassName('sub-menu')[i].classList.remove('sub-expanded')
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#nav-trigger')){
        document.getElementById('nav-collapse').classList.remove('mobile-nav-open')
    }
    if(!event.target.classList.contains('sub-menu') && !event.target.parentNode.classList.contains('sub-menu')){
        for (let i = 0; i< document.getElementsByClassName('sub-menu').length; i++){
            document.getElementsByClassName('sub-menu')[i].classList.remove('sub-expanded')
        }
    }
}

function fixHeight() {
    //compensate for mobile browsers including url bar in viewheight
    if (window.matchMedia('(pointer:coarse)').matches) {
        document.getElementById('nav-collapse').getElementsByTagName('UL')[0].style.maxHeight = window.innerHeight - 64 + 'px'
        if (isHomePage){
          fixBodyHeight()  
        }
    }
}

window.addEventListener("resize", throttle(fixHeight, 33))
