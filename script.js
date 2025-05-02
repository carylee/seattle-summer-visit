document.addEventListener('DOMContentLoaded', function() {
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

// Function to highlight navigation based on scroll position
function highlightNavOnScroll() {
  const scrollPosition = window.scrollY;
  
  // Get all sections and find which one is currently in view
  document.querySelectorAll('.category').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const id = section.getAttribute('id');
      
      // Remove active class from all nav items
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to corresponding nav item
      const activeNavItem = document.querySelector(`.nav-item[href="#${id}"]`);
      if (activeNavItem) {
        activeNavItem.classList.add('active');
      }
    }
  });
}

// Function to load content data
function loadSectionContent() {
  // In MVP, we'll directly add content to each section
  // Later versions would fetch this from a JSON file or API

  // Landmarks section
  document.querySelector('#landmarks .category-content').innerHTML = `
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Space Needle</span>
      </div>
      <div class="activity-description">
        <p>Seattle's iconic observation tower offering panoramic views of the city and surrounding area.</p>
        <a href="https://www.spaceneedle.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Chihuly Garden & Glass</span>
      </div>
      <div class="activity-description">
        <p>Stunning exhibition showcasing colorful glass art by Dale Chihuly, located next to the Space Needle.</p>
        <a href="https://www.chihulygardenandglass.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Center Monorail</span>
      </div>
      <div class="activity-description">
        <p>Historic monorail connecting Seattle Center to downtown, perfect for kids.</p>
        <a href="https://www.seattlemonorail.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Great Wheel</span>
      </div>
      <div class="activity-description">
        <p>Ferris wheel on the waterfront providing excellent views of the city and Puget Sound.</p>
        <a href="https://seattlegreatwheel.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Pike Place Market</span>
      </div>
      <div class="activity-description">
        <p>Historic farmers market with food vendors, crafts, and the famous fish throwers.</p>
        <a href="https://pikeplacemarket.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Central Library (Downtown)</span>
      </div>
      <div class="activity-description">
        <p>Architectural marvel with a unique glass and steel structure, featuring an excellent children's section.</p>
        <a href="https://www.spl.org/hours-and-locations/central-library" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Water section content
  document.querySelector('#water .category-content').innerHTML = `
    <h3>Freedom Boat Club routes (member access):</h3>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Lake Union → Lake Washington loop</span>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Ballard Locks → Puget Sound/Shilshole</span>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Elliott Bay skyline cruise</span>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Island hop: Blake Island SP or Poulsbo</span>
      </div>
    </div>
    
    <h3 class="sub-category">Other options</h3>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Electric Boat Co.</span>
      </div>
      <div class="activity-description">
        <p>Rent an electric boat to cruise around Lake Union at your own pace.</p>
        <a href="https://www.theelectricboatco.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Green Lake Boat House</span>
      </div>
      <div class="activity-description">
        <p>Rent paddle boats, canoes, kayaks, and stand-up paddleboards on Green Lake.</p>
        <a href="https://greenlakeboathouse.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">WA State Ferry (Seattle ↔ Bainbridge)</span>
      </div>
      <div class="activity-description">
        <p>Scenic ferry ride across Puget Sound to Bainbridge Island with spectacular Seattle skyline views.</p>
        <a href="https://www.wsdot.wa.gov/ferries/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Center for Wooden Boats Sunday sails</span>
      </div>
      <div class="activity-description">
        <p>Free public sailboat rides on Lake Union every Sunday (first-come, first-served).</p>
        <a href="https://www.cwb.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Add placeholder content for other sections 
  // (To be populated with real data in next iteration)
  document.querySelector('#beaches .category-content').innerHTML = `
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Madison Park Beach</span>
      </div>
      <div class="activity-description">
        <p>Lifeguarded beach with a swimming area, playground, and picnic facilities.</p>
        <a href="https://www.seattle.gov/parks/allparks/madison-park-beach" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">More beaches coming soon...</span>
      </div>
    </div>
  `;

  // Add placeholder content for remaining sections
  const remainingSections = ['#parks', '#museums', '#capitol-hill', '#breweries', '#day-trips', '#events', '#rain-days'];
  remainingSections.forEach(section => {
    document.querySelector(`${section} .category-content`).innerHTML = `
      <p>Content for this section coming soon...</p>
    `;
  });
}