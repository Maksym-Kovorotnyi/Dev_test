type FlatObject = {
  [key: string]: object|string|number|[number];
};

function mapObject(object: Record<string, any>, parentKey: string): FlatObject {
  const result: FlatObject = {}; // створюємо пустий об'єкт для фіксації результату 
  for (let key in object) { // перебераємо усі ключі в об'єкті за допомогою циклу for..in..
    const currentKey = parentKey ? `${parentKey}/${key}` : key; // для кожного ключа формуємо поточний ключ currentKey. Цей ключ буде представляти шлях до поточного значення, і він буде складатися з parentKey, якщо він існує
    if (typeof object[key] === 'object' && !Array.isArray(object[key])) { // робимо перевірку чи є потовний ключ об'єктом, а також чи не є він масивм
      const nestedMap = mapObject(object[key], currentKey); // якщо умови виконані викликаємо mapObject для обробки цього вкладеного об'єкта
      Object.assign(result, nestedMap); //  за допомогою Object.assign записуємо результати
    } else { result[currentKey] = object[key];  }// якщо поточний ключ key не є вкладеним об'єктом, то ми просто додаємо пару ключ: значення до об'єкта
  }
  return result;
};