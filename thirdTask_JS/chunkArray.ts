function* chunkArray<T>(arr: T[], chunkSize: number) {
  let index = 0; // створюємо змінну index для відслідковування поточного положення в масиві
while (index < arr.length) { // створюємо цикл який буде виконуватись допоки index менше довжини масиві
  yield arr.slice(index, chunkSize + index) // використовуємо ключове слово yield яке призупиняє виконання функції пілся кожної операції
  index +=chunkSize // після виконання yield index оновлюється шляхом додавання chunkSize
}
}