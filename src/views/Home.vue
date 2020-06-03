<template>
    <div class="home">
        <SideBar></SideBar>
        <TopBar></TopBar>
        <router-view/>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar.vue'
    import TopBar from '@/components/TopBar.vue'

    export default {
        name: 'Home',
        components: {
            SideBar, TopBar
        },
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style scoped>
.home{height: 100%;}
</style>