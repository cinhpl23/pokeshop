<template>
  <div class="border-2 relative">
    <img :src="item.image" alt="item.name" class="w-full h-48 object-cover" />
    <h3 class="text-cyan-600">{{ item.name }}</h3>
    <div class="text-cyan-500"></div>
    <div class="flex justify-between">
      <AddToTeam @click="emit('addToTeam', item)"/>
     </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import AddToTeam from './AddToTeam.vue';

defineProps({
  item: {
    type: Object,
    required:true
  },
})

const emit = defineEmits({
  AddToTeam: (item) => item,
})

</script>