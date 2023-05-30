<script setup>
import products from "../data/products.json"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { ref , watch } from "vue";


const basket = ref([])
watch(basket.value, (value) => {
  console.log(value)
  localStorage.setItem("bs", JSON.stringify(value))
})
const addToBasket = (product) => {
    const existProduct = basket.value.some(item => item.id === product.id)
    if(!existProduct) {
      basket.value.push(product)
  }
  }
</script>

<template>
  <div class="row">
    <div class="card" v-for="product in products" :key="product.id" style="width: 18rem;">
        <router-link :to="`/product/${product.id}`"><img :src="product.img" class="card-img-top"/></router-link>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }} </h5>
            <p class="card-text">${{ product.price }} </p>
            <button @click="addToBasket(product)" class="btn btn-primary">Add To Card</button>
        </div>
  </div>

  </div>
</template>

<style scoped>
.row-wrapper {
  overflow-x: hidden;
}

.row {
  margin-left: 50px;
  margin-top: 50px;
}

.row-wrapper,
.row,
.card {
  box-sizing: border-box;
}

.row-wrapper,
.row {
  white-space: nowrap;
}
</style>
