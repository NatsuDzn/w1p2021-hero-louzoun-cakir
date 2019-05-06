<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <h1>{{ $route.params.id }}</h1>
    <br />
    <router-link class="button" to="/game/1">Niveau suivant</router-link>
    <router-link class="button" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Le jeu commence',
    };
  }
};
</script>
