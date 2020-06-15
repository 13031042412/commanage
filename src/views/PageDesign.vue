<template>
    <div class="pagedesign base_right">
        <div class="base_content">
            <div class="base_mainContent">
                <div class="border-bottom mb-4 tabs">
                    <router-link to="/pageDesign/shopIframe">页面结构</router-link>
                    <router-link to="/pageDesign/shopNav">店铺导航</router-link>
                    <router-link to="/pageDesign/shopFooter">页脚设置</router-link>
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageDesign",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
.tabs a {
    display: inline-block;
    padding: 10px;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #333;
}
.tabs .router-link-active {
    border-bottom-color: #2a75ec;
    color: #2a75ec;
}
</style>