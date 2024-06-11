<template>
  <main class="main">
    <div class="account-container">
      <h2>Личный кабинет</h2>
      <div class="profile-container">
        <div class="avatar-section">
          <div class="avatar">
            Аватар
          </div>
          <button class="change-avatar-btn" @click="changeAvatar">Изменить аватар</button>
          <button class="delete-btn" @click="deleteAvatar">Удалить</button>
        </div>
        <div class="details-section">
          <div class="row">
            <input type="text" placeholder="Имя" v-model="firstName" />
            <input type="text" placeholder="Фамилия" v-model="lastName" />
            <input type="text" placeholder="Отчество" v-model="middleName" />
            <input type="text" placeholder="День рождение" v-model="birthDate" />
          </div>
          <div class="row">
            <input type="text" placeholder="Гражданство" v-model="citizenship" />
            <input type="text" placeholder="Серия паспорта" v-model="passportSeries" />
            <input type="text" placeholder="Номер паспорта" v-model="passportNumber" />
            <input type="text" placeholder="Моб. телефон" v-model="phone" />
            <input type="text" placeholder="Почта" v-model="email" />
          </div>
        </div>
      </div>
      <button class="edit-btn" @click="editProfile">Редактировать</button>
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

<style>
.main{
  display: grid;
}

.account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 80vw;
  background: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
}

.user-profile {
  padding: 20px;
  background-color: #e0f7f8;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #033e6b;
}
.profile-container {
  display: flex;
  justify-content: space-between;
}
.avatar-section {
  flex: 1;
  text-align: center;
}
.avatar {
  width: 15vh;
  height: 10vw;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
}
button {
  display: block;
  width: 150px;
  padding: 10px;
  margin: 10px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.change-avatar-btn {
  background-color: #033e6b;
  color: #fff;
}
.delete-btn {
  background-color: #fff;
  border: 1px solid #033e6b;
  color: #033e6b;
}
.details-section {
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.row {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
}
input {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #d3f2f3;
  margin-bottom: 10px;
}
.edit-btn {
  background-color: #033e6b;
  color: #fff;
  width: 200px;
  margin: 20px auto 0;
}
</style>
