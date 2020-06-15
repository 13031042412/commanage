<template>
    <div class="login d-flex justify-content-center align-items-center">
        <a class="logo" href="http://www.jiangshi.org/" target="_bank">
            <img src="http://css.jiangshi.org/v2/images/logo.png" alt="中华讲师网" />
        </a>

        <div class="card">
            <div class="card-body pb-5">
                <div v-show="showVerify" class="my_verify">
                    <div id="my_verify" class="d-flex align-items-center h-100"></div>
                </div>
                <div class="text-center mb-3">
                    <div class="btn-group" role="group">
                        <button
                            type="button"
                            class="btn"
                            :class="[flag==1?'btn-primary':'btn-outline-primary']"
                            @click="flag=1"
                        >密码登录</button>
                        <button
                            type="button"
                            class="btn"
                            :class="[flag==2?'btn-primary':'btn-outline-primary']"
                            @click="flag=2"
                        >验证码登录</button>
                        <button
                            type="button"
                            class="btn"
                            :class="[flag==3?'btn-primary':'btn-outline-primary']"
                            @click="flag=3"
                        >二维码登录</button>
                    </div>
                </div>
                <form v-show="flag==1" ref="form_account" class="pt-3" novalidate>
                    <div class="form-group">
                        <div>
                            <input
                                type="text"
                                class="form-control"
                                v-model="form_account.account"
                                placeholder="输入账号"
                                required
                                @keyup.enter="submitAccount"
                            />
                            <div class="invalid-feedback">请输入账号</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control"
                            v-model="form_account.password"
                            placeholder="输入密码"
                            required
                            @keyup.enter="submitAccount"
                        />
                        <div class="invalid-feedback">请输入密码</div>
                    </div>
                    <div class="form-group text-right">
                        <router-link to="/reset">忘记密码</router-link>
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary btn-block"
                        :class="{'disabled': disabled1}"
                        :disabled="disabled1"
                        @click="submitAccount"
                    >登录</button>
                </form>
                <form v-show="flag==2" ref="form_tel" class="pt-3" novalidate>
                    <div class="form-group">
                        <div>
                            <input
                                ref="tel"
                                type="text"
                                class="form-control"
                                v-model="form_tel.account"
                                placeholder="输入手机号"
                                pattern="^1\d{10}$"
                                required
                            />
                            <div class="invalid-feedback" ref="tel_invalid">请输入正确手机号</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-7">
                            <input
                                type="text"
                                class="form-control"
                                v-model="form_tel.code"
                                placeholder="短信验证码"
                                required
                            />
                            <div class="invalid-feedback">请输入短信验证码</div>
                        </div>
                        <div class="col-sm-5 pl-0">
                            <button
                                type="button"
                                class="btn btn-primary btn-block"
                                :class="{'disabled': msgDisabled}"
                                :disabled="msgDisabled"
                                @click="getMSG"
                            >
                                <span v-if="sendMsg">获取验证码</span>
                                <span v-else>重新获取({{timer}})</span>
                            </button>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary btn-block"
                        :class="{'disabled': disabled2}"
                        :disabled="disabled2"
                        @click="submitTel"
                    >登录</button>
                </form>
                <div v-show="flag==3">二维码</div>
                <div class="text-center position-absolute w-100 bottom">
                    还没账号？
                    <router-link to="/register">立即注册</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import SlideVerify from "slide-verify/dist/slide-verify";
let slide;
export default {
    name: "Login",
    data() {
        return {
            flag: 1,
            form_account: {
                account: "",
                password: ""
            },
            form_tel: {
                account: "",
                code: ""
            },
            sendMsg: true,
            timer: 60,
            showVerify: false
        };
    },
    components: {},
    mounted() {},
    methods: {
        submitAccount() {
            let that = this;
            let submitForm = that.$refs.form_account;
            if (!that.form_account.account || !that.form_account.password) {
                submitForm.classList.add("was-validated");
            }

            if (submitForm.checkValidity() === true) {
                that.showVerify = true;
                slide = new SlideVerify({
                    elementId: "my_verify",
                    onSuccess: () => {
                        that.$router.push("/home");
                    },
                    onFail: () => {
                        console.log("fail");
                    },
                    onRefresh: () => {
                        console.log("refresh");
                    },
                    photo: that.slideVerifyPics
                });
            }
        },
        submitTel() {
            console.log("手机登录");
            let submitForm2 = this.$refs.form_tel;
            submitForm2.classList.add("was-validated");

            if (submitForm2.checkValidity() === true) {
                console.log("提交");
            }
        },
        getMSG() {
            let that = this;
            if (!/^1\d{10}$/.test(that.form_tel.account)) {
                that.$refs.tel_invalid.style.display = "block";
                that.$refs.tel.focus();
            } else {
                that.$refs.tel_invalid.style.display = "none";
                that.sendMsg = false;
                let timer = setInterval(function() {
                    that.timer--;
                    if (that.timer < 1) {
                        clearInterval(timer);
                        that.sendMsg = true;
                        that.timer = 60;
                    }
                }, 1000);
            }
        }
    },
    computed: {
        ...mapState(["slideVerifyPics"]),
        disabled1() {
            if (this.form_account.account && this.form_account.password)
                return false;
            else return true;
        },
        disabled2() {
            if (this.form_tel.account && this.form_tel.code) return false;
            else return true;
        },
        msgDisabled() {
            if (/^1\d{10}$/.test(this.form_tel.account) && this.sendMsg)
                return false;
            else return true;
        }
    }
};
</script>
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background-color: #92eeef;
    background-image: linear-gradient(to bottom right, #fff, #92eeef, #27cbd7);
}
.logo {
    position: absolute;
    top: 10px;
    left: 10%;
}
.logo img {
    width: 130px;
}
.card {
    width: 360px;
    max-width: 100%;
    min-height: 400px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 0.2s;
}
.card:hover {
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 15px rgba(255, 255, 255, 0.5);
}
.form-group {
    margin-bottom: 20px;
}
.my_verify {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    z-index: 100;
}
.bottom {
    left: 0;
    bottom: 15px;
    z-index: 1;
}
</style>