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

  // Add content for beaches section
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
        <span class="activity-title">Alki Beach Park</span>
      </div>
      <div class="activity-description">
        <p>Long sandy beach with stunning views of Puget Sound and the Olympic Mountains.</p>
        <a href="https://www.seattle.gov/parks/allparks/alki-beach-park" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Golden Gardens Park</span>
      </div>
      <div class="activity-description">
        <p>Popular beach park with swimming, fire pits, and spectacular sunsets.</p>
        <a href="https://www.seattle.gov/parks/allparks/golden-gardens-park" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Discovery Park Beach</span>
      </div>
      <div class="activity-description">
        <p>Secluded beach at Seattle's largest city park with trails and a lighthouse.</p>
        <a href="https://www.seattle.gov/parks/allparks/discovery-park" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Olympic Sculpture Park pocket beach</span>
      </div>
      <div class="activity-description">
        <p>Small beach area at the waterfront sculpture park with art and shoreline access.</p>
        <a href="https://www.seattleartmuseum.org/visit/olympic-sculpture-park" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Gene Coulon Park</span>
      </div>
      <div class="activity-description">
        <p>Lake Washington beach park with swimming, playground, and restaurants.</p>
        <a href="https://rentonwa.gov/parks" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">International Fountain (Seattle Center)</span>
      </div>
      <div class="activity-description">
        <p>Interactive fountain with water shows choreographed to music, perfect for hot days.</p>
        <a href="https://www.seattlecenter.com/fountain" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Parks section
  document.querySelector('#parks .category-content').innerHTML = `
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Volunteer Park (wading pool & Asian Art Museum)</span>
      </div>
      <div class="activity-description">
        <p>Historic Capitol Hill park with wading pool, art museum, conservatory, and water tower.</p>
        <a href="https://volunteerparktrust.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Cal Anderson Park (fountain jets)</span>
      </div>
      <div class="activity-description">
        <p>Capitol Hill park with playfield, tennis courts, and interactive fountain.</p>
        <a href="https://www.seattle.gov/parks/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Interlaken Park</span>
      </div>
      <div class="activity-description">
        <p>Forested park with walking trails between Capitol Hill and Montlake.</p>
        <a href="https://www.seattle.gov/parks/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seward Park & Food Forest</span>
      </div>
      <div class="activity-description">
        <p>Peninsula park with old-growth forest, beaches, and a 2.4-mile loop trail.</p>
        <a href="https://www.sewardpark.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Japanese Garden</span>
      </div>
      <div class="activity-description">
        <p>Formal Japanese garden with koi pond, tea house, and seasonal events.</p>
        <a href="https://www.seattlejapanesegarden.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Kubota Garden</span>
      </div>
      <div class="activity-description">
        <p>Japanese garden combining Northwest and Japanese plants with streams and ponds.</p>
        <a href="https://www.kubotagarden.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Green Lake Loop</span>
      </div>
      <div class="activity-description">
        <p>Popular 2.8-mile path around Green Lake with playgrounds and water access.</p>
        <a href="https://www.seattle.gov/parks/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Museums section
  document.querySelector('#museums .category-content').innerHTML = `
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Woodland Park Zoo</span>
      </div>
      <div class="activity-description">
        <p>92-acre zoo with over 1,000 animals and award-winning exhibits.</p>
        <a href="https://www.zoo.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Seattle Aquarium</span>
      </div>
      <div class="activity-description">
        <p>Waterfront aquarium featuring local marine life and hands-on exhibits.</p>
        <a href="https://www.seattleaquarium.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Pacific Science Center</span>
      </div>
      <div class="activity-description">
        <p>Interactive science museum with exhibits, planetarium, and butterfly house.</p>
        <a href="https://www.pacsci.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Museum of Flight</span>
      </div>
      <div class="activity-description">
        <p>Aerospace museum with over 175 aircraft and spacecraft on display.</p>
        <a href="https://www.museumofflight.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Children's Museum</span>
      </div>
      <div class="activity-description">
        <p>Kid-focused museum with hands-on exhibits for ages 1-10.</p>
        <a href="https://www.thechildrensmuseum.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">MoPOP</span>
      </div>
      <div class="activity-description">
        <p>Museum of Pop Culture with exhibits on music, science fiction, and pop culture.</p>
        <a href="https://www.mopop.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">MOHAI</span>
      </div>
      <div class="activity-description">
        <p>Museum of History & Industry showcasing Seattle's history and innovations.</p>
        <a href="https://mohai.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">KiDiMu (Bainbridge)</span>
      </div>
      <div class="activity-description">
        <p>Kids Discovery Museum on Bainbridge Island with hands-on exhibits.</p>
        <a href="https://kidimu.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">KidsQuest (Bellevue)</span>
      </div>
      <div class="activity-description">
        <p>Children's museum in Bellevue with interactive play spaces.</p>
        <a href="https://www.kidsquestmuseum.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Pinball Museum</span>
      </div>
      <div class="activity-description">
        <p>Interactive museum with playable vintage and modern pinball machines.</p>
        <a href="https://seattlepinballmuseum.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Klondike Gold Rush NHP</span>
      </div>
      <div class="activity-description">
        <p>National Historical Park about Seattle's role in the Klondike Gold Rush.</p>
        <a href="https://www.nps.gov/klse/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Museum of Optical Illusions</span>
      </div>
      <div class="activity-description">
        <p>Interactive exhibits and illusions that trick the eye and mind.</p>
        <a href="https://museumofillusions.com/seattle/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Capitol Hill section
  document.querySelector('#capitol-hill .category-content').innerHTML = `
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Volunteer Park Amphitheater Summer Series (Thu 7/10 opener)</span>
      </div>
      <div class="activity-description">
        <p>Free outdoor concert series at the Volunteer Park amphitheater.</p>
        <a href="https://volunteerparktrust.org/events/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Capitol Hill Art Walk (Thu 7/10)</span>
      </div>
      <div class="activity-description">
        <p>Monthly art walk featuring local galleries and businesses.</p>
        <a href="https://capitolhillartwalk.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Elliott Bay Book Co.</span>
      </div>
      <div class="activity-description">
        <p>Iconic independent bookstore with extensive collection and events.</p>
        <a href="https://elliottbaybook.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Ada's Technical Books</span>
      </div>
      <div class="activity-description">
        <p>Bookstore specializing in science, technology, and computing with café.</p>
        <a href="https://www.seattletechnicalbooks.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Farmers Market (Sun 7/13)</span>
      </div>
      <div class="activity-description">
        <p>Weekly farmers market with local produce, food, and crafts.</p>
        <a href="https://seattlefarmersmarkets.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Treats</span>
      </div>
      <div class="activity-description">
        <p>Local favorites include Molly Moon's ice cream, Salt & Straw ice cream, General Porpoise donuts, and Rachel's Ginger Beer.</p>
      </div>
    </div>
  `;

  // Breweries section
  document.querySelector('#breweries .category-content').innerHTML = `
    <h3 class="sub-category">Breweries</h3>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Optimism Brewing</span>
      </div>
      <div class="activity-description">
        <p>Spacious, family-friendly brewery on Capitol Hill with food trucks.</p>
        <a href="https://optimismbrewing.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Stoup (Capitol Hill & Ballard)</span>
      </div>
      <div class="activity-description">
        <p>Award-winning craft brewery with locations in Capitol Hill and Ballard.</p>
        <a href="https://www.stoupbrewing.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Fremont Brewing</span>
      </div>
      <div class="activity-description">
        <p>Popular brewery with family-friendly Urban Beer Garden.</p>
        <a href="https://www.fremontbrewing.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Reuben's Brews</span>
      </div>
      <div class="activity-description">
        <p>Family-owned craft brewery in Ballard with award-winning beers.</p>
        <a href="https://reubensbrews.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Burke-Gilman Brewing</span>
      </div>
      <div class="activity-description">
        <p>Brewery with taprooms in Ballard and Georgetown, named after the trail.</p>
        <a href="https://burkegilmanbrewing.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Other local favorites</span>
      </div>
      <div class="activity-description">
        <p>Lowercase, Flying Lion, Rooftop, Hellbent (Wenatchee tap).</p>
      </div>
    </div>
    
    <h3 class="sub-category">Woodinville Wineries</h3>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Chateau Ste Michelle</span>
      </div>
      <div class="activity-description">
        <p>Washington's founding winery with beautiful grounds and summer concerts.</p>
        <a href="https://www.ste-michelle.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Matthews Winery</span>
      </div>
      <div class="activity-description">
        <p>Farm-to-table winery with picnic grounds and tasting room.</p>
        <a href="https://matthewswinery.com/visit" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Métier Brewing (Woodinville taproom)</span>
      </div>
      <div class="activity-description">
        <p>Award-winning craft brewery focused on community and diversity.</p>
        <a href="https://www.metierbrewing.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">DeLille Cellars</span>
      </div>
      <div class="activity-description">
        <p>Renowned winery specializing in Bordeaux-style blends with tasting room.</p>
        <a href="https://delillecellars.com/visit-us/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Columbia Winery</span>
      </div>
      <div class="activity-description">
        <p>Historic winery with spacious tasting room and food options.</p>
        <a href="https://columbiawinery.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Day Trips section
  document.querySelector('#day-trips .category-content').innerHTML = `
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Mount Rainier NP + Crystal Mountain Gondola</span>
      </div>
      <div class="activity-description">
        <p>National park with hiking, waterfalls, and scenic gondola ride with mountain views.</p>
        <a href="https://www.nps.gov/mora/" class="activity-link" target="_blank">Visit park website <i class="fas fa-external-link-alt"></i></a>
        <a href="https://www.crystalmountainresort.com/" class="activity-link" target="_blank">Visit gondola website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Snoqualmie Falls & Day Out With Thomas (7/11-13)</span>
      </div>
      <div class="activity-description">
        <p>Spectacular 268-foot waterfall plus special Thomas the Tank Engine train event.</p>
        <a href="https://www.trainmuseum.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Remlinger Farm</span>
      </div>
      <div class="activity-description">
        <p>Family farm with attractions, petting zoo, and berry picking.</p>
        <a href="https://remlingerfarms.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">LeMay America's Car Museum</span>
      </div>
      <div class="activity-description">
        <p>Massive collection of classic and vintage automobiles in Tacoma.</p>
        <a href="https://www.americascarmuseum.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Lake Sammamish State Park</span>
      </div>
      <div class="activity-description">
        <p>State park with beaches, playgrounds, and trails east of Seattle.</p>
        <a href="https://parks.wa.gov/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Events section
  document.querySelector('#events .category-content').innerHTML = `
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Dancing 'Til Dusk (7/8 & 7/10)</span>
      </div>
      <div class="activity-description">
        <p>Free outdoor dance events with instruction and live music.</p>
        <a href="https://www.danceforjoy.biz/dancingtildusk/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Volunteer Park Summer Music kickoff (Thu 7/10)</span>
      </div>
      <div class="activity-description">
        <p>Free concert series in the park's amphitheater.</p>
        <a href="https://volunteerparktrust.org/events/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">Ballard SeafoodFest (7/11-13)</span>
      </div>
      <div class="activity-description">
        <p>Annual festival celebrating seafood with food, music, and activities.</p>
        <a href="https://www.seafoodfest.org/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">West Seattle Summer Fest (7/11-13)</span>
      </div>
      <div class="activity-description">
        <p>Street festival with music, food, and family activities.</p>
        <a href="https://wsjunction.org/summerfest/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Storm vs Connecticut Sun (Fri 7/11)</span>
      </div>
      <div class="activity-description">
        <p>WNBA basketball game at Climate Pledge Arena.</p>
        <a href="https://storm.wnba.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Storm vs Atlanta Dream (Mon 7/14)</span>
      </div>
      <div class="activity-description">
        <p>WNBA basketball game at Climate Pledge Arena.</p>
        <a href="https://storm.wnba.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Wooden O Shakespeare in the Park (7/10-13)</span>
      </div>
      <div class="activity-description">
        <p>Free outdoor Shakespeare performances in various parks.</p>
        <a href="https://www.seattleshakespeare.org/woodeno/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;

  // Rain Days section
  document.querySelector('#rain-days .category-content').innerHTML = `
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Seattle Bouldering Project (Poplar)</span>
      </div>
      <div class="activity-description">
        <p>Indoor climbing gym with kids' area and beginner options.</p>
        <a href="https://seattleboulderingproject.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity cary-pick">
      <div class="activity-header">
        <span class="activity-title">DEFY & Altitude trampoline parks</span>
      </div>
      <div class="activity-description">
        <p>Indoor trampoline parks with various jumping activities for kids.</p>
        <a href="https://www.defy.com/" class="activity-link" target="_blank">Visit DEFY website <i class="fas fa-external-link-alt"></i></a>
        <a href="https://altitudetrampolinepark.com/" class="activity-link" target="_blank">Visit Altitude website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Snapdoodle Toys play rooms</span>
      </div>
      <div class="activity-description">
        <p>Toy store with play areas where kids can test toys before buying.</p>
        <a href="https://www.snapdoodletoys.com/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
    <div class="activity">
      <div class="activity-header">
        <span class="activity-title">Community-center Tot Gyms</span>
      </div>
      <div class="activity-description">
        <p>Indoor play spaces for young children at various community centers.</p>
        <a href="https://www.seattle.gov/parks/" class="activity-link" target="_blank">Visit website <i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  `;
}