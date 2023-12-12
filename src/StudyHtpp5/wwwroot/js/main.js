//document.write('JavaScript говорит привет!');
//console.log('JavaScript говорит привет!');
//console.info('JavaScript говорит привет!');
//console.error('JavaScript говорит привет!');
//console.warn('JavaScript говорит привет!');

/*
var num = 5;
console.log("Переменная " + num + ".");
var str_1 = Number("12");  //приводит строку к цифре
var str_2 = Number("14");
console.log("Результат " + (str_1 + str_2));

console.log(Math.PI);
console.log(Math.min(0, 9, 4, 3, 5, 2));


let stroka = "word";                    // проверка переменной на определенные значения
switch (stroka) {
    case"4":
        console.log("Переменная со значением 4");
        break;
    case"45":
        console.log("Переменная со значением 45");
        break;
    case"word":
        console.log("Переменная со значением 'word'");
        break;
    default:
        console.log("Default");
}

let arr = [5, true, "stroka", 5.7, 0, -100]; // могут быть разных типов данные
console.log(arr + " длина массива " + arr.length);

let matrix = [[4, 6, 8], ["stroka", 5.7], [0, -100]];
matrix[1][0] = 90;
console.log(matrix);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 100
while (j > 10) {
    console.log(j);
    j -= 5;
}

/!*let isHasCar = true;
while (isHasCar) {
}*!/


let x = 100;
do {
    console.log(x)

} while (x < 50)   //срабатывает 1 раз не зависимо от условия while

for (let i = 10; i <= 20; i++) {
    // if (i > 15) break;
    if (i % 2 === 0) continue;

    console.log(i);
}*/
/*Всплывающие окна*/

/*alert("Какая хорошая погода");
let data = confirm("Вы сейчас дома?");
console.log(data);
if (data) {
    alert("Вы молодец!");
}
let data2 = prompt("Сажите сколько вам лет");
console.log(data2);
let person = null;
if (confirm("Вы точно уверены?")) {
    person = prompt("Введите Ваше имя ");
    alert("Привет, " + person);
} else {alert("Вы нажали на «Отмена»")
}
*/

/*/!*Функции*!/
function info(word) {
    console.log(word + "!");
}

function summa(a, b) {
    let res = a + b;
    info(res);
}

summa(5, 4)

function summa2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}

let array1 = [3, 4, 9];
let array2 = [8, 5, 7, 2, 6];
let array3 = [6, 7, 3, 6, 8, 0];

let res = summa2(array1);
res*=2;
console.log(res);


//summa2(array2);
//summa2(array3);*/

/*let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate()); //получаем текущее
date.setHours(23); //устанавливаем свое
date.setMinutes(12);
console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

let array=[-5,7,3,4];
console.log(array.length);
console.log(array.join("| "));
console.log(array.sort());
console.log(array.reverse());
let stroka=array.reverse().join("? ");
console.log(stroka.split("? "));*/

/*
class Person {
    age;
    happiness;

    constructor(name, age, happiness) {
        this.happiness = happiness;
        this.age = age;
        this.name = name;
    }


    info() {
        console.log("Человек " + this.name + ".Возраст " + this.age);
    }
}

let alex = new Person("Alex", 45, true);
let bob = new Person("Bob", 60, false);
alex.info();
bob.info();*/

/*let counter = 0;

function onClickButton(element) {
    counter++;
    element.innerHTML = "Вы нажали на кнопку: " + counter;
    /!*element.style.background = "red";
    element.style.color = "blue"*!/
    element.style.cssText = "border-radius: 5px; border:0; font-size:20px ";
    console.log(element.name);
}

function onInput(element) {
    if (element.value === "Hello") {
        alert("И тебе привет!");
    }
    console.log(element.value);
}*/

let text = document.getElementById('text');
text.title = "New text";
console.log(text.title);
text.style.color = "blue";
text.style.backgroundColor = "green";

text.innerHTML = "New<br>string";
//document.getElementById('text').style.color="white";

//let spans = document.getElementsByTagName('span');
let spans = document.getElementsByClassName('simple-text');
for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}
document.getElementById('main-form').addEventListener("submit", checkForm);  //обработчик событий

function checkForm(event) {
    event.preventDefault();
    var element = document.getElementById('main-form');

    let name = element.name.value;
    let pass = element.pass.value;
    let repass = element.repass.value;
    let state = element.state.value;
    let fail = "";
    // console.log(state + " - " + pass + "=" + repass);

    if (name === "" || pass === "" || state === "") {
        fail = "Заполните все поля";
    } else if (name.length <= 1 || name.length > 50) {
        fail = "Введите корректное имя";
    } else if (pass !== repass) {
        fail = "Пароли должны совпадать";
    } else if (pass.split("&").length > 1) {
        fail = "Некорректный пароль";
    }
    if (fail !== "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("Все данные корректно заполены")
        window.location = 'https://www.google.com/';
    }
    //return false;
    // console.log(fail);

}

//Интервал
let counter = 0;

function my_func() {
    counter++;
    console.log("Counter" + counter);
    if (counter === 3) {
        clearInterval(id);
    }
}

let id = setInterval(my_func, 1000);


/*
setInterval(function () {
    counter++;
    console.log("Прошло секунд: " + counter);
}, 1000);*/


//Таймер

setTimeout(timer, 2000);
function timer () {
    console.log("Timer is working")
}