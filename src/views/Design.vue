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
                    <div class="app-mian-drag xjs_flex_container base_width">
                        <draggable
                            class="xjs_flex_section_up"
                            :class="{'border-bottom': !isPreview}"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_up"
                            group="pageDesign"
                            @change="component_change"
                        >
                            <component
                                v-for="(item, i) in xjs_up"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            >
                                <div class="editBtns">
                                    <button
                                        @click.stop="component_edit('xjs_up', item, i)"
                                        class="btn btn-primary mr-2"
                                        type="button"
                                    >编辑</button>
                                    <button
                                        @click.stop="component_del('xjs_up',i)"
                                        class="btn btn-danger"
                                        type="button"
                                    >删除</button>
                                </div>
                            </component>
                        </draggable>
                        <draggable
                            v-if="themeId != 2"
                            class="xjs_flex_aside_left"
                            :class="['theme'+themeId, {'bg-light border-right': !isPreview}]"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_left"
                            group="pageDesign"
                            @change="component_change"
                        >
                            <component
                                v-for="(item, i) in xjs_left"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            >
                                <div class="editBtns">
                                    <button
                                        @click.stop="component_edit('xjs_left', item, i)"
                                        class="btn btn-primary mr-2"
                                        type="button"
                                    >编辑</button>
                                    <button
                                        @click.stop="component_del('xjs_left',i)"
                                        class="btn btn-danger"
                                        type="button"
                                    >删除</button>
                                </div>
                            </component>
                        </draggable>
                        <draggable
                            class="xjs_flex_aside_middle"
                            :class="'theme'+themeId"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_middle"
                            group="pageDesign"
                            @change="component_change"
                        >
                            <component
                                v-for="(item, i) in xjs_middle"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            >
                                <div class="editBtns">
                                    <button
                                        @click.stop="component_edit('xjs_middle', item, i)"
                                        class="btn btn-primary mr-2"
                                        type="button"
                                    >编辑</button>
                                    <button
                                        @click.stop="component_del('xjs_middle',i)"
                                        class="btn btn-danger"
                                        type="button"
                                    >删除</button>
                                </div>
                            </component>
                        </draggable>
                        <draggable
                            v-if="themeId != 3"
                            class="xjs_flex_aside_right"
                            :class="['theme'+themeId, {'bg-light border-left': !isPreview}]"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_right"
                            group="pageDesign"
                            @change="component_change"
                        >
                            <component
                                v-for="(item, i) in xjs_right"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            >
                                <div class="editBtns">
                                    <button
                                        @click.stop="component_edit('xjs_right', item, i)"
                                        class="btn btn-primary mr-2"
                                        type="button"
                                    >编辑</button>
                                    <button
                                        @click.stop="component_del('xjs_right',i)"
                                        class="btn btn-danger"
                                        type="button"
                                    >删除</button>
                                </div>
                            </component>
                        </draggable>
                        <draggable
                            class="xjs_flex_section_down"
                            :class="{'border-top': !isPreview}"
                            ghostClass="sortable-placeholder"
                            animation="250"
                            :list="xjs_down"
                            group="pageDesign"
                            @change="component_change"
                        >
                            <component
                                v-for="(item, i) in xjs_down"
                                :key="i"
                                :is="item.name"
                                :datas="item.data"
                            >
                                <div class="editBtns">
                                    <button
                                        @click.stop="component_edit('xjs_down', item, i)"
                                        class="btn btn-primary mr-2"
                                        type="button"
                                    >编辑</button>
                                    <button
                                        @click.stop="component_del('xjs_down',i)"
                                        class="btn btn-danger"
                                        type="button"
                                    >删除</button>
                                </div>
                            </component>
                        </draggable>
                    </div>
                </div>
            </section>

            <aside v-show="!isPreview" class="right-edit-container">
                <div v-if="!!current.data" class="main-editor-container">
                    <!-- <div class="main-editor-container"> -->
                    <!-- <h5>{{current.data.data.title}}</h5> -->
                    <div class="header border-bottom d-flex">{{current.data.data.title}}</div>
                    <!-- 图文列表编辑 -->
                    <!-- <div class="editorItem">
                        <div class="text-secondary my-3">标题名称</div>
                        <input class="form-control" type="text" placeholder="请输入标题名称" />
                        <div class="editorWrap">
                            <div class="graphicCard">
                                <i class="fa fa-times-circle close"></i>
                                <label class="imgWrap mb-3">
                                    <input
                                        @change="imgUpload($event)"
                                        name
                                        class="d-none"
                                        type="file"
                                        accept="image/*"
                                    />
                                    <img src alt />
                                    <div class="modify_image">修改</div>
                                </label>
                                <input class="form-control mb-3" type="text" placeholder="请输入文章标题" />
                                <input class="form-control" type="text" placeholder="请输入文章简介" />
                            </div>
                        </div>
                        <div class="editorWrap">
                            <div class="graphicCard">
                                <i class="fa fa-times-circle close"></i>
                                <label class="imgWrap mb-3">
                                    <input
                                        @change="imgUpload($event)"
                                        name
                                        class="d-none"
                                        type="file"
                                        accept="image/*"
                                    />
                                    <img src alt />
                                    <div class="modify_image">修改</div>
                                </label>
                                <input class="form-control mb-3" type="text" placeholder="请输入文章标题" />
                                <input class="form-control" type="text" placeholder="请输入文章简介" />
                            </div>
                        </div>
                    </div>-->
                    <!-- 文字列表编辑 -->
                    <div class="editorItem">
                        <div class="text-secondary my-3">标题名称</div>
                        <input class="form-control" type="text" placeholder="请输入标题名称" />
                        <div class="editorWrap">
                            <div class="graphicCard py-4">
                                <i class="fa fa-times-circle close"></i>
                                <input class="form-control" type="text" placeholder="请输入文章标题" />
                            </div>
                        </div>
                    </div>

                    <!-- <p v-for="item in current.data.data.childs" :key="item.title">{{item.title}}</p>111 -->
                </div>
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
import UserInfo from "../components/UserInfo";
import ListText from "../components/ListText";

export default {
    name: "Design",
    components: { draggable, MySwiper, ListGraphic, Item, UserInfo, ListText },
    data() {
        return {
            isPreview: false,
            themeId: 2,
            xjs_up: [
                {
                    name: "MySwiper",
                    data: {
                        title: "轮播图",
                        childs: [
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
                        title: "轮播图",
                        childs: [
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
                },
                {
                    title: "我的信息",
                    icon: "fa-address-card-o",
                    name: "UserInfo",
                    data: { title: "我的信息" }
                }
            ],
            current: {}
        };
    },
    created() {
        let that = this;
        that.themeId = that.$route.params.theme;

        this.current = {
            name: "aaa",
            data: this.moduleSource[1],
            index: 0
        };
    },
    mounted() {
        let that = this;
        console.log(this.$route.params);
        $(".app-mian-drag").on("click", ".component-layout", function() {
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
        component_del(listName, index) {
            // 删除组件
            this[listName].splice(index, 1);
        },
        component_edit(listName, item, index) {
            console.log(listName, item, index);
            this.current = {
                name: listName,
                data: item,
                index: index
            };
        },
        component_change(evt) {
            // 拖拽项改变
            console.log("change: ", evt);
            $(".component-layout").removeClass("active");
            this.current = {};
        },
        imgUpload(obj) {
            var file = obj.target.files[0];
            if (!file) return false;
            var img = $(obj.target).next("img")[0];

            // 可以进行一下文件类型的判断
            if (!/image\/\w+/.test(file.type)) {
                alert("请上传图片");
                return false;
            }
            // 图片大小的限制
            var fileSize = parseFloat(file.size / 1024 / 1024);
            if (fileSize > 2) {
                alert("图片大小不超过2MB");
                return false;
            }
            // 读取图片文件流
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                // img.attr("src", e.target.result);
                img.src = e.target.result;
            };
            console.log(obj.target, img);
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
</style>