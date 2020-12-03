let name = prompt('Введите своё имя')
let birth = +prompt('Введите свой год рождения')
let year = +prompt('Введите нынешний год')

function age(y,b){
    let age = y - b
    return age;
}

let result = age(birth,year)
alert(name + ', ваш возраст ' + result);