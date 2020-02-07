const button = document.getElementById('theme-toggle');
const atag = document.getElementsByName('atag');
const nav = document.querySelector('nav');
const page = document.querySelector('body');


const themeChange = () => {
    if (button.classList.contains('dark-theme')) {
        button.classList.remove('dark-theme');
        page.classList.add('light');
        nav.classList.add('nav-light');
        for (var i = 0; i < atag.length; i++) {
            atag[i].style.color = '#222'
            atag[i].style.textDecoration = 'none'
        }
        button.innerHTML = '<span><i class="fas fa-moon" style="color:#222;font-size:1rem"></i></span>'
    } else {
        button.classList.add('dark-theme');
        page.classList.remove('light');
        nav.classList.remove('nav-light');
        for (var i = 0; i < atag.length; i++) {
            atag[i].style.color = '#a9a9b3'
        }
        button.innerHTML = '<span><i class="fas fa-sun" style="color:#a9a9b3;font-size:1rem"></i></span>'
    }
}

button.addEventListener('click', themeChange)



// button.innerhtml = <span>
//     <i class="fas fa-sun" style="color:#a9a9b3;font-size:1rem"></i>
// </span>