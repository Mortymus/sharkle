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
import SoundFiles from './SoundFiles';

const WAVE_TIME = 2000;

@Component
export default class Sharkle extends Vue {
  private idleAnimation!: FrameAnimation;
  private waveAnimation!: FrameAnimation;
  private bubbleAnimation!: FrameAnimation;
  private sharkleFrame: string = '';
  private bubbleFrame: string = '';
  private isWaving: boolean = false;

  public created() {
    this.idleAnimation = new FrameAnimation(
      IdleAnimationFrames,
      100,
      (frame: string) => {
        this.sharkleFrame = frame;
      },
    );

    this.waveAnimation = new FrameAnimation(
      WaveAnimationFrames,
      100,
      (frame: string) => {
        this.sharkleFrame = frame;
      },
    );

    this.bubbleAnimation = new FrameAnimation(
      BubbleFrames,
      300,
      (frame: string) => {
        this.bubbleFrame = frame;
      },
    );

    this.idleAnimation.start();
  }

  public onClick() {
    if (this.isWaving) {
      return;
    }
    this.isWaving = true;
    this.idleAnimation.stop();
    this.waveAnimation.start();
    this.bubbleAnimation.start();

    const audio = new Audio(
      SoundFiles[Math.floor(Math.random() * SoundFiles.length)],
    );

    audio.play();

    setTimeout(() => {
      this.isWaving = false;
      this.waveAnimation.stop();
      this.bubbleAnimation.stop();
      this.idleAnimation.start();
    }, WAVE_TIME);
  }
}
</script>

<style lang="scss">
.sharkle-container {
  position: relative;
  width: 320px;
  .bubble {
    position: absolute;
    left: 0px;
    top: -40px;
  }
}
</style>
