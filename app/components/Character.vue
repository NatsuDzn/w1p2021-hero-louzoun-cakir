<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/game/1">C'est parti !</router-link>
    <router-link class="button" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Choisissez votre personnage'
    };
  }
};
</script>
