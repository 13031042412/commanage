<template>
    <div class="introduce base_right">
        <div class="base_content">
            <div class="base_mainContent">
                <div class="row">
                    <div class="col-sm-6">
                        <form class="p-4" ref="form_introduce" novalidate>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">登录账号</label>
                                <div class="col-sm-10 pt-2">{{formData.account}}</div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">姓名</label>
                                <div class="col-sm-10">
                                    <input
                                        v-model="formData.username"
                                        type="text"
                                        class="form-control w-50"
                                        placeholder="请输入姓名"
                                        required
                                    />
                                    <div class="invalid-feedback">请输入您的姓名</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">性别</label>
                                <div class="col-sm-10 pt-2">
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            value="男"
                                            v-model="formData.gender"
                                            id="gender_male"
                                        />
                                        <label class="form-check-label pr-2" for="gender_male">男</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            value="女"
                                            v-model="formData.gender"
                                            id="gender_famale"
                                        />
                                        <label class="form-check-label pr-2" for="gender_famale">女</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">出生年</label>
                                <div class="col-sm-10">
                                    <select
                                        class="custom-select w-50"
                                        v-model="formData.year"
                                        required
                                    >
                                        <option value>请选择</option>
                                        <option value="111">111</option>
                                        <option value="222">222</option>
                                        <option value="333">333</option>
                                    </select>
                                    <div class="invalid-feedback">请选择出生年</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">现居</label>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col" style="padding-right:0;">
                                            <select
                                                class="custom-select"
                                                v-model="formData.province"
                                                required
                                            >
                                                <option value>请选择省</option>
                                                <option value="111">111</option>
                                                <option value="222">222</option>
                                                <option value="333">333</option>
                                            </select>
                                            <div class="invalid-feedback">请选择省份</div>
                                        </div>
                                        <div class="col">
                                            <select
                                                class="custom-select"
                                                v-model="formData.city"
                                                required
                                            >
                                                <option value>请选择市</option>
                                                <option value="111">111</option>
                                                <option value="222">222</option>
                                                <option value="333">333</option>
                                            </select>
                                            <div class="invalid-feedback">请选择城市</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">手机</label>
                                <div class="col-sm-10">
                                    <input
                                        type="tel"
                                        class="form-control w-50"
                                        v-model="formData.mobile"
                                        placeholder="请输入手机号"
                                        pattern="^1\d{10}$"
                                        required
                                    />
                                    <div class="invalid-feedback">请输入正确的手机号码</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">微信</label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control w-50"
                                        v-model="formData.wechat"
                                        placeholder="请输入微信号"
                                        required
                                    />
                                    <div class="invalid-feedback">请输入正确的微信号</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">QQ</label>
                                <div class="col-sm-10">
                                    <input
                                        type="tel"
                                        class="form-control w-50"
                                        v-model="formData.qq"
                                        placeholder="请输入QQ号"
                                    />
                                    <div class="invalid-feedback">请输入正确的QQ号码</div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label text-right">邮箱</label>
                                <div class="col-sm-10">
                                    <input
                                        type="tel"
                                        class="form-control w-50"
                                        v-model="formData.emial"
                                        placeholder="请输入邮箱号"
                                    />
                                    <div class="invalid-feedback">请输入正确的邮箱号</div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <!-- <label class="col-sm-2 col-form-label text-right"></label> -->
                                <div class="col-sm-10 offset-sm-2">
                                    <button
                                        class="btn btn-primary px-5"
                                        type="button"
                                        @click="submit"
                                    >保存</button>
                                </div>
                            </div>
                            <!-- <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">性别</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" />
                                    <div class="invalid-feedback">请输入您的姓名</div>
                        </div>
                            </div>-->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Introduce",
    data() {
        return {
            formData: {
                account: 13011112222,
                username: "",
                gender: "男",
                year: "",
                province: "",
                city: "",
                mobile: "",
                wechat: "",
                qq: "",
                emial: ""
            }
        };
    },
    mounted() {},
    methods: {
        submit() {
            var submitForm = this.$refs.form_introduce;
            submitForm.classList.add("was-validated");

            if (submitForm.checkValidity() === true) {
                console.log("提交");
            }
        },

        test(val) {
            console.log(this);
            // this.customStore.setMessageAction(val)
        }
    }
};
</script>

<style scoped>
</style>