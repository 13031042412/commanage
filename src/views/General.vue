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
                <div class="row mb-3">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-3">课程</h5>
                                <div class="course_list mb-3">
                                    <a href="##" target="_bank" class="text-truncate">为子孙后代留下一片碧海蓝天</a>
                                    <a href="##" target="_bank" class="text-truncate">三个“微镜头”蕴含的使命担当</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >发挥基本经济制度优势 推动经济高质量发展</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >国家发改委：海南自贸港与香港互补大于竞争</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >海南省委书记：海南不是房地产的加工厂</a>
                                </div>
                                <a
                                    href="http://www.jiangshi.org/1059519/blog_1872318.html"
                                    class="card-link text-secondary"
                                    target="_bank"
                                >查看更多</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-3">视频</h5>
                                <div class="course_list mb-3">
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >外交部：正以稳妥方式逐步恢复中外人员往来</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >朝鲜宣布彻底切断一切朝韩通讯联络线</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >中国再添新冠灭活疫苗 实验显示有巨大潜力</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >暴雨继续！9省区迎大到暴雨 局地有大暴雨</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >世卫：全球疫情恶化 单日新增病例数创新高</a>
                                </div>
                                <a
                                    href="http://www.jiangshi.org/1059519/blog_1872318.html"
                                    class="card-link text-secondary"
                                    target="_bank"
                                >查看更多</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-3">授课见证</h5>
                                <div class="course_list mb-3">
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >无传染性！武汉无症状感染者病毒培养结果出炉</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >少女疑被性骚扰3年 涉事者被撤销教师资格</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >8千万福彩大奖疑遭盗领 店内监控被破坏</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >男子脑脊髓液中检测出新冠病毒：咽拭子阴性</a>
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate"
                                    >失踪男子荒野身亡面容焦黑 警方：排除他杀</a>
                                </div>
                                <a
                                    href="http://www.jiangshi.org/1059519/blog_1872318.html"
                                    class="card-link text-secondary"
                                    target="_bank"
                                >查看更多</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title mb-3">客服中心</h5>
                                <p class="card-text font-weight-bold">
                                    <i class="fa fa-tty mr-1"></i>
                                    <span class="font-18">400-600-9086</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h4>测试</h4>
                        <router-link to="/login">登录</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "General",
    components: {},
    data() {
        return {
            author: process.env.VUE_APP_AUTHOR,
            isloading: true
        };
    },
    mounted() {
        this.isloading = false;
        this.$axios
            .get("api/fyb/search", {
                params: {
                    pageSize: 50,
                    page: 1,
                    getrank: 1
                }
            })
            .then(function(res) {
                // handle success
                console.log(res.data);
            });
    }
};
</script>

<style scoped>
.base_mainContent {
    background: transparent;
}
.message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 11px;
    margin-bottom: 20px;
}
.message .fa-bell-o {
    padding: 0 10px 0 4px;
    color: #b2b2b2;
    font-size: 16px;
}
.message-content {
    flex: 1;
    width: 265px;
    white-space: normal;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.course_list a {
    display: block;
    margin-bottom: 10px;
}
</style>