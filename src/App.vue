<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">
          <img src="./assets/wine-logo.png" alt="" />
        </router-link>
        <div>
          <router-link to="/maintenance">Clube</router-link>
          <router-link to="/maintenance">Loja</router-link>
          <router-link to="/maintenance">Produtores</router-link>
          <router-link to="/maintenance">Ofertas</router-link>
          <router-link to="/maintenance">Eventos</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext");

* {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
}

#app {
  background: #f5f5f5;
  font: normal normal normal 20px Lato;
  text-align: center;
  color: #666666;
  height: 100vh;
}

#nav {
  background: #ffffff;
  padding: 1.5rem;

  div {
    position: relative;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  img {
    padding: 0 5rem 0 0;
  }

  div div {
    width: 45%;
    justify-content: space-between;
    margin-left: unset;
  }

  a {
    color: #666666;
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: none;
    }
  }
}

@media only screen and (max-width: 1180px) {
  #nav {
    div {
      justify-content: space-between;
    }

    div div {
      display: none;
    }
  }
}
</style>

<script>
export default {
  name: "App",
  created() {
    localStorage.removeItem("cartList");
  },
};
</script>
