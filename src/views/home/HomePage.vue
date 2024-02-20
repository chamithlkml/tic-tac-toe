<template>
  <div class="justify-center flex items-center h-screen">
    <div class="grid grid-cols-1 gap-1">
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
      <ControllerGroup @restart-game="restartGame" :userWon="userWon" :computerWon="computerWon" :matchDraw="matchDraw" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SquareComponent from '@/components/SquareComponent.vue'
import ControllerGroup from '@/components/ControllerGroup.vue'
import { useGameLogics } from '@/composables/useGameLogics.js'
const gameKeys = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])
const userWon = ref(false)
const computerWon = ref(false)
const matchDraw = ref(false)
const clickSquare = (index) => {
  if (gameKeys.value[index] === 0){
    gameKeys.value[index] = 1
    markCircle()
  }
}
const { computedNextMove, declaredWinnerCode } = useGameLogics(gameKeys)
const restartGame = () => {
  gameKeys.value = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  userWon.value = false
  computerWon.value = false
  matchDraw.value = false
}
const markCircle = () => {
  userWon.value = declaredWinnerCode.value === 1
  if(userWon.value) return
  gameKeys.value[computedNextMove.value] = 2
  computerWon.value = declaredWinnerCode.value === 2
  matchDraw.value = declaredWinnerCode.value === 3
}
</script>