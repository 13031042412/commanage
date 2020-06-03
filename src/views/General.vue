<template>
    <div class="general base_right">
        <div class="base_content">
            <div class="base_mainContent">
                <GlobalLoading :isloading="isloading"></GlobalLoading>
                <!--站点消息-->
                <div class="message">
                    <i class="fa fa-bell-o"></i>
                    <div class="message-content">暂无通知</div>
                </div>
                <i class="fa fa-2x fa-spinner fa-spin"></i>
                <i class="fa fa-2x fa-refresh fa-spin"></i>
                <i class="fa fa-2x fa-cog fa-spin"></i>
                <hr>
                <i class="fa fa-2x fa-spinner fa-pulse"></i>
                <i class="fa fa-2x fa-refresh fa-pulse"></i>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "General",
        components: {  },
        data(){
            return {
                author: process.env.VUE_APP_AUTHOR,
                isloading: true
            }
        },
        mounted(){
            this.isloading = false;
            this.$axios.get('api/fyb/search', {
                params: {
                    pageSize: 50,
                    page:1,
                    getrank: 1
                }
            }).then(function (res) {
                // handle success
                console.log(res.data);
            })
        }
    }
</script>

<style scoped>
    .base_mainContent{background: transparent;}
    .message{display: flex;justify-content: space-between;align-items: center;background: #fff;padding: 11px;margin-bottom: 20px;}
    .message .fa-bell-o{padding: 0 10px 0 4px;color: #b2b2b2;font-size: 16px;}
    .message-content{flex: 1;
        width: 265px;
        white-space: normal;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;}
</style>