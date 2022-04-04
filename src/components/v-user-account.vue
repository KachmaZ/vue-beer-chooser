<template>
    <div class="user">
        <h2>{{user.username}}</h2>
        <img class="user-avatar" :src="user.avatar" alt="avatar">
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
.user-avatar {
    width: 150px;
    height: 150px;

    border: 10px solid rgb(107, 43, 1);
    border-radius: 20px;
}
</style>