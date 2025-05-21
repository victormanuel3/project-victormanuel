
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los elementos que tengan data-section (li y botones)
  const menuItems = document.querySelectorAll('[data-section]');
  
  // Añadir evento de clic a cada elemento
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-section');
      
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    });
  });
});