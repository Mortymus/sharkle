<template>
<div>
  <img v-bind:src="animationSource" alt="">
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const IDLE_ANIMATION_FRAMES = [
  'sharkle_idle0.png',
  'sharkle_idle1.png',
  'sharkle_idle2.png',
  'sharkle_idle3.png',
  'sharkle_idle4.png',
  'sharkle_idle5.png',
  'sharkle_idle6.png',
  'sharkle_idle7.png',
];

const IDLE_ANIMATION_FRAME_TIME = 100;

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private currentIdleAnimationFrame: number = 0;

  public mounted() {
    setInterval(() => {
      this.currentIdleAnimationFrame = (this.currentIdleAnimationFrame + 1) % IDLE_ANIMATION_FRAMES.length;
    }, IDLE_ANIMATION_FRAME_TIME);
  }

  get animationSource() {
    return require(`../assets/sharkle/${IDLE_ANIMATION_FRAMES[this.currentIdleAnimationFrame]}`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
