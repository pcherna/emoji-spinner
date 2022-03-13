<script setup>
import { ref, watch, nextTick } from 'vue'
import { useMotions } from '@vueuse/motion'

import { emojiList } from '../emojilist'

const props = defineProps({
  trigger: Number
})

const motions = useMotions()

const emoji = ref("")

function selectEmoji() {
  // console.log(`New selectEmoji ${emojiList.length}`)
  let emojiIndex = Math.floor(Math.random() * emojiList.length)
  emoji.value = emojiList[emojiIndex]
}

function clearEmoji() {
  emoji.value = ""
}

watch(() => props.trigger,
  async (newValue, oldValue) => {
    if (newValue) {
      if (oldValue) {
        clearEmoji()
        await nextTick()
      }
      selectEmoji()
    } else {
      clearEmoji()
    }
  }
)
</script>

<template>
  <!-- Adding this to transition should enable leave anim, but breaks stuff :-(
    @leave="(_, done) => motions.pictogram.leave(done)"
  -->
  <transition
    :css="false"
  >
    <div
      v-if="emoji"
      v-motion="'pictogram'"
      :initial="{ opacity: 0, scale: 0 }"
      :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, duration: 2000 } }"
      :leave="{ opacity: 0, scale: 0 }"
      class="inline-flex text-9xl"
    >
      {{ emoji }}
    </div>
  </transition>
</template>
