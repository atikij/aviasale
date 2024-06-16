<template>
  <main class="settings-main">
    <div class="settings-container">
      <h2>Настройки</h2>
      <div class="settings-content">
        <section class="regional-settings">
          <h3>Региональные</h3>
          <p>Нужно для отображения проходящих билетов</p>
          <div class="form-row">
            <label for="country">Страна</label>
            <select id="country" v-model="country">
              <option value="Россия">Россия</option>
              <!-- Добавьте другие страны по мере необходимости -->
            </select>
          </div>
          <div class="form-row">
            <label for="city">Город проживания</label>
            <select id="city" v-model="city">
              <option value="Москва, Россия">Москва, Россия</option>
              <!-- Добавьте другие города по мере необходимости -->
            </select>
          </div>
          <div class="form-row">
            <label for="citizenship">Гражданство</label>
            <select id="citizenship" v-model="citizenship">
              <option value="Россия">Россия</option>
              <!-- Добавьте другие варианты по мере необходимости -->
            </select>
          </div>
          <div class="form-row">
            <label for="currency">Валюта</label>
            <select id="currency" v-model="currency">
              <option value="Российский рубль">Российский рубль</option>
              <!-- Добавьте другие валюты по мере необходимости -->
            </select>
          </div>
          <div class="form-row">
            <label for="paymentMethod">Способ оплаты</label>
            <select id="paymentMethod" v-model="paymentMethod">
              <option value="Банковской картой">Банковской картой</option>
              <!-- Добавьте другие способы оплаты по мере необходимости -->
            </select>
          </div>
        </section>
        <div class="additional-settings">
          <button class="format-btn" @click="chooseDateFormat">Формат даты</button>
          <button class="language-btn" @click="chooseLanguage">Язык</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      country: 'Россия',
      city: 'Москва, Россия',
      citizenship: 'Россия',
      currency: 'Российский рубль',
      paymentMethod: 'Банковской картой'
    };
  },
  methods: {
    chooseDateFormat() {
      // Логика выбора формата даты
      alert('Выбор формата даты');
    },
    chooseLanguage() {
      // Логика выбора языка
      alert('Выбор языка');
    }
  }
}
</script>

<style scoped>
.settings-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0f7f8;
  padding: 20px;
}

.settings-container {
  width: 90vw;
  max-width: 800px;
  background: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #033e6b;
}

.settings-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.regional-settings {
  flex: 2;
  padding: 20px;
  background: #f0fbfc;
  border-radius: 15px;
}

h3 {
  margin-top: 0;
  color: #033e6b;
}

p {
  font-size: 0.9em;
  color: #6b6b6b;
  margin-bottom: 20px;
}

.form-row {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #033e6b;
  font-weight: bold;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #d3f2f3;
  font-size: 1em;
}

.additional-settings {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.format-btn,
.language-btn {
  width: 200px;
  padding: 15px;
  border: none;
  border-radius: 20px;
  background-color: #033e6b;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.format-btn:hover,
.language-btn:hover {
  background-color: #0056b3;
}
</style>
