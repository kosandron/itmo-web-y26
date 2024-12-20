(() => {  
    function renderProfile(data) {
        document.getElementById('profile__name').innerText = data.name;
        document.getElementById('profile__username').innerText = data.username;
        document.getElementById('profile__email').innerText = data.email;
        document.getElementById('profile__address').innerText =
            `${data.address.street}, ${data.address.city}`;
        document.getElementById('profile__phone').innerText = data.phone;
        document.getElementById('profile__website').innerText = data.website;
        document.getElementById('profile__company').innerText = data.company.name;
    }

    function handleError(message, errorElement) {
        errorElement.textContent = `⚠ ${message}`;
        document.body.appendChild(errorElement);
    }

    function getRandomUserId() {
        return Math.floor(Math.random() * 5) + 1;
    }

    async function fetchProfile() {
        const userId = getRandomUserId(); 
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const preloader = document.querySelector('.preloader');
        const profile = document.querySelector('.profile');
        const errorElement = document.createElement('div');

        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error();

            const data = await response.json();
            renderProfile(data);

            preloader.style.display = 'none';
            profile.style.display = 'block';
        } catch (error) {
            errorElement.classList.add('error');
            preloader.style.display = 'none';
            handleError('Не удалось загрузить данные профиля.', errorElement);
            console.error(error);
        }
    }

    window.addEventListener('DOMContentLoaded', fetchProfile);
})();
