<template>
    <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    },
};
</script>