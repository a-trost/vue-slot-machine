<script setup>
import { computed, onMounted} from 'vue'
import Wheel from './components/Wheel.vue'
import slotStore from './store/slotStore'
import JSConfetti from 'js-confetti'



const {slotItems, selectItems} = slotStore()

const gameStatus = computed(()=>{
   
   // Check if all values are identical in array
const allIdentical = slotItems.value.every(v => v === slotItems.value[0])

   if (allIdentical){
      const jsConfetti = new JSConfetti()
      // Confetti
      jsConfetti.addConfetti()
      return "You win!"

   } else {
      return "Try again!"
   }
})

onMounted(()=>{
   selectItems()
})

</script>

<template>
  <h1>Frontend Slot Machine</h1>
   <p>{{gameStatus}}</p>
  <!-- Body
      wheels *3
   -->
   <div class="wheel-row">
      <Wheel v-for="(item, index) in slotItems" :key="item+index" :wheelId="index" :item="item"/>
   </div>

   <button @click="selectItems">Spin the Wheel</button>
   <!-- Button / Handle -->
  
</template>

<style>
.wheel-row {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
}
</style>
