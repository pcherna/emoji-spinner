<script setup>
// To do:
// - Would switching ref() -> reactive() clean up code?
// - Animation
// - Reject duplicates
// - Curate emoji list
// - Modernize RandomEmoji.vue
// - Test on a few browser sizes and mobile
// - Deploy to eg. S3
// - Get headline title and html-title from optional query param
// - Add favicon

import { onMounted, ref } from 'vue'
import EmojiWheel from './components/EmojiWheel.vue'

const WHEELS = 5

const wheel = ref(0)
const triggers = ref([])

onMounted(() => reset())

function spin() {
  if (wheel.value < WHEELS) {
    triggers.value[wheel.value]++
    wheel.value++
  }
}

function respin() {
  if (wheel.value > 0) {
    triggers.value[wheel.value - 1]++
  }
}
function undo() {
  if (wheel.value > 0) {
    wheel.value--
    triggers.value[wheel.value] = 0
  }
}

function reset() {
  wheel.value = 0
  for (let i = 0; i < WHEELS; i++) {
  triggers.value[i] = 0
  }
}
</script>

<template>
<div class="bg-gradient-to-br from-yellow-50 to-orange-200 w-full h-screen">
  <div>
    <div class="p-8 text-header">Emoji Spinner</div>
    <div class="pb-6">
      <button class="btn btn-primary mr-3" type="button" :disabled="wheel >= WHEELS" @click="spin()">Spin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="wheel == 0" @click="respin()">Respin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="wheel == 0" @click="undo()">Undo</button>
      <button class="btn btn-secondary" type="button" :disabled="wheel == 0" @click="reset()">Reset</button>
    </div>
  </div>

  <div class="inline">
    <EmojiWheel
      v-for="(item, index) in triggers"
      :key="index"
      :trigger="triggers[index]"
      class="mr-4">
    </EmojiWheel>
  </div>  
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
