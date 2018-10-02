export class FrameAnimation {
    private frames: any[];
    private frameTime: number;
    private emitCallback: any;
    private intervalId: number;
    private currentFrame: number;

    constructor(frames: any, frameTime: number, emitCallback: any) {
        this.frames = frames;
        this.frameTime = frameTime;
        this.emitCallback = emitCallback;
        this.intervalId = -1;
        this.currentFrame = 0;
    }

    public start() {
        this.stop();
        this.currentFrame = 0;
        this.emitCurrentFrame();
        this.intervalId = setInterval(() => {
            this.currentFrame = (this.currentFrame + 1) % this.frames.length;
            this.emitCurrentFrame();
        }, this.frameTime);
    }

    public stop() {
        clearInterval(this.intervalId);
    }

    private emitCurrentFrame() {
        this.emitCallback(this.frames[this.currentFrame]);
    }
}
