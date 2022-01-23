const people = [
    { name: 'Peter', job: 'Developer' },
    { name: 'Susan', job: 'Designer' },
    { name: 'Anna', job: 'Boss' },
];

// Select the container and the btn
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// Setup btn
btn.addEventListener('click', () => {
    showPeople();
});

// Setup the functionality
const showPeople = () => {
    container.innerHTML = people
        .map((person) => {
            const { name, job } = person;
            return `<p>${name} <strong>${job}</strong></p>`;
        })
        .join('');
};
