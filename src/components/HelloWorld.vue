<template>
<div @click="onClick">
  <img v-bind:src="sharkleFrame" alt="Hey!">
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FrameAnimation } from './FrameAnimation';
import IdleAnimationFrames from './IdleFrames';
import WaveAnimationFrames from './WaveFrames';

@Component
export default class HelloWorld extends Vue {
  private idleAnimation!: FrameAnimation;
  private waveAnimation!: FrameAnimation;
  private sharkleFrame: string = '';

  public created() {
    this.idleAnimation = new FrameAnimation(IdleAnimationFrames, 100, (frame: string) => {
      this.sharkleFrame = frame;
    });

    this.waveAnimation = new FrameAnimation(WaveAnimationFrames, 100, (frame: string) => {
      this.sharkleFrame = frame;
    });

    this.idleAnimation.start();
  }

  public onClick() {
    this.idleAnimation.stop();
    this.waveAnimation.start();
  }
}
</script>

<style scoped lang="scss">
</style>
