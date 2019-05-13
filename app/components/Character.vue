<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="wrapper">
    <router-link to="/game/1"><img class="sprites" src="../assets/sprites/Gon.png"/></router-link>
    <router-link to="/game/1bis"><img class="sprites" src="../assets/sprites/Kirua.png"/></router-link>
    <router-link to="/game/1"><img class="sprites" src="../assets/sprites/Kurapika.png"/></router-link>
    <router-link to="/game/1"><img class="sprites" src="../assets/sprites/Leolio.png"/></router-link>
    </div>
    <router-link class="button" to="/game/1">Choisir le chemin par défaut</router-link>
    <router-link class="button" to="/">&#127968;Home</router-link>
  </div>
</template>

<style>
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
</style>


<script>
export default {
  data() {
    return {
      message: 'Choisissez votre personnage'
    };
  }
};
</script>
