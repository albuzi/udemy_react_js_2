'use strict';

//2
let money, time;

function start() {
    money = +window.prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +window.prompt("Ваш бюджет на месяц?", '');
    }
};

start();

//3
let appData = {
    budget: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {
    },
    income: [],
    savings: true,
};

//4
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
            && a != '' && b != '' && a.length < 50) {
            console.log('done');    
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    } 
};
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    window.alert("Ваш бюджет: " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }    
};
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +window.prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депосита: " + appData.monthIncome);
    }
}
checkSavings(); 

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let userOptionalExpenses = window.prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1] = userOptionalExpenses;
    }
};
chooseOptExpenses();