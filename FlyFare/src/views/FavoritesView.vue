<template>
  <main class="main-ticket">
    <span class="main-ticket-title">Избранные билеты</span>
    <div class="ticket-container">
      <div class="main-ticket-first-container">
        <div class="main-ticket-inputs">
          <input type="text"/>
          <input type="text"/>
        </div>
        <div>
          <div v-for="ticket in 10">
            {{ticket}}
          </div>
        </div>
      </div>
      <div class="main-ticket-first-container">
        <div class="main-ticket-inputs">
          <input type="text"/>
          <button/>
        </div>
        <div>
          <div class="main-tickets" v-for="ticket in 10">
            {{ticket}}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Импортируем ref для хранения данных и onMounted для выполнения действий при монтировании компонента

// Имитация данных избранных билетов
const favoriteTickets = ref([]);

// Функция для загрузки данных избранных билетов (здесь может быть запрос к API)
const loadFavoriteTickets = () => {
  // Здесь вы можете выполнить запрос к вашему API для получения списка избранных билетов
  // Например, использовать Axios для этого
  // axios.get('/api/favorite_tickets')
  //   .then(response => {
  //     favoriteTickets.value = response.data;
  //   })
  //   .catch(error => {
  //     console.error('Error loading favorite tickets:', error);
  //   });

  // Для примера загрузим статические данные
  favoriteTickets.value = [
    { id: 1, airline: 'Airline A', destination: 'Destination A', price: '$100' },
    { id: 2, airline: 'Airline B', destination: 'Destination B', price: '$150' },
    { id: 3, airline: 'Airline C', destination: 'Destination C', price: '$120' },
  ];
};

// Вызываем функцию загрузки данных при первом рендере компонента
onMounted(loadFavoriteTickets);
</script>



<style scoped>
.main-ticket {
 display: flex;
  flex-direction: column;
}

.ticket-container {
  display: flex;
  gap: 20px;
  max-height: 80vh; /* Ограничиваем высоту контейнера для прокрутки */
  width: 80vw;
  background: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  overflow-y: auto; /* Вертикальная прокрутка */
}

.ticket-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.main-ticket-inputs {
  
  input{
   width: 100%;
   height:  50px;
  background: #CBF3F0A8;
border-radius: 15px;
  }
}
</style>
