// Function to hide the preloader
function hidePreloader() {
    document.body.classList.add("preloader-deactive");
}

window.addEventListener('load', function() {
    setTimeout(hidePreloader, 1000); 
});


// Product Details Page
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const src = this.src;
      document.getElementById('modalImage').src = src;
    });
});
  


// Prevent Right Click
        // Prevent right-click context menu
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
      });

      // Prevent F12 key and other keyboard shortcuts
      document.onkeydown = function(e) {
          if(e.keyCode == 123) {
              return false;
          }
          if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
              return false;
          }
          if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
              return false;
          }
          if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
              return false;
          }
      };

      // Optional: Display a message when right-click or F12 is attempted

