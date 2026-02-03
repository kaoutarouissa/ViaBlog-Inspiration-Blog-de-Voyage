  const plusBtn = document.getElementById('plusBtn');
  const formModal = document.getElementById('formModal');
    const closeBtn = document.getElementById('closeBtn');

    plusBtn.addEventListener('click', () => {
      formModal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      formModal.classList.add('hidden');
    });

    // Close modal if clicking outside the form
    formModal.addEventListener('click', (e) => {
      if (e.target === formModal) {
        formModal.classList.add('hidden');
      }
    });