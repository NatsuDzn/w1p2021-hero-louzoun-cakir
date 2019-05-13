<template>
  <div class="big-header">
    <transition name="pane">
        <router-view />
    </transition>
    <img class="logo" src="../assets/logo.png">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" :to="value">{{ title }}</router-link>
  </div>
</template>

<script>
import data from '../../data.json';

export default {
  data() {
    return {
      message: data.home.title,
      title: data.home.button,
      value: data.home.url
    };
  }
};
</script>