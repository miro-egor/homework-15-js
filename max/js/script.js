// первое задание

let userClient = prompt('Введите сумму вклада:');
let monthDeposit = prompt('На сколько месяцев хотите внести депозит? Под 5% годовых');
let percentMonth = (5 / 12) * monthDeposit;
let amountDeposit = userClient * (1 + percentMonth / 100);
alert('Сумма по истичению депозита ' + amountDeposit);

//второе задание

// 2 && 0 && 3
   //0

// 2 || 0 || 3
   //2

// 2 && 0 || 3
   //3