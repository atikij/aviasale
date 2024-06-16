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

<template>
  <main class="main-ticket">
    <div class="ticket-container">
      <div v-for="ticket in favoriteTickets" :key="ticket.id" class="ticket-item">
        <h3>{{ ticket.airline }}</h3>
        <p>Destination: {{ ticket.destination }}</p>
        <p>Price: {{ ticket.price }}</p>
        <!-- Дополнительные поля билета могут быть добавлены сюда -->
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-ticket {
  display: grid;
  place-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0; /* Фон для примера */
}

.ticket-container {
  display: flex;
  flex-direction: column;
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
</style>
