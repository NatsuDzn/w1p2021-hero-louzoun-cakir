<template>
  <div class="lose">
    <h1 class="lose__title">Vous avez échoué à l'examen</h1>
    <img class="lose__image" src="../assets/images/take-the-l.jpg">
    <router-link to="/" class="lose__link">
      <span @click="reset">Retenter de devenir un hunter</span>
    </router-link>
  </div>
</template>