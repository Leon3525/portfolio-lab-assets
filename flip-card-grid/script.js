/**
 * LMS Interactive: Accessible Flip Card Controller
 */
document.addEventListener("DOMContentLoaded", function () {
  const flipButtons = document.querySelectorAll('.flip-card-button');

  flipButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const card = this.closest('.flip-card');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle flipped visual state
      card.classList.toggle('is-flipped');
      
      // Update ARIA attribute for screen reader users
      this.setAttribute('aria-expanded', !isExpanded);
    });
  });
});
