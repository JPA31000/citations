document.addEventListener('DOMContentLoaded', function() {

    const quotes = [
        { text: "Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.", author: "Confucius" },
        { text: "Fais de ta vie un rêve, et d'un rêve, une réalité.", author: "Antoine de Saint-Exupéry" },
        { text: "C'est par le travail que l'homme se transforme.", author: "Victor Hugo" },
        { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
        { text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", author: "Sénèque" },
        { text: "Le futur appartient à ceux qui croient à la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
        { text: "La créativité est l'intelligence qui s'amuse.", author: "Albert Einstein" },
        { text: "On ne subit pas l'avenir, on le fait.", author: "Georges Bernanos" }
    ];

    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return weekNo;
    }

    function getWeeklyQuote() {
        const weekNumber = getWeekNumber(new Date());
        const quoteIndex = weekNumber % quotes.length;
        return quotes[quoteIndex];
    }

    function displayQuote() {
        const weeklyQuote = getWeeklyQuote();
        const quoteTextElement = document.getElementById('quote-text');
        const quoteAuthorElement = document.getElementById('quote-author');

        if (quoteTextElement && quoteAuthorElement) {
            quoteTextElement.textContent = weeklyQuote.text;
            quoteAuthorElement.textContent = `— ${weeklyQuote.author}`;
        }
    }

    displayQuote();

    // **********************************************
    // Ajout pour la taille du texte
    // **********************************************
    const fontSizeSlider = document.getElementById('font-size-slider');
    const quoteTextElement = document.getElementById('quote-text');

    if (fontSizeSlider && quoteTextElement) {
        fontSizeSlider.addEventListener('input', function() {
            quoteTextElement.style.fontSize = `${this.value}em`;
        });
    }
});