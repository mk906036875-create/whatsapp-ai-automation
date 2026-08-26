// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    console.log("MediBot AI Landing Page Loaded Successfully!");

    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's an internal link
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Optional: Interactive alert when clicking the live demo button
    const demoButton = document.querySelector('header a');
    if (demoButton) {
        demoButton.addEventListener('click', (e) => {
            // अगर आप चाहें तो यहाँ कोई पॉपअप या एक्शन लगा सकते हैं
            console.log("Demo button clicked!");
        });
    }
});
                          
