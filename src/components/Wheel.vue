<script setup>
const props = defineProps({
  wheelId: {
    type: Number, 
    required: true
  },
  item: {
    type: String, 
    required: true
  },
})

</script>

<template>
<div>

  <h2>Wheel {{wheelId}}</h2>
<p class="chosen-item">{{item}}</p>
</div>
</template>

<style>
.chosen-item{ 
  font-size: 5rem;
}
</style>