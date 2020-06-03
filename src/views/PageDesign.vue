<template>
    <div class="pagedesign base_right">
        <div class="base_content">
            <div class="base_mainContent">
                <div class="d-flex text-center">
                    <div class="p-3 temps_item" :class="{selected: frame_active===1}">
                        <img class="mw-100" src="../assets/images/frame_thumbnail_1.jpg" alt="">
                        <div class="temps_title">单列</div>
                        <div class="pt-2">
                            <router-link to="/design/1" tag="button" class="btn btn-primary mx-2" type="button">装修</router-link>
                            <button v-if="frame_active===1" class="btn btn-light mx-2" type="button">使用中</button>
                            <button @click="choose(1)" v-else class="btn btn-danger mx-2" type="button">使用</button>
                        </div>
                    </div>
                    <div class="p-3 temps_item" :class="{selected: frame_active===2}">
                        <img class="mw-100" src="../assets/images/frame_thumbnail_2_1.jpg" alt="">
                        <div class="temps_title">两列,左宽</div>
                        <div class="pt-2">
                            <router-link to="/design/2" class="btn btn-primary mx-2" type="button">装修</router-link>
                            <button v-if="frame_active===2" class="btn btn-light mx-2" type="button">使用中</button>
                            <button @click="choose(2)" v-else class="btn btn-danger mx-2" type="button">使用</button>
                        </div>
                    </div>
                    <div class="p-3 temps_item" :class="{selected: frame_active===3}">
                        <img class="mw-100" src="../assets/images/frame_thumbnail_2_2.jpg" alt="">
                        <div class="temps_title">两列,右宽</div>
                        <div class="pt-2">
                            <router-link to="/design/3" class="btn btn-primary mx-2" type="button">装修</router-link>
                            <button v-if="frame_active===3" class="btn btn-light mx-2" type="button">使用中</button>
                            <button @click="choose(3)" v-else class="btn btn-danger mx-2" type="button">使用</button>
                        </div>
                    </div>
                    <div class="p-3 temps_item" :class="{selected: frame_active===4}">
                        <img class="mw-100" src="../assets/images/frame_thumbnail_3.jpg" alt="">
                        <div class="temps_title">三列</div>
                        <div class="pt-2">
                            <router-link to="/design/4" class="btn btn-primary mx-2" type="button">装修</router-link>
                            <button v-if="frame_active===4" class="btn btn-light mx-2" type="button">使用中</button>
                            <button @click="choose(4)" v-else class="btn btn-danger mx-2" type="button">使用</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageDesign",
        data(){
            return {
                frame_active: 2
            }
        },
        methods: {
            choose(num){
                this.frame_active = num;
            }
        }
    }
</script>

<style scoped>
    .temps_item{position: relative;border: 2px dashed transparent;}
    .temps_item:hover{background: #f5f7fa;}
    .temps_title{width: 100%;position: absolute;top: 0;left: 0;padding-top: 20px;}
    .temps_item.selected{border-color: #2878F0;}
</style>