<template>
    <div v-show="isloading" class="loading">
        <div class="loading-content">
            <div>
                <i class="fa fa-3x fa-spinner fa-pulse"></i>
                <div class="mt-1">加载中</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GlobalLoading",
        props: {
            isloading:{
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .loading{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 10000;
        background: hsla(0,0%,100%,.9);
    }
    .loading-content{
        width: 100%;height: 100%;display: flex;color: #20a0ff;
    }
    .loading-content>div{width: 100px;margin: auto;}
</style>