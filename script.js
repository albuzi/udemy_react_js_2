'use strict';

//2
let money = +window.prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

//3
let appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: false,
};

//4
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done');    
        appData.expenses[a] = b;
    }
};

/*
let i = 0;
while (i < 2) {
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done');    
        appData.expenses[a] = b;
}
};

let i = 0;
do {
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done');    
        appData.expenses[a] = b;
}
} while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;
window.alert("Ваш бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}