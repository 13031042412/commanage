<template>
    <div class="design full_view" :class="{'pre-container': isPreview}">
        <div class="designTopBar d-flex justify-content-between align-items-center">
            <div class="abort-edit">退出编辑</div>
            <div>正在{{isPreview? '预览' : '编辑'}}中...</div>
            <div class="preview-save-btns">
                <button
                    v-show="!isPreview"
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="preview"
                >预览</button>
                <button
                    v-show="isPreview"
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="abortPreview"
                >退出预览</button>
                <button v-show="!isPreview" type="button" class="btn btn-sm btn-primary">保存</button>
            </div>
        </div>
        <div class="main-decoration-module">
            <aside v-show="!isPreview" class="left-choose-container">
                <draggable
                    class="app-aside-drag"
                    :group="{ name: 'pageDesign', pull: 'clone', put: false }"
                    :list="moduleSource"
                    :sort="false"
                    @change="fnChange"
                >
                    <!-- <div class="app-aside-item" v-for="item in moduleSource" :key="item">
                        <div class="aside-item-main">
                            <i class="fa fa-list-ol fa-fw aside-item-icon"></i>
                            <span class="aside-item-title">文字列表</span>
                        </div>
                    </div>-->
                    <Item
                        v-for="item in moduleSource"
                        :key="item.title"
                        :name="item.title"
                        :icon="item.icon"
                    />
                </draggable>
            </aside>

            <section class="center-preview-container" :class="{'previewing-container': isPreview}">
                <div class="main-preview-container">
                    <!-- top-nav -->
                    <div ref="appMianDrag" class="app-mian-drag xjs_flex_container base_width">
                        <draggable
                            class="xjs_flex_section_up"
                            :class="{'border-bottom': !isPreview}"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_up"
                            group="pageDesign"
                        >
                            <component
                                v-for="(item, i) in xjs_up"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            ></component>
                        </draggable>
                        <draggable
                            v-if="themeId != 2"
                            class="xjs_flex_aside_left"
                            :class="['theme'+themeId, {'bg-light border-right': !isPreview}]"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_left"
                            group="pageDesign"
                        >
                            <component
                                v-for="(item, i) in xjs_left"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            ></component>
                        </draggable>
                        <draggable
                            class="xjs_flex_aside_middle"
                            :class="'theme'+themeId"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_middle"
                            group="pageDesign"
                        >
                            <component
                                v-for="(item, i) in xjs_middle"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            ></component>
                        </draggable>
                        <draggable
                            v-if="themeId != 3"
                            class="xjs_flex_aside_right"
                            :class="['theme'+themeId, {'bg-light border-left': !isPreview}]"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_right"
                            group="pageDesign"
                        >
                            <component
                                v-for="(item, i) in xjs_right"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            ></component>
                        </draggable>
                        <draggable
                            class="xjs_flex_section_down"
                            :class="{'border-top': !isPreview}"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_down"
                            group="pageDesign"
                        >
                            <component
                                v-for="(item, i) in xjs_down"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            ></component>
                        </draggable>
                    </div>
                </div>
            </section>

            <aside v-show="!isPreview" class="right-edit-container">
                <div class="main-editor-container">123</div>
                <button class="btn btn-primary" type="button" @click="test">测试</button>
            </aside>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import MySwiper from "../components/Swiper";
import ListGraphic from "../components/ListGraphic";
import draggable from "vuedraggable";
import Item from "../components/Item";

export default {
    name: "Design",
    data() {
        return {
            isPreview: false,
            themeId: 2,
            xjs_up: [
                {
                    name: "MySwiper",
                    data: {
                        banners: [
                            {
                                href: "",
                                src:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088301454&di=c1c11e5b44c8b7c4203aaadb0bca2436&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fbanner%2F21%2F68%2F12%2FeJsRpmTiNlFeZahd0sfD.gif",
                                alt: ""
                            },
                            {
                                href: "",
                                src:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088213641&di=32f73851711ffd2b57da6448e5a9ace1&imgtype=0&src=http%3A%2F%2Fstatic.baimao.com%2Fuploads%2Fnews%2Fimage%2F20171207%2F20171207161819_41660.jpg",
                                alt: ""
                            },
                            {
                                href: "",
                                src:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088178162&di=d5b73259775477c25c575c4beb53c46c&imgtype=0&src=http%3A%2F%2Fsimg2.bigbigwork.com%2Fjhb%2Ff10a26904d1f11e90c7d713b49da0385.jpg",
                                alt: ""
                            },
                            {
                                href: "",
                                src:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088284122&di=f98b557082234b50c976e1b915186b32&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2555003744%2C2749592312%26fm%3D214%26gp%3D0.jpg",
                                alt: ""
                            }
                        ]
                    }
                }
            ],
            xjs_left: [
                {
                    name: "ListGraphic",
                    data: {
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
                    }
                }
            ],
            xjs_middle: [
                {
                    name: "ListGraphic",
                    data: {
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
                    }
                },
                {
                    name: "ListGraphic",
                    data: {
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
                    }
                }
            ],
            xjs_right: [
                {
                    name: "ListGraphic",
                    data: {
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
                    }
                }
            ],
            xjs_down: [
                {
                    name: "ListGraphic",
                    data: {
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
                    }
                }
            ],
            moduleSource: [
                {
                    title: "轮播图",
                    icon: "fa-window-maximize",
                    name: "MySwiper",
                    data: {
                        banners: [
                            {
                                href: "http://www.jiangshi.org/",
                                src:
                                    "http://img1.jiangshi.org/rsi/20200417/171006566350_1422.jpg",
                                alt: "default pic."
                            }
                        ]
                    }
                },
                {
                    title: "图文列表",
                    icon: "fa-th-list",
                    name: "ListGraphic",
                    data: {
                        title: "图文列表",
                        childs: [
                            {
                                title: "图文列表标题",
                                picSrc: "",
                                text: "图文列表简介",
                                date: "",
                                views: 0
                            }
                        ]
                    }
                },
                {
                    title: "文字列表",
                    icon: "fa-list-ol",
                    name: "ListText",
                    data: {
                        title: "文字列表",
                        childs: [
                            {
                                text: "文字列表简介"
                            }
                        ]
                    }
                }
            ]
        };
    },
    components: { draggable, MySwiper, ListGraphic, Item },
    created() {
        let that = this;
        that.themeId = that.$route.params.theme;
    },
    mounted() {
        let that = this;
        console.log(this.$route.params);
        $(".component-layout").click(function() {
            $(".component-layout").removeClass("active");
            $(this).addClass("active");
        });
    },
    methods: {
        preview() {
            this.isPreview = true;
        },
        abortPreview() {
            this.isPreview = false;
        },

        addModule(evt) {
            console.log("add", evt);
        },
        fnChange(evt) {
            console.log("change", evt);
        },

        test() {
            console.log(this.xjs_up);
            //   $(".app-mian-drag").append('<component is="ListGraphic"></component>');
        }
    }
};
</script>

<style >
@import url("../assets/design.css");
.xjs_flex_container {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
}
.xjs_flex_container > * {
    flex: 1 100%;
    max-width: 100%;
    min-height: 100px;
}
.previewing-container .xjs_flex_container > * {
    min-height: auto;
}
.xjs_flex_aside_left.theme2,
.xjs_flex_aside_left.theme3,
.xjs_flex_aside_right.theme2,
.xjs_flex_aside_right.theme3 {
    width: 31.8%;
    flex: 0 31.8%;
}
.xjs_flex_aside_left.theme4,
.xjs_flex_aside_right.theme4 {
    width: 23.2%;
    flex: 0 23.2%;
}
.xjs_flex_aside_middle.theme2,
.xjs_flex_aside_middle.theme3 {
    width: 68.1%;
    flex: 1;
}
.xjs_flex_aside_middle.theme4 {
    width: 53.4%;
    flex: 1;
}
.previewing-container .xjs_content-title span {
    font-size: 16px;
}
.previewing-container .xjs_media-body h5 {
    font-size: 16px;
}
.previewing-container .xjs_media-text {
    font-size: 13px;
}
.previewing-container .xjs_media-pic {
    width: 170px;
    max-width: 40%;
}
.sortable-placeholder {
    background: rgba(255, 105, 0, 0.2);
}
</style>