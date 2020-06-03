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
        <div class="app-aside-drag">
          <div class="app-aside-item">
            <div class="aside-item-main">
              <i class="fa fa-window-maximize fa-fw aside-item-icon"></i>
              <span class="aside-item-title">轮播图</span>
            </div>
          </div>
          <div class="app-aside-item">
            <div class="aside-item-main">
              <i class="fa fa-th-list fa-fw aside-item-icon"></i>
              <span class="aside-item-title">图文列表</span>
            </div>
          </div>
          <div class="app-aside-item">
            <div class="aside-item-main">
              <i class="fa fa-list-ol fa-fw aside-item-icon"></i>
              <span class="aside-item-title">文字列表</span>
            </div>
          </div>
        </div>
      </aside>

      <section class="center-preview-container" :class="{'previewing-container': isPreview}">
        <div class="main-preview-container">
          <!-- top-nav -->
          <div ref="appMianDrag" class="app-mian-drag">
            <!-- <MySwiper :lists="banners" /> -->
            <!-- <ListGraphic v-for="(item, index) in graphicLists" :key="index" /> -->
            <component
              v-for="(item, i) in componentsArr"
              :key="i"
              :is="item.name"
              :datas="item.data"
            ></component>
            <div>111</div>
            <div>222</div>
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
import Sortable from "sortablejs";
import "swiper/css/swiper.min.css";
import MySwiper from "../components/Swiper";
import ListGraphic from "../components/ListGraphic";

export default {
  name: "Design",
  data() {
    return {
      isPreview: false,
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
      ],
      graphicLists: [
        {
          title: "",
          childs: [{ title: "", picSrc: "", text: "", date: "", views: "" }]
        },
        {
          title: "",
          childs: [{ title: "", picSrc: "", text: "", date: "", views: "" }]
        }
      ],
      componentsArr: [
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
        },
        {
          name: "ListGraphic",
          data: {}
        }
      ]
    };
  },
  components: { MySwiper, ListGraphic },
  mounted() {
    console.log(this.$route.params);
    var sortable = Sortable.create(this.$refs.appMianDrag);
  },
  methods: {
    preview() {
      this.isPreview = true;
    },
    abortPreview() {
      this.isPreview = false;
    },

    test() {
      console.log("test");
      //   $(".app-mian-drag").append('<component is="ListGraphic"></component>');
      this.graphicLists.push({
        name: "ListGraphic",
        data: {}
      });
    }
  }
};
</script>

<style >
.designTopBar {
  position: relative;
  width: 100%;
  height: 48px;
  box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.05);
}
.abort-edit {
  padding: 10px 0 10px 26px;
  cursor: pointer;
}
.preview-save-btns {
  width: 250px;
  padding-right: 40px;
  text-align: right;
}
.preview-save-btns .btn {
  min-width: 75px;
}
.preview-save-btns .btn + .btn {
  margin-left: 22px;
}
.main-decoration-module {
  width: 100%;
  height: calc(100% - 48px);
  position: relative;
}
.left-choose-container {
  width: 120px;
  padding-top: 10px;
  left: 0;
  color: #cdd3e6;
  background-color: #23263e;
  box-shadow: 4px 0px 8px 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0;
  height: 100%;
  overflow-y: auto;
}
.app-aside-item {
  height: 40px;
  font-size: 0;
  cursor: pointer;
}
.aside-item-main {
  margin: 0 auto;
  width: 80%;
  min-width: 120px;
}
.aside-item-icon {
  display: inline-block;
  margin-right: 8px;
  width: 32px;
  text-align: right;
  font-size: 12px;
}
.aside-item-title {
  display: inline-block;
  margin-top: 10px;
  font-size: 12px;
}
.app-aside-item:hover {
  background: #2a75ed;
  color: #fff;
}
.center-preview-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 120px;
  right: 292px;
  height: 100%;
  padding-top: 20px;
  overflow-y: auto;
  background-color: var(--main-bg-color);
}
.center-preview-container.previewing-container {
  background-color: #f5f6f9;
  padding-top: 0;
  left: 0;
  right: 0;
}
.main-preview-container {
  margin-left: 70px;
  padding-bottom: 100px;
  min-height: 100%;
  width: 1280px;
  box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff;
}
@media only screen and (max-width: 1599px) {
  .main-preview-container {
    margin-left: 50px;
    width: 900px;
  }
}
@media only screen and (max-width: 1439px) {
  .main-preview-container {
    width: 740px;
  }
}
.main-preview-container .app-mian-drag {
  min-height: 400px;
}
.pre-container .main-preview-container {
  width: auto;
  /* padding-top: 72px; */
  padding-top: 20px;
  margin: 0 auto;
  background: transparent;
  box-shadow: none;
}
.pre-container .main-preview-container .top-nav-container {
  position: fixed;
  width: 100%;
  top: 48px;
  right: 0;
  left: 0;
  z-index: 50;
}
.right-edit-container {
  width: 292px;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  overflow-y: auto;
  box-shadow: -4px 0px 8px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff;
}
.component-layout {
  padding: 18px 38px;
  position: relative;
  border: 2px dashed transparent;
  cursor: move;
}
@media only screen and (max-width: 1599px) {
  .component-layout {
    padding: 16px 26px;
  }
}
@media only screen and (max-width: 1439px) {
  .component-layout {
    padding: 14px 22px;
  }
}
.component-layout:hover,
.component-layout.edit-state-container:hover,
.component-layout.active[data-v-7da89bb4] {
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
  border: 2px dashed #2878f0;
}
</style>