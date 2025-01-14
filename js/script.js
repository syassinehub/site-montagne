document.addEventListener('DOMContentLoaded', () => {
    const title = localStorage.getItem('activityTitle');
    const imageSrc = localStorage.getItem('activityImage');
    const price = localStorage.getItem('activityPrice');
    const description = localStorage.getItem('activityDescription');

    const titleElement = document.getElementById('activity-title');
    const imageElement = document.getElementById('activity-image');
    const priceElement = document.getElementById('activity-price');
    const descriptionElement = document.getElementById('activity-full-description');

    if (titleElement) titleElement.innerText = title || 'Titre de l’activité non disponible';
    if (imageElement) {
        imageElement.src = imageSrc || '../assets/default-image.jpg';
        imageElement.alt = title || 'Image de l’activité';
    }
    if (priceElement) priceElement.innerText = price || 'Prix non spécifié';
    if (descriptionElement) descriptionElement.innerText = description || 'Description indisponible pour cette activité.';

    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const ratingSelect = document.getElementById('rating-input');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newComment = commentInput.value.trim();
        const selectedRating = ratingSelect.value;

        if (newComment === '') {
            alert('Le commentaire ne peut pas être vide.');
            return;
        }

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">Invité</span>
                <span class="comment-time">${currentTime}</span>
                <span class="comment-rating">${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</span>
            </div>
            <p class="comment-text">${newComment}</p>
        `;

        commentsList.appendChild(commentElement);

        commentInput.value = '';
        ratingSelect.value = ''; 
    });
});
