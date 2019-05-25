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
	savings: true,
	chooseExpenses: function () {
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
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget/30).toFixed(1);
		alert ("Ежедневный бюджет:" + " " + appData.moneyPerDay);
	},
	detectLevel: function () {
			if (appData.moneyPerDay < 500) {
			console.log ("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
			console.log ("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log ("Высокий уровень достатка");
		} else {
			console.log ("Что-то пошло не так");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент", "");

		appData.monthIncome = save/10/12*percent;
		appData.monthIncome = appData.monthIncome.toFixed(1);
		alert("Доход с депозита в месяц: "+ appData.monthIncome);	 
		}	
	},
	chooseOptExpenses: function () {
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
	},
	chooseIncome: function () {
		for (let i = 0; i < 1; i++) {
		let items = prompt ("Что принесет дополнительный доход? (Перечисли через запятую)", "");

		if ((typeof(items))=== "string" && (typeof(items)) != null && items != "" && items.length <150) {
		console.log ("done");
		appData.income = items.split(', ');
		appData.income.push(prompt("Может что-то еще?", ""));
		appData.income.sort();
		} else {
			i = i - 1;
		}
	}
	}
};

console.log (appData.chooseIncome());
	
appData.income.forEach(function(item, i) {
	alert((i+1) + ' ' + "Способ доп. заработка: " + item); 
	});


for (var key in appData) {
 console.log("Наша программа включает в себя данные: " + key + "= " + appData[key] + ";"); 
}







