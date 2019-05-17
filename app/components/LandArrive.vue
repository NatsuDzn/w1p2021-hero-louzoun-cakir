<template>
  <div class="LandArrive">
    <h1 v-html="title" class="intro"></h1>
    <div class="buttonwrapper">
    <router-link class="button" :to="home">{{ backtitle }}</router-link>
    <router-link class="button" :to="value">{{ next }}</router-link>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";

export default {
  data() {
    return {

      title: data.land.text,
      next: data.land.next,
      value: data.land.url,

      // Retour
      home: data.back.url,
      backtitle: data.back.backtitle
    };
  }
};
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
  background-image: url(../assets/img/WhaleIsland.jpg);
  background-size: cover;
}
</style>
