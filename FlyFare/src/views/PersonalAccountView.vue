<template>
  <main class="main">
    <div class="profile-container">
      <h2>Личный кабинет</h2>
      <div class="profile-content">
        <!-- Avatar section -->
        <div class="avatar-section">
          <div class="avatar">
            <img v-if="avatarUrl" :src="avatarUrl" alt="Аватар" class="avatar-image">
            <div v-else>Аватар</div>
          </div>
          <input type="file" ref="avatarInput" accept="image/*" @change="handleAvatarChange" style="display: none;">
          <button class="change-avatar-btn" @click="openAvatarInput">Изменить аватар</button>
          <button class="delete-avatar-btn" @click="deleteAvatar">Удалить аватар</button>
        </div>

        <!-- Details section -->
        <div class="details-section">
          <div class="row">
            <input type="text" placeholder="Фамилия" v-model="user.lastName" />
            <input type="text" placeholder="Имя" v-model="user.firstName" />
            <input type="text" placeholder="Отчество" v-model="user.middleName" />
            <input type="date" placeholder="День рождения" v-model="user.birthDate" />
          </div>
          <div class="row">
            <input type="text" placeholder="Гражданство" v-model="user.citizenship" />
            <input type="text" placeholder="Серия паспорта" v-model="user.passportSeries" />
            <input type="text" placeholder="Номер паспорта" v-model="user.passportNumber" />
            <input type="tel" placeholder="Моб. телефон" v-model="user.phone" />
            <input type="email" placeholder="Почта" v-model="user.email" />
          </div>
        </div>
      </div>
      <button class="edit-btn" @click="saveProfile">Сохранить</button>
    </div>
  </main>
</template>



<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Retrieve user data from Vuex store
const user = computed(() => store.getters.getUser);

// State to hold the avatar URL
let avatarUrl = ref('');

// Method to handle avatar input change
const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadAvatar(file);
  }
};

// Method to upload avatar and get URL
const uploadAvatar = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    avatarUrl.value = reader.result;
    localStorage.setItem('avatarUrl', reader.result); // Save avatar URL to localStorage
  };
};

// Method to open avatar input dialog
const openAvatarInput = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = handleAvatarChange;
  input.click();
};

// Method to delete avatar (placeholder)
const deleteAvatar = () => {
  avatarUrl.value = ''; // Clear avatar URL
  localStorage.removeItem('avatarUrl'); // Remove avatar URL from localStorage
  alert('Аватар удален');
};

// Method to save profile data to Vuex store and localStorage
const saveProfile = () => {
  store.dispatch('setUser', user.value); // Dispatch action to update user data in Vuex store
  saveUserDataToLocalStorage(user.value); // Save user data to localStorage
  alert('Профиль сохранен'); // Display confirmation message (you can remove or modify this)
};

// Function to save user data to localStorage
const saveUserDataToLocalStorage = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

// Load user data and avatar URL from localStorage on component mount
onMounted(() => {
  const userDataFromLocalStorage = localStorage.getItem('user');
  if (userDataFromLocalStorage) {
    store.dispatch('setUser', JSON.parse(userDataFromLocalStorage));
  }

  const savedAvatarUrl = localStorage.getItem('avatarUrl');
  if (savedAvatarUrl) {
    avatarUrl.value = savedAvatarUrl;
  }
});
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
  overflow: hidden; /* Ensure the image is clipped to the circle */
  margin-bottom: 10px;
  position: relative;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make sure the image covers the container */
  object-position: center; /* Center the image */
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
