
  function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-buttons button');

    // Remove 'active' class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the clicked button
    event.target.classList.add('active');

    // Show/hide project cards based on category
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.classList.add('show');
        card.style.display = 'block';
      } else {
        card.classList.remove('show');
        card.style.display = 'none';
      }
    });
  }

