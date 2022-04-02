<template>
    <div class="account">
        Personal account
        <span>{{user.username}}</span>
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