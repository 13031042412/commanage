<template>
    <div class="shopNav px-4">
        <div class="pb-3">导航栏预览</div>
        <ShopNavbar></ShopNavbar>
        <div class="row mb-3">
            <div class="col-2 pt-3">导航栏logo</div>
            <div class="col-2">
                <img :src="logo" alt="logo" />
            </div>
            <div class="col">
                <label class="btn btn-light border px-4">
                    选择
                    <input type="file" class="hide" />
                </label>

                <div>建议尺寸140*40px，JPG、PNG格式，图片小于1M。</div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-2">导航栏设置</div>
            <div class="col">
                <p class="text-secondary">最多可设置5个导航</p>
                <div class="container">
                    <div class="row bg-light py-2">
                        <div class="col">导航名称</div>
                        <div class="col-md-3 text-center">跳转链接</div>
                        <div class="col text-right">操作</div>
                    </div>
                </div>
                <div class="container">
                    <div class="row py-3 border-bottom align-items-center">
                        <div class="col">
                            <div class="row">
                                <div class="col-auto align-self-center">
                                    <i class="fa fa-bars p-2 handle"></i>
                                </div>
                                <div class="col-6 pl-0">
                                    <input type="text" value="首页" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <input type="text" value class="form-control" />
                        </div>
                        <div class="col text-right">
                            <button class="btn btn-link" type="button">删除</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import ShopNavbar from "../../components/ShopNavbar";
export default {
    name: "ShopNav",
    data() {
        return {
            str: ""
        };
    },
    components: { ShopNavbar },
    computed: {
        ...mapState(["logo"])
    },
    mounted() {}
};
</script>
<style scoped>
</style>