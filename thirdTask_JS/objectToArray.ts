const objToArray = (obj: object): [string, number][] => {
    // за допомогою методу Object.entries робимо з об'єктa масив
    return Object.entries(obj)
        // за допомогою методу .map перебираємо масив пар ключ-значення, і для кожної пари створюємо новий масив
        .map(([key, value]) => {
            // оскільки у нас в масиві є ще вкладеності робимо перевірку чи є значення об'єктом
            if (typeof value === "object") {
        // Якщо значення є об'єктом за допомогою рекурсивного виклику функції повертаємо ключ:значення, як масив
      return [key, objToArray(value)];
    } else {
      return [key, value];
    }
  });
};