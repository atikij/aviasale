<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      Fly
      Flare
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Меню</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-symbols-outlined">group</span>
        <span class="text">вход</span>
      </router-link>
      <router-link to="/registration" class="button">
        <span class="material-symbols-outlined">orders</span>
        <span class="text">Регистрация</span>
      </router-link>
      <router-link to="/account" class="button">
        <span class="material-symbols-outlined">menu_book</span>
        <span class="text">аккаунт</span>
      </router-link>
      <router-link to="/tickets" class="button">
        <span class="material-symbols-outlined">description</span>
        <span class="text">билеты</span>
      </router-link>
      <router-link to="/tickets/pay" class="button">
        <span class="material-symbols-outlined">nutrition</span>
        <span class="text">Продукты</span>
      </router-link>
      <router-link to="/ticketsFavorites" class="button">
        <span class="material-symbols-outlined">nutrition</span>
        <span class="text">Избранные</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-symbols-outlined">settings</span>
        <span class="text">Настройки</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/logo.svg'

const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--dark);
  color: var(--light);

  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    color: white;
    font-size: 100%;
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-symbols-outlined {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-symbols-outlined {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-symbols-outlined,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-symbols-outlined {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
