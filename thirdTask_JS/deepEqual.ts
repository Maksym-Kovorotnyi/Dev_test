 // створюємо кастомний тип для параметрів функції
  type compareObject = Record<string, any>;

  const deepEqual = (
    firstObj: compareObject,
    secondObj: compareObject
  ): boolean => {
    // перевірка чи є об'єкти ідентичними
    if (firstObj === secondObj) {
      return true;
    }
    // перевірка чи є параметри об'єктами
    if (
      typeof firstObj !== "object" ||
      firstObj === null ||
      typeof secondObj !== "object" ||
      secondObj === null
    ) {
      return false;
    }
    // перевірка чи є параметри що передаються у функцію однаковими за типом
    if (typeof firstObj !== typeof secondObj) {
      return false;
    }
    // отримання доступу до ключів об'єктів, що передаються в якості параметрів
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    // перевірка на однакову кількість ключів в об'єктах
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }

    // за допомогою циклу for...in перебираємо обєкт, а також використовуємо рекурсивний виклик функції для глибокого порівняння об'єктів
    for (const key in firstObj) {
      if (!deepEqual(firstObj[key], secondObj[key])) {
        return false;
      }
    }
// якщо пройдені усі перевірки повертаємо true
    return true;
  };

