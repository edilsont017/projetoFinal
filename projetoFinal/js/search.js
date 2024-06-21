document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('searchInput');
  
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      if (searchTerm === 'cafe' || searchTerm === 'café') {
        window.location.href = '/pages/cafe2.html';
      } else if (searchTerm === 'bebida gourmet') {
        window.location.href = '/pages/cafe1.html';
      } else if (searchTerm === 'cafeteiras') {
        window.location.href = '/pages/cafe3.html';
      } else if (searchTerm === 'capsulas' || searchTerm === 'cápsulas') {
        window.location.href = '/pages/cafe4.html';
      } else {
        alert('Nenhuma correspondência encontrada.');
      }
    }
  
    searchIcon.addEventListener('click', performSearch);
  
    searchInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  });
  