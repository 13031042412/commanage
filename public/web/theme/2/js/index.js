;$(function () {
    var vm = new Vue({
        el: '#xjs_container_wrap',
        data: {
            message: 'Hello Vue.js!',
            list_type:2
        },
        mounted(){
            // 注册轮播图
            var banner_default = new Swiper ('.xjs_banner', {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                autoHeight: true,
                watchOverflow: true,    //仅有1个slide时，swiper无效
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                },
            });



        }
    })




});