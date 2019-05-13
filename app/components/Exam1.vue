<template>
  <div class="exam1">
    <h1 class="intro">
      Animaux monstrueux, espèces rares…
      <br>Richesses enfouies, trésors cachés…
      <br>Monde des démons, terres inexplorées…
      <br>Le mot “INCONNU” dégage quelque chose de magique…
      <br>Et certains hommes sont attirés par cette force.
      <br>On les appelles les “hunters”.
      <br>Vous aussi devenez un Hunter!
    </h1>
    <router-link class="button" to="/id2">Suivant</router-link>
    <router-link class="button" to="/">&#127968;Home</router-link>
  </div>
</template>

<script>
import data from "../../data.json";
</script>

<style>
.exam1 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
  background-image: url(../assets/WhaleIsland.jpg);
}
</style>


