<template>
    <div class="reset d-flex justify-content-center align-items-center">
        <a class="logo" href="http://www.jiangshi.org/" target="_bank">
            <img src="http://css.jiangshi.org/v2/images/logo.png" alt="中华讲师网" />
        </a>
        <div class="card">
            <div class="card-body pb-5">
                <h5 class="card-title text-center">重置密码</h5>
                <!-- <div v-show="showVerify" class="my_verify">
                    <div id="my_verify" class="d-flex align-items-center h-100"></div>
                </div>-->
                <form class="pt-3" ref="form_submit" novalidate>
                    <div class="form-row">
                        <div class="col">
                            <input
                                ref="tel"
                                type="text"
                                class="form-control"
                                v-model="account"
                                placeholder="输入手机号"
                                pattern="^1\d{10}$"
                                required
                            />
                            <div class="invalid-feedback" ref="tel_invalid">请输入正确手机号</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-sm-7">
                            <input
                                type="text"
                                class="form-control"
                                v-model="code"
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
                    <div class="form-row">
                        <div class="col">
                            <input
                                type="password"
                                class="form-control"
                                v-model="password"
                                placeholder="设置密码"
                                pattern="\w{6,20}"
                                required
                            />
                            <div class="invalid-feedback">请输入6-20位，数字字母组合</div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary btn-block"
                        :class="{'disabled': disabled}"
                        :disabled="disabled"
                        @click="submit"
                    >重置密码</button>
                </form>
                <div class="text-center position-absolute w-100 bottom">
                    已有账号？
                    <router-link to="/login">马上登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Reset",
    data() {
        return {
            account: "",
            code: "",
            password: "",
            sendMsg: true,
            timer: 60
        };
    },
    components: {},
    mounted() {},
    methods: {
        submit() {
            let that = this;
            let submitForm = that.$refs.form_submit;
            submitForm.classList.add("was-validated");

            if (submitForm.checkValidity() === true) {
                console.log("重置");
            }
        },
        getMSG() {
            let that = this;
            if (!/^1\d{10}$/.test(that.account)) {
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
        disabled() {
            if (this.account && this.password && this.code) return false;
            else return true;
        },
        msgDisabled() {
            if (/^1\d{10}$/.test(this.account) && this.sendMsg) return false;
            else return true;
        }
    }
};
</script>
<style scoped>
.reset {
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
.form-row {
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