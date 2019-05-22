<template>
  <div class="game">
 <img :src="step.background" :alt="step.background" class="game__image">
    <h1 v-html="step.title" class="game__title">{{step.title}}</h1>
    
    <div class="game__content">
      <p v-html="step.description" class="game__description">{{step.description}}</p>
      
      <div class="game__list">
        
        <router-link
          class="game__nextstep"
          v-for="action in step.actions"
          :key="action.value"
          :to="action.to.toString()"
        >
        
          <span @click="countStep">{{action.label}}</span>
          
      </div>
    </div>
      
  </div>
 
</template>

<script>
// Import
import data from "../data.json";
import CountService from "../services/CountService";

export default {
  data: function() {
    return {
      step: data.steps.find(s => s.id === parseInt(this.$route.params.id))
    };
  },
  mounted: function() {},
  methods: {
    getStep() {
      return data.steps.find(s => s.id === parseInt(this.$route.params.id));
    },
    countStep() {
      const stepCountNub = data.steps.find(
        s => s.id === parseInt(this.$route.params.id)
      );
      stepCountService.count(stepCountNub.id);
    },
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
      this.countStep();
    }
  }
};
</script>
