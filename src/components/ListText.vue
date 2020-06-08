<template>
    <div class="listText base_width component-layout">
        <div class="xjs_section xjs_module_list-news">
            <div class="xjs_module_list-news-head">
                <i class="iconfont icon-certificate"></i>
                <span>{{datas.title}}</span>
            </div>
            <ul class="xjs_module_list-news-body">
                <li class="xjs_module_list-news-item" v-for="item in datas.childs" :key="item.id">
                    <span>{{item.text}}</span>
                </li>
            </ul>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "ListText",
    props: {
        datas: {
            type: Object,
            default: function() {
                return {
                    title: "文字列表",
                    childs: [
                        {
                            id: 0,
                            text: "",
                            href: ""
                        }
                    ]
                };
            }
        }
    },
    data() {
        return {};
    },
    components: {},
    mounted() {
        // console.log(this.datas);
    }
};
</script>
<style scoped>
ul,
li {
    list-style: none;
}
.xjs_module_list-news-head {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
    font-weight: normal;
}
.xjs_module_list-news-head i {
    color: #ff6900;
}
.xjs_module_list-news-head span {
    color: #0181da;
    font-size: 14px;
}
.xjs_module_list-news-body {
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.5);
}
.xjs_module_list-news-item {
    padding: 10px;
    border-bottom: 1px dashed #ccc;
    cursor: pointer;
}
.xjs_module_list-news-item span {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.xjs_module_list-news-item:hover {
    color: var(--main-color);
}
</style>