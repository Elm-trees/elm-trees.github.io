document.querySelector('.dropdown-btn').addEventListener('click', function() {
  document.querySelector('.navbar-dropdown').classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.navbar-dropdown');
  const btn = document.querySelector('.dropdown-btn');
  
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});