<template>
    <aside class="col-span-1">
      <ul class="space-y-4">
        <li v-for="type in types" :key="type">
          <button class="px-2 py-1" @click="emit('filterTypes',type)">
            <img :src="type.image" alt="types" class=""/>
          </button>
        </li>
      </ul>
    </aside>
  </template>
  
  <script setup>
  
  import { onMounted, ref } from 'vue'
  
  const types = ref([])
  
  async function fetchTypes() {
    const res = await fetch('https://pokebuildapi.fr/api/v1/types')
    types.value = await res.json()
  }
  
  onMounted(async() => {
    fetchTypes()
  })
  
  const emit = defineEmits({
    filterTypes: (type) => type
  })
  
  </script>