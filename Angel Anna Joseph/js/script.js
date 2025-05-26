// Dancing Letters Animation
document.addEventListener('DOMContentLoaded', function() {
    // Other JavaScript code can go here
});

// Binary Rain Animation
function createBinaryRain() {
    const overlay = document.getElementById('binaryOverlay');
    const numberOfColumns = Math.floor(window.innerWidth / 30); // Adjust spacing between columns

    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = `${i * 30}px`; // Space columns evenly
        column.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random speed between 10-20s
        
        // Generate binary string
        let binaryString = '';
        for (let j = 0; j < 50; j++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
            binaryString += ' ';
            if ((j + 1) % 8 === 0) binaryString += '\n';
        }
        column.textContent = binaryString;
        
        overlay.appendChild(column);
    }
}

// Initialize binary rain
document.addEventListener('DOMContentLoaded', () => {
    createBinaryRain();
    
    // Recreate on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const overlay = document.getElementById('binaryOverlay');
            overlay.innerHTML = '';
            createBinaryRain();
        }, 250);
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Timeline scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Basic timeline initialization if needed
    timelineItems.forEach(item => {
        // Set up any necessary event listeners or basic functionality
    });
});

// Feature cards glitter effect
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
});