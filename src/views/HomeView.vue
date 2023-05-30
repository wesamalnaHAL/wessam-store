<script setup>
import Nav from '../components/Nav.vue';
import Card from "../components/Card.vue";

</script>

<template>
  <main>
    <Nav />
    <Card />
    <Basket :basket="basket" /> <!-- Pass the 'basket' prop -->
  </main>
</template>
