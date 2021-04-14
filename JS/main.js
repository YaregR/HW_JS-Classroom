
const listBtn = document.querySelector('.classBtn');
const classEl = document.querySelector('.classroom')

let fullClassroom = [
    {name:'Иванна', surname:'Зимина', age: 35},
    {name:'Артем', surname:'Шевчук', age: 30},
    {name:'Андрей', surname:'Тимошенко', age: 38},
    {name:'Денис', surname:'Рудик', age: 34},
    {name:'Наталья', surname:'Горошко', age: 28},
    {name:'Андрей', surname:'Стегний', age: 14},
    {name:'Александр', surname:'Гетьманский', age: 26},
    {name:'Владимир', surname:'Антоненко', age: 33},
];

listBtn.addEventListener('click', () => {

    fullClassroom.forEach((item, index) => {
        const html = `
            <div class="person">
            ${index+1}. ${item.name} ${item.surname}, возраст: ${item.age}
            </div>
        `;
        classEl.insertAdjacentHTML('beforeend', html);
    });
});





