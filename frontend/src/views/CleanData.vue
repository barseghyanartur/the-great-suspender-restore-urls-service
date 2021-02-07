<template>
  <div class="clean-data">
    <ApiCleanData/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ApiCleanData from '@/components/ApiCleanData.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'SendInvite',
  components: {
    ApiCleanData,
  },
});
</script>
