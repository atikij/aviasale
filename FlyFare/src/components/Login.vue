<template>
    <input type="text" id="username" :value="username" @input="username = $event.target.value" placeholder="Логин" required>
    <input type="password" id="password" :value="password" @input="password = $event.target.value" placeholder="Пароль" required>
    <button type="button" @click="login">Войти</button>
    <div class="links">
      <!--<router-link to="/forgot-password">Забыли пароль?</router-link>-->
      <router-link to="/registration">Регистрация</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$router.push('/account');
    },
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input {
  background: #CBF3F0;
  width: 100%;
  height: 10%;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-bottom: 5%;
}

button {
  width: 100%;
  height: 10%;
  padding: 10px;
  background-color: #22577A;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 25%;
}

.links {

  display: flex;
  flex-direction: row-reverse;
}

.links a {
  display: block;
  margin-bottom: 10px;
  color: #22577A;
  text-decoration: none;
}

.links a:hover {
  background: none;
  text-decoration: underline;
}
</style>
