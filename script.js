// Add event listeners to the navigation links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add some interactivity to the page
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.addEventListener('mouseover', () => {
          section.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
      });
      section.addEventListener('mouseout', () => {
          section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      });
  });
});