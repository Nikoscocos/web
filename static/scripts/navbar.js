function showNav() {
    document.getElementById('navbar').style.left = '0px'
    document.getElementById('back').style.opacity = '1'
    document.getElementById('back').style.left = '0'
}
function remvNav() {
    document.getElementById('navbar').style.left = '-260px'
    document.getElementById('back').style.opacity = '0'
}
function changeTitle(title) {
    remvNav()
    document.getElementById('navtitl').innerHTML = title
}