<template>
  <div class="flex-col flex rounded-md shadow-sm" role="group">
    <button type="button" @click="$emit('restartGame')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
      Restart
    </button>
  </div>  
</template>
<script setup>
const props = defineProps({
  gameKeys: Array
})
</script>