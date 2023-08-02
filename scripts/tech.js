const cards = document.querySelector('.cards');

const colorMap = {
    'python': 'yellow',
    'pandas': 'blue',
    'scikit-learn': 'orange',
    'streamlit': 'red',
    'numpy': 'blue',
    'javascript': 'yellow',
    'html': 'orange',
    'css': 'blue',
    'next': 'purple',
    'node': 'green',
    'firebase': 'orange',
    'java': 'orange',
    'cli': 'green',
    'njs': 'purple',
    'fastapi': 'green',
    'flask': 'green',
    'kotlin': 'orange',
    'android': 'green',
    'realm-orm': 'purple'
}

const cardsInfo = [
    {
        title: 'Phoney',
        description: 'Counterfeit mobile phone product classifier',
        tech: ['python', 'pandas', 'scikit-learn', 'numpy', 'streamlit'],
        srcURL: 'https://github.com/CodeJohnGlenx/phoney',
        liveURL: ''
    },
    {
        title: 'Wonderpets',
        description: 'Mobile web application for online pet adoption',
        tech: ['html', 'css', 'javascript', 'next', 'node', 'firebase'],
        srcURL: 'https://github.com/jrzvnn/wonderpets',
        liveURL: ''
    },
    {
        title: 'nJS',
        description: 'Statically-typed JavaScript based from the principles of Java programming',
        tech: ['njs', 'java', 'cli'],
        srcURL: 'https://github.com/CodeJohnGlenx/njs',
        liveURL: ''
    },
    {
        title: 'Currency Deno API',
        description: 'Conversion between two currencies and the nearest denomination of the converted currency',
        tech: ['python', 'fastapi'],
        srcURL: 'https://github.com/CodeJohnGlenx/CurrenciesDenominationAPI',
        liveURL: ''
    },
    {
        title: 'Anagram-esque',
        description: 'Seamless generation of english words based on user letter inputs',
        tech: ['html', 'css', 'javascript', 'python', 'flask'],
        srcURL: 'https://github.com/CodeJohnGlenx/anagram-esque',
        liveURL: ''
    },
    {
        title: 'SaveUp',
        description: 'Native android application for expenditure and budget management',
        tech: ['kotlin', 'realm-orm', 'android'],
        srcURL: 'https://github.com/CodeJohnGlenx/saveUp',
        liveURL: ''
    },
    {
        title: 'Origami',
        description: 'Origami models tutorial website',
        tech: ['html', 'css', 'javascript'],
        srcURL: 'https://github.com/CodeJohnGlenx/origami_webdev',
        liveURL: ''
    },
]

/* create cards */
for (const cardInfo of cardsInfo) {
    const card = document.createElement('div');
    card.setAttribute('class', 'card')

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.textContent = cardInfo.title;

    const cardDescription = document.createElement('p');
    cardDescription.setAttribute('class', "card-text description");
    cardDescription.textContent = cardInfo.description;

    const technologies = document.createElement('div');
    technologies.setAttribute('class', 'technologies');
    for (const t of cardInfo.tech) {
        const tech = document.createElement('span');
        tech.setAttribute('class', 'tech');
        tech.classList.add(colorMap[t]);
        tech.textContent = t;
        technologies.appendChild(tech);
    }

    const cardLinks = document.createElement('div');
    cardLinks.setAttribute('class', 'card-links');

    const srcCode = document.createElement('a');
    srcCode.setAttribute('href', cardInfo.srcURL);
    srcCode.setAttribute('target', '_blank');
    const srcSpan = document.createElement('span');
    srcSpan.setAttribute('class', 'card-text');
    srcSpan.textContent = 'Source Code';
    srcCode.appendChild(srcSpan);

    cardLinks.appendChild(srcCode);

    if (cardInfo.liveURL !== '') {
        const liveURL = document.createElement('a');
        liveURL.setAttribute('href', cardInfo.liveURL);
        liveURL.setAttribute('target', '_blank');
        const liveSpan = document.createElement('span');
        liveSpan.setAttribute('class', 'card-text');
        liveSpan.textContent = 'Live Demo';
    
        liveURL.appendChild(liveSpan);
        cardLinks.appendChild(liveURL);
    }

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(technologies);
    cardBody.appendChild(cardLinks);
    card.appendChild(cardBody);
    cards.appendChild(card);
}