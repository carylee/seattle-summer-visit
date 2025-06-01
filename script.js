console.log('Script loaded, about to register DOMContentLoaded.');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired.');
  loadFeaturedSection();
  // Toggle accordion sections
  const categoryHeaders = document.querySelectorAll('.category-header');
  
  categoryHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const category = this.parentElement;
      
      // If already active, just close it
      if (category.classList.contains('active')) {
        category.classList.remove('active');
        return;
      }
      
      // Optional: close other open sections (accordion behavior)
      // Uncomment the next 3 lines for true accordion behavior
      // document.querySelectorAll('.category.active').forEach(activeCategory => {
      //   activeCategory.classList.remove('active');
      // });
      
      category.classList.add('active');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      
      // Highlight the current nav item
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      this.classList.add('active');
      
      // Scroll to target section
      target.scrollIntoView({
        behavior: 'smooth'
      });
      
      // Open the section if it's closed
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

  // Highlight current section in navigation based on scroll position
  window.addEventListener('scroll', highlightNavOnScroll);

  // Load content data
  loadSectionContent();
});

function loadFeaturedSection() {
  if (!document.querySelector('#featured-cards')) {
    console.log('No #featured-cards found!');
    return;
  }
  document.querySelector('#featured-cards').innerHTML = `
    <div class="featured-card">
      <h3><i class="fas fa-mountain"></i> Crystal Mountain + Mt. Rainier Adventure</h3>
      <p>
        Ride the <a href="https://www.crystalmountainresort.com/" target="_blank">Crystal Mountain Gondola</a> up for epic views and lunch, then drive to <a href="https://www.nps.gov/mora/index.htm" target="_blank">Mt. Rainier National Park</a> for a scenic hike or waterfall stop.<br>
        <span class="featured-links">See: <a href="#day-trips">Day Trips</a></span>
      </p>
    </div>
    <div class="featured-card">
      <h3><i class="fas fa-ship"></i> Bainbridge Ferry & Kids Museum Day</h3>
      <p>
        Take the <a href="https://www.wsdot.wa.gov/ferries/" target="_blank">ferry to Bainbridge</a>, stroll off for coffee or lunch, and visit the <a href="https://kidimu.org/" target="_blank">KiDiMu (Kids Discovery Museum)</a> just 5 minutes from the dock.<br>
        <span class="featured-links">See: <a href="#water">On-The-Water</a> & <a href="#museums">Museums</a></span>
      </p>
    </div>
  `;
}
