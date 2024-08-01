


//Template loader
document.addEventListener('DOMContentLoaded', () => {
    /*ELEMENT CONTENT - TEMPLATE ELEMENT NAME*/
    loadHTML('/templates/footerblock.html', 'TEMPLATE-FOOTER-BLOCK');
    loadHTML('/templates/contentcarousselblock.html', 'TEMPLATE-CAROUSSEL-BLOCK');


    loadHTML('/templates/sidenavblock.html', 'TEMPLATE-SIDENAVBAR-BLOCK');

const marquis = document.getElementById('scroll-cross');
fetch("/tickerupdater.txt")
  .then((res) => res.text())
  .then((text) => {
    marquis.innerHTML = text;
  })
  .catch((e) => marquis.innerHTML = "More stuff in the works!");
});


/*Collapsible stuff*/
var coll = document.getElementsByClassName("collapsible");
var col_symb = document.getElementsByClassName("collapsible-symbol");
for (var i = 0; i < coll.length; i++) {
  (function(index) {
    coll[index].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        col_symb[index].innerHTML = "+";
      } else {
        content.style.display = "block";
        col_symb[index].innerHTML = "-";
      }
    });
  })(i);
}

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

function selectCat(hrefcat) {
    const element = document.querySelector('a[id="nav-button"]');
    /*NEED A FOREACH TO LOOP THROUGH*/
    if (element) {
        const currentHref = element.getAttribute('href');
        if (currentHref === hrefcat) {
            element.id = "nav-button-pressed";
        }
    }
}

const horUrls = ["#","google.com","google.com","twitter.com","bing.com","bing.com","bing.com"];
function setRandomImage() {
    const images = document.querySelectorAll('[class^="article-ad-image"]');
    images.forEach((imageElement, index) => {

        const randomIndex = getRandomInt(1, 6); // Get random index for horUrls
        const randomUrl = horUrls[randomIndex]; // Get corresponding URL from horUrls array
        
        imageElement.src = `/gfx/fakeads/ad${randomIndex}hor.gif`;
        const parentAnchor = imageElement.closest('a');
        if (parentAnchor) {
            // Assign href to the parent <a> element
            //parentAnchor.href = `some-new-url-${randomInt}.html`;
            parentAnchor.href = `${randomUrl}.html`;
        }
    
    });
}

const horVUrls = ["#","google.com","google.com","twitter.com","bing.com"];
function setRandomVerticalImages(){
 const Fimages = document.querySelectorAll('[class^="vert-ads"]');
    Fimages.forEach((imageElement, index) => {

        const randomIndex = getRandomInt(1, 4); // Get random index for horUrls
        const randomUrl = horUrls[randomIndex]; // Get corresponding URL from horUrls array
        
        imageElement.src = `/gfx/fakeads/ad${randomIndex}vert.gif`;

        const parentAnchor = imageElement.closest('a');
        if (parentAnchor) {
            // Assign href to the parent <a> element
            //parentAnchor.href = `some-new-url-${randomInt}.html`;
            parentAnchor.href = `${randomUrl}.html`;
        }

    });
}

// Helper function to get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


setRandomImage();
setRandomVerticalImages();

