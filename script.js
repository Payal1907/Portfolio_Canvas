// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic greeting based on time of day
const greetingElement = document.querySelector('h1 span');
if (greetingElement) {
    const currentHour = new Date().getHours();
    let greeting = "Payal Singh!";
    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    greetingElement.textContent = greeting;
}

// Hover effect for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FFD700';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#4caf50';
    });
});
