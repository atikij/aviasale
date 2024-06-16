<template>
  <main class="main">
    <div class="profile-container">
      <h2>Личный кабинет</h2>
      <div class="profile-content">
        <div class="avatar-section">
          <div class="avatar">
            Аватар
          </div>
          <button class="change-avatar-btn" @click="changeAvatar">Изменить аватар</button>
          <button class="delete-avatar-btn" @click="deleteAvatar">Удалить</button>
        </div>
        <div class="details-section">
          <div class="row">
            <input type="text" placeholder="Фамилия" v-model="lastName" />
            <input type="text" placeholder="Имя" v-model="firstName" />
            <input type="text" placeholder="Отчество" v-model="middleName" />
            <input type="date" placeholder="День рождения" v-model="birthDate" />
          </div>
          <div class="row">
            <input type="text" placeholder="Гражданство" v-model="citizenship" />
            <input type="text" placeholder="Серия паспорта" v-model="passportSeries" />
            <input type="text" placeholder="Номер паспорта" v-model="passportNumber" />
            <input type="tel" placeholder="Моб. телефон" v-model="phone" />
            <input type="email" placeholder="Почта" v-model="email" />
          </div>
        </div>
      </div>
      <button class="edit-btn" @click="editProfile">Сохранить</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      lastName: '',
      firstName: '',
      middleName: '',
      citizenship: '',
      passportSeries: '',
      passportNumber: '',
      birthDate: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    changeAvatar() {
      // Логика изменения аватара
      alert('Изменить аватар');
    },
    deleteAvatar() {
      // Логика удаления аватара
      alert('Удалить аватар');
    },
    editProfile() {
      // Логика редактирования профиля
      alert('Редактировать профиль');
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-container {
  width: 90vw;
  max-width: 1200px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #033e6b;
}

.profile-content {
  display: flex;
  justify-content: space-between;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
}

.change-avatar-btn,
.delete-avatar-btn {
  width: 150px;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9em;
}

.change-avatar-btn {
  background-color: #033e6b;
  color: #fff;
  transition: background-color 0.3s ease;
}

.change-avatar-btn:hover {
  background-color: #0056b3;
}

.delete-avatar-btn {
  background-color: #fff;
  border: 1px solid #033e6b;
  color: #033e6b;
  transition: background-color 0.3s ease;
}

.delete-avatar-btn:hover {
  background-color: #f0f0f0;
}

.details-section {
  flex: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #d3f2f3;
  font-size: 0.9em;
}

.edit-btn {
  display: block;
  margin: 30px auto 0;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  background-color: #033e6b;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #0056b3;
}
</style>
