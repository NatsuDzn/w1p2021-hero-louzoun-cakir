<template>
  <div class="big-header">
    <h1 v-html="title" class="intro1"></h1>
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

      title: data.intro.text,
      next: data.intro.next,
      value: data.intro.url,

      // Retour
      home: data.back.url,
      backtitle: data.back.backtitle
    };
  }
};
</script>