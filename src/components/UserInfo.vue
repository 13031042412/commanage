<template>
    <div class="userInfo base_width component-layout">
        <div class="xjs_section xjs_module_teacher">
            <div class="xjs_module_teacher-content">
                <div class="xjs_module_teacher-head" href="##">
                    <img
                        class="xjs_module_teacher-headPic"
                        src="../assets/images/avatar.jpg"
                        alt="头像"
                    />
                </div>
                <div class="xjs_module_teacher-name">谷晟阳</div>
                <p class="xjs_module_teacher-brand">2019年度中国10强讲师</p>
                <p class="xjs_module_teacher-position">易学大师、国学讲师、辟谷导师、风水实战派专家</p>
                <dl class="xjs_module_teacher-contact">
                    <dt>联系方式：</dt>
                    <dd>13811112222</dd>
                </dl>
                <dl class="xjs_module_teacher-contact">
                    <dt>微信：</dt>
                    <dd>
                        <p>13811112222</p>
                        <img
                            class="xjs_module_teacher-qrcode"
                            src="http://img1.jiangshi.org/rsi/20180515/152221599379_702298_200x200.jpg"
                            alt="二维码"
                        />
                    </dd>
                </dl>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "UserInfo",
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
.xjs_module_teacher {
    padding: 45px 0 0;
}
.xjs_module_teacher-content {
    position: relative;
    background: rgba(255, 255, 255, 0.5);
    padding: 50px 10px 20px;
}
.xjs_module_teacher-head {
    display: block;
}
.xjs_module_teacher-headPic {
    position: absolute;
    top: -45px;
    left: calc(50% - 45px);
    border-radius: 100%;
    border: 5px solid #fff;
    width: 90px;
    height: 90px;
    transition: all 0.8s;
    -webkit-transition: all 0.8s;
}
.xjs_module_teacher-headPic:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}
.xjs_module_teacher-name {
    color: #0181da;
    text-align: center;
    margin-bottom: 5px;
    font-size: 16px;
}
.xjs_module_teacher-brand,
.xjs_module_teacher-position {
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
}
.xjs_module_teacher-brand {
    color: #d81e06;
    font-weight: bold;
}
.xjs_module_teacher-contact {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 10px auto 0;
    max-width: 300px;
    font-size: 12px;
}
.xjs_module_teacher-contact dt {
    width: 90px;
    text-align: right;
}
.xjs_module_teacher-contact dd {
    width: 100px;
    flex-grow: 1;
}
.xjs_module_teacher-qrcode {
    max-width: 100%;
    margin-top: 5px;
}
</style>