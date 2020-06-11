<template>
    <div class="slidebar">
        <div class="base_logo_wrap">
            <img src="../assets/logo.png" alt />
        </div>
        <div class="sidebarWrap">
            <div class="leftsidebarWrap">
                <div class="sideMenu_item" @click="changeTopBarTitle('后台首页')">
                    <router-link
                        to="/home"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-home theicon"></i>
                        <span class="firstpri_name MenuText">后台首页</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>
                <div class="sideMenu_item" @click="changeTopBarTitle('我的介绍')">
                    <router-link
                        to="/introduce"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-address-card-o theicon"></i>
                        <span class="firstpri_name MenuText">我的介绍</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>
                <div class="sideMenu_item">
                    <div class="firstindexMenuWrap MenuCursorpointer newsideMenu">
                        <i class="fa fa-fw fa-laptop theicon"></i>
                        <span class="firstpri_name MenuText">网站管理</span>
                        <i class="fa fa-angle-right right_arrow"></i>
                    </div>
                    <div class="ScedindexMenuWrap">
                        <ul>
                            <li class="newsideMenu" @click="changeTopBarTitle('电脑端')">
                                <router-link
                                    to="/pageDesign"
                                    tag="span"
                                    class="sedMenuText MenuText"
                                >电脑端</router-link>
                            </li>
                            <li class="newsideMenu" @click="changeTopBarTitle('移动端')">
                                <router-link
                                    to="/microDesign"
                                    tag="span"
                                    class="sedMenuText MenuText"
                                >移动端</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sideMenu_item" @click="changeTopBarTitle('课程管理')">
                    <router-link
                        to="/courses"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-file-powerpoint-o theicon"></i>
                        <span class="firstpri_name MenuText">课程管理</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>
                <div class="sideMenu_item" @click="changeTopBarTitle('视频管理')">
                    <router-link
                        to="/videos"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-file-movie-o theicon"></i>
                        <span class="firstpri_name MenuText">视频管理</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>
                <div class="sideMenu_item" @click="changeTopBarTitle('文章管理')">
                    <router-link
                        to="/blogs"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-file-word-o theicon"></i>
                        <span class="firstpri_name MenuText">文章管理</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>
                <div class="sideMenu_item">
                    <div class="firstindexMenuWrap MenuCursorpointer newsideMenu">
                        <i class="fa fa-fw fa-user-o theicon"></i>
                        <span class="firstpri_name MenuText">我的账户</span>
                        <i class="fa fa-angle-right right_arrow"></i>
                    </div>
                    <div class="ScedindexMenuWrap">
                        <ul>
                            <li class="newsideMenu" @click="changeTopBarTitle('鲜花')">
                                <router-link to="/flower" tag="span" class="sedMenuText MenuText">鲜花</router-link>
                            </li>
                            <li class="newsideMenu" @click="changeTopBarTitle('现金账户')">
                                <!--<span class="sedMenuText MenuText test">现金账户</span>-->
                                <router-link to="/cash" tag="span" class="sedMenuText MenuText">现金账户</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sideMenu_item" @click="changeTopBarTitle('增值服务')">
                    <router-link
                        to="/services"
                        tag="div"
                        class="firstindexMenuWrap MenuCursorpointer newsideMenu"
                    >
                        <i class="fa fa-fw fa-usd theicon"></i>
                        <span class="firstpri_name MenuText">增值服务</span>
                    </router-link>
                    <div class="ScedindexMenuWrap">
                        <ul></ul>
                    </div>
                </div>

                <button @click="test">test</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    name: "SideBar",
    data() {
        return {
            msg: "Hello"
        };
    },
    mounted() {
        var that = this;
        that.setTopBarTitle(
            !!$(".router-link-active")[0]
                ? $(".router-link-active")[0].innerText
                : "后台管理"
        );
        // console.log(that.$route);
    },
    methods: {
        ...mapMutations(["setTopBarTitle"]),
        changeTopBarTitle(val) {
            this.setTopBarTitle(val);
        },

        test() {
            console.log(this);
        }
    }
};
</script>

<style scoped>
.fa {
    line-height: inherit;
}
.slidebar {
    width: 180px;
    height: 100%;
    float: left;
    background-color: #273043;
    color: #fff;
    padding-top: 70px;
    overflow: auto;
    top: 0;
}
.base_logo_wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 180px;
    height: 70px;
    background-color: #273043;
    display: flex;
}
.base_logo_wrap img {
    height: 30px;
    max-width: 100%;
    margin: auto;
}
.sidebarWrap {
    min-height: 100%;
    background-color: #273043;
    color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.05);
}
.sidebarWrap .leftsidebarWrap {
    padding-top: 20px;
    width: 100%;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item {
    width: 100%;
    padding-bottom: 15px;
}
.sidebarWrap .leftsidebarWrap .firstindexMenuWrap.router-link-active {
    background-color: #f5f6f9 !important;
    color: #273043 !important;
}
.sidebarWrap .leftsidebarWrap .firstindexMenuWrap {
    padding: 0 24px;
    height: 34px;
    line-height: 34px;
}
.sidebarWrap .leftsidebarWrap .firstindexMenuWrap:hover {
    background-color: rgba(245, 246, 249, 0.1);
}
.sidebarWrap .MenuCursorpointer {
    cursor: pointer;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .ScedindexMenuWrap {
    width: 100%;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .ScedindexMenuWrap ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-right: 2px;
    padding-left: 20px;
}
.sidebarWrap ul {
    padding: 0;
    margin: 0;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .ScedindexMenuWrap ul li {
    width: 50%;
    margin-bottom: 2px;
    margin-top: 8px;
}
.sidebarWrap li {
    list-style: none;
}
.sidebarWrap
    .leftsidebarWrap
    .sideMenu_item
    .ScedindexMenuWrap
    ul
    li
    .sedMenuText {
    height: 22px;
    line-height: 22px;
    padding: 0 4px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    width: auto;
    white-space: nowrap;
    position: relative;
    border-radius: 2px;
}
.sidebarWrap .leftsidebarWrap .sedMenuText.router-link-active {
    color: #25324e !important;
    background: #f5f6f9 !important;
    padding: 0 6px;
    border-radius: 2px;
    box-sizing: border-box;
}
.sidebarWrap
    .leftsidebarWrap
    .sideMenu_item
    .ScedindexMenuWrap
    ul
    li:not(.liitem_active)
    .sedMenuText:hover {
    background-color: rgba(245, 246, 249, 0.1);
    color: rgba(255, 255, 255, 0.6);
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .theicon {
    position: relative;
    top: -1px;
    float: left;
    font-size: 16px;
    display: block;
    margin-right: 12px;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .firstpri_name {
    position: relative;
    font-weight: 500;
    font-size: 14px;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item span,
.sidebarWrap .leftsidebarWrap .sideMenu_item i,
.sidebarWrap .leftsidebarWrap .sideMenu_item a {
    display: inline-block;
    text-decoration: none;
}
.sidebarWrap .leftsidebarWrap .sideMenu_item .right_arrow {
    float: right;
    color: #b2b2b2;
    line-height: 34px;
    cursor: pointer;
    font-size: 11px;
}
.slidebar::-webkit-scrollbar,
.leftsidebarWrap::-webkit-scrollbar {
    width: 0;
}
</style>