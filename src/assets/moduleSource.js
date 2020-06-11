// 组件数据模板
const MODULESOURCE = [
    {
        title: "轮播图",
        icon: "fa-window-maximize",
        name: "MySwiper",
        data: {
            title: "轮播图",
            childs: [
                {
                    href: "http://www.jiangshi.org/",
                    picSrc:
                        "http://img1.jiangshi.org/rsi/20200609/091020403560_1422.jpg",
                    alt: "default pic."
                }
            ]
        }
    },
    {
        title: "图文列表",
        icon: "fa-th-list",
        name: "ListGraphic",
        data: {
            title: "图文列表",
            childs: [
                {
                    title: "",
                    picSrc:
                        "http://img1.jiangshi.org/rsi/20200608/081706013337_1422.jpg",
                    text: "",
                    date: new Date().toLocaleDateString().replace(/\//g, "-"),
                    views: 0,
                    href: ""
                }
            ]
        }
    },
    {
        title: "文字列表",
        icon: "fa-list-ol",
        name: "ListText",
        data: {
            title: "文字列表",
            childs: [
                {
                    text: "",
                    href: ""
                }
            ]
        }
    },
    {
        title: "我的信息",
        icon: "fa-address-card-o",
        name: "UserInfo",
        data: { title: "我的信息", childs: [] }
    }
];

export { MODULESOURCE }