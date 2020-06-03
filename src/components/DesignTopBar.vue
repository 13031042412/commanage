<template>
    <div class="designTopBar d-flex justify-content-between align-items-center">
        <div class="abort-edit">退出编辑</div>
        <div>正在编辑中...</div>
        <div class="preview-save-btns">
            <button v-show="!isPreview" type="button" class="btn btn-sm btn-outline-primary"
                    @click="preview"
            >预览</button>
            <button v-show="isPreview" type="button" class="btn btn-sm btn-outline-primary">退出预览</button>
            <button v-show="!isPreview" type="button" class="btn btn-sm btn-primary">保存</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DesignTopBar",
        data(){
            return {
                isPreview: false
            }
        }
    }
</script>

<style scoped>
    .designTopBar{position: relative;width: 100%;height: 48px;box-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.05);}
    .abort-edit{padding: 10px 0 10px 26px;cursor:pointer;}
    .preview-save-btns{padding-right: 40px;}
    .preview-save-btns .btn{min-width: 75px;}
    .preview-save-btns .btn+.btn{margin-left: 22px;}
</style>