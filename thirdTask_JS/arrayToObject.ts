const arrayToObject = (array: any[]): object => {
    // використовуємо метод reduce щоб перебрати масив масивів та розділити масиви на ключ: значення
    return array.reduce((acc, [key, value]) => {
    //   оскільки в нас є масив з масивами в яких є свої масиви, робимо перевірку чи є значення масивом
        if (Array.isArray(value)) {
        // якщо значення є масивом то викликаємо рекурсивну функцію щоб знову перебрати масив масивів та розділити масиви на ключ: значення
      acc[key] = arrayToObject(value);
        } else {
            // якщо значення не є масивом робимо запис ключ:значення
      acc[key] = value;
    }
    return acc;
  }, {});
};