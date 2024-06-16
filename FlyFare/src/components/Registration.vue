<template>
  <input type="email" id="email" v-model="email" placeholder="Почта" required>
  <input type="text" id="username" v-model="username" placeholder="Логин" required>
  <input type="password" id="password" v-model="password" placeholder="Пароль" required>
  <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Подтвердить пароль" required>
    <button type="button" @click="login" >Зарегистрироваться</button>
    <div class="links" style="">
      <router-link to="/">Назад</router-link>
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
      this.$router.push('/');
    }
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
  margin-bottom: 10px;
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
}

.links {
  margin-top: 20px;
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
