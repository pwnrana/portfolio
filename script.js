// Light/Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('change', function() {
  body.classList.toggle('dark-mode');
});

// Filter Projects Function
function filterProjects(category) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    if (category === 'all' || project.getAttribute('data-category') === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Contact Form Submission (Mock)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
});
