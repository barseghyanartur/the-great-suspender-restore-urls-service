<template>
  <div class="home">
      <Intro/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Intro from '@/components/Intro.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'About',
  components: {
    Intro,
  },
});
</script>
