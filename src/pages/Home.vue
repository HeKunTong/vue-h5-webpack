<template>
    <div class="wrap">
        <div class="container">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
                <van-swipe-item v-for="(banner, index) in banners" :key="index">
                    <img v-lazy="banner" alt=""/>
                </van-swipe-item>
            </van-swipe>
            <div class="list clearfix">
                <div class="item" v-for="(item,index) in itemList" :key="index">
                    <img :src="item.icon" alt="">
                    <div class="itemName">{{item.name}}</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.my-swipe {
    .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;

        img {
            width: 100%;
            height: 250px;
        }
    }
}

.list {
    margin-top: 0.2rem;
    background-color: #fff;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .item {
        width: 25%;
        text-align: center;
        margin-bottom: 0.4rem;
        font-size: 0.2rem;

        > img {
            width: 0.8rem;
            margin-bottom: 0.2rem;
        }
    }
}
</style>

<script>
import { Swipe, SwipeItem } from 'vant';
import Footer from '@/components/Footer';
import bannerOne from '@/assets/images/banner/banner1.jpg';
import bannerTwo from '@/assets/images/banner/banner2.jpg';
import bannerThree from '@/assets/images/banner/banner3.jpg';
import iconOne from '@/assets/images/banner/item1.png';
import iconTwo from '@/assets/images/banner/item2.png';
import iconThree from '@/assets/images/banner/item3.png';

export default {
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        Footer,
    },
    data () {
        return {
            banners: [bannerOne, bannerTwo, bannerThree],
            itemList: [
                {name: '预约列表', url: '/list', icon: iconOne},
                {name: '填写表单', url: '/form', icon: iconTwo},
                {name: '会员管理', url: '/', icon: iconThree},
                {name: '数据统计', url: '/', icon: iconOne},
                {name: '填写表单', url: '/', icon: iconTwo},
                {name: '会员管理', url: '/', icon: iconThree},
                {name: '预约列表', url: '/', icon: iconOne},
                {name: '填写表单', url: '/', icon: iconTwo},
                {name: '会员管理', url: '/', icon: iconThree},
                {name: '预约列表', url: '/', icon: iconOne},
                {name: '填写表单', url: '/', icon: iconTwo},
                {name: '会员管理', url: '/', icon: iconThree}
            ]
        }
    },
    methods: {

    }
}
</script>