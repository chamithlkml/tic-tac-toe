<template>
  <div class="game-square"><CrossMark v-if="mark==1"/><CircleMark v-if="mark==2"/></div>
</template>
<script setup>
import { ref } from 'vue'
import CrossMark from '@/components/CrossMark.vue'
import CircleMark from '@/components/CircleMark.vue'
defineProps({
  mark: Number
})
</script>