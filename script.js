document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');

  cards.forEach(c => c.addEventListener('click', () => {
    const type = c.dataset.type; // "mp4" atau "drive"
    const src = c.dataset.src;

    // isi modal sesuai tipe
    if (type === 'mp4') {
      // buat video element
      body.innerHTML = `<video controls autoplay playsinline><source src="${src}" type="video/mp4">Browser tidak mendukung video.</video>`;
    } else if (type === 'drive') {
      body.innerHTML = `<iframe src="${src}" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
    } else {
      body.textContent = 'Sumber video tidak dikenal.';
    }

    modal.classList.remove('hidden');
  }));

  function closeModal() {
    modal.classList.add('hidden');
    body.innerHTML = ''; // stop & clear
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
});
