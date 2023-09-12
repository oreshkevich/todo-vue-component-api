<template>
  <div class="container">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.container {
  max-width: 1210px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.app {
  max-width: 640px;
  margin: 30px auto;
  padding: 0 20px;

  &__title {
    text-align: center;
    font-size: 5rem;
    font-weight: 100;
    letter-spacing: 0.02em;
    margin-top: 0;
    margin-bottom: 50px;
    color: var(--color-title);

    @media (max-width: 541px) {
      font-size: 4rem;
      margin-bottom: 30px;
    }
  }
}
:root {
  box-sizing: border-box;
  font-size: 16px;

  --color-completed: rgba(170, 168, 168);
  --color-title: #e2c4c4;
  --color-shadow: rgba(170, 168, 168, 0.5);
  --color-btn: #b46969;

  --border: 1px solid rgb(205, 205, 205);
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  min-height: 100vh;
  background: -webkit-linear-gradient(
    202deg,
    #f9f9f9,
    #e6e6e6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    202deg,
    #f9f9f9,
    #e6e6e6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

