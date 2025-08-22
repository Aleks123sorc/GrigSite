document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const answerBox = document.getElementById('answerBox');
    const answerText = document.getElementById('answerText');
    const languageSwitcher = document.getElementById('language-switcher'); 
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const multiLangAnswers = {
        'ru': {
            'placeholder': 'Введите ваш запрос...',
            'not_found': 'Григ ты Даун? я не буду отвечать на это',
            'answers': {
                'кто такой григ': 'даун и свинья',
                'кто такой марк': 'твой король',
                'кто такой гев': 'твой лорд',
                'кто такая арина': 'твоя королева',
                'кто такой крам': 'легенда',
            }
        },
        'en': {
            'placeholder': 'Enter your query...',
            'not_found': 'Grig, are you stupid? I will not answer that.',
            'answers': {
                'who is grig': 'a downie and a pig',
                'who is mark': 'your king',
                'who is gev': 'your lord',
                'who is arina': 'your queen',
                'who is kram': 'a legend',
            }
        }
    };

    function updateLanguage() {
        const lang = languageSwitcher.value;
        searchInput.placeholder = multiLangAnswers[lang].placeholder;
    }

    languageSwitcher.addEventListener('change', updateLanguage);

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const currentLang = languageSwitcher.value;
        const query = searchInput.value.toLowerCase().trim().replace(/\?$/, '');

        const currentAnswers = multiLangAnswers[currentLang].answers;
        let answer = currentAnswers[query];

        answerBox.classList.remove('visible');

        setTimeout(() => {
            if (answer) {
                answerText.textContent = answer;
            } else {
                answerText.textContent = multiLangAnswers[currentLang].not_found;
            }
            answerBox.classList.add('visible');
        }, 300);
    }

    updateLanguage();
});
