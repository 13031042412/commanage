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
                    :clone="component_clone"
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
                        <!-- 内容一 -->
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
                                :key="item.id"
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
                        <!-- 内容左 -->
                        <draggable
                            v-if="[3,4].indexOf(themeId) > -1"
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
                        <!-- 内容中 -->
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
                        <!-- 内容右 -->
                        <draggable
                            v-if="[2,4].indexOf(themeId) > -1"
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
                        <!-- 内容下 -->
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
                    <div class="header border-bottom d-flex">{{current.data.title}}</div>
                    <!-- 轮播图列表编辑 -->
                    <div v-if="current.data.name == 'MySwiper'" class="editorItem">
                        <div class="text-secondary my-3">{{current.data.data.title}}</div>
                        <input
                            class="form-control"
                            v-model="current.data.data.title"
                            type="text"
                            placeholder="请输入标题名称"
                        />
                        <div
                            v-for="item in current.data.data.childs"
                            :key="item.id"
                            class="editorWrap"
                        >
                            <div class="graphicCard">
                                <i class="fa fa-times-circle close"></i>
                                <label class="imgWrap">
                                    <input
                                        @change="imgUpload($event, item)"
                                        name
                                        class="d-none"
                                        type="file"
                                        accept="image/*"
                                    />
                                    <img :src="item.picSrc" alt />
                                    <div class="modify_image">修改</div>
                                </label>
                                <div class="text-secondary text-center mb-3 small">（建议尺寸为1160*242）</div>
                                <input
                                    class="form-control"
                                    type="url"
                                    v-model="item.href"
                                    placeholder="跳转链接"
                                />
                            </div>
                        </div>

                        <button
                            v-show="current.data.data.childs.length< 5"
                            class="btn btn-outline-primary btn-block"
                            type="button"
                            @click="component_add"
                        >+增加</button>
                    </div>
                    <!-- 图文列表编辑 -->
                    <div v-if="current.data.name == 'ListGraphic'" class="editorItem">
                        <div class="text-secondary my-3">{{current.data.data.title}}</div>
                        <input
                            class="form-control"
                            v-model="current.data.data.title"
                            type="text"
                            placeholder="请输入标题名称"
                        />
                        <!-- <div v-if="current.data.data.childs.length"> -->
                        <div
                            v-for="item in current.data.data.childs"
                            :key="item.id"
                            class="editorWrap"
                        >
                            <div class="graphicCard">
                                <i class="fa fa-times-circle close"></i>
                                <label class="imgWrap">
                                    <input
                                        @change="imgUpload($event, item)"
                                        name
                                        class="d-none"
                                        type="file"
                                        accept="image/*"
                                    />
                                    <img :src="item.picSrc" alt />
                                    <div class="modify_image">修改</div>
                                </label>
                                <div class="text-secondary text-center mb-3 small">（建议尺寸为480*300）</div>
                                <input
                                    class="form-control mb-3"
                                    type="text"
                                    v-model="item.title"
                                    placeholder="请输入文章标题"
                                />
                                <input
                                    class="form-control mb-3"
                                    type="text"
                                    v-model="item.text"
                                    placeholder="请输入文章简介"
                                />
                                <input
                                    class="form-control"
                                    type="url"
                                    v-model="item.href"
                                    placeholder="跳转链接"
                                />
                            </div>
                        </div>
                        <!-- </div> -->

                        <button
                            v-show="current.data.data.childs.length< 5"
                            class="btn btn-outline-primary btn-block"
                            type="button"
                            @click="component_add"
                        >+增加</button>
                        <!-- <button
                            class="btn btn-primary btn-block"
                            type="button"
                            @click="component_save"
                        >保存</button>-->
                    </div>
                    <!-- 文字列表编辑 -->
                    <div v-if="current.data.name == 'ListText'" class="editorItem">
                        <div class="text-secondary my-3">{{current.data.data.title}}</div>
                        <input
                            class="form-control"
                            type="text"
                            v-model="current.data.data.title"
                            placeholder="请输入标题名称"
                        />
                        <div
                            class="editorWrap"
                            v-for="item in current.data.data.childs"
                            :key="item.id"
                        >
                            <div class="graphicCard py-4">
                                <i
                                    class="fa fa-times-circle close"
                                    @click="component_del2(item.id)"
                                ></i>
                                <input
                                    class="form-control mb-3"
                                    type="text"
                                    v-model="item.text"
                                    placeholder="请输入文章标题"
                                />
                                <input
                                    class="form-control"
                                    type="url"
                                    v-model="item.href"
                                    placeholder="跳转链接"
                                />
                            </div>
                        </div>

                        <button
                            v-show="current.data.data.childs.length< 5"
                            class="btn btn-outline-primary btn-block"
                            type="button"
                            @click="component_add"
                        >+增加</button>
                        <!-- <button
                            class="btn btn-primary btn-block"
                            type="button"
                            @click="component_save"
                        >保存</button>-->
                    </div>
                </div>
                <button @click="test" class="btn btn-danger">test</button>
            </aside>
        </div>
    </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import { MODULESOURCE } from "../assets/moduleSource";
import MySwiper from "../components/Swiper";
import ListGraphic from "../components/ListGraphic";
import draggable from "vuedraggable";
import Item from "../components/Item";
import UserInfo from "../components/UserInfo";
import ListText from "../components/ListText";

let tem_id = 0;

export default {
    name: "Design",
    components: { draggable, MySwiper, ListGraphic, Item, UserInfo, ListText },
    data() {
        return {
            isPreview: false,
            themeId: 2,
            xjs_up: [
                {
                    title: "轮播图",
                    icon: "fa-window-maximize",
                    name: "MySwiper",
                    data: {
                        title: "轮播图",
                        childs: [
                            {
                                href: "",
                                picSrc:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088301454&di=c1c11e5b44c8b7c4203aaadb0bca2436&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fbanner%2F21%2F68%2F12%2FeJsRpmTiNlFeZahd0sfD.gif",
                                alt: ""
                            },
                            {
                                href: "",
                                picSrc:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088213641&di=32f73851711ffd2b57da6448e5a9ace1&imgtype=0&src=http%3A%2F%2Fstatic.baimao.com%2Fuploads%2Fnews%2Fimage%2F20171207%2F20171207161819_41660.jpg",
                                alt: ""
                            },
                            {
                                href: "",
                                picSrc:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088178162&di=d5b73259775477c25c575c4beb53c46c&imgtype=0&src=http%3A%2F%2Fsimg2.bigbigwork.com%2Fjhb%2Ff10a26904d1f11e90c7d713b49da0385.jpg",
                                alt: ""
                            },
                            {
                                href: "",
                                picSrc:
                                    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591088284122&di=f98b557082234b50c976e1b915186b32&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2555003744%2C2749592312%26fm%3D214%26gp%3D0.jpg",
                                alt: ""
                            }
                        ]
                    }
                }
            ],
            xjs_left: [
                {
                    title: "图文列表",
                    icon: "fa-th-list",
                    name: "ListGraphic",
                    data: {
                        title: "左侧列表",
                        childs: [
                            {
                                title:
                                    "国足有腰了！超强海归新星有资格入选国足，3场2个世界波证明实力",
                                picSrc:
                                    "https://p0.ssl.qhimg.com/t01800e1fb2f6d1e448.webp",
                                text:
                                    "国足有腰了！在郑智年越来越大，蒿俊闵和吴曦也不再年轻的情况下，谁在未来撑起国足的腰一直是大家关注的焦点。",
                                date: "2020-1-20",
                                views: 0,
                                href: ""
                            }
                        ]
                    }
                }
            ],
            xjs_middle: [
                {
                    title: "图文列表",
                    icon: "fa-th-list",
                    name: "ListGraphic",
                    data: {
                        title: "图文列表",
                        childs: [
                            {
                                title:
                                    "女排31岁世界冠军婚后再训练！少校军衔比袁心玥高，丈夫1米97",
                                picSrc:
                                    "https://p0.ssl.qhimgs4.com/t01690342459fe00ab4.webp",
                                text:
                                    "杨珺菁依然放不下这片赛场，她在社交媒体上发布了自己再次参加训练的照片。这位中国女排世界冠军并没有像很多人预料的那样结婚后退役，她还仍然要继续打球。",
                                date: "2020-06-03",
                                views: 0,
                                href: ""
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
                                title:
                                    "新疆男篮或迎改变，全华班模式恐提前放弃本赛季，特罗特去哪了？",
                                picSrc:
                                    "https://p0.ssl.qhimg.com/t01aeba22713584833d.webp",
                                text:
                                    "目前CBA联赛已经确定将在本月20日复赛，届时因疫情原因停赛数个月的CBA联赛终于归来，联赛回归后因“新赛制”的变更，对决将会十分有趣，两个小组角逐，广东男篮所在的小组堪称一枝独秀",
                                date: "2020-06-03",
                                views: 0,
                                href: ""
                            }
                        ]
                    }
                }
            ],
            xjs_right: [
                {
                    title: "我的信息",
                    icon: "fa-address-card-o",
                    name: "UserInfo",
                    data: { title: "我的信息", childs: [] }
                },
                {
                    title: "图文列表",
                    icon: "fa-th-list",
                    name: "ListGraphic",
                    data: {
                        title: "右侧列表",
                        childs: [
                            {
                                title:
                                    "维尔纳争夺战利物浦没输，克洛普觉得这钱不值",
                                picSrc:
                                    "https://p0.ssl.qhimgs4.com/t014ac5e303f1b107cf.webp",
                                text:
                                    "虎扑6月5日讯 据多家媒体报道，切尔西已经与莱比锡达成一致，维尔纳将加盟蓝军。对此，红军旧将约翰-巴恩斯表示，维尔纳没来利物浦，是因为克洛普觉得不值。",
                                date: "2020-06-05",
                                views: 12,
                                href: ""
                            }
                        ]
                    }
                }
            ],
            xjs_down: [
                {
                    title: "图文列表",
                    icon: "fa-th-list",
                    name: "ListGraphic",
                    data: {
                        title: "底部列表",
                        childs: [
                            {
                                title:
                                    "巴托梅乌请求二次降薪，但巴萨球员不打算接受",
                                picSrc:
                                    "https://p0.ssl.qhimgs4.com/t01fa6c59780ac3b27f.webp",
                                text:
                                    "虎扑6月3日讯 此前，据加泰电台消息，巴萨主席巴托梅乌与全队的会议上已经再次向一线队请求进行降薪，不过球员们并不打算接受。",
                                date: "2020-06-03",
                                views: 0,
                                href: ""
                            }
                        ]
                    }
                }
            ],
            moduleSource: [].concat(MODULESOURCE),
            current: {}
        };
    },
    created() {
        let that = this;
        that.themeId = that.$route.params.theme;
        // 处理 xjs_up
        if (that.xjs_up.length) {
            $.each(that.xjs_up, function(index0, value0) {
                $.map(value0.data.childs, function(n, i) {
                    n.id = tem_id;
                    tem_id++;
                    return n;
                });
            });
        }
        // 处理 xjs_left
        if (that.xjs_left.length) {
            $.each(that.xjs_left, function(index0, value0) {
                $.map(value0.data.childs, function(n, i) {
                    n.id = tem_id;
                    tem_id++;
                    return n;
                });
            });
        }
        // 处理 xjs_middle
        if (that.xjs_middle.length) {
            $.each(that.xjs_middle, function(index0, value0) {
                $.map(value0.data.childs, function(n, i) {
                    n.id = tem_id;
                    tem_id++;
                    return n;
                });
            });
        }
        // 处理 xjs_right
        if (that.xjs_right.length) {
            $.each(that.xjs_right, function(index0, value0) {
                $.map(value0.data.childs, function(n, i) {
                    n.id = tem_id;
                    tem_id++;
                    return n;
                });
            });
        }
        // 处理 xjs_down
        if (that.xjs_down.length) {
            $.each(that.xjs_down, function(index0, value0) {
                $.map(value0.data.childs, function(n, i) {
                    n.id = tem_id;
                    tem_id++;
                    return n;
                });
            });
        }
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
            this.current = {};
        },
        component_del2(id) {
            // 删除组件内某一项
            let that = this,
                arr = that.current.data.data.childs;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].id == id) {
                    arr.splice(i, 1);
                    break;
                }
            }
        },
        component_edit(listName, item, index) {
            this.current = {
                name: listName,
                data: item,
                index: index
            };
            console.log(this.current);
        },
        component_change(evt) {
            // 拖拽项改变时，清空当前项，防止数据错乱
            console.log("change: ", evt);
            $(".component-layout").removeClass("active");
            this.current = {};
            if (!!evt.added) {
                $.map(evt.added.element.data.childs, function(n, i) {
                    n.id = tem_id++;
                    return n;
                });
            }
        },
        imgUpload(obj, item) {
            // let that = this;
            let file = obj.target.files[0];
            if (!file) return false;
            let img = $(obj.target).next("img")[0];

            // 可以进行一下文件类型的判断
            if (!/image\/\w+/.test(file.type)) {
                alert("请上传图片");
                return false;
            }
            // 图片大小的限制
            let fileSize = parseFloat(file.size / 1024 / 1024);
            if (fileSize > 2) {
                alert("图片大小不超过2MB");
                return false;
            }
            // 读取图片文件流
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                img.src = e.target.result;
                item.picSrc = e.target.result;
            };
        },
        component_save() {
            // this[this.current.name][this.current.index] = this.current.data;
        },
        component_add() {
            let that = this;
            let component_name = that.current.data.name;
            for (var i = 0, len = MODULESOURCE.length; i < len; i++) {
                if (MODULESOURCE[i].name == component_name) {
                    let obj = JSON.parse(
                        JSON.stringify(MODULESOURCE[i].data.childs[0])
                    );
                    $.extend(obj, {
                        id: tem_id++
                    });
                    that.current.data.data.childs.push(obj);
                    break;
                }
            }
        },
        component_clone(evt) {
            console.log("component_clone", evt);
            return JSON.parse(JSON.stringify(evt));
        },

        test() {
            console.log("run test.", MODULESOURCE);
        }
    }
};
</script>

<style >
@import url("../assets/design.css");
</style>