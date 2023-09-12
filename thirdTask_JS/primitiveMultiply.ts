function NotificationException() {}
function ErrorException(){}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a:number, b:number):number {
  while (true) { // створюємо цикл
    try { // використовуємо обгортку try catch для відлову помилок
      return primitiveMultiply(a, b); // у разі відсутності винятків повертаємо результат обчислення
    } catch (error) { // у разі помилки обробляємо ситуаційно
      if (error instanceof ErrorException) { // якщо ErrorException викидаємо помилку, що зупиняє виконання циклу 
        throw error; 
      } else if (error instanceof NotificationException) {// якщо NotificationException використовємо оператор continue та повторюємо виконання циклу
        continue; 
      } else {
        throw error // для винятків які не обробляються
      }
    }
  }
}

console.log(reliableMultiply(8, 8));