<script setup>
import { ref,watch } from 'vue'
import { emojiList  } from '../emojilist'

const props = defineProps({
  trigger: Number
})

const emoji = ref("")

function selectEmoji() {
  console.log(`New selectEmoji ${emojiList.length}`)
  let emojiIndex = Math.floor(Math.random() * emojiList.length)
  emoji.value = emojiList[emojiIndex]
}
function clearEmoji() {
  emoji.value = ""
}

watch(() => props.trigger,
  (newValue) => {
    if (newValue) {
      selectEmoji()
    } else {
      clearEmoji()
    }
  }
)

</script>

<template>
    <div v-if="emoji" class="inline text-8xl">{{ emoji }}</div>
    <div v-else class="inline text-8xl opacity-0">⭐</div>
</template>
