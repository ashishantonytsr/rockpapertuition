document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation (Observer API)
    // This makes elements slide up as the user scrolls down
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // 2. Hero Mouse Parallax Effect
    // Moves the floating planets slightly when mouse moves
    const heroSection = document.querySelector('.hero');
    const planets = document.querySelectorAll('.planet');
    const floatingCard = document.querySelector('.floating-card');

    heroSection.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        planets.forEach((planet, index) => {
            const speed = (index + 1) * 20;
            planet.style.transform = `translate(-${x * speed}px, -${y * speed}px)`;
        });

        floatingCard.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });

    
    // 3. Button Click "Squish" Sound Effect (Optional Placeholder)
    const buttons = document.querySelectorAll('.btn-mega, .btn-primary-small');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // In a real build, play audio here: new Audio('pop.mp3').play();
            console.log("Button clicked - add 'pop' sound here");
        });
    });

    // ===============================================
    // NEW JAVASCRIPT (Append inside the existing DOMContentLoaded)
    // ===============================================

    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items (optional - removing this line makes multiple open allowed)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });

            // Toggle current
            item.classList.toggle('active');
        });
    });
});