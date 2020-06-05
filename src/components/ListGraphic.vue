<template>
    <div class="listGraphic base_width component-layout">
        <div class="xjs_section">
            <div class="xjs_content-title">
                <i class="fa fa-certificate"></i>
                <span>最新文章</span>
            </div>
            <div>
                <Media v-for="(item , index) in datas.childs" :key="index" />
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import Media from "../components/Media";

export default {
    name: "ListGraphic",
    props: {
        datas: {
            type: Object,
            default: function() {
                return {
                    title: "图文列表",
                    childs: [
                        {
                            title: "",
                            picSrc: "",
                            text: "",
                            date: "",
                            views: ""
                        }
                    ]
                };
            }
        }
    },
    data() {
        return {
            str: ""
        };
    },
    components: { Media },
    mounted() {}
};
</script>
<style scoped>
.xjs_section {
    margin-bottom: 20px;
}
.xjs_content-title {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
    font-weight: normal;
}
.xjs_content-title i {
    color: #ff6900;
}
.xjs_content-title span {
    color: #0181da;
    margin-left: 5px;
    font-size: 14px;
}
</style>