<template>
  <main class="main-ticket">
    <span class="main-ticket-title">Избранные билеты</span>
    <div class="ticket-container">
      <div class="main-ticket-first-container">
        <div class="main-ticket-inputs">
          <input type="text" placeholder="Откуда"/>
          <input type="text" placeholder="Куда"/>
        </div>
        <div>
          <div v-for="ticket in tickets" :style="{
            'padding': '10px'
          }">
            <div class="ticket">
              <span>{{ `${ticket.departure_location} - ${ticket.arrival_location}` }}</span>
              <span>{{ `${ticket.departure_date} - ${ticket.return_date}` }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-ticket-first-container">
        <div class="main-ticket-inputs">
          <input type="date" placeholder="Дата"/>
          <button class="search-button">Поиск</button>
        </div>
        <div>
          <div v-for="ticket in tickets" :style="{
            'padding': '10px'
          }">
            <div class="ticket">
              <span>{{ `${ticket.departure_location} - ${ticket.arrival_location}` }}</span>
              <span>{{ `${ticket.departure_date} - ${ticket.return_date}` }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';
import {useStore} from 'vuex';

// Имитация данных избранных билетов
const favoriteTickets = ref([]);

const store = useStore();
const tickets = computed(() => store.state.tickets);
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
    {id: 1, airline: 'Airline A', destination: 'Destination A', price: '$100'},
    {id: 2, airline: 'Airline B', destination: 'Destination B', price: '$150'},
    {id: 3, airline: 'Airline C', destination: 'Destination C', price: '$120'},
  ];
};

// Вызываем функцию загрузки данных при первом рендере компонента
onMounted(loadFavoriteTickets);
</script>


<style scoped>
.main-ticket {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}

.ticket-container {
  display: flex;
  gap: 20px;

  width: 80%;
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
  display: flex;
  justify-content: space-between;

  input {
    max-width: 50%;
    height: 50px;
    background: #CBF3F0A8;
    border-radius: 15px;
    overflow-inline: hidden;
    border: none;
    color: #22577A;
    text-align: center;
  }
}

.main-ticket-first-container {
  width: 50%;
}

.search-button {
  width: 100px;
  height: 50px;
  background: #22577A;
  border-radius: 15px;
  color: white;
}

.main-ticket-title {
  align-content: center;
  font-size: 40px;
  color: #22577A;
}

.ticket {

  display: flex;
  flex-direction: column;
  background: #CBF3F0A8;
  border-radius: 15px;

  span {
    margin-left: 10px;
    text-align: start;
  }
}
</style>
