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
import { useGameLogics } from '@/composables/useGameLogics.js'
const gameKeys = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])
const clickSquare = (index) => {
  if (gameKeys.value[index] === 0){
    gameKeys.value[index] = 1
    markCircle()
  }
}
const { computedNextMove } = useGameLogics(gameKeys)
const restartGame = () => {
  gameKeys.value = [0, 0, 0, 0, 0, 0, 0, 0, 0]
}
const markCircle = () => {
  console.log('next move', computedNextMove.value)
  gameKeys.value[computedNextMove.value] = 2
}
</script>