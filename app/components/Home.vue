<template>
  <div class="big-header">
    <img class="logo" src="../assets/logo.png">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/character">Choisir un personnage</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bienvenue sur le jeu'
    };
  }
};
</script>