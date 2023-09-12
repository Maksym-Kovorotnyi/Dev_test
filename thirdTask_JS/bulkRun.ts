// використовуємо асинхронну функцію
async function bulkRun<T>(funcs: [any]): Promise<T[]> {
  const results: T[] = []; // створюємо змінну для фіксації результатів
  
  for (const [func, args]  of funcs) { // робимо ітерацію по масиву за допомогою циклу for...of та деструктуризуємо елементи вкладеного масиву
    const result = await new Promise<T>((resolve) => { // для кожної функції ми створюємо новий Promise. Викорстанняawait під час виклику new Promise, зупиняє виконання функції bulkRun і чекає на виконання resolve
      func(...args, resolve); // ми розгортаємо аргументи за допомогою spred оператора, передаючи їх у функцію func, і додаємо resolve в якості останнього аргумента.
    });  
    results.push(result); // виконання кожного промісу записуєм в results за допомого методу push
  }
  return results;
}