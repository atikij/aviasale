<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const newTicket = ref({
  from: '',
  to: '',
  date: '',
  time: '',
  fullName: '',
  firstName: '',
  middleName: '',
  citizenship: '',
  passportSeries: '',
  passportNumber: '',
  phone: '',
  email: '',
  amount: '',
  method: '',
});

const route = useRoute();
const ticketId = ref(null);

const loadTicketFromLocalStorage = () => {
  const tickets = JSON.parse(localStorage.getItem('tickets'));
  if (!tickets) {
    console.error('No tickets in localStorage');
    return;
  }

  const ticket = tickets.find(t => t.id === parseInt(ticketId.value));
  if (!ticket) {
    console.error(`Ticket with id ${ticketId.value} not found`);
    return;
  }

  newTicket.value = {
    from: ticket.departure_location,
    to: ticket.arrival_location,
    date: ticket.departure_date, // Подставьте правильное поле из объекта билета
    returnDate: ticket.return_date,
    flight: ticket.flight,
    time: '', // Время можно задать отдельно
    fullName: '', // Пользователь заполнит
    firstName: '', // Пользователь заполнит
    middleName: '', // Пользователь заполнит
    citizenship: '', // Пользователь заполнит
    passportSeries: '', // Пользователь заполнит
    passportNumber: '', // Пользователь заполнит
    phone: '', // Пользователь заполнит
    email: '', // Пользователь заполнит
    amount: ticket.price,
    method: '', // Пользователь заполнит
  };
};


onMounted(() => {
  ticketId.value = parseInt(route.params.ticketId); // Получаем id билета из параметров маршрута и парсим его как число
  loadTicketFromLocalStorage();
});

const submitTicket = () => {
  console.log('Отправка данных:', newTicket.value);
};
</script>

<template>
  <main class="main-ticket">
    <div class="ticket-container">
      <div class="ticket-info">
        <h2>Информация о билете:</h2>
        <p><strong>Откуда:</strong> {{ newTicket.from }}</p>
        <p><strong>Куда:</strong> {{ newTicket.to }}</p>
        <p><strong>Дата отправления:</strong> {{ newTicket.date }}</p>
        <p><strong>Дата возвращения:</strong> {{ newTicket.returnDate }}</p>
        <p><strong>Рейс:</strong> {{ newTicket.flight }}</p>
        <p><strong>Цена:</strong> {{ newTicket.amount }}</p>
      </div>
      <div class="ticket-form">
        <h2>Заполните данные о билете:</h2>
        <form @submit.prevent="submitTicket">
          <div class="form-row">
            <input type="text" placeholder="Фамилия" v-model="newTicket.fullName" required>
            <input type="text" placeholder="Имя" v-model="newTicket.firstName" required>
            <input type="text" placeholder="Отчество" v-model="newTicket.middleName">
          </div>
          <div class="form-row">
            <input type="text" placeholder="Гражданство" v-model="newTicket.citizenship" required>
            <input type="text" placeholder="Серия паспорта" v-model="newTicket.passportSeries" required>
            <input type="text" placeholder="Номер паспорта" v-model="newTicket.passportNumber" required>
          </div>
          <div class="form-row">
            <input type="tel" placeholder="Контактный телефон" v-model="newTicket.phone" required>
            <input type="email" placeholder="Email для контактного лица" v-model="newTicket.email" required>
          </div>
          <div class="form-row">
            <input type="text" placeholder="Метод оплаты" v-model="newTicket.method" required>
          </div>
          <button type="submit">Оплатить</button>
        </form>
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

.ticket-info {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f0f0f0;
}

.ticket-info h2 {
  font-size: 1.2em;
  color: #033e6b;
  margin-bottom: 10px;
}

.ticket-info p {
  margin: 5px 0;
}

.ticket-form {
  width: 100%; /* Чтобы форма занимала всю доступную ширину контейнера */
}

.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.form-row input[type="text"],
.form-row input[type="tel"],
.form-row input[type="email"],
.form-row input[type="date"] {
  flex: 1; /* Распределение инпутов по ширине контейнера */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #d3f2f3;
  font-size: 0.9em;
}

.form-row input[type="text"]:focus,
.form-row input[type="tel"]:focus,
.form-row input[type="email"]:focus,
.form-row input[type="date"]:focus {
  outline: none; /* Убираем фокусную рамку */
  border-color: #0056b3; /* Изменяем цвет рамки при фокусе */
}

button[type="submit"] {
  margin-top: 20px;
  padding: 15px 30px;
  border: none;
  border-radius: 20px;
  background-color: #033e6b;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>
