<template>
  <main class="main">
    <div class="login-container">
      <div class="logo-container">
        <h1 class="icon-text">FF</h1>
        <h1 class="icon-text">FlyFare</h1>
      </div>
      <Registration/>
    </div>
  </main>
</template>

<style>
.main{
  display: grid;
}
</style>
<script setup>
import Registration from "@/components/Registration.vue";
import LoginComponent from "@/components/Login.vue";
</script>
