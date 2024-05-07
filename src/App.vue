<script setup>
import { ref, onMounted, computed } from 'vue'
import Header from './components/Header.vue'
import ItemCard from './components/Item/Card.vue'
import Sidebar from './components/Sidebar.vue';

const items = ref([])
const team = ref([])
const filter = ref('')

async function fetchItems() {
  try {
    const itemsRawData = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
    const itemsJson = await itemsRawData.json()
    items.value = itemsJson
  } catch (error) {
    console.error(error, 'Une erreur est survenue lors du chargement de la page')
  }

}
onMounted(async () => {
    fetchItems()
})

function pushToTeam(item) {
  team.value.push(item)
}

function assignFilter(types) {
  filter.value = types
}

const itemsByTypes = computed(() => {
  if (filter.value === '') {
    return items.value
  } else {
    return items.value.filter((item) => item.types === filter.value)
  }
}) 

</script>

<template>
  <div class="min-h-screen ">
    <Navbar />
    <Header />
    <main class="max-w-screen-lg m-auto">
      <div>
        <div v-if="error" class="bg-red-500 text-center m-4 rounded-md shadow-lg text-white px-2 py-1"> {{
          'Une erreur est survenue lors du chargement' }}</div>
        <div v-else>
          <div class="grid grid-cols-4 gap-4">
            <Sidebar @filterTypes="assignFilter" />
            <div class="col-span-3 grid grid-cols-3 gap-2">
              <ItemCard v-for="item in itemsByTypes" :key="item.id" :item="item" @addToTeam="pushToTeam" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>