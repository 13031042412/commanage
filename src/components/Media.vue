<template>
    <div class="xjs_media">
        <span class="xjs_media-pic" data-href>
            <img :src="con.picSrc" alt />
        </span>
        <div class="xjs_media-body">
            <h5>
                <span data-href>{{con.title}}</span>
            </h5>
            <p class="xjs_media-text">{{con.text}}</p>
            <div class="xjs_media-bottom">
                <span>
                    <i class="fa fa-clock-o"></i>
                    {{con.date}}
                </span>
                <span>
                    <i class="fa fa-eye"></i>
                    {{con.views}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Media",
    props: {
        con: {
            type: Object,
            default: function() {
                return {
                    id: 0,
                    title: "",
                    picSrc: "",
                    text: "",
                    date: new Date().toLocaleDateString().replace(/\//g, "-"),
                    views: 0,
                    href: ""
                };
            }
        }
    },
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
    width: 150px;
    max-width: 36%;
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
    font-size: 14px;
    margin-bottom: 10px;
}
.xjs_media-text {
    font-size: 12px;
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