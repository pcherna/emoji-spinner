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
<div>
  <div>
    <div>Wheel: {{ emojiWheel }}</div>
    <button type="button" :disabled="emojiWheel >= 5" @click="spin()">Spin</button>
    <button type="button" :disabled="emojiWheel == 0" @click="respin()">Respin</button>
    <button type="button" :disabled="emojiWheel == 0" @click="undo()">Undo</button>
    <button type="button" :disabled="emojiWheel == 0" @click="reset()">Reset</button>
  </div>

  <div>
    <div>Result:</div>
    <RandomEmoji :trigger="spinner[0]"/>
    <RandomEmoji :trigger="spinner[1]"/>
    <RandomEmoji :trigger="spinner[2]"/>
    <RandomEmoji :trigger="spinner[3]"/>
    <RandomEmoji :trigger="spinner[4]"/>
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
  margin-top: 60px;
}
</style>
