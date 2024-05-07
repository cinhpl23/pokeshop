<script setup>
import NavBar from './NavBar.vue';
</script>

<template>
    <header class="bg-primary-600 flex justify-between items-center">
        <NavBar />
    </header>
</template>

<style scoped>
header {
    background-color: primary;
    padding: 1rem;
}

h1 {
    color: white;
    font-size: 1.2rem;
}

</style>