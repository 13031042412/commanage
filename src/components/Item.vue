<template>
    <div class="app-aside-item">
        <div class="aside-item-main">
            <i :class="'fa fa-fw aside-item-icon '+icon"></i>
            <span class="aside-item-title">{{name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Item",
    props: ["name", "icon"],
    data() {
        return {};
    }
};
</script>