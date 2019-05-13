<template>
  <div class="LandArrive">
    <h1 class="intro">
      Vous vous apprêtez à prendre le bateau pour arriver sur la fameuse ile
      <br>où se passe l'examen hunter
      <br>Vous êtes arrivé mais qu'est-ce que vous réserve cette ile ?
    </h1>
    <router-link class="button" to="/id4">Suivant</router-link>
    <router-link class="button" to="/">&#127968;Home</router-link>
  </div>
</template>

<script>
import data from "../../data.json";
</script>

<style>
.LandArrive {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  background-image: url(../assets/WhaleIsland.jpg);
  background-size: cover;
}
</style>
