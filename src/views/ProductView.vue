<script setup>
  import { useRoute } from "vue-router";
  import products from "../data/products.json";
  import Nav from "../components/Nav.vue";

  const route = useRoute();
  const product = products.find((p) => p.id === parseInt(route.params.id));
</script>

<template>
  <div class="product-view">
    <Nav />
    <div class="product-container">
      <div class="product-image">
        <img :src="product.img" alt="Product Image" />
      </div>
      <div class="product-details">
        <h5 class="product-name">{{ product.name }}</h5>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .product-view {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f8f8f8;
  }

  .product-image {
    margin-bottom: 20px;
  }

  .product-image img {
    max-width: 100%;
    height: 400px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .product-details {
    text-align: center;
  }

  .product-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .product-description {
    font-size: 16px;
  }
</style>
