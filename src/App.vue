<script setup>
// To do:
// - Animation
// - Reject duplicates
// - Curate emoji list
// - Modernize RandomEmoji.vue
// - Test on a few browser sizes and mobile
// - Deploy to eg. S3
// - Make number of wheels configurable, at least a const
// - Get headline title and html-title from optional query param
// - Add favicon

import { ref } from 'vue'
import RandomEmoji from './components/RandomEmoji.vue'

const wheel = ref(0)
const trigger = ref([0, 0, 0, 0, 0])


function spin() {
  if (wheel.value < 5) {
    trigger.value[wheel.value]++
    wheel.value++
  }
}

function respin() {
  if (wheel.value > 0) {
    trigger.value[wheel.value - 1]++
  }
}
function undo() {
  if (wheel.value > 0) {
    wheel.value--
    trigger.value[wheel.value] = 0
  }
}

function reset() {
  if (wheel.value > 0) {
    wheel.value = 0
    trigger.value[0] = 0
    trigger.value[1] = 0
    trigger.value[2] = 0
    trigger.value[3] = 0
    trigger.value[4] = 0
  }
}
</script>

<template>
<div class="bg-gradient-to-br from-yellow-50 to-orange-200 w-full h-screen">
  <div>
    <div class="p-8 text-header">Emoji Spinner</div>
    <div class="pb-6">
      <button class="btn btn-primary mr-3" type="button" :disabled="wheel >= 5" @click="spin()">Spin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="wheel == 0" @click="respin()">Respin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="wheel == 0" @click="undo()">Undo</button>
      <button class="btn btn-secondary" type="button" :disabled="wheel == 0" @click="reset()">Reset</button>
    </div>
  </div>

  <div class="inline">
    <RandomEmoji class="mr-4" :trigger="trigger[0]"/>
    <RandomEmoji class="mr-4" :trigger="trigger[1]"/>
    <RandomEmoji class="mr-4" :trigger="trigger[2]"/>
    <RandomEmoji class="mr-4" :trigger="trigger[3]"/>
    <RandomEmoji class="mr-4" :trigger="trigger[4]"/>
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
