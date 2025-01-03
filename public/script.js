let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
  }
window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}
  
function toggleAnswer(element) {
  const allP = document.querySelectorAll('.qa1 p');
  allP.forEach(p => {
      const icon = p.querySelector('i');
      if (p !== element) {
          p.style.display = 'none';
      } else {
          if (icon.classList.contains('fa-plus')) {
              icon.classList.remove('fa-plus');
              icon.classList.add('fa-minus');
              p.innerHTML = '<i class="fa fa-minus"></i>&nbsp; I enrol in school at 5 years age.';
          } else {
              icon.classList.remove('fa-minus');
              icon.classList.add('fa-plus');
              p.innerHTML = '<i class="fa fa-plus"></i>&nbsp; At what age should I enrol my child in school?';
          }
          p.style.display = 'block';
      }
  });
}
const aboutButton = document.getElementById('aboutButton');
const aboutDropdown = document.getElementById('aboutDropdown');
  aboutButton.addEventListener('click', function() {
    aboutDropdown.classList.toggle('hidden');
  });
  window.addEventListener('click', function(event) {
    if (!aboutButton.contains(event.target) && !aboutDropdown.contains(event.target)) {
      aboutDropdown.classList.add('hidden');
    }
  });

const resourceButton = document.getElementById('resourceButton');
const resourceDropdown = document.getElementById('resourceDropdown');
  resourceButton.addEventListener('click', function() {
    resourceDropdown.classList.toggle('hidden');
  });
  window.addEventListener('click', function(event) {
    if (!resourceButton.contains(event.target) && !resourceDropdown.contains(event.target)) {
        resourceDropdown.classList.add('hidden');
    }
  });

  const activityButton = document.getElementById('activityButton');
  const activityDropdown = document.getElementById('activityDropdown');
        activityButton.addEventListener('click', function() {
        activityDropdown.classList.toggle('hidden');
    });
    window.addEventListener('click', function(event) {
      if (!activityButton.contains(event.target) && !activityDropdown.contains(event.target)) {
        activityDropdown.classList.add('hidden');
      }
    });

const toolboxButton = document.getElementById('toolboxButton');
const toolboxDropdown = document.getElementById('toolboxDropdown');
        toolboxButton.addEventListener('click', function() {
        toolboxDropdown.classList.toggle('hidden');
  });
  window.addEventListener('click', function(event) {
    if (!toolboxButton.contains(event.target) && !toolboxDropdown.contains(event.target)) {
        toolboxDropdown.classList.add('hidden');
    }
  });
