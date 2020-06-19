<template>
    <div class="material base_right">
        <div class="base_content">
            <div class="base_mainContent">
                <div class="border-bottom mb-4 tabs">
                    <router-link to="/material/materialPics">图片</router-link>
                    <router-link to="/material/materialAudios">音频</router-link>
                    <router-link to="/material/materialVideos">视频</router-link>
                    <router-link to="/material/materialEbook">电子书</router-link>
                </div>
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Material",
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