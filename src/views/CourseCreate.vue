<template>
    <div class="CourseCreate">
        <div class="row">
            <div class="col">
                <form class="p-4" ref="form_create" novalidate>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">课程名称</label>
                        <div class="col-sm-10">
                            <input
                                v-model="courseName"
                                type="text"
                                class="form-control w-50"
                                placeholder="请输入课程名称"
                                required
                            />
                            <div class="invalid-feedback">请输入课程名称</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">课程对象</label>
                        <div class="col-sm-10">
                            <input
                                v-model="target"
                                type="text"
                                class="form-control w-50"
                                placeholder="请输入课程对象"
                                required
                            />
                            <div class="invalid-feedback">请输入课程对象</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">课程目的</label>
                        <div class="col-sm-10">
                            <input
                                v-model="purpose"
                                type="text"
                                class="form-control w-50"
                                placeholder="请输入课程目的"
                                required
                            />
                            <div class="invalid-feedback">请输入课程目的</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">课程介绍</label>
                        <div class="col-sm-10">
                            <vue-editor
                                v-model="content"
                                placeholder="请编辑内容"
                                :editor-toolbar="customToolbar"
                            />
                            <div ref="invalid_courseIntro" class="invalid-feedback">请输入课程介绍</div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label text-right">验证码</label>
                        <div class="col-sm-2">
                            <input
                                v-model="purpose"
                                type="text"
                                class="form-control"
                                placeholder="图片验证码"
                                required
                            />
                            <div class="invalid-feedback">请输入验证码</div>
                        </div>
                        <div class="col pl-0">
                            <img
                                class="codePic"
                                src="http://www.jiangshi.org/tool/capture?r=637274006179059592"
                                onclick="this.src='http://www.jiangshi.org/tool/capture?rdm='+Math.random();"
                                alt="验证码"
                                title="点击刷新验证码"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-sm-10 offset-sm-2">
                            <button class="btn btn-primary px-5" type="button" @click="submit">保存</button>
                            <button class="btn btn-secondary px-5" type="button" @click="test">test</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import toast from "toast2";
import { VueEditor } from "vue2-editor";
import { mapMutations } from "vuex";
export default {
    name: "CourseCreate",
    data() {
        return {
            courseName: "",
            target: "",
            purpose: "",
            content: "",
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ list: "ordered" }, { list: "bullet" }],
                ["blockquote", "code-block"],
                ["link", "image"]
            ]
        };
    },
    components: { VueEditor },
    mounted() {
        this.setTopBarTitle("发布课程");
    },
    methods: {
        ...mapMutations(["setTopBarTitle"]),
        submit() {
            let that = this;
            var submitForm = this.$refs.form_create;
            submitForm.classList.add("was-validated");
            if (that.content == "") {
                that.$refs.invalid_courseIntro.style.display = "block";
                return false;
            }

            if (submitForm.checkValidity() === true) {
                console.log("提交");
            }
        },
        test() {
            toast.success("操作成功！");
        }
    }
};
</script>
<style scoped>
.codePic {
    display: block;
    height: calc(1.5em + 0.75rem + 2px);
}
</style>