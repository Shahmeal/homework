'use strict'

let money = prompt ("Ваш бюджет на месяц?", "");
	time = prompt ("Введите дату в формате YYYY-MM-DD", "");


let appData = {
	budget: money,
	timeData: time,
	expenses: {},	
	optionalExpenses: {},
	income: {},
	savings: false
};

let a1 = prompt ("Введите обязательную статью расходов в этом месяце", "");
	a2= prompt ("Во сколько обойдется?", "");
	a3 = prompt ("Введите обязательную статью расходов в этом месяце", "");
	a4= prompt ("Во сколько обойдется?", "");

alert (money/30);
console.log (appData);