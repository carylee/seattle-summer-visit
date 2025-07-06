console.log('Script loaded, registering DOMContentLoaded.');

document.addEventListener('DOMContentLoaded', function() {
  // Accordion toggle
  const categoryHeaders = document.querySelectorAll('.category-header');
  categoryHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const category = this.parentElement;
      if (category.classList.contains('active')) {
        category.classList.remove('active');
        return;
      }
      category.classList.add('active');
    });
  });

  // Smooth anchor scrolling and nav highlight
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
      target.scrollIntoView({ behavior: 'smooth' });
      if (!target.classList.contains('active')) {
        target.classList.add('active');
      }
    });
  });

  // Make the first section active by default
  const firstCategory = document.querySelector('.category');
  if (firstCategory) {
    firstCategory.classList.add('active');
  }

  // Highlight nav on scroll
  window.addEventListener('scroll', highlightNavOnScroll);

  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('.category').forEach(section => {
      const sectionTop = section.offsetTop - 110;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = section.getAttribute('id');
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        const activeNavItem = document.querySelector(`.nav-item[href="#${id}"]`);
        if (activeNavItem) {
          activeNavItem.classList.add('active');
        }
      }
    });
  }
});
