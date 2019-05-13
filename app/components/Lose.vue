<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Go to Page</router-link>
  </div>
</template>

<script>
import data from '../../data.json';

export default {
  data() {
    return {
      message: 'tu as loose'
    };
  }
};
</script>
