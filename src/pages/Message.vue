<template>
    <div class="wrap">
        <div class="container">
            <div class="message-header">消息</div>
        </div>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.message-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    background: #fff;
    color: #666;
    font-size: 0.6rem;
}

.list {
    margin-top: 0.2rem;
    background-color: #fff;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>

<script>
import Footer from '@/components/Footer';

export default {
    components: {
        Footer,
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>