document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    if (!localStorage.getItem('popupDisplayed')) {
        alert('Welcome to Deepika\'s Portfolio!');
        localStorage.setItem('popupDisplayed', 'true');
    }
});
