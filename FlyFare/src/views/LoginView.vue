<script setup>
import LoginComponent from '../components/Login.vue'
</script>

<template>
  <main class="main">
    <div class="login-container">
      <div class="logo-container">
        <h1 class="icon-text">FF</h1>
        <h1 class="icon-text">FlyFare</h1>
      </div>
    <LoginComponent />
    </div>
  </main>
</template>

<style>
.main{
  display: grid;
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px; /* добавлено для отступа между логотипом и формой входа */
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 20vw;
  background: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
}

.icon-text {
  color: #22577A;
  font-family: 'MuseoModerno', sans-serif;
  font-weight: bold;
  font-size: 40px;
}
</style>
