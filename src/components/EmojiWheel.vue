<template>
    <div v-if="emoji" class="inline text-8xl">{{ emoji }}</div>
    <div v-else class="inline text-8xl opacity-0">⭐</div>
</template>

<script setup>
import { ref } from 'vue'
const emoji = ref("")

function selectEmoji() {
  console.log(`New selectEmoji ${emojiList.length}`)
  let emojiIndex = Math.floor(Math.random() * emojiList.length)
  emoji.value = emojiList[emojiIndex]
}
function clearEmoji() {
  emoji.value = ""
}

// ZZZ: Need to declare trigger as a new-style prop somehow
// watch(trigger,
//   (newValue) => {
//           console.log(`NEW -> ${newValue}`)
//           // console.log(`NEW ${oldValue} -> ${newValue}`)
//           // if (newValue) {
//           //     this.selectEmoji()
//           // } else {
//           //     this.clearEmoji()
//           // }
//   }
// )

</script>

<script>
const emojiList = [
    "🙈", // See-No-Evil Monkey
    "🙉", // Hear-No-Evil Monkey
    "🙊", // Speak-No-Evil Monkey
    "💥", // Collision
    "💫", // Dizzy
    "💦", // Sweat Droplets
    "💨", // Dashing Away
    "🐵", // Monkey Face
    "🐒", // Monkey
    "🦍", // Gorilla
    "🦧", // Orangutan
    "🐶", // Dog Face
    "🐕", // Dog
    "🦮", // Guide Dog
    "🐕‍🦺", // Service Dog
    "🐩", // Poodle
    "🐺", // Wolf
    "🦊", // Fox
    "🦝", // Raccoon
    "🐱", // Cat Face
    "🐈", // Cat
    "🐈‍⬛", // Black Cat
    "🦁", // Lion
    "🐯", // Tiger Face
    "🐅", // Tiger
    "🐆", // Leopard
    "🐴", // Horse Face
    "🐎", // Horse
    "🦄", // Unicorn
    "🦓", // Zebra
    "🦌", // Deer
    "🦬", // Bison
    "🐮", // Cow Face
    "🐂", // Ox
    "🐃", // Water Buffalo
    "🐄", // Cow
    "🐷", // Pig Face
    "🐖", // Pig
    "🐗", // Boar
    "🐽", // Pig Nose
    "🐏", // Ram
    "🐑", // Ewe
    "🐐", // Goat
    "🐪", // Camel
    "🐫", // Two-Hump Camel
    "🦙", // Llama
    "🦒", // Giraffe
    "🐘", // Elephant
    "🦣", // Mammoth
    "🦏", // Rhinoceros
    "🦛", // Hippopotamus
    "🐭", // Mouse Face
    "🐁", // Mouse
    "🐀", // Rat
    "🐹", // Hamster
    "🐰", // Rabbit Face
    "🐇", // Rabbit
    "🐿️", // Chipmunk
    "🦫", // Beaver
    "🦔", // Hedgehog
    "🦇", // Bat
    "🐻", // Bear
    "🐻‍❄️", // Polar Bear
    "🐨", // Koala
    "🐼", // Panda
    "🦥", // Sloth
    "🦦", // Otter
    "🦨", // Skunk
    "🦘", // Kangaroo
    "🦡", // Badger
    "🐾", // Paw Prints
    "🦃", // Turkey
    "🐔", // Chicken
    "🐓", // Rooster
    "🐣", // Hatching Chick
    "🐤", // Baby Chick
    "🐥", // Front-Facing Baby Chick
    "🐦", // Bird
    "🐧", // Penguin
    "🕊️", // Dove
    "🦅", // Eagle
    "🦆", // Duck
    "🦢", // Swan
    "🦉", // Owl
    "🦤", // Dodo
    "🪶", // Feather
    "🦩", // Flamingo
    "🦚", // Peacock
    "🦜", // Parrot
    "🐸", // Frog
    "🐊", // Crocodile
    "🐢", // Turtle
    "🦎", // Lizard
    "🐍", // Snake
    "🐲", // Dragon Face
    "🐉", // Dragon
    "🦕", // Sauropod
    "🦖", // T-Rex
    "🐳", // Spouting Whale
    "🐋", // Whale
    "🐬", // Dolphin
    "🦭", // Seal
    "🐟", // Fish
    "🐠", // Tropical Fish
    "🐡", // Blowfish
    "🦈", // Shark
    "🐙", // Octopus
    "🐚", // Spiral Shell
    "🐌", // Snail
    "🦋", // Butterfly
    "🐛", // Bug
    "🐜", // Ant
    "🐝", // Honeybee
    "🪲", // Beetle
    "🐞", // Lady Beetle
    "🦗", // Cricket
    "🪳", // Cockroach
    "🕷️", // Spider
    "🕸️", // Spider Web
    "🦂", // Scorpion
    "🦟", // Mosquito
    "🪰", // Fly
    "🪱", // Worm
    "🦠", // Microbe
    "💐", // Bouquet
    "🌸", // Cherry Blossom
    "💮", // White Flower
    "🏵️", // Rosette
    "🌹", // Rose
    "🥀", // Wilted Flower
    "🌺", // Hibiscus
    "🌻", // Sunflower
    "🌼", // Blossom
    "🌷", // Tulip
    "🌱", // Seedling
    "🪴", // Potted Plant
    "🌲", // Evergreen Tree
    "🌳", // Deciduous Tree
    "🌴", // Palm Tree
    "🌵", // Cactus
    "🌾", // Sheaf of Rice
    "🌿", // Herb
    "☘️", // Shamrock
    "🍀", // Four Leaf Clover
    "🍁", // Maple Leaf
    "🍂", // Fallen Leaf
    "🍃", // Leaf Fluttering in Wind
    "🍄", // Mushroom
    "🌰", // Chestnut
    "🦀", // Crab
    "🦞", // Lobster
    "🦐", // Shrimp
    "🦑", // Squid
    "🌍", // Globe Showing Europe-Africa
    "🌎", // Globe Showing Americas
    "🌏", // Globe Showing Asia-Australia
    "🌐", // Globe with Meridians
    "🪨", // Rock
    "🌑", // New Moon
    "🌒", // Waxing Crescent Moon
    "🌓", // First Quarter Moon
    "🌔", // Waxing Gibbous Moon
    "🌕", // Full Moon
    "🌖", // Waning Gibbous Moon
    "🌗", // Last Quarter Moon
    "🌘", // Waning Crescent Moon
    "🌙", // Crescent Moon
    "🌚", // New Moon Face
    "🌛", // First Quarter Moon Face
    "🌜", // Last Quarter Moon Face
    "☀️", // Sun
    "🌝", // Full Moon Face
    "🌞", // Sun with Face
    "⭐", // Star
    "🌟", // Glowing Star
    "🌠", // Shooting Star
    "☁️", // Cloud
    "⛅", // Sun Behind Cloud
    "⛈️", // Cloud with Lightning and Rain
    "🌤️", // Sun Behind Small Cloud
    "🌥️", // Sun Behind Large Cloud
    "🌦️", // Sun Behind Rain Cloud
    "🌧️", // Cloud with Rain
    "🌨️", // Cloud with Snow
    "🌩️", // Cloud with Lightning
    "🌪️", // Tornado
    "🌫️", // Fog
    "🌬️", // Wind Face
    "🌈", // Rainbow
    "☂️", // Umbrella
    "☔", // Umbrella with Rain Drops
    "⚡", // High Voltage
    "❄️", // Snowflake
    "☃️", // Snowman
    "⛄", // Snowman Without Snow
    "☄️", // Comet
    "🔥", // Fire
    "💧", // Droplet
    "🌊", // Water Wave
    "🎄", // Christmas Tree
    "✨", // Sparkles
    "🎋", // Tanabata Tree
    "🎍", // Pine Decoration
]

export default {
  name: 'EmojiWheel',
  props: {
    trigger: Number
  },
  watch: {
      trigger(newValue, oldValue) {
          console.log(`trigger ${oldValue} -> ${newValue}`)
          if (newValue) {
              this.selectEmoji()
          } else {
              this.clearEmoji()
          }
      }
  }
}
</script>
