<template>
    <div class="topbar">
        <div class="base_topBarbox">
            <div class="base_topBar" @click="test">
                <div class="d-flex">
                    <span class="edittopTittles">{{topBarTitle}}</span>
                    <!--<span class="edittopTittles">{{$store.state.str}}</span>-->
                    <div class="base-top-bar">
                        <div class="base-top-bar__right">
                            <a class="base-top-bar-message" href="##">消息中心</a>
                            <div class="dropdown">
                                <div class="dropdown-toggle pointer base-top-bar-headpic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="http://img1.jiangshi.org/rsi/20190527/271539100763_1716233_70x90.jpg" alt="头像"> 我
                                </div>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a class="dropdown-item" href="##">账户充值</a>
                                    <a class="dropdown-item" href="##">账户安全</a>
                                    <a class="dropdown-item" href="##">修改密码</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="javascript:;">退出</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "TopBar",
        data(){
            return {

            }
        },
        computed: {
            ...mapState(['topBarTitle'])
        },
        mounted(){

        },
        methods:{
            test(){
                console.log(this.$store)
            }
        }
    }
</script>

<style scoped>
    .base_topBarbox{position:absolute;margin-left:180px;top:0;left:0;width: calc(100% - 180px);z-index: 1000;background-color: #fff;}
    .base_topBar{min-width: 1100px;background-color: #fff;padding: 0 20px;}
    .edittopTittles{font-size:16px;line-height:56px;flex:none;}
    .base-top-bar{width: 100%;height: 56px;background: #fff;display: flex;justify-content: space-between;align-items: center;flex-direction: row-reverse;}
    .base-top-bar .base-top-bar__left, .base-top-bar .base-top-bar__right {display: flex;align-items: center;flex: 0 0 auto;}
    .base-top-bar-message{color:#333;margin-right:20px;}
    .base-top-bar-headpic{cursor:pointer;}
    .base-top-bar-headpic img{width:34px;height:34px;border-radius:50%;border:2px solid #dee2e6;}
</style>