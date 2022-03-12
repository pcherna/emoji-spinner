<script setup>
import { ref } from 'vue'
import RandomEmoji from './components/RandomEmoji.vue'

const emojiWheel = ref(0)
const spinner = ref([0, 0, 0, 0, 0])


function spin() {
  if (emojiWheel.value < 5) {
    spinner.value[emojiWheel.value]++
    emojiWheel.value++
  }
}

function respin() {
  if (emojiWheel.value > 0) {
    let wheel = emojiWheel.value - 1
    spinner.value[wheel]++
  }
}
function undo() {
  if (emojiWheel.value > 0) {
    emojiWheel.value--
    spinner.value[emojiWheel.value] = 0
  }
}

function reset() {
  if (emojiWheel.value > 0) {
    emojiWheel.value = 0
    spinner.value[0] = 0
    spinner.value[1] = 0
    spinner.value[2] = 0
    spinner.value[3] = 0
    spinner.value[4] = 0
  }
}
</script>

<template>
<div class="bg-gradient-to-br from-yellow-50 to-orange-200 w-full h-screen">
  <div>
    <div class="p-8 text-header">Emoji Spinner</div>
    <div class="pb-6">
      <button class="btn btn-primary mr-3" type="button" :disabled="emojiWheel >= 5" @click="spin()">Spin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="emojiWheel == 0" @click="respin()">Respin</button>
      <button class="btn btn-secondary mr-3" type="button" :disabled="emojiWheel == 0" @click="undo()">Undo</button>
      <button class="btn btn-secondary" type="button" :disabled="emojiWheel == 0" @click="reset()">Reset</button>
    </div>
  </div>

  <div class="inline">
    <RandomEmoji class="mr-4" :trigger="spinner[0]"/>
    <RandomEmoji class="mr-4" :trigger="spinner[1]"/>
    <RandomEmoji class="mr-4" :trigger="spinner[2]"/>
    <RandomEmoji class="mr-4" :trigger="spinner[3]"/>
    <RandomEmoji class="mr-4" :trigger="spinner[4]"/>
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
