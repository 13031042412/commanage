<template>
    <div class="videoList p-4">
        <div class="row">
            <div class="col-4">
                <input type="text" placeholder="搜索内容..." class="form-control" />
            </div>
            <div class="col">
                <div class="text-right">
                    <router-link tag="button" to="/videos/create" class="btn btn-primary">+发布视频</router-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-hover table-striped">
                    <thead>
                        <tr class="text-center bg-light">
                            <th scope="col">视频图片</th>
                            <th scope="col" style="width:40%">课程名称</th>
                            <th scope="col">发布时间</th>
                            <th scope="col">审核状态</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center video-poster-wrap">
                                <a class="video-poster" href="##" target="_bank">
                                    <img
                                        class="w-100 d-block"
                                        src="https://puui.qpic.cn/vpic/0/y060001sqqx_160_90_3.jpg/0"
                                        alt
                                    />
                                </a>
                            </td>
                            <td>
                                <div class="d-flex table-title">
                                    <a
                                        href="##"
                                        target="_bank"
                                        class="text-truncate text-secondary"
                                    >真有钱！香港向18岁及以上居民每人派1万元 真有钱！香港向18岁及以上居民每人派1万元真有钱！香港向18岁及以上居民每人派1万元真有钱！香港向18岁及以上居民每人派1万元</a>
                                    <span class="top">置顶</span>
                                </div>
                            </td>
                            <td class="text-center">2019-02-22</td>
                            <td class="text-center">
                                <span v-if="0==0">
                                    <i class="fa fa-check-circle text-success font-18 align-middle"></i> 审核通过
                                </span>
                                <span v-if="0==1">
                                    <i class="fa fa-check-circle text-danger font-18 align-middle"></i> 审核失败
                                </span>
                                <span v-if="0==2">
                                    <i class="fa fa-check-circle text-warning font-18 align-middle"></i> 审核中
                                </span>
                            </td>
                            <td class="text-center">
                                <button type="button" class="btn btn-link btn-sm">编辑</button> |
                                <button type="button" class="btn btn-link btn-sm">删除</button> |
                                <button type="button" class="btn btn-link btn-sm">取消置顶</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Paginate
                    v-model="page"
                    :page-count="count"
                    :margin-pages="2"
                    :click-handler="pageChange"
                    :prev-text="'上一页'"
                    :next-text="'下一页'"
                    :first-button-text="'首页'"
                    :last-button-text="'尾页'"
                    :container-class="'pagination float-right'"
                    :page-class="'page-item'"
                    :page-link-class="'page-link'"
                    :prev-class="'page-item'"
                    :prev-link-class="'page-link'"
                    :next-class="'page-item'"
                    :next-link-class="'page-link'"
                    :first-last-button="true"
                ></Paginate>
            </div>
        </div>
    </div>
</template>
<script>
import Paginate from "vuejs-paginate";
export default {
    name: "VideoList",
    components: { Paginate },
    data() {
        return {
            page: 1,
            count: 20
        };
    },
    created() {},
    methods: {
        pageChange(num) {
            console.log(num);
        }
    }
};
</script>
<style scoped>
.table {
    font-size: 12px;
}
.table td,
.table th {
    vertical-align: middle;
}
.video-poster-wrap {
    width: 190px;
}
.video-poster {
    display: block;
    width: 160px;
}
.table-title {
    max-width: 450px;
}
.table-title a {
    flex: 1;
}
.top {
    display: inline-block;
    width: 36px;
    text-align: center;
    padding: 3px 5px;
    margin-left: 5px;
    color: #fff;
    line-height: normal;
    background-color: var(--main-color);
}
.row + .row {
    margin-top: 20px;
}
</style>