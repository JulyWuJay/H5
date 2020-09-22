<!-- 五环 -->
<template>
    <div>
        <div class="circle-box">
            <div :class="{ 'circle': true , 'blue-circle': playCircleFrame}"></div>
            <div :class="{ 'circle': true , 'black-circle': playCircleFrame}"></div>
            <div :class="{ 'circle': true , 'red-circle': playCircleFrame}"></div>
            <div :class="{ 'circle': true , 'yellow-circle': playCircleFrame}"></div>
            <div :class="{ 'circle': true , 'green-circle': playCircleFrame}"></div>
        </div>
        <button @touchstart="goFiveCrcle($event)" @touchmove="moveFiveCircle($event)" @touchend="endFiveCircle($event)">长按五环动画</button>
    </div>
</template>

<script>
export default {
    name: 'FiveCircle',
    data () {
        return {
            timeId: null,
            playCircleFrame: false
        };
    },
    components: {},
    created() {

    },
    computed: {},
    methods: {
        goFiveCrcle() {
            this.timeId = setTimeout(() => {
                // console.log('长按了500ms')
                this.playCircleFrame = true
            }, 1500)
        },
        moveFiveCircle() {
            clearTimeout(this.timeId)
        },
        endFiveCircle() {
            clearTimeout(this.timeId)
        }
    }
}

</script>
<style lang='scss' scoped>
// 五环内圈半径
$circleWidth: 30px;
// 五环的动画时长
$circleTime: 2400ms;
// 五环的进场效果
$circleFun: cubic-bezier(0.1,0.42,0.58,1);
.circle-box{
    width: calc(100% - 2px);
    height: 700px;
    border: 1px solid;
    position: relative;
    // 关键！！！！！！！！需要在同一个 3D 上下文中
    transform-style: preserve-3d;
    display: flow-root;
}
.circle:nth-child(1){
    // transform: translate($circleWidth * -2.6, 0) rotateY(-1deg);
    border-color: blue;
}
.blue-circle{
    animation-name: blue-frame;
    animation-duration: $circleTime;
    animation-timing-function: $circleFun;
    animation-delay: 0;
    animation-fill-mode: forwards;
}
@keyframes blue-frame {
    from{
    }
    to{
        transform: translate($circleWidth * -2.6, 0) rotateY(-1deg);
    }
}

.circle:nth-child(2){
    border-color: black;
    // transform: rotateY(-1deg);
}
.black-circle{
    animation-name: black-frame;
    animation-duration: $circleTime * 4/5;
    animation-delay: $circleTime * 1/5;
    animation-timing-function: $circleFun;
    animation-fill-mode: forwards;

}
@keyframes black-frame {
    from{}
    to{
        transform: rotateY(-1deg);
    }
}
.circle:nth-child(3){
    // transform: translate($circleWidth * 2.6, 0) rotateY(-1deg);
    border-color: red;
}
.red-circle{
    animation-name: red-frame;
    animation-duration: $circleTime * 3/5;
    animation-delay: $circleTime * 2/5;
    animation-timing-function: $circleFun;
    animation-fill-mode: forwards;

}
@keyframes red-frame {
    from{}
    to{
        transform: translate($circleWidth * 2.6, 0) rotateY(-1deg);
    }
}
.circle:nth-child(4){
    // transform: translate($circleWidth * -1.3, $circleWidth * 1.1) rotateY(1deg);
    border-color: yellow;
}
.yellow-circle{
    animation-name: yellow-frame;
    animation-duration: $circleTime * 2/5;
    animation-delay: $circleTime * 3/5;
    animation-timing-function: $circleFun;
    animation-fill-mode: forwards;

}
@keyframes yellow-frame {
    from{}
    to{
        transform: translate($circleWidth * -1.3, $circleWidth * 1.1) rotateY(1deg);
    }
}
.circle:nth-child(5){
    // transform: translate($circleWidth * 1.3, $circleWidth * 1.1) rotateY(1deg);
    border-color: green;
}
.green-circle{
    animation-name: green-frame;
    animation-duration: $circleTime * 1/5;
    animation-delay: $circleTime * 4/5;
    animation-timing-function: $circleFun;
    animation-fill-mode: forwards;
}
@keyframes green-frame {
    from{}
    to{
    transform: translate($circleWidth * 1.3, $circleWidth * 1.1) rotateY(1deg);
    }
}
// 基本环
.circle{
    position: absolute;
    width: $circleWidth * 2;
    height: $circleWidth * 2;
    border: $circleWidth/5 solid black;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
</style>