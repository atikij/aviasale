<script setup>
import {ref, onMounted, watch} from 'vue';

// Тестовые данные билетов
const testTickets = [
  {
    id: 1,
    flight: 'SU 123',
    departure_location: 'Москва',
    arrival_location: 'Воронеж',
    departure_date: '25.03.2024',
    return_date: '01.04.2024',
    price: '2500 руб.'
  },
  {
    id: 2,
    flight: 'AF 456',
    departure_location: 'Париж',
    arrival_location: 'Лондон',
    departure_date: '01.06.2024',
    return_date: '10.06.2024',
    price: '150 евро'
  },
  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },
  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },  {
    id: 3,
    flight: 'LH 789',
    departure_location: 'Берлин',
    arrival_location: 'Нью-Йорк',
    departure_date: '05.09.2024',
    return_date: '15.09.2024',
    price: '400 долларов'
  },
];

const tickets = ref([]);

// Сохраняем билеты в localStorage
const saveTicketsToLocalStorage = (tickets) => {
  localStorage.setItem('tickets', JSON.stringify(tickets));
};

// Загружаем билеты из localStorage
const loadTicketsFromLocalStorage = () => {
  const savedTickets = localStorage.getItem('tickets');
  return savedTickets ? JSON.parse(savedTickets) : [];
};

// Имитируем загрузку билетов
const loadTickets = () => {
  tickets.value = loadTicketsFromLocalStorage();
  if (!tickets.value.length) {
    tickets.value = testTickets;
    saveTicketsToLocalStorage(tickets.value);
  }
};

// Загружаем билеты при монтировании компонента
onMounted(() => {
  loadTickets();
});

// Следим за изменениями билетов и обновляем localStorage
watch(tickets, (newTickets) => {
  saveTicketsToLocalStorage(newTickets);
});

</script>

<template>
  <main class="main-ticket">
    <div class="search-container">
      <input type="text" placeholder="Откуда" class="search-input"/>
      <input type="text" placeholder="Куда" class="search-input"/>
      <input type="date" placeholder="Дата отправления" class="search-input"/>
      <input type="number" placeholder="Количество пассажиров" class="search-input"/>
      <button class="search-button">Поиск</button>
    </div>
    <div class="ticket-container">
      <div v-for="ticket in tickets" :key="ticket.id" class="ticket">
        <div class="ticket-info">
          <p class="route">{{ ticket.departure_location }} &#8594; {{ ticket.arrival_location }}</p>
          <p class="dates">{{ ticket.departure_date }} - {{ ticket.return_date }}</p>
        </div>
        <div class="ticket-actions">
          <router-link :to="'/tickets/pay/' + ticket.id">
            <button class="buy-button">Купить</button>
          </router-link>
          <i class="favorite-icon">&#9734;</i>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
.main-ticket {
  display: grid;
  margin: 0;
  padding: 0;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: white;
  margin-bottom: 20px;
  padding: 20px;
  gap: 10px;
}

.search-input {
  flex: 1;
  height: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: 0;
}

.search-button {
  padding: 10px 20px;
  border: none;
  height: 60%;
  border-radius: 20px;
  background-color: #22577A;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

.ticket-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 80vh;
  width: 80vw;
  background: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  overflow-y: auto; /* Вертикальная прокрутка */
}

.ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 100%; /* Ширина билета */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ticket-info {
  display: flex;
  flex-direction: column;
}

.route {
  font-size: 1.2em;
  color: #22577A;
  margin: 0;
}

.dates {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.ticket-actions {
  display: flex;
  align-items: center;
}

.buy-button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #22577A;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #0056b3;
}

.favorite-icon {
  font-size: 1.5em;
  color: #22577A;
  margin-left: 10px;
  cursor: pointer;
}

.favorite-icon:hover {
  color: #0056b3;
}
</style>
