let money, time;


function start() {
	money = +prompt ("Ваш бюджет на месяц?", "");
	time = prompt ("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt ("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},	
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses () {
	for (let i = 0; i < 2; i++) {
		let a = prompt ("Введите обязательную статью расходов в этом месяце", "");
		let	b = +prompt ("Во сколько обойдется?", "");
		
		if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b))
		 != null && a != "" && b != "" && a.length <50) 	{
		console.log ("done");
		appData.expenses[a] = b;
		} else {
			i = i -1;
		}
	}
}

chooseExpenses();

function detectDayBudget () {
	appData.moneyPerDay = (appData.budget/30).toFixed(1);

	alert ("Ежедневный бюджет:" + " " + appData.moneyPerDay);

	console.log (appData);
	}

detectDayBudget();

function detectLevel () {

	if (appData.moneyPerDay < 500) {
		console.log ("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
		console.log ("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log ("Высокий уровень достатка");
	} else {
		console.log ("Что-то пошло не так");
	}
}
function checkSavings () {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент", "");

		appData.monthIncome = save/10/12*percent;
		appData.monthIncome = appData.monthIncome.toFixed(1);
		alert("Доход с депозита в месяц: "+ appData.monthIncome);	 
	}
}

checkSavings();

function chooseOptExpenses () {
	for (let i = 0; i < 3; i++) {
		let a = prompt ("Введите необязательную статью расходов в этом месяце", "");
		let	b = +prompt ("Во сколько обойдется?", "");
		
		if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b))
		 != null && a != "" && b != "" && a.length <50) 	{
		console.log ("done");
		appData.optionalExpenses[a] = b;
		} else {
			i = i -1;
		}
	}
}

chooseOptExpenses ();