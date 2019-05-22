<template>
  <div class="win">
    <audio src="../assets/audios/win.mp3" autoplay loop></audio>
    <h1 class="win__title">Vous êtes maintenant un Hunter<br> vous recevrez votre carte prochainement</h1>
    <img class="win__image" src="../assets/images/card.png">
    <router-link to="/" class="win__link">
      <span @click="reset">Revenir à l'écran d'accueil</span>
    </router-link>


  </div>
</template>

