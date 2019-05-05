'use strict'

var money = prompt ("Ваш бюджет на месяц?", "");

var time = prompt ("Введите дату в формате YYYY-MM-DD", "");

var neccer = prompt ("Введите обязательную статью расходов в этом месяце", "");

var howMuch = prompt ("Во сколько обойдется?", "");

var appData = {
	budget: money,
	timeData: time,
	expenses: {
	neccer : howMuch
	},	
	optionalExpenses: null,
	income: null,
	savings: false
};

console.log (appData);

alert (money/30);