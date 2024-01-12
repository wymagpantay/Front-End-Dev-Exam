// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const cancelButton = document.querySelector('button');
    const modal = createModal();
  
    cancelButton.addEventListener('click', () => showModal(modal));
  
    cancelButton.addEventListener('mouseover', () => (cancelButton.style.cursor = 'pointer'));
    cancelButton.addEventListener('mouseout', () => (cancelButton.style.cursor = ''));
  
    function createModal() {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <p>Are you sure you want to cancel your subscription?</p>
          <button class="no-button">No</button>
          <button class="yes-cancel-button">Yes - Cancel</button>
        </div>
      `;
      modal.querySelector('.no-button').addEventListener('click', () => hideModal(modal));
      modal.querySelector('.yes-cancel-button').addEventListener('click', () => confirmCancellation(modal));
      return modal;
    }
  
    // Show the modal
    function showModal(modal) {
      document.body.appendChild(modal);
    }
  
    // Hide the modal
    function hideModal(modal) {
      modal.remove();
    }
  
    function confirmCancellation(modal) {
        // Update modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = `
          <p>Subscription successfully cancelled!</p>
        `;
      
        // Automatically close the modal after 2 seconds
        setTimeout(() => hideModal(modal), 2000);
      
        const cancelButtonOnPage = document.querySelector('button');
        cancelButtonOnPage.innerHTML = 'Cancelled';

        // Optionally disable the button. Change to false to remove functionality
        cancelButtonOnPage.disabled = true; 
      }
  });