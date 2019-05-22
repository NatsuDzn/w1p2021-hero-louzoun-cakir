<template>
  <div class="home">
    <audio src="../assets/audios/home.mp3" autoplay loop></audio>
    <h1 class="home__text">{{ message }}</h1>
    <router-link class="home__link" to="/intro">Jouer</router-link>
    <router-link class="home__link" to="/characters">Choisir votre personnage</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Bienvenue sur le jeu"
    };
  }
};
</script>
