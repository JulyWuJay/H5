<!-- 五环 -->
<template>
    <div>
        <div class="circle-box">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
export default {
name: 'FiveCircle',
data () {
    return {
    };
},
components: {},
created() {

},
computed: {},
methods: {}
}

</script>
<style lang='scss' scoped>
// 五环内圈半径
$circleWidth: 30px;

.circle-box{
    width: 100%;
    height: 200px;
    border: 1px solid;
    position: relative;
    // 关键！！！！！！！！需要在同一个 3D 上下文中
    transform-style: preserve-3d;
}
.circle:nth-child(1){
    transform: translate($circleWidth * -2.6, 0) rotateY(-1deg);
    border-color: blue;
}
.circle:nth-child(2){
    border-color: black;
    transform: rotateY(-1deg);
}
.circle:nth-child(3){
    transform: translate($circleWidth * 2.6, 0) rotateY(-1deg);
    border-color: red;
}
.circle:nth-child(4){
    transform: translate($circleWidth * -1.3, $circleWidth * 1.1) rotateY(1deg);
    border-color: yellow;
}
.circle:nth-child(5){
    transform: translate($circleWidth * 1.3, $circleWidth * 1.1) rotateY(1deg);
    border-color: green;
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