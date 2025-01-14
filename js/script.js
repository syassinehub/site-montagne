document.addEventListener('DOMContentLoaded', () => {
    // Charger les données de l'activité depuis localStorage
    const title = localStorage.getItem('activityTitle');
    const imageSrc = localStorage.getItem('activityImage');
    const price = localStorage.getItem('activityPrice');
    const description = localStorage.getItem('activityDescription');

    // Vérifier si les éléments HTML existent avant de leur assigner des valeurs
    const titleElement = document.getElementById('activity-title');
    const imageElement = document.getElementById('activity-image');
    const priceElement = document.getElementById('activity-price');
    const descriptionElement = document.getElementById('activity-full-description');

    if (titleElement) {
        titleElement.innerText = title || 'Titre de l’activité non disponible';
    }
    if (imageElement) {
        imageElement.src = imageSrc || '../assets/default-image.jpg'; // Image par défaut
        imageElement.alt = title || 'Image de l’activité';
    }
    if (priceElement) {
        priceElement.innerText = price || 'Prix non spécifié';
    }
    if (descriptionElement) {
        descriptionElement.innerText = description || 'Description indisponible pour cette activité.';
    }

    // Gestion des commentaires (code intact, comme demandé)
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newComment = commentInput.value.trim();
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
            </div>
            <p class="comment-text">${newComment}</p>
        `;

        commentsList.appendChild(commentElement);

        commentInput.value = '';
    });
});
