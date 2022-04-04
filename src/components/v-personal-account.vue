<template>
    <div class="account">
        <img :src="user.avatar" alt="avatar">
        <h2>{{user.username}}</h2>
    </div>
</template>

<script>
    export default {
    props: {
        user: Object,
    }
    }
</script>

<style lang="scss" scoped>

</style>