<template>
  <div class="flex-col flex rounded-md shadow-sm" role="group">
    <button type="button" @click="$emit('restartGame')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
      Restart
    </button>
    <div v-if="props.userWon" class="px-4 bg-lime-500 mt-1 py-2 text-white text-center rounded-lg">You Won!</div>
    <div v-if="props.computerWon" class="px-4 bg-red-500 mt-1 py-2 text-white text-center rounded-lg">You Lost!</div>
    <div v-if="props.matchDraw" class="px-4 bg-slate-600 mt-1 py-2 text-white text-center rounded-lg">Match Draw!</div>
  </div>  
</template>
<script setup>
const props = defineProps({
  userWon: Boolean,
  computerWon: Boolean,
  matchDraw: Boolean
})
</script>