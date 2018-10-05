<template>
  <div id="app">
    <div class="container">
      <Sharkle />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sharkle from './components/Sharkle.vue';

@Component({
  components: {
    Sharkle,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  max-width: 300px;
  margin: auto;
}

.container {
  margin: auto;
  max-width: 250px;
}
</style>
