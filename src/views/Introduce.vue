<template>
    <div class="introduce base_right">
        <div class="base_content">
            <div class="base_mainContent">
                我的介绍
                <button class="btn btn-primary" @click="test('我的介绍')">btn</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduce",
        methods: {
            test(val){
                console.log(this)
                // this.customStore.setMessageAction(val)
            }
        }

    }
</script>

<style scoped>

</style>