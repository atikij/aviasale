<template>
      <input type="password" id="password" :value="password" @input="password = $event.target.value" placeholder="Почта/телефон" required>
      <input type="text" id="username" :value="username" @input="username = $event.target.value" placeholder="Логин" required>
      <input type="password" id="password" :value="password" @input="password = $event.target.value" placeholder="Пароль" required>
      <input type="password" id="password" :value="password" @input="password = $event.target.value" placeholder="Повторите пароль" required>
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
      // Здесь добавьте логику для входа
      console.log('Вход выполнен');
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
