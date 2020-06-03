<template>
  <div class="xjs_media">
    <span class="xjs_media-pic" data-href>
      <img
        src="https://www.17sucai.com/preview/806169/2020-04-18/%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/images/8.jpg"
        alt
      />
    </span>
    <div class="xjs_media-body">
      <h5>
        <span data-href>js前端实现模糊查询</span>
      </h5>
      <p
        class="xjs_media-text"
      >js前端实现模糊查询对于模糊查询，一般都是传关键字给后端，由后端来做。但是有时候一些轻量级的列表前端来做可以减少ajax请求，在一定程度上提高用户体验。</p>
      <div class="xjs_media-bottom">
        <span>
          <i class="fa fa-clock-o"></i>2019-04-03
        </span>
        <span>
          <i class="fa fa-eye"></i>123
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Media",
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
.xjs_media {
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid transparent;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin-bottom: 10px;
}
.xjs_media:hover {
  border-color: #ff6900;
}
.xjs_media-pic {
  display: inline-block;
  width: 170px;
  max-width: 40%;
  margin-right: 10px;
  overflow: hidden;
}
.xjs_media-pic img {
  width: 100%;
  max-height: 130px;
  position: relative;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.xjs_media-pic img:hover {
  transform: scale(1.2);
}
.xjs_media-body {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.xjs_media-body h5 {
  font-size: 16px;
  margin-bottom: 10px;
}
.xjs_media-text {
  font-size: 13px;
  margin-bottom: 10px;
  color: #515151;
  height: 40px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.xjs_media-bottom span {
  margin-right: 5px;
  color: #999;
  font-size: 13px;
}
.xjs_media-bottom i {
  color: #ff6900;
  font-size: 13px;
  margin-right: 5px;
}
</style>