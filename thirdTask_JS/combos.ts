function combos (num:number){
  let result:number[][] = [] // створюєму пустий масив для фіксації результату
  
  function findCombos(currentCombo:number[], remaining:number){ // створюмо функцію для пошуку усіх можливих комбінацій 
    if(remaining === 0){ // робимо перевірку для фіксації результатів та зупинення функції пошуку комбінацій
      result.push([...currentCombo])
      return
    }
    for(let i=1; i <= remaining; i++){ // робимо перебір усіх можливих чисел до num
      currentCombo.push(i) // пребираємо можливі значення від 1 до remaining додаючи їх до currentCombo
      findCombos(currentCombo, remaining - i) // викликаємо findCombinations рекурсивно зі зменшеним remaining
      currentCombo.pop() // після кожного виклику рекурсії видаляємо останнє додане число з currentCombo, щоб спробувати іншу комбінацію.
    }
  }
  findCombos([], num)
  return result // повертаємо result
  }