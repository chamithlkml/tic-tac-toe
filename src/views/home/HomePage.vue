<template>
  <div class="justify-center flex items-center h-screen">
    <div class="grid grid-cols-3 gap-1/2">
      <SquareComponent :mark="gameKeys[0]" @click="clickSquare(0)" />
      <SquareComponent :mark="gameKeys[1]" @click="clickSquare(1)" />
      <SquareComponent :mark="gameKeys[2]" @click="clickSquare(2)" />
      <SquareComponent :mark="gameKeys[3]" @click="clickSquare(3)" />
      <SquareComponent :mark="gameKeys[4]" @click="clickSquare(4)" />
      <SquareComponent :mark="gameKeys[5]" @click="clickSquare(5)" />
      <SquareComponent :mark="gameKeys[6]" @click="clickSquare(6)" />
      <SquareComponent :mark="gameKeys[7]" @click="clickSquare(7)" />
      <SquareComponent :mark="gameKeys[8]" @click="clickSquare(8)" />
    </div>
    <ControllerGroup @restart-game="restartGame" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SquareComponent from '@/components/SquareComponent.vue'
import ControllerGroup from '@/components/ControllerGroup.vue'
const gameKeys = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])
const userInputs = ref([])
const validCombinations = ref([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
])
const clickSquare = (index) => {
  if (gameKeys.value[index] === 0){
    gameKeys.value[index] = 1
    userInputs.value.push(index)
  }
}
const restartGame = () => {
  gameKeys.value = [0, 0, 0, 0, 0, 0, 0, 0, 0]
}
const getUserWinningCombination = () => {
  const selectedCombinations = []
  for(const userInput in userInputs.value){
    for(const validCombination in validCombinations.value){
      if (validCombination.includes(userInput)){
        if(selectedCombinations.includes(validCombination)){
          return validCombination
        }else{
          selectedCombinations.push(validCombination)
        }
      }
    }
  }
  return []
}
const markCircle = () => {
  // If user is closer to winning, block them
  const userWinningCombination = getUserWinningCombination()
  if(userWinningCombination.length == 0){
    
  }
}
</script>