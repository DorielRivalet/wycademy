const openModalBtn = document.getElementById('openModalBtn');
const modalBackground = document.getElementById('modalBackground');
const modalWrapper = document.getElementById('modalWrapper');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
	modalBackground.style.display = 'block';
	modalBackground.style.pointerEvents = 'auto'; // Make it clickable
	setTimeout(() => {
		modalBackground.style.opacity = '1';
		modalWrapper.style.transform = 'translateY(25%)';
	}, 0);
});

closeModalBtn.addEventListener('click', () => {
	closeModal();
});

modalBackground.addEventListener('click', (event) => {
	// Check if the click target is the modal background itself (outside the modal content)
	if (event.target === modalBackground || event.target === modalWrapper) {
		closeModal();
	}
	// Stop event propagation for all cases
	event.stopPropagation();
});

function closeModal() {
	modalBackground.style.opacity = '0';
	modalWrapper.style.transform = 'translateY(-100%)';
	setTimeout(() => {
		modalBackground.style.display = 'none';
		modalBackground.style.pointerEvents = 'none'; // Make it non-clickable
	}, 300); // Wait for the transition to complete
}
