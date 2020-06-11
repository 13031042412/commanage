<template>
    <div class="mySwiper base_width component-layout">
        <div v-if="datas.childs.length > 0" class="swiper-container xjs_banner">
            <div class="swiper-wrapper">
                <div
                    v-for="item in datas.childs"
                    :key="item.id"
                    :data-href="item.href"
                    class="swiper-slide"
                >
                    <img :src="item.picSrc" :alt="item.alt" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    name: "MySwiper",
    props: {
        datas: {
            type: Object,
            default: function() {
                return {
                    childs: [
                        {
                            id: 0,
                            href: "http://www.jiangshi.org/",
                            picSrc:
                                "http://img1.jiangshi.org/rsi/20200609/091020403560_1422.jpg",
                            alt: "default pic."
                        }
                    ]
                };
            }
        }
    },
    data() {
        return {};
    },
    mounted() {
        let that = this;
        that.banner = new Swiper(".xjs_banner", {
            //   autoplay: {
            //     delay: 5000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: false
            //   },
            cssMode: true,
            autoHeight: true,
            watchOverflow: true, //仅有1个slide时，swiper无效
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: ".swiper-pagination"
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true
        });
    },
    watch: {
        lists: function() {
            console.log(111);
            this.banner.update();
        }
    }
};
</script>
<style scoped>
.xjs_banner {
    width: 100%;
    min-height: 100px;
}
.xjs_banner .swiper-slide {
    text-align: center;
}
.xjs_banner .swiper-slide img {
    max-width: 100%;
    max-height: 300px;
}
</style>