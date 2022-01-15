const person = {
    name: 'Kyle',
    job: 'developer',
    hobbies: ['surfing', 'baking', 'bowling'],
};

const result = document.getElementById('result');

// Old style
// result.innerHTML = '<h2>' + person.name + '</h2>' + '<p>' + person.job + '</p>';

// Using String literals
result.innerHTML = `<h2>${person.name}</h2>
                    <p>${person.job}</p>
                    <ul>
                    ${person.hobbies
                        .map(function (item) {
                            return `<li>${item}</li>`;
                        })
                        .join('')}
                    </ul>`;
