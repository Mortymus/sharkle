<template>
<div class="sharkle-container">
  <img v-show="isWaving" :src="bubbleFrame" class="bubble">
  <img @click="onClick" :src="sharkleFrame" class="sharkle">
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { FrameAnimation } from './FrameAnimation';
import IdleAnimationFrames from './IdleFrames';
import WaveAnimationFrames from './WaveFrames';
import BubbleFrames from './BubbleFrames';

@Component
export default class Sharkle extends Vue {
  private idleAnimation!: FrameAnimation;
  private waveAnimation!: FrameAnimation;
  private bubbleAnimation!: FrameAnimation;
  private sharkleFrame: string = '';
  private bubbleFrame: string = '';
  private isWaving: boolean = false;

  public created() {
    this.idleAnimation = new FrameAnimation(IdleAnimationFrames, 100, (frame: string) => {
      this.sharkleFrame = frame;
    });

    this.waveAnimation = new FrameAnimation(WaveAnimationFrames, 100, (frame: string) => {
      this.sharkleFrame = frame;
    });

    this.bubbleAnimation = new FrameAnimation(BubbleFrames, 100, (frame: string) => {
      this.bubbleFrame = frame;
    });

    this.idleAnimation.start();
  }

  public onClick() {
    this.isWaving = true;
    this.idleAnimation.stop();
    this.waveAnimation.start();
    this.bubbleAnimation.start();
  }
}
</script>

<style scoped lang="scss">
.sharkle-container {
  width: 320px;
  .bubble {
    position: absolute;
    left: 0px;
    top: 0px;
  }
}
</style>
