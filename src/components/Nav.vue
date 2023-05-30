<script setup>
  import {ref, onMounted} from 'vue';
  const basket = ref([])
  onMounted(()=> {
    basket.value = JSON.parse(localStorage.getItem("bs") || "[]" )
  })

</script>

<template>
    <header>
        <h1>Wessam Shop</h1>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><router-link to="/basket">Basket {{basket.length}}</router-link></li>
          </ul>
        </nav>
      </header>
</template>

<style scoped>
header {
    background-color: #007bff; /* Blue background color */
    color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  h1 {
    margin: 0;
    font-size: 24px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  
  nav ul li {
    margin: 0 30px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }
</style>