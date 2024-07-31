// Function to hide the preloader
function hidePreloader() {
    document.body.classList.add("preloader-deactive");
}

window.addEventListener('load', function() {
    setTimeout(hidePreloader, 1000); 
});
