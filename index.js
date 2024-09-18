document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        const popupId = this.getAttribute('href');
        const popupContent = document.querySelector(popupId + ' .popup-content, ' + popupId + ' .popup-content2');
        const loader = document.getElementById(popupId === '#popup' ? 'loader' : 'loader2');

        // Show the loader
        loader.style.display = 'block';

        // Apply blur to the popup content only
        popupContent.classList.add('popup-blur');

        // Ensure the loader remains unblurred
        loader.classList.remove('popup-blur');

        // Hide the loader after 2 seconds (or your desired duration)
        setTimeout(() => {
            loader.style.display = 'none';
            popupContent.classList.remove('popup-blur'); // Remove blur from popup content
        }, 2000);
    });
});





