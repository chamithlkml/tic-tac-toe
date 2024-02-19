import { ref, computed } from 'vue'
export const useGameLogics = (gameKeys) => {
  const randomKey = (keys) => {
    return keys[Math.floor(Math.random() * keys.length)]
  }
  const validCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const userInputs = computed(() => {
    return gameKeys.value.reduce((acc, curr, index) => {
      if (curr === 1){
        acc.push(index)
      }
      return acc
    }, [])
  })
  const computerInputs = computed(() => {
    return gameKeys.value.reduce((acc, curr, index) => {
      if (curr === 2){
        acc.push(index)
      }
      return acc
    }, [])
  })
  const remainingKeys = computed(() => {
    return gameKeys.value.reduce((acc, curr, index) => {
      if (curr === 0){
        acc.push(index)
      }
      return acc
    }, [])
  })
  const winningCombination = (inputs, opponentInputs) => {
    const selectedCombinations = new Map()
    for(const validCombination of validCombinations){
      for(const userInput of inputs){
        if(validCombination.includes(userInput)){
          const computerBlocked = opponentInputs.filter((opponentInput) => validCombination.includes(opponentInput))
          if(computerBlocked.length === 0){
            if(selectedCombinations.get(validCombination) === undefined){
              selectedCombinations.set(validCombination, 1)
            }else{
              selectedCombinations.set(validCombination, selectedCombinations.get(validCombination) + 1)
            }
          }
        }
      }
    }
    var max = 0
    var maxCombination = []
    const selectedCombIterator = selectedCombinations[Symbol.iterator]();
    for(const selectedCombination of selectedCombIterator){
      if(max == 0){
        max = selectedCombination[1]
        maxCombination = selectedCombination[0]
      }
      if(selectedCombination[1] > max){
        max = selectedCombination[1]
        maxCombination = selectedCombination[0]
      }
    }
    return { combination: maxCombination, weight: max }
  }
  const computedNextMove = computed(() => {
    if(userInputs.value.length === 1){
      return randomKey(remainingKeys.value)
    }else{
      const userWinningCombination = winningCombination(userInputs.value, computerInputs.value)
      const computerWinningCombination = winningCombination(computerInputs.value, userInputs.value)

      if(userWinningCombination.weight == 2){
        return userWinningCombination.combination.filter((key) => gameKeys.value[key] === 0)[0]
      }else{
        if(computerWinningCombination.combination === undefined){
          return randomKey(remainingKeys.value)
        }else{
          return computerWinningCombination.combination.filter((key) => gameKeys.value[key] === 0)[0]
        }
      }
    }
  })

  return { computedNextMove }
}