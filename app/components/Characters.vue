<template>
  <div class="wrapper">
    <router-link to="/game/1">
      <img class="sprites" src="../assets/images/sprites/Gon.png">
    </router-link>
    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Kirua.png">
    </router-link>
    <input v-model="name" v-on:keyup.enter="registerName" placeholder="Entrez votre nom">

    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Kurapika.png">
    </router-link>
    <router-link to="/game/3">
      <img class="sprites" src="../assets/images/sprites/Leolio.png">
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ""
      };
    },
    methods: {
      registerName() {
        localStorage.setItem('playerName', this.name)
        window.location.href = 'http://localhost:1234/intro'
      }
    }
  };
</script>