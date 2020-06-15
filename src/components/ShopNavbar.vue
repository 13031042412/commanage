<template>
    <div class="shopNavbar">
        <div class="xjs_navbar">
            <div class="xjs_navbar-body">
                <span class="xjs_navbar-brand">
                    <img src="@/assets/logo.png" alt />
                </span>
                <ul class="xjs_navbar-nav">
                    <li>
                        <span>首页</span>
                    </li>
                    <li>
                        <span>简介</span>
                    </li>
                    <li>
                        <span>课程</span>
                    </li>
                    <li>
                        <span>视频</span>
                    </li>
                    <li>
                        <span>授课见证</span>
                    </li>
                    <li>
                        <span>联系方式</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ShopNavbar",
    data() {
        return {
            str: ""
        };
    },
    components: {},
    mounted() {}
};
</script>
<style scoped>
.xjs_navbar {
    background: rgba(255, 255, 255, 0.85);
    margin-bottom: 20px;
    min-width: 960px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid whitesmoke;
}
.xjs_navbar-body {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
}
.xjs_navbar-brand {
    font-size: 18px;
    padding: 10px;
    color: #0181da;
}
.xjs_navbar-brand img {
    max-width: 130px;
    max-height: 45px;
}
.xjs_navbar-nav {
    margin: 0;
}
.xjs_navbar-nav li {
    display: inline-block;
}
.xjs_navbar-nav li > span {
    display: inline-block;
    padding: 20px 30px;
    font-size: 16px;
}
</style>