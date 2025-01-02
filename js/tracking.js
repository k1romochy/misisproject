document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)'; // Увеличение размера кнопки
        button.style.transition = 'transform 0.3s ease'; // Плавный переход
    });
  
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Возврат к изначальному размеру
    });
  });


const API_KEY = 'c934fe1b373b2e7c1fdb79d3c77181aa';

function trackWeather() {
    const city = document.getElementById('city').value.trim();
    const resultContainer = document.getElementById('weather-result');
    resultContainer.innerHTML = '';

    if (!city) {
        resultContainer.innerHTML = '<p>Введите город.</p>';
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Город не найден. Проверьте правильность ввода.');
            }
            return response.json();
        })
        .then(data => {
            const info = `
                <p><strong>Погода в ${data.name}:</strong></p>
                <p>${data.weather[0].description}, температура ${data.main.temp}°C</p>
            `;
            resultContainer.innerHTML = info;
        })
        .catch(error => {
            resultContainer.innerHTML = `<p>${error.message}</p>`;
        });
}

document.querySelector('.submit-button').addEventListener('click', trackWeather);
