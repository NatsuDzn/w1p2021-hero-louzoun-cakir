<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>
    <div class="wrapper">
      <router-link to="/id1">
        <img class="sprites" src="../assets/img/sprites/Gon.png">
      </router-link>
      <router-link to="/id1">
        <img class="sprites" src="../assets/img/sprites/Kirua.png">
      </router-link>
      <router-link to="/id1">
        <img class="sprites" src="../assets/img/sprites/You.png">
      </router-link>
      <router-link to="/id1">
        <img class="sprites" src="../assets/img/sprites/Kurapika.png">
      </router-link>
      <router-link to="/id1">
        <img class="sprites" src="../assets/img/sprites/Leolio.png">
      </router-link>
    </div>
    <div class="buttonwrapper">
    <router-link class="button" :to="home">{{ backtitle }}</router-link>
    <router-link class="button" :to="value">{{ title }}</router-link>
  </div>
</template>

<style>
h1 {
  font-size: 32px;
  font-weight: bold;
}
</style>


<script>
import data from "../../data.json";

export default {
  data() {
    return {
      
      message: data.character.title,
      title: data.character.button,
      value: data.character.url,

      // Retour
      home: data.back.url,
      backtitle: data.back.backtitle
    };
  }
};
</script>
