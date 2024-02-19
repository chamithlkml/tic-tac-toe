<template>
  <div class="flex-col flex rounded-md shadow-sm" role="group">
    <button type="button" @click="$emit('restartGame')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white">
      Restart
    </button>
  </div>  
</template>
<script setup>
const props = defineProps({
  gameKeys: Array
})
</script>